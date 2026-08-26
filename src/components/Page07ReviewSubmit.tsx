import React from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import {
  FileText,
  FolderGit2,
  List,
  Paperclip,
  Edit3,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export const Page07ReviewSubmit: React.FC = () => {
  const {
    t,
    complaintText,
    selectedCategory,
    extractedIncident,
    extractedAmount,
    extractedMethod,
    incidentDate,
    dontKnowDate,
    detailAmount,
    dontKnowAmount,
    transactionId,
    dontHaveTxnId,
    bankService,
    dontKnowBank,
    uploadedFiles,
    noEvidenceChecked,
    reviewConfirmed,
    setReviewConfirmed,
    setCurrentPage,
    saveDraft
  } = useApp();

  const handleEditStory = () => setCurrentPage(2);
  const handleChangePath = () => setCurrentPage(3);
  const handleEditDetails = () => setCurrentPage(5);
  const handleEditEvidence = () => setCurrentPage(6);
  const handleBack = () => setCurrentPage(6);

  const handleContinueToOtp = () => {
    if (reviewConfirmed) {
      saveDraft({ step: 7, reviewConfirmed: true });
      setCurrentPage(8);
    }
  };

  const pathTitle = selectedCategory === 'account_identity'
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
      {/* 1. Official Approved Background Image Asset for Page 07 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* 2. Content Layer (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <ProgressStepper activeStep={6} />

        <main className="max-w-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Header Title & Subtitle */}
            <div className="text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
                {t.reviewSubmitTitle}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#E65100]">
                {t.reviewSubtitle}
              </p>

              {/* NOT SUBMITTED YET ALERT BANNER */}
              <div className="inline-flex items-center gap-2 bg-amber-100/90 border border-amber-300 text-amber-900 px-4 py-2 rounded-xl text-xs font-extrabold shadow-xs mt-1">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{t.notSubmittedBadge}</span>
              </div>
            </div>

            {/* SUMMARY CARDS CONTAINER */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-6 text-left">
              
              {/* SECTION 1: YOUR STORY */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gov-navy font-extrabold text-sm uppercase tracking-wider">
                    <FileText className="w-4.5 h-4.5 text-gov-saffron" />
                    <span>{t.sec1Title}</span>
                  </div>
                  <button
                    onClick={handleEditStory}
                    className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.editBtn}</span>
                  </button>
                </div>
                <p className="text-sm text-gray-800 italic bg-white p-3.5 rounded-lg border border-amber-200/80 leading-relaxed">
                  "{complaintText || t.textareaPlaceholder}"
                </p>
              </div>

              {/* SECTION 2: REPORTING PATH */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gov-navy font-extrabold text-sm uppercase tracking-wider">
                    <FolderGit2 className="w-4.5 h-4.5 text-gov-saffron" />
                    <span>{t.sec2Title}</span>
                  </div>
                  <button
                    onClick={handleChangePath}
                    className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.sec2ChangeBtn}</span>
                  </button>
                </div>
                <div>
                  <span className="text-base font-extrabold text-gov-navy block">{pathTitle}</span>
                  <span className="text-xs font-medium text-gray-600 block">{t.sec2Sub}</span>
                </div>
              </div>

              {/* SECTION 3: INCIDENT DETAILS */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gov-navy font-extrabold text-sm uppercase tracking-wider">
                    <List className="w-4.5 h-4.5 text-gov-saffron" />
                    <span>{t.sec3Title}</span>
                  </div>
                  <button
                    onClick={handleEditDetails}
                    className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.sec3EditBtn}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase tracking-wider">Date & Time:</span>
                    <span className="font-extrabold text-gov-navy text-sm block">
                      {dontKnowDate ? t.dontKnowOption : (incidentDate || 'Not specified')}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase tracking-wider">Amount Involved:</span>
                    <span className="font-extrabold text-emerald-700 text-sm block">
                      {dontKnowAmount ? t.dontKnowOption : (detailAmount || extractedAmount || '₹10,000')}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase tracking-wider">Method / Channel:</span>
                    <span className="font-extrabold text-gov-navy text-sm block">
                      {extractedMethod || 'Digital Payment Link'}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-500 block uppercase tracking-wider">Transaction ID / Reference:</span>
                    <span className="font-extrabold text-gov-navy text-sm block">
                      {dontHaveTxnId ? t.dontHaveOption : (transactionId || 'Not provided')}
                    </span>
                  </div>
                </div>
              </div>

              {/* SECTION 4: EVIDENCE */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gov-navy font-extrabold text-sm uppercase tracking-wider">
                    <Paperclip className="w-4.5 h-4.5 text-gov-saffron" />
                    <span>{t.sec4Title}</span>
                  </div>
                  <button
                    onClick={handleEditEvidence}
                    className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{t.sec4EditBtn}</span>
                  </button>
                </div>

                <div className="pt-1">
                  {noEvidenceChecked ? (
                    <p className="text-xs font-bold text-gray-600 italic bg-white p-3 rounded-lg border border-gray-200">
                      "{t.sec4NoEvidenceChoice}"
                    </p>
                  ) : uploadedFiles.length > 0 ? (
                    <div className="space-y-1.5">
                      {uploadedFiles.map(file => (
                        <div key={file.id} className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white p-2.5 rounded-lg border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs font-medium text-gray-500 italic bg-white p-3 rounded-lg border border-gray-200">
                      {t.sec4NoEvidence}
                    </p>
                  )}
                </div>
              </div>

              {/* BOTTOM FINAL CONFIRMATION SECTION */}
              <div className="bg-emerald-50/70 rounded-xl border border-emerald-200 p-5 md:p-6 space-y-4">
                <div className="space-y-0.5 text-left">
                  <h4 className="text-lg sm:text-xl font-extrabold text-gov-navy">
                    {t.readyTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {t.readySub}
                  </p>
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none bg-white p-4 rounded-xl border border-emerald-300 shadow-xs">
                  <input
                    type="checkbox"
                    checked={reviewConfirmed}
                    onChange={(e) => {
                      setReviewConfirmed(e.target.checked);
                      saveDraft({ reviewConfirmed: e.target.checked });
                    }}
                    className="w-5 h-5 rounded text-gov-navy focus:ring-gov-navy mt-0.5"
                  />
                  <span className="text-xs sm:text-sm font-bold text-gov-navy leading-snug">
                    {t.confirmCheckboxLabel}
                  </span>
                </label>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.backBtn.replace('←', '').trim()}</span>
                  </button>

                  <button
                    onClick={handleContinueToOtp}
                    disabled={!reviewConfirmed}
                    className={`flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all ${
                      reviewConfirmed
                        ? 'bg-[#0F2540] hover:bg-[#1A365D] text-white cursor-pointer hover:shadow-lg active:scale-98 focus:ring-4 focus:ring-amber-300'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>{t.continueToOtpBtn.replace('→', '').trim()}</span>
                    <ArrowRight className="w-5 h-5 text-amber-300" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
