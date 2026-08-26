import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';

function serverApiPlugin(): Plugin {
  return {
    name: 'server-api-plugin',
    configureServer(server) {
      // 1. SARVAM STT PROXY ENDPOINT
      server.middlewares.use('/api/sarvam/transcribe', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
          const apiKey = env.SARVAM_API_KEY || process.env.SARVAM_API_KEY;

          const isApiKeyConfigured = !!apiKey && apiKey.trim().length > 0;
          console.log(`[Sarvam Proxy Debug] Stage 5 (Backend): Request received. SARVAM_API_KEY configured: ${isApiKeyConfigured}`);

          if (!isApiKeyConfigured) {
            console.warn('[Sarvam Proxy Debug] Error: SARVAM_API_KEY is not set in environment.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'SARVAM_API_KEY environment variable is not set in backend server.',
              message: 'Please add SARVAM_API_KEY=your_key in .env file.'
            }));
            return;
          }

          // Collect body buffer
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const bodyBuffer = Buffer.concat(chunks);
          const langCode = (req.headers['x-language-code'] as string) || 'en-IN';
          const incomingMimeType = (req.headers['x-audio-type'] as string) || 'audio/webm';

          console.log(`[Sarvam Proxy Debug] Stage 4 & 5 (Audio Payload): Received ${bodyBuffer.length} bytes. Language: "${langCode}", Audio MIME: "${incomingMimeType}"`);

          if (bodyBuffer.length === 0) {
            console.error('[Sarvam Proxy Debug] Stage 4 Error: Received 0 bytes audio payload.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Audio payload is empty (0 bytes).' }));
            return;
          }

          // Format clean MIME type & filename for Sarvam
          const cleanMime = incomingMimeType.split(';')[0].trim() || 'audio/webm';
          const extension = cleanMime.includes('mp4') ? 'mp4' : cleanMime.includes('wav') ? 'wav' : cleanMime.includes('ogg') ? 'ogg' : 'webm';
          
          const audioBlob = new Blob([bodyBuffer], { type: cleanMime });
          const audioFile = new File([audioBlob], `recording.${extension}`, { type: cleanMime });

          const createSarvamFormData = (modelName: string, includeLang: boolean = true) => {
            const formData = new FormData();
            formData.append('file', audioFile);
            formData.append('model', modelName);
            if (includeLang && langCode) {
              formData.append('language_code', langCode);
            }
            return formData;
          };

          // Primary model "saarika:v2.5", Fallback "saaras:v3"
          console.log(`[Sarvam Proxy Debug] Stage 6: Sending Sarvam STT POST with model "saarika:v2.5" and language_code "${langCode}"...`);
          
          let response = await fetch('https://api.sarvam.ai/speech-to-text', {
            method: 'POST',
            headers: {
              'api-subscription-key': apiKey.trim()
            },
            body: createSarvamFormData('saarika:v2.5', true)
          });

          let responseText = await response.text();
          console.log(`[Sarvam Proxy Debug] Model "saarika:v2.5" HTTP Status: ${response.status}. Response length: ${responseText.length}`);

          if (!response.ok) {
            console.warn(`[Sarvam Proxy Debug] Model "saarika:v2.5" failed (${response.status}). Retrying model "saaras:v3"...`);
            response = await fetch('https://api.sarvam.ai/speech-to-text', {
              method: 'POST',
              headers: {
                'api-subscription-key': apiKey.trim()
              },
              body: createSarvamFormData('saaras:v3', true)
            });
            responseText = await response.text();
            console.log(`[Sarvam Proxy Debug] Model "saaras:v3" HTTP Status: ${response.status}. Response:`, responseText);
          }

          if (!response.ok) {
            res.statusCode = response.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(responseText);
            return;
          }

          let jsonResponse = null;
          try {
            jsonResponse = JSON.parse(responseText);
          } catch (e) {
            console.error('[Sarvam Proxy Debug] Failed to parse JSON response:', responseText);
          }

          const transcript = jsonResponse?.transcript || jsonResponse?.text || jsonResponse?.results?.[0]?.transcript || '';
          console.log(`[Sarvam Proxy Debug] Stage 8 Success: Parsed transcript (${transcript.length} chars): "${transcript}"`);

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            success: true,
            transcript: transcript,
            rawResponse: jsonResponse
          }));

        } catch (error: any) {
          console.error('[Sarvam Proxy Error]:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            error: 'Failed to communicate with Sarvam API',
            details: error?.message || String(error)
          }));
        }
      });

      // 2. GEMINI ANALYSIS PROXY ENDPOINT
      server.middlewares.use('/api/gemini/analyze', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
          const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

          const isApiKeyConfigured = !!apiKey && apiKey.trim().length > 0;
          console.log(`[Gemini Proxy Debug] Request received. Gemini API Key configured: ${isApiKeyConfigured}`);

          // Parse incoming JSON body
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const bodyString = Buffer.concat(chunks).toString('utf-8');
          const requestBody = JSON.parse(bodyString || '{}');
          const complaintText = requestBody.text || '';

          console.log(`[Gemini Proxy Debug] Received text length: ${complaintText.length} chars`);

          if (!complaintText.trim()) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Complaint text is required.' }));
            return;
          }

          if (!isApiKeyConfigured) {
            console.warn('[Gemini Proxy Debug] Warning: GEMINI_API_KEY is not set.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'GEMINI_API_KEY environment variable is not set in backend server.',
              message: 'Please add GEMINI_API_KEY=your_key in .env file.'
            }));
            return;
          }

          const systemInstruction = `You are an assistant helping citizens navigate a cybercrime reporting service.
Your job is to understand the citizen's own description (in Hindi, English, Marathi, Tamil, Bengali, Telugu or mixed languages) and extract structured information into form fields.
You are not a legal authority. Never determine severity, priority, legal validity, authenticity, or police action.
STRICT EXTRACTION RULE: Only extract information EXPLICITLY present in the user's text. If a field is not mentioned, return null. DO NOT guess, fabricate, or infer dates, usernames, transaction IDs, or platforms if unmentioned.

CRITICAL CATEGORY SELECTION RULE:
The suggestedCategory MUST be EXACTLY ONE of the following 5 strings:
1. "Account Takeover / Identity Related Cybercrime" -> Use when an Instagram, Facebook, WhatsApp, email, or social media account was hacked, compromised, locked, password changed, or credentials stolen, even if the hacker later requests money from friends.
2. "Financial Fraud" -> Use when money was lost or stolen via bank account, UPI, payment link, QR code, fake electricity bill payment, or credit/debit card.
3. "Cyber Harassment / Online Abuse" -> Use for online threats, blackmail, stalking, abusive messages, or extortion.
4. "Online Job / Employment Fraud" -> Use for fake job offers, recruitment scams, or work-from-home registration fee demands.
5. "Other Cybercrime" -> Use if none of the above categories fit.

Return ONLY valid JSON matching this exact schema:
{
  "suggestedCategory": "Account Takeover / Identity Related Cybercrime" | "Financial Fraud" | "Cyber Harassment / Online Abuse" | "Online Job / Employment Fraud" | "Other Cybercrime",
  "explanation": "string explaining in simple language why this path fits the complaint",
  "confidence": "high" | "medium" | "low",
  "whatHappened": "short summary string of incident",
  "amount": "string amount e.g. ₹10,000" | null,
  "date": "YYYY-MM-DD" | null,
  "time": "HH:MM" | null,
  "method": "string method e.g. Phishing link / SMS" | null,
  "platform": "Instagram" | "WhatsApp" | "Facebook" | "PhonePe" | null,
  "suspectUsername": "@username or handle mentioned" | null,
  "suspectProfileUrl": "http... URL mentioned" | null,
  "phoneNumber": "contact phone number mentioned" | null,
  "email": "email mentioned" | null,
  "transactionId": "UTR / Txn ID mentioned" | null,
  "bank": "Bank or Payment app mentioned e.g. SBI, Paytm" | null,
  "upiId": "UPI handle mentioned" | null,
  "website": "website URL mentioned" | null,
  "companyName": "company or suspect name mentioned" | null,
  "missingInformation": ["string description of helpful missing info"],
  "helpfulEvidence": ["string suggestion of helpful evidence"]
}`;

          // Correct Gemini REST API endpoints: gemini-2.0-flash (primary), gemini-1.5-flash (fallback)
          const primaryEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey.trim()}`;
          const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

          const payload = {
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            contents: [
              {
                role: 'user',
                parts: [{ text: complaintText }]
              }
            ],
            generationConfig: {
              responseMimeType: 'application/json',
              temperature: 0.1
            }
          };

          console.log(`[Gemini Proxy Debug] Sending POST to Gemini API (gemini-2.0-flash)...`);
          let response = await fetch(primaryEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          console.log(`[Gemini Proxy Debug] gemini-2.0-flash HTTP Status: ${response.status}`);

          if (!response.ok) {
            console.warn(`[Gemini Proxy Debug] Model gemini-2.0-flash returned status ${response.status}. Retrying gemini-1.5-flash...`);
            response = await fetch(fallbackEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            console.log(`[Gemini Proxy Debug] gemini-1.5-flash HTTP Status: ${response.status}`);
          }

          const responseText = await response.text();

          if (!response.ok) {
            console.error(`[Gemini Proxy Error Response]: ${responseText}`);
            res.statusCode = response.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(responseText);
            return;
          }

          const geminiData = JSON.parse(responseText);
          const candidateText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
          console.log(`[Gemini Proxy Debug] Candidate text received:`, candidateText);

          let parsedStructuredOutput = null;
          try {
            parsedStructuredOutput = JSON.parse(candidateText);
          } catch (e) {
            console.error('[Gemini Proxy Error] Failed to parse candidate JSON:', candidateText);
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            success: true,
            analysis: parsedStructuredOutput,
            rawText: candidateText
          }));

        } catch (error: any) {
          console.error('[Gemini Proxy Error]:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            error: 'Failed to communicate with Gemini API',
            details: error?.message || String(error)
          }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), serverApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      open: false
    }
  };
});
