import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  api: {
    bodyParser: false, // Disables body parsing so we can stream/collect raw audio buffer
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.SARVAM_API_KEY;

    if (!apiKey || !apiKey.trim()) {
      console.warn('[Sarvam Serverless] SARVAM_API_KEY is not set in environment.');
      return res.status(400).json({
        error: 'SARVAM_API_KEY environment variable is not set in production server.',
        message: 'Please add SARVAM_API_KEY in Vercel environment variables.'
      });
    }

    // Collect incoming body chunks
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    const bodyBuffer = Buffer.concat(chunks);
    const langCode = (req.headers['x-language-code'] as string) || 'en-IN';
    const incomingMimeType = (req.headers['x-audio-type'] as string) || 'audio/webm';

    if (bodyBuffer.length === 0) {
      return res.status(400).json({ error: 'Audio payload is empty (0 bytes).' });
    }

    const cleanMime = incomingMimeType.split(';')[0].trim() || 'audio/webm';
    const extension = cleanMime.includes('mp4') ? 'mp4' : cleanMime.includes('wav') ? 'wav' : cleanMime.includes('ogg') ? 'ogg' : 'webm';
    
    const audioBlob = new Blob([bodyBuffer], { type: cleanMime });
    const audioFile = new File([audioBlob], `recording.${extension}`, { type: cleanMime });

    const createSarvamFormData = (modelName: string, includeLang: boolean = true) => {
      const formData = new FormData();
      formData.append('file', audioFile);
      formData.append('model', modelName);
      formData.append('mode', 'transcribe');
      if (includeLang && langCode) {
        formData.append('language_code', langCode);
      }
      return formData;
    };

    console.log(`[Sarvam] requested language: ${langCode}`);
    console.log(`[Sarvam] mode: transcribe`);
    console.log(`[Sarvam] sending request to https://api.sarvam.ai/speech-to-text with model saaras:v3...`);

    let response = await fetch('https://api.sarvam.ai/speech-to-text', {
      method: 'POST',
      headers: {
        'api-subscription-key': apiKey.trim()
      },
      body: createSarvamFormData('saaras:v3', true)
    });

    let responseText = await response.text();

    if (!response.ok) {
      console.warn(`[Sarvam] saaras:v3 failed (${response.status}). Retrying saarika:v2.5...`);
      response = await fetch('https://api.sarvam.ai/speech-to-text', {
        method: 'POST',
        headers: {
          'api-subscription-key': apiKey.trim()
        },
        body: createSarvamFormData('saarika:v2.5', true)
      });
      responseText = await response.text();
    }

    if (!response.ok) {
      return res.status(response.status).send(responseText);
    }

    let jsonResponse = null;
    try {
      jsonResponse = JSON.parse(responseText);
    } catch (e) {
      console.error('[Sarvam Serverless] Failed to parse JSON response:', responseText);
    }

    const transcript = jsonResponse?.transcript || jsonResponse?.text || jsonResponse?.results?.[0]?.transcript || '';
    const returnedLang = jsonResponse?.language_code || langCode;

    console.log(`[Sarvam] returned language: ${returnedLang}`);
    console.log(`[Sarvam] raw transcript: "${transcript}"`);

    return res.status(200).json({
      success: true,
      transcript: transcript,
      languageCodeUsed: returnedLang,
      rawResponse: jsonResponse
    });

  } catch (error: any) {
    console.error('[Sarvam Serverless Error]:', error);
    return res.status(500).json({
      error: 'Failed to communicate with Sarvam API',
      details: error?.message || String(error)
    });
  }
}
