import { useState, useRef, useCallback } from 'react';

export interface UseVoiceRecorderReturn {
  isRecording: boolean;
  recordingSeconds: number;
  permissionDenied: boolean;
  recordingError: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<Blob | null>;
  cancelRecording: () => void;
  formattedTime: string;
  recordedMimeType: string;
}

export const useVoiceRecorder = (): UseVoiceRecorderReturn => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [recordedMimeType, setRecordedMimeType] = useState<string>('audio/webm');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const formatTime = useCallback((totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const startRecording = useCallback(async () => {
    setPermissionDenied(false);
    setRecordingError(null);
    setRecordingSeconds(0);
    audioChunksRef.current = [];

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("[VoiceRecorder Debug] Stage 1 (Microphone): getUserMedia is not supported in this browser.");
        setRecordingError("Voice input is not supported in this browser. Please type your complaint instead.");
        return;
      }

      console.log("[VoiceRecorder Debug] Stage 1 (Microphone): Requesting getUserMedia...");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      console.log("[VoiceRecorder Debug] Stage 1 (Microphone): Permission granted. Active tracks:", stream.getAudioTracks().length);

      // Stage 2 & 3: Select supported mimeType
      let mimeType = 'audio/webm;codecs=opus';
      if (!MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
          mimeType = 'audio/ogg';
        } else {
          mimeType = '';
        }
      }

      setRecordedMimeType(mimeType || 'audio/webm');
      console.log(`[VoiceRecorder Debug] Stage 2 & 3 (Recording Format): Selected MIME type: "${mimeType || 'default'}"`);

      const options = mimeType ? { mimeType } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          console.log(`[VoiceRecorder Debug] Stage 2 (Recording): Chunk received (${event.data.size} bytes). Total chunks: ${audioChunksRef.current.length}`);
        }
      };

      mediaRecorder.start(250); // Collect chunk every 250ms
      setIsRecording(true);
      console.log("[VoiceRecorder Debug] Stage 2 (Recording): MediaRecorder started successfully.");

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

    } catch (err: any) {
      console.error("[VoiceRecorder Debug] Stage 1 (Microphone): getUserMedia error:", err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setPermissionDenied(true);
        setRecordingError("Microphone access is required to use voice input.");
      } else {
        setRecordingError("Unable to access microphone. Please check your device settings.");
      }
      setIsRecording(false);
    }
  }, []);

  const stopRecording = useCallback((): Promise<Blob | null> => {
    return new Promise((resolve) => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      const mediaRecorder = mediaRecorderRef.current;
      if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        console.warn("[VoiceRecorder Debug] Stage 2 (Recording): MediaRecorder is inactive or null.");
        setIsRecording(false);
        resolve(null);
        return;
      }

      mediaRecorder.onstop = () => {
        const mimeType = mediaRecorder.mimeType || recordedMimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: mimeType });
        
        console.log(`[VoiceRecorder Debug] Stage 2 & 3 (Recording Complete): Stopped. Final Blob size: ${blob.size} bytes, MIME type: "${blob.type}"`);

        // Stop audio tracks
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
          streamRef.current = null;
        }

        setIsRecording(false);

        if (blob.size === 0) {
          console.error("[VoiceRecorder Debug] Stage 2 Error: Recorded Blob size is 0 bytes.");
          setRecordingError("We couldn't capture your recording. Please try again.");
          resolve(null);
          return;
        }

        resolve(blob);
      };

      mediaRecorder.stop();
    });
  }, [recordedMimeType]);

  const cancelRecording = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    audioChunksRef.current = [];
    setIsRecording(false);
    setRecordingSeconds(0);
    console.log("[VoiceRecorder Debug] Recording cancelled.");
  }, []);

  return {
    isRecording,
    recordingSeconds,
    permissionDenied,
    recordingError,
    startRecording,
    stopRecording,
    cancelRecording,
    formattedTime: formatTime(recordingSeconds),
    recordedMimeType
  };
};
