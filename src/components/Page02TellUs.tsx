import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import {
  MessageSquareText,
  Mic,
  Square,
  Lock,
  ShieldCheck,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  RotateCcw,
  Check,
  Edit3
} from 'lucide-react';

export const Page02TellUs: React.FC = () => {
  const {
    t,
    language,
    complaintText,
    setComplaintText,
    voiceTranscript,
    setVoiceTranscript,
    setCurrentPage,
    saveDraft
  } = useApp();

  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);
  const [editableTranscript, setEditableTranscript] = useState('');
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Voice recording timer (Does NOT stop on silence - user must explicitly press Stop recording)
  useEffect(() => {
    if (isRecording) {
      setRecordingSeconds(0);
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const handleStartSpeaking = () => {
    setIsRecording(true);
    setShowTranscriptModal(false);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Generate mock transcript based on current language
    let mockText = "";
    if (language === 'hi') {
      mockText = "मेरे बैंक खाते से ₹15,000 कट गए जब मैंने बिजली बिल अपडेट का एक एसएमएस लिंक खोला।";
    } else if (language === 'mr') {
      mockText = "मला एका अनोळखी नंबरवरून कॉल आला आणि लाईट बिल अपडेट करण्याच्या नावाखाली ₹10,000 फसवून घेतले.";
    } else if (language === 'ta') {
      mockText = "மின்சாரக் கட்டண லிங்கைக் கிளிக் செய்த பிறகு எனது வங்கிக் கணக்கிலிருந்து ₹12,000 பிடிக்கப்பட்டது.";
    } else if (language === 'bn') {
      mockText = "একটি বিদ্যুৎ বিলের এসএমএস লিঙ্কে ক্লিক করার পর আমার ব্যাঙ্ক অ্যাকাউন্ট থেকে ₹১০,০০০ কেটে নেওয়া হয়েছে।";
    } else if (language === 'te') {
      mockText = "కరెంట్ బిల్లు లింక్ క్లిక్ చేసిన తర్వాత నా బ్యాంక్ ఖాతా నుండి ₹10,000 విత్‌డ్రా అయ్యాయి.";
    } else {
      mockText = "Someone sent me a fake electricity bill SMS and ₹10,000 was deducted from my account after I clicked the payment link.";
    }
    setVoiceTranscript(mockText);
    setEditableTranscript(mockText);
    setShowTranscriptModal(true);
  };

  const handleUseTranscript = () => {
    setComplaintText(editableTranscript);
    setShowTranscriptModal(false);
    saveDraft({ complaintText: editableTranscript });
  };

  const handleSelectScenario = (scenarioText: string) => {
    setComplaintText(scenarioText);
    saveDraft({ complaintText: scenarioText });
  };

  const handleContinue = () => {
    if (complaintText.trim().length > 0) {
      saveDraft({ step: 2 });
      setCurrentPage(3);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 02 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Stepper Bar */}
      <ProgressStepper />

      {/* 3. Main Page Container */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        {/* Main Intake Card Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-gov overflow-hidden">
          {/* Card Content Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* LEFT COLUMN: Text Input Area */}
            <div className="lg:col-span-6 space-y-4 text-left">
              {/* Header Group */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0">
                  <MessageSquareText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy leading-tight">
                    {t.tellUsTitle}
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-[#E65100] mt-1 leading-snug">
                    {t.tellUsSubtitle}
                  </p>
                </div>
              </div>

              {/* Textarea Input */}
              <div className="relative pt-2">
                <textarea
                  value={complaintText}
                  onChange={(e) => setComplaintText(e.target.value)}
                  maxLength={4000}
                  rows={6}
                  placeholder={t.textareaPlaceholder}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20 outline-none text-base text-gray-800 placeholder-gray-400 resize-none transition-all"
                  aria-label={t.tellUsTitle}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400 font-medium">
                  {complaintText.length} / 4000
                </div>
              </div>

              {/* Security Micro-copy */}
              <div className="flex items-center gap-2 text-xs text-gray-600 font-medium pt-1">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t.textSecureNotice}</span>
              </div>
            </div>

            {/* CENTER OR DIVIDER (Desktop Only) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center h-4/5">
              <div className="w-px h-full bg-gray-200" />
              <div className="my-2 w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 shadow-xs">
                {t.orDivider}
              </div>
              <div className="w-px h-full bg-gray-200" />
            </div>

            {/* RIGHT COLUMN: Voice Input Area */}
            <div className="lg:col-span-6 space-y-4 text-left border-t lg:border-t-0 border-gray-200 pt-6 lg:pt-0">
              {/* Voice Header */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gov-navy leading-tight">
                    {t.speakTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    {t.speakSubtitle}
                  </p>
                </div>
              </div>

              {/* Voice Box Container */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 text-center space-y-4 shadow-xs">
                {!showTranscriptModal ? (
                  <>
                    {/* Animated Mic Graphic */}
                    <div className="relative inline-flex items-center justify-center">
                      {isRecording && (
                        <div className="absolute inset-0 rounded-full bg-red-400/30 animate-ping" />
                      )}
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${
                        isRecording ? 'bg-red-500 text-white' : 'bg-blue-100 text-gov-navy'
                      }`}>
                        <Mic className="w-9 h-9" />
                      </div>
                    </div>

                    {/* Recording controls */}
                    {isRecording ? (
                      <div className="space-y-3 animate-in fade-in duration-150">
                        <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                          <span>{t.recordingActive} ({formatTimer(recordingSeconds)})</span>
                        </div>
                        <button
                          onClick={handleStopRecording}
                          className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-colors"
                        >
                          <Square className="w-4 h-4 fill-white" />
                          <span>{t.stopRecording}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <button
                          onClick={handleStartSpeaking}
                          className="w-full max-w-xs mx-auto flex items-center justify-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-98 focus:ring-4 focus:ring-amber-300 outline-none"
                        >
                          <Mic className="w-5 h-5 text-amber-300" />
                          <span>{t.startSpeaking}</span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  /* Transcript Review Container */
                  <div className="text-left space-y-3 bg-white p-4 rounded-xl border border-blue-200 shadow-xs animate-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gov-navy uppercase tracking-wider">
                        {t.transcriptTitle}
                      </span>
                      <button
                        onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                        className="text-xs font-semibold text-gov-saffron hover:underline flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>{t.editBtn}</span>
                      </button>
                    </div>

                    {isEditingTranscript ? (
                      <textarea
                        value={editableTranscript}
                        onChange={(e) => setEditableTranscript(e.target.value)}
                        rows={3}
                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 outline-none focus:border-gov-navy"
                      />
                    ) : (
                      <p className="text-sm text-gray-800 bg-amber-50/60 p-3 rounded-lg border border-amber-200/60 italic">
                        "{editableTranscript}"
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        onClick={handleUseTranscript}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors"
                      >
                        <Check className="w-4 h-4" />
                        <span>{t.useThisBtn}</span>
                      </button>
                      <button
                        onClick={handleStartSpeaking}
                        className="flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-3 rounded-lg text-xs transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t.recordAgainBtn}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Voice Privacy Disclaimer */}
              <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t.privacyNotice}</span>
              </div>
            </div>

          </div>

          {/* 4. Bottom Drawer: Collapsible Sample Scenarios */}
          <div className="bg-[#F1F8E9]/80 border-t border-emerald-200/80 px-6 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-left">
              <Lightbulb className="w-5 h-5 text-emerald-700 shrink-0" />
              <div>
                <span className="font-bold text-sm text-gov-navy block">{t.notSureTitle}</span>
                <span className="text-xs text-gray-600 block">{t.notSureDesc}</span>
              </div>
            </div>
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="flex items-center gap-1.5 bg-white border border-emerald-300 text-gov-navy font-bold px-3.5 py-1.5 rounded-lg text-xs shadow-xs hover:bg-emerald-50 transition-colors shrink-0 outline-none"
            >
              <span>{showExamples ? t.hideExamples : t.viewExamples}</span>
              {showExamples ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Sample Scenarios Options */}
          {showExamples && (
            <div className="bg-emerald-50/60 p-4 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5 animate-in fade-in duration-150">
              {[
                t.scenario1,
                t.scenario2,
                t.scenario3,
                t.scenario4
              ].map((scenario, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectScenario(scenario)}
                  className="text-left p-3 bg-white hover:bg-emerald-100/60 border border-emerald-200 rounded-xl text-xs sm:text-sm font-medium text-gov-navy transition-all shadow-xs hover:shadow-sm"
                >
                  "{scenario}"
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 5. Bottom Action Bar (Continue Button) */}
        <div className="mt-6 flex items-center justify-end">
          <button
            onClick={handleContinue}
            disabled={complaintText.trim().length === 0}
            className={`flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all ${
              complaintText.trim().length > 0
                ? 'bg-[#0F2540] hover:bg-[#1A365D] text-white cursor-pointer hover:shadow-lg active:scale-98'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>{t.continueBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
