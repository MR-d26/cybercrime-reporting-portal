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

          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const bodyBuffer = Buffer.concat(chunks);
          const contentType = req.headers['content-type'] || '';

          if (!apiKey) {
            console.warn('[Sarvam Proxy] Warning: SARVAM_API_KEY is not set.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'SARVAM_API_KEY environment variable is not set in backend server.',
              message: 'Please add SARVAM_API_KEY=your_key in .env file.'
            }));
            return;
          }

          const response = await fetch('https://api.sarvam.ai/speech-to-text', {
            method: 'POST',
            headers: {
              'api-subscription-key': apiKey,
              'api-key': apiKey,
              'content-type': contentType
            },
            body: bodyBuffer
          });

          const responseText = await response.text();
          res.statusCode = response.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(responseText);
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

          // Parse incoming JSON body
          const chunks: Buffer[] = [];
          for await (const chunk of req) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
          }
          const bodyString = Buffer.concat(chunks).toString('utf-8');
          const requestBody = JSON.parse(bodyString || '{}');
          const complaintText = requestBody.text || '';

          if (!complaintText.trim()) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Complaint text is required.' }));
            return;
          }

          if (!apiKey) {
            console.warn('[Gemini Proxy] Warning: GEMINI_API_KEY is not set.');
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'GEMINI_API_KEY environment variable is not set in backend server.',
              message: 'Please add GEMINI_API_KEY=your_key in .env file.'
            }));
            return;
          }

          const systemInstruction = `You are an assistant helping citizens navigate a cybercrime reporting service.
Your job is to understand the citizen's own description, organize information, and suggest a possible reporting path.
You are not a legal authority.
Never determine severity, priority, legal validity, authenticity, acceptance, rejection, police action, or investigation outcome.
Never invent facts.
Only extract information explicitly present in the user's text.
If information is unavailable, return null.
Suggestions must be presented as guidance and must be confirmed or edited by the user.

Return ONLY valid JSON matching this exact schema:
{
  "suggestedCategory": "Financial Fraud" | "Online / Account Fraud" | "Cyber Harassment" | "Online Job / Employment Fraud" | "Other Cybercrime",
  "explanation": "string explaining why this path fits",
  "whatHappened": "summary string of incident",
  "amount": "₹10,000" | null,
  "date": string | null,
  "time": string | null,
  "method": "string method e.g. SMS and payment link" | null,
  "transactionId": string | null,
  "platform": string | null,
  "phoneNumber": string | null,
  "website": string | null,
  "missingInformation": ["string description of helpful missing info"],
  "helpfulEvidence": ["string suggestion of helpful evidence"]
}`;

          // Primary model: gemini-2.5-flash, Fallback model: gemini-1.5-flash
          const primaryEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
          const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

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

          let response = await fetch(primaryEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            console.warn(`[Gemini Proxy] Primary model returned status ${response.status}. Retrying fallback model...`);
            response = await fetch(fallbackEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
          }

          if (!response.ok) {
            const errText = await response.text();
            res.statusCode = response.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(errText);
            return;
          }

          const geminiData = await response.json();
          const candidateText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
          
          let parsedStructuredOutput = null;
          try {
            parsedStructuredOutput = JSON.parse(candidateText);
          } catch (e) {
            console.error('[Gemini Proxy] Failed to parse JSON from candidate text:', candidateText);
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
