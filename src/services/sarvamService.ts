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
  const formData = new FormData();

  const extension = audioBlob.type.includes('webm') ? 'webm' : audioBlob.type.includes('mp4') ? 'mp4' : 'wav';
  const file = new File([audioBlob], `speech.${extension}`, { type: audioBlob.type || 'audio/wav' });

  formData.append('file', file);
  formData.append('model', 'saarika:v2');
  formData.append('language_code', langCode);

  try {
    const response = await fetch('/api/sarvam/transcribe', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => null);
      if (errorJson?.error?.includes('SARVAM_API_KEY')) {
        throw new Error(errorJson.error);
      }
      throw new Error(errorJson?.message || errorJson?.error || `Transcription failed with status ${response.status}`);
    }

    const data = await response.json();
    const transcriptText = data.transcript || data.text || data.results?.[0]?.transcript || '';

    if (!transcriptText) {
      throw new Error("Empty transcript returned from speech-to-text service.");
    }

    return {
      transcript: transcriptText.trim(),
      languageCodeUsed: langCode
    };
  } catch (error: any) {
    console.error("Sarvam transcription error:", error);
    throw error;
  }
};
