import { LanguageCode } from '../i18n/translations';

export const mapLanguageToSarvamCode = (lang: LanguageCode): string => {
  switch (lang) {
    case 'hi': return 'hi-IN';
    case 'mr': return 'mr-IN';
    case 'ta': return 'ta-IN';
    case 'bn': return 'bn-IN';
    case 'te': return 'te-IN';
    case 'en':
    default: return 'en-IN';
  }
};

export interface TranscribeResult {
  transcript: string;
  languageCodeUsed: string;
}

export const transcribeAudio = async (
  audioBlob: Blob,
  language: LanguageCode
): Promise<TranscribeResult> => {
  const langCode = mapLanguageToSarvamCode(language);

  console.log(`[SarvamService Debug] Stage 4 (Browser -> Backend): Preparing POST /api/sarvam/transcribe...`);
  console.log(`[SarvamService Debug] Stage 4 (Audio Meta): Blob size = ${audioBlob.size} bytes, type = "${audioBlob.type}", language = "${langCode}"`);

  if (!audioBlob || audioBlob.size === 0) {
    console.error("[SarvamService Debug] Stage 4 Error: Audio blob is empty (0 bytes). Stopping request.");
    throw new Error("We couldn't capture your recording. Please try again.");
  }

  try {
    const response = await fetch('/api/sarvam/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': audioBlob.type || 'audio/webm',
        'x-language-code': langCode,
        'x-audio-type': audioBlob.type || 'audio/webm'
      },
      body: audioBlob
    });

    console.log(`[SarvamService Debug] Stage 4 & 5 (Backend Response): HTTP Status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorJson = await response.json().catch(() => null);
      console.error("[SarvamService Debug] Stage 6 (Sarvam Error Response Raw):", errorJson);

      const errorMessageStr = typeof errorJson?.error === 'string'
        ? errorJson.error
        : (errorJson?.error?.message || errorJson?.message || errorJson?.details || JSON.stringify(errorJson || {}));

      if (errorMessageStr.includes('SARVAM_API_KEY')) {
        throw new Error(errorMessageStr);
      }
      throw new Error(errorMessageStr || `Transcription failed with status ${response.status}`);
    }

    const data = await response.json();
    const transcriptText = data.transcript || data.text || data.rawResponse?.transcript || '';

    console.log(`[Sarvam] requested language: ${langCode}`);
    console.log(`[Sarvam] mode: transcribe`);
    console.log(`[Sarvam] returned language: ${data.languageCodeUsed || langCode}`);
    console.log(`[Sarvam] raw transcript: "${transcriptText}"`);

    if (!transcriptText || !transcriptText.trim()) {
      console.warn("[Sarvam] Stage 8 Warning: Empty transcript text received.");
      throw new Error("No speech could be recognized from the recording. Please speak clearly or type your complaint instead.");
    }

    return {
      transcript: transcriptText.trim(),
      languageCodeUsed: data.languageCodeUsed || langCode
    };
  } catch (error: any) {
    console.error("[SarvamService Debug] Transcription pipeline error:", error);
    throw error;
  }
};
