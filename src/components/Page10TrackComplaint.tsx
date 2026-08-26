import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  CheckCircle2,
  Clock,
  Circle,
  AlertCircle,
  ArrowLeft,
  RotateCcw,
  FileText
} from 'lucide-react';

export const Page10TrackComplaint: React.FC = () => {
  const {
    t,
    complaintNumber,
    submissionTimestamp,
    selectedCategory,
    setCurrentPage,
    resetComplaintFlow
  } = useApp();

  const [inputTicket, setInputTicket] = useState<string>('');
  const [activeTicket, setActiveTicket] = useState<string>('');
  const [lookupError, setLookupError] = useState<string | null>(null);

  // Auto populate on mount with existing complaint number if available
  useEffect(() => {
    const num = complaintNumber || 'NCRP-2026-48217';
    setInputTicket(num);
    setActiveTicket(num);
  }, [complaintNumber]);

  const handleCheckStatus = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLookupError(null);

    const trimmed = inputTicket.trim().toUpperCase();
    if (!trimmed) {
      setLookupError(t.notFoundError);
      return;
    }

    // Accept active prototype ticket number or format NCRP-2026-XXXXX
    if (trimmed === complaintNumber?.toUpperCase() || trimmed.startsWith('NCRP-2026-')) {
      setActiveTicket(trimmed);
      setLookupError(null);
    } else {
      setLookupError(t.notFoundError);
    }
  };

  const handleBackToConfirm = () => {
    setCurrentPage(9);
  };

  const handleStartNewComplaint = () => {
    if (window.confirm("Start a new complaint? Your current draft will be reset.")) {
      resetComplaintFlow();
    }
  };

  const categoryName = selectedCategory === 'account_identity'
    ? t.catAccountTitle
    : selectedCategory === 'harassment'
    ? t.catHarassmentTitle
    : selectedCategory === 'job_fraud'
    ? t.catJobTitle
    : selectedCategory === 'other'
    ? t.catOtherTitle
    : t.catFinancialTitle;

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">
      {/* 1. Official Approved Background Image Asset for Page 10 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* 2. Content Layer (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-10 flex-1 flex flex-col justify-between">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.trackTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.trackSubtitle}
            </p>
          </div>

          {/* 1. LOOKUP SEARCH CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-4 text-left">
            <form onSubmit={handleCheckStatus} className="space-y-3">
              <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                {t.lookupLabel}
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputTicket}
                    onChange={(e) => setInputTicket(e.target.value)}
                    placeholder="e.g. NCRP-2026-48217"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 outline-none text-base font-extrabold text-gov-navy placeholder-gray-400 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  className="bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  {t.lookupBtn}
                </button>
              </div>

              <p className="text-xs text-gray-500 font-medium">
                {t.lookupHelpText}
              </p>
            </form>

            {/* FRIENDLY ERROR NOTICE */}
            {lookupError && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl animate-in fade-in duration-150">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{lookupError}</span>
              </div>
            )}
          </div>

          {/* 2. CURRENT STATUS CARD */}
          {activeTicket && !lookupError && (
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl border border-amber-300 shadow-gov p-6 md:p-8 text-left space-y-3 bg-gradient-to-r from-amber-50/50 via-white to-white">
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wider block">
                  {t.currentStatusLabel}
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-xl text-lg font-black shadow-xs">
                    <Clock className="w-5 h-5 text-amber-700 animate-spin-slow" />
                    <span>{t.statusUnderReview}</span>
                  </span>
                  <span className="text-xs font-extrabold text-gov-navy">
                    Ticket: {activeTicket}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 font-semibold pt-1">
                  {t.statusExplanation}
                </p>
              </div>

              {/* 3. VISUAL PROGRESS TIMELINE */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 text-left space-y-6">
                <h3 className="text-base font-extrabold text-gov-navy border-b border-gray-100 pb-3">
                  {t.timelineHeader}
                </h3>

                <div className="space-y-6 pl-2 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
                  
                  {/* STAGE 1: SUBMITTED (COMPLETED) */}
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs mt-0.5">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-extrabold text-gov-navy block">
                        {t.stage1Title}
                      </span>
                      <span className="text-xs text-gray-500 font-medium block">
                        {submissionTimestamp || '26 August 2026'} • {t.stage1Sub}
                      </span>
                    </div>
                  </div>

                  {/* STAGE 2: RECEIVED (COMPLETED) */}
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs mt-0.5">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-extrabold text-gov-navy block">
                        {t.stage2Title}
                      </span>
                      <span className="text-xs text-gray-500 font-medium block">
                        {t.stage2Sub}
                      </span>
                    </div>
                  </div>

                  {/* STAGE 3: UNDER REVIEW (CURRENT ACTIVE) */}
                  <div className="relative flex items-start gap-4 z-10">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md ring-4 ring-amber-100 mt-0.5">
                      ●
                    </div>
                    <div className="space-y-0.5 bg-amber-50/80 p-3 rounded-xl border border-amber-200 w-full">
                      <span className="text-sm font-extrabold text-amber-900 block">
                        {t.stage3Title} (Current Stage)
                      </span>
                      <span className="text-xs text-amber-800 font-semibold block">
                        {t.stage3Sub}
                      </span>
                    </div>
                  </div>

                  {/* STAGE 4: FURTHER ACTION (UPCOMING) */}
                  <div className="relative flex items-start gap-4 z-10 opacity-60">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ○
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-gray-700 block">
                        {t.stage4Title}
                      </span>
                      <span className="text-xs text-gray-500 font-medium block">
                        {t.stage4Sub}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. COMPACT SUMMARY CARD */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 text-left space-y-4">
                <h3 className="text-sm font-extrabold text-gov-navy uppercase tracking-wider border-b border-gray-100 pb-2">
                  {t.compactSummaryTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase">Complaint Number:</span>
                    <span className="font-extrabold text-gov-navy text-sm block mt-0.5">{activeTicket}</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase">Reporting Path:</span>
                    <span className="font-extrabold text-gov-saffron text-sm block mt-0.5">{categoryName}</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase">Submitted:</span>
                    <span className="font-extrabold text-gov-navy text-sm block mt-0.5">{submissionTimestamp || '26 August 2026'}</span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase">Current Status:</span>
                    <span className="font-extrabold text-amber-800 text-sm block mt-0.5">{t.statusUnderReview}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* 5. Bottom Action Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/80">
          <button
            onClick={handleBackToConfirm}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToConfirmBtn.replace('←', '').trim()}</span>
          </button>

          <button
            onClick={handleStartNewComplaint}
            className="flex items-center gap-2 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer text-xs sm:text-sm"
          >
            <RotateCcw className="w-4 h-4 text-amber-300" />
            <span>{t.startNewBtn}</span>
          </button>
        </div>
      </main>
      </div>
    </div>
  );
};
