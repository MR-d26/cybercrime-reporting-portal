import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || !apiKey.trim()) {
      console.warn('[Gemini Proxy Serverless] GEMINI_API_KEY is not set in environment.');
      return res.status(400).json({
        error: 'GEMINI_API_KEY environment variable is not set in production server.',
        message: 'Please add GEMINI_API_KEY in Vercel environment variables.'
      });
    }

    const complaintText = typeof req.body === 'string'
      ? (JSON.parse(req.body || '{}').text || '')
      : (req.body?.text || '');

    if (!complaintText || !complaintText.trim()) {
      return res.status(400).json({ error: 'Complaint text is required.' });
    }

    const systemInstruction = `You are an assistant helping citizens navigate a national cybercrime reporting service.
Your job is to analyze the citizen's description of what happened (which may be in Hindi, English, Marathi, Tamil, Bengali, Telugu or mixed languages), understand the situation, suggest the single most appropriate reporting category, and extract key details into structured form fields.

YOU ARE NOT A LEGAL AUTHORITY.
DO NOT assign priority, urgency, critical score, severity score, risk probability, fraud score, or legal validity.
Suggestions must be presented strictly as guidance.

LANGUAGE PRESERVATION RULE:
You MUST preserve the citizen's original language in 'whatHappened'. If the citizen wrote/spoke in Hindi (e.g. "मैंने OTP डाला"), 'whatHappened' MUST be kept in Hindi or the citizen's original language script. Do NOT translate the user's story or summary into English.

CATEGORY SELECTION RULE:
The suggestedCategory MUST be EXACTLY ONE of the following 5 allowed application categories:
1. "Financial Fraud" -> Use when money, bank accounts, UPI, payment links, fake online shopping payments, card theft, lottery fee scams, or financial loss is involved.
2. "Account Takeover / Identity Related Cybercrime" -> Use when social media (Instagram, Facebook, WhatsApp), email, or online accounts are hacked, compromised, locked, password changed, or credentials stolen.
3. "Cyber Harassment / Online Abuse" -> Use for online threats, blackmail, stalking, abusive messages, extortion, or non-consensual image sharing.
4. "Online Job / Employment Fraud" -> Use for fake job offers, work-from-home scams, or recruitment fee demands.
5. "Other Cybercrime" -> Use if none of the above fit.

STRICT EXTRACTION RULE: Only extract information EXPLICITLY present in the text. Return null for unmentioned fields.

Return ONLY valid JSON matching this exact schema:
{
  "suggestedCategory": "Financial Fraud" | "Account Takeover / Identity Related Cybercrime" | "Cyber Harassment / Online Abuse" | "Online Job / Employment Fraud" | "Other Cybercrime",
  "explanation": "string explaining in 1-2 clear sentences why this reporting category fits what happened",
  "needsConfirmation": true,
  "whatHappened": "short summary string of incident",
  "amount": "string amount e.g. ₹10,000" | null,
  "date": "YYYY-MM-DD" | null,
  "time": "HH:MM" | null,
  "method": "string method e.g. E-commerce website / UPI payment" | null,
  "platform": "Website / App name mentioned" | null,
  "suspectUsername": "@username or handle" | null,
  "suspectProfileUrl": "http... URL" | null,
  "phoneNumber": "contact phone number" | null,
  "email": "email address" | null,
  "transactionId": "UTR / Txn ID" | null,
  "bank": "Bank or Payment app e.g. SBI, PhonePe" | null,
  "upiId": "UPI handle" | null,
  "website": "website URL" | null,
  "companyName": "company name" | null,
  "missingInformation": ["string description of helpful missing info"],
  "helpfulEvidence": ["string suggestion of helpful evidence"]
}`;

    const primaryEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey.trim()}`;
    const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey.trim()}`;

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
      console.warn(`[Gemini Serverless] gemini-3.6-flash failed (${response.status}). Retrying gemini-3.5-flash...`);
      response = await fetch(fallbackEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    const responseText = await response.text();

    if (!response.ok) {
      return res.status(response.status).send(responseText);
    }

    const geminiData = JSON.parse(responseText);
    const candidateText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    let parsedStructuredOutput = null;
    try {
      parsedStructuredOutput = JSON.parse(candidateText);
    } catch (e) {
      console.error('[Gemini Serverless] Failed to parse candidate JSON:', candidateText);
    }

    return res.status(200).json({
      success: true,
      analysis: parsedStructuredOutput,
      rawText: candidateText
    });

  } catch (error: any) {
    console.error('[Gemini Serverless Error]:', error);
    return res.status(500).json({
      error: 'Failed to communicate with Gemini API',
      details: error?.message || String(error)
    });
  }
}
