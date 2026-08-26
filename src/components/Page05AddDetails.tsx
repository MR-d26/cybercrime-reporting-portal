import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import {
  Calendar,
  IndianRupee,
  Receipt,
  Building2,
  Globe,
  User,
  Phone,
  ArrowLeft,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Page05AddDetails: React.FC = () => {
  const {
    t,
    selectedCategory,
    extractedAmount,
    incidentDate,
    setIncidentDate,
    incidentTime,
    setIncidentTime,
    dontKnowDate,
    setDontKnowDate,
    detailAmount,
    setDetailAmount,
    dontKnowAmount,
    setDontKnowAmount,
    transactionId,
    setTransactionId,
    dontHaveTxnId,
    setDontHaveTxnId,
    bankService,
    setBankService,
    dontKnowBank,
    setDontKnowBank,
    platformName,
    setPlatformName,
    accountUsername,
    setAccountUsername,
    companyName,
    setCompanyName,
    contactDetail,
    setContactDetail,
    geminiAnalysis,
    setCurrentPage,
    saveDraft
  } = useApp();

  // Pre-fill amount from Page 04 extractedAmount if detailAmount is empty
  useEffect(() => {
    if (!detailAmount && extractedAmount) {
      setDetailAmount(extractedAmount);
    }
  }, [extractedAmount, detailAmount]);

  const handleBack = () => {
    setCurrentPage(4);
  };

  const handleContinue = () => {
    saveDraft({ step: 5 });
    setCurrentPage(6);
  };

  const cat = selectedCategory || (geminiAnalysis ? geminiAnalysis.mappedCategoryId : 'other');

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 05 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Progress Stepper Bar (Step 4 Active) */}
      <ProgressStepper activeStep={4} />

      {/* 3. Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.detailsTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.detailsSubtitle}
            </p>
          </div>

          {/* MAIN FORM CARD CONTAINER */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-8 text-left">
            
            {/* QUESTION 1: INCIDENT DATE & TIME */}
            <div className="space-y-3 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gov-navy">
                      {t.q1Title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {t.q1Sub}
                    </p>
                  </div>
                </div>
                {incidentDate && geminiAnalysis?.date && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Sparkles className="w-3 h-3" />
                    <span>Auto-extracted</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {t.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    disabled={dontKnowDate}
                    className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${
                      dontKnowDate
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {t.timeLabel}
                  </label>
                  <input
                    type="time"
                    value={incidentTime}
                    onChange={(e) => setIncidentTime(e.target.value)}
                    disabled={dontKnowDate}
                    className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${
                      dontKnowDate
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20'
                    }`}
                  />
                </div>
              </div>

              {/* Checkbox: I don't know */}
              <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={dontKnowDate}
                  onChange={(e) => setDontKnowDate(e.target.checked)}
                  className="w-4 h-4 rounded text-gov-navy focus:ring-gov-navy"
                />
                <span className="text-xs font-bold text-gray-700">{t.dontKnowOption}</span>
              </label>
            </div>

            {/* QUESTION 2: AMOUNT INVOLVED (For Financial, Job Fraud, or when extracted) */}
            {(cat === 'financial' || cat === 'job_fraud' || cat === 'other' || !!detailAmount) && (
              <div className="space-y-3 pb-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0 mt-0.5">
                      <IndianRupee className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gov-navy">
                        {t.q2Title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {t.q2Sub}
                      </p>
                    </div>
                  </div>
                  {detailAmount && geminiAnalysis?.amount && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <Sparkles className="w-3 h-3" />
                      <span>Auto-extracted</span>
                    </span>
                  )}
                </div>

                <div className="max-w-md pt-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {t.amountLabel}
                  </label>
                  <input
                    type="text"
                    value={detailAmount}
                    onChange={(e) => setDetailAmount(e.target.value)}
                    disabled={dontKnowAmount}
                    placeholder="₹10,000"
                    className={`w-full p-3 rounded-xl border outline-none text-sm font-bold transition-all ${
                      dontKnowAmount
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20 text-gov-navy'
                    }`}
                  />
                </div>

                <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={dontKnowAmount}
                    onChange={(e) => setDontKnowAmount(e.target.checked)}
                    className="w-4 h-4 rounded text-gov-navy focus:ring-gov-navy"
                  />
                  <span className="text-xs font-bold text-gray-700">{t.dontKnowOption}</span>
                </label>
              </div>
            )}

            {/* TRANSACTION ID & BANK / SERVICE PROVIDER */}
            {(cat === 'financial' || !!transactionId || !!bankService) && (
              <>
                <div className="space-y-3 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0 mt-0.5">
                        <Receipt className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gov-navy">
                          {t.q3Title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          {t.q3Sub}
                        </p>
                      </div>
                    </div>
                    {transactionId && geminiAnalysis?.transactionId && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Sparkles className="w-3 h-3" />
                        <span>Auto-extracted</span>
                      </span>
                    )}
                  </div>

                  <div className="max-w-md pt-2">
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      disabled={dontHaveTxnId}
                      placeholder="e.g. 329182391023 / UTR / Reference No."
                      className={`w-full p-3 rounded-xl border outline-none text-sm font-semibold transition-all ${
                        dontHaveTxnId
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          : 'border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20'
                      }`}
                    />
                  </div>

                  <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={dontHaveTxnId}
                      onChange={(e) => setDontHaveTxnId(e.target.checked)}
                      className="w-4 h-4 rounded text-gov-navy focus:ring-gov-navy"
                    />
                    <span className="text-xs font-bold text-gray-700">{t.dontHaveOption}</span>
                  </label>
                </div>

                {/* BANK / SERVICE PROVIDER */}
                <div className="space-y-3 pb-6 border-b border-gray-100">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-100/80 text-gov-saffron shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gov-navy">
                        {t.bankLabel}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {t.bankSub}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md pt-2">
                    <input
                      type="text"
                      value={bankService}
                      onChange={(e) => setBankService(e.target.value)}
                      disabled={dontKnowBank}
                      placeholder="e.g. State Bank of India / PhonePe"
                      className={`w-full p-3 rounded-xl border outline-none text-sm font-semibold transition-all ${
                        dontKnowBank
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          : 'border-gray-300 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20'
                      }`}
                    />
                  </div>

                  <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={dontKnowBank}
                      onChange={(e) => setDontKnowBank(e.target.checked)}
                      className="w-4 h-4 rounded text-gov-navy focus:ring-gov-navy"
                    />
                    <span className="text-xs font-bold text-gray-700">{t.dontKnowOption}</span>
                  </label>
                </div>
              </>
            )}

            {/* CONTEXTUAL / EXTRACTED FIELDS FOR PLATFORM & SUSPECT HANDLES */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gov-navy font-bold text-sm uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-gov-saffron" />
                  <span>Platform & Suspect Details</span>
                </div>
                {(platformName || accountUsername) && (geminiAnalysis?.platform || geminiAnalysis?.suspectUsername) && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Sparkles className="w-3 h-3" />
                    <span>Auto-extracted from story</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {t.platformLabel}
                  </label>
                  <input
                    type="text"
                    value={platformName}
                    onChange={(e) => setPlatformName(e.target.value)}
                    placeholder="e.g. Instagram, Facebook, WhatsApp"
                    className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm focus:border-gov-navy font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Suspect Profile / Username / Link
                  </label>
                  <input
                    type="text"
                    value={accountUsername}
                    onChange={(e) => setAccountUsername(e.target.value)}
                    placeholder="e.g. @suspect_handle or profile link"
                    className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm focus:border-gov-navy font-medium"
                  />
                </div>

                {cat === 'job_fraud' && (
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. ABC Pvt Ltd / Recruitment Agent"
                      className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm focus:border-gov-navy font-medium"
                    />
                  </div>
                )}

                {(cat === 'harassment' || cat === 'job_fraud' || !!contactDetail) && (
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      {t.contactLabel}
                    </label>
                    <input
                      type="text"
                      value={contactDetail}
                      onChange={(e) => setContactDetail(e.target.value)}
                      placeholder="e.g. Phone number or email address"
                      className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm focus:border-gov-navy font-medium"
                    />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 4. Bottom Action Navigation Bar */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200/80">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backBtn}</span>
          </button>

          <button
            onClick={handleContinue}
            className="flex items-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:ring-4 focus:ring-amber-300 outline-none cursor-pointer"
          >
            <span>{t.nextEvidenceBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
