import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';
import { transcribeAudio } from '../services/sarvamService';
import {
  Mic,
  Square,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Edit3,
  RefreshCw,
  Check,
  ArrowRight,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const Page02TellUs: React.FC = () => {
  const {
    t,
    language,
    voiceLanguage,
    setVoiceLanguage,
    complaintText,
    setComplaintText,
    voiceTranscript,
    setVoiceTranscript,
    setCurrentPage,
    saveDraft
  } = useApp();

  const {
    isRecording,
    permissionDenied,
    recordingError,
    startRecording,
    stopRecording,
    formattedTime
  } = useVoiceRecorder();

  const [isTranscribing, setIsTranscribing] = useState<boolean>(false);
  const [transcribeError, setTranscribeError] = useState<string | null>(null);
  const [isEditingTranscript, setIsEditingTranscript] = useState<boolean>(false);
  const [editableTranscript, setEditableTranscript] = useState<string>('');
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const handleStartSpeaking = async () => {
    setTranscribeError(null);
    setIsEditingTranscript(false);
    await startRecording();
  };

  const handleStopSpeaking = async () => {
    const audioBlob = await stopRecording();
    if (!audioBlob || audioBlob.size === 0) {
      console.error("[Page02 Debug] Audio recording resulted in 0 bytes Blob.");
      setTranscribeError("We couldn't capture your recording. Please try again.");
      return;
    }

    setIsTranscribing(true);
    setTranscribeError(null);

    try {
      console.log(`[Page02 Voice Debug] Calling Sarvam STT with independent voiceLanguage: "${voiceLanguage}" (Global UI language is "${language}")`);
      const result = await transcribeAudio(audioBlob, voiceLanguage);
      console.log(`[Pipeline Step 3: Value immediately after Sarvam service in Page02]`, result.transcript);
      setVoiceTranscript(result.transcript);
      setEditableTranscript(result.transcript);
      saveDraft({ voiceTranscript: result.transcript });
    } catch (err: any) {
      console.error("[Page02 Debug] Sarvam transcription failed:", err);
      const errMsg = err?.message || '';
      if (errMsg.includes('SARVAM_API_KEY')) {
        setTranscribeError("Sarvam API key is not configured. Please add SARVAM_API_KEY in .env file or type your complaint below.");
      } else {
        setTranscribeError("We couldn't transcribe that recording. Please try again or type your complaint instead.");
      }
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleUseTranscript = () => {
    const finalText = isEditingTranscript ? editableTranscript : (voiceTranscript || editableTranscript);
    setComplaintText(finalText);
    saveDraft({ complaintText: finalText });
  };

  const handleSelectScenario = (scenarioText: string) => {
    setComplaintText(scenarioText);
    saveDraft({ complaintText: scenarioText });
  };

  const handleContinue = () => {
    if (complaintText.trim().length > 0) {
      saveDraft();
      setCurrentPage(3);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">
      {/* 1. Official Approved Background Image Asset for Page 02 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* 2. Content Layer (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <ProgressStepper activeStep={1} />

        <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.tellUsTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.tellUsSubtitle}
            </p>
          </div>

          {/* MAIN FORM CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-6 text-left">
            
            {/* NATURAL LANGUAGE TEXTAREA */}
            <div className="space-y-2">
              <textarea
                value={complaintText}
                onChange={(e) => {
                  setComplaintText(e.target.value);
                  saveDraft({ complaintText: e.target.value });
                }}
                placeholder={t.textareaPlaceholder}
                className="w-full min-h-[160px] p-4 rounded-xl border border-gray-300 outline-none text-base text-gray-800 placeholder-gray-400 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20 resize-y leading-relaxed font-medium"
                aria-label={t.tellUsTitle}
              />
              <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.textSecureNotice}</span>
              </p>
            </div>

            {/* OR DIVIDER */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest absolute">
                {t.orDivider}
              </span>
            </div>

            {/* SARVAM INTEGRATED VOICE INPUT AREA */}
            <div className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-gov-navy flex items-center gap-1.5">
                    <Mic className="w-4 h-4 text-gov-saffron" />
                    <span>{t.speakTitle}</span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 font-medium">
                    {t.speakSubtitle}
                  </p>
                </div>

                {/* INDEPENDENT VOICE LANGUAGE SELECTOR & RECORD CONTROL */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-1.5 bg-white border border-amber-300 px-2.5 py-1.5 rounded-xl shadow-xs">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Voice:</span>
                    <select
                      value={voiceLanguage}
                      onChange={(e) => setVoiceLanguage(e.target.value as any)}
                      className="bg-transparent text-gov-navy text-xs font-bold outline-none cursor-pointer"
                      aria-label="Select spoken language for voice input"
                    >
                      <option value="hi">हिंदी (Hindi)</option>
                      <option value="en">English</option>
                      <option value="mr">मराठी (Marathi)</option>
                      <option value="ta">தமிழ் (Tamil)</option>
                      <option value="bn">বাংলা (Bengali)</option>
                      <option value="te">తెలుగు (Telugu)</option>
                    </select>
                  </div>

                  {isRecording ? (
                    <button
                      type="button"
                      onClick={handleStopSpeaking}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all animate-pulse cursor-pointer"
                    >
                      <Square className="w-4 h-4 fill-white" />
                      <span>{t.stopRecording} ({formattedTime})</span>
                    </button>
                  ) : isTranscribing ? (
                    <div className="flex items-center gap-2 bg-amber-100 text-amber-900 font-bold px-4 py-2.5 rounded-xl text-xs border border-amber-300">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-700" />
                      <span>Processing your recording...</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleStartSpeaking}
                      className="flex items-center gap-2 bg-gov-navy hover:bg-gov-navyHover text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-sm transition-all cursor-pointer"
                    >
                      <Mic className="w-4 h-4 text-amber-300" />
                      <span>{t.startSpeaking}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* RECORDING IN-PROGRESS TIMER STATUS */}
              {isRecording && (
                <div className="flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 p-2.5 rounded-lg border border-red-200 animate-in fade-in duration-150">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span>{t.recordingActive} ({formattedTime}) - Speak naturally in your language. Click "Stop recording" when finished.</span>
                </div>
              )}

              {/* FRIENDLY PERMISSION / TRANSCRIBE ERROR NOTICE */}
              {(permissionDenied || recordingError || transcribeError) && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-lg animate-in fade-in duration-150">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{recordingError || transcribeError || "Microphone access is required to use voice input."}</span>
                </div>
              )}

              {/* TRANSCRIPT REVIEW AREA (HERES WHAT WE HEARD) */}
              {voiceTranscript && !isRecording && !isTranscribing && (
                <div className="bg-white border border-amber-300 rounded-xl p-4 space-y-3 shadow-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gov-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gov-saffron" />
                      <span>{t.transcriptTitle}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                      className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{t.editBtn}</span>
                    </button>
                  </div>

                  {isEditingTranscript ? (
                    <textarea
                      value={editableTranscript}
                      onChange={(e) => setEditableTranscript(e.target.value)}
                      rows={3}
                      className="w-full p-3 rounded-lg border border-amber-300 outline-none text-sm text-gray-800 focus:ring-2 focus:ring-amber-400/20"
                    />
                  ) : (
                    <>
                      {console.log(`[Pipeline Step 6: Value finally displayed in "HERE'S WHAT WE HEARD"]`, voiceTranscript)}
                      <p className="text-sm font-semibold text-gray-800 bg-amber-50/50 p-3 rounded-lg border border-amber-200/60 leading-relaxed italic">
                        "{voiceTranscript}"
                      </p>
                    </>
                  )}

                  <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleStartSpeaking}
                      className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-gov-navy px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{t.recordAgainBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleUseTranscript}
                      className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.useThisBtn}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* COLLAPSIBLE SAMPLE SCENARIOS */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowExamples(!showExamples)}
                className="flex items-center gap-1.5 text-xs font-bold text-gov-navy hover:text-gov-saffron transition-colors cursor-pointer"
              >
                <span>{showExamples ? t.hideExamples : t.viewExamples}</span>
                {showExamples ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showExamples && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs animate-in fade-in duration-200">
                  {[t.scenario1, t.scenario2, t.scenario3, t.scenario4].map((scenario, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSelectScenario(scenario)}
                      className="p-3 bg-gray-50 hover:bg-amber-50/70 border border-gray-200 hover:border-amber-300 rounded-xl text-left font-medium text-gray-700 hover:text-gov-navy transition-all cursor-pointer"
                    >
                      "{scenario}"
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 4. Bottom Action Navigation Bar */}
        <div className="mt-8 flex items-center justify-end pt-4 border-t border-gray-200/80">
          <button
            type="button"
            onClick={handleContinue}
            disabled={complaintText.trim().length === 0}
            className={`flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all ${
              complaintText.trim().length > 0
                ? 'bg-[#0F2540] hover:bg-[#1A365D] text-white cursor-pointer hover:shadow-lg active:scale-98 focus:ring-4 focus:ring-amber-300'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>{t.continueBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
      </div>
    </div>
  );
};
