import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  CheckCircle2,
  Copy,
  Check,
  Download,
  Clock,
  ArrowRight,
  Home,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const Page09SubmissionSuccess: React.FC = () => {
  const {
    t,
    complaintText,
    selectedCategory,
    extractedAmount,
    extractedMethod,
    incidentDate,
    dontKnowDate,
    detailAmount,
    dontKnowAmount,
    transactionId,
    dontHaveTxnId,
    bankService,
    uploadedFiles,
    noEvidenceChecked,
    complaintNumber,
    setComplaintNumber,
    submissionTimestamp,
    setSubmissionTimestamp,
    setCurrentPage,
    saveDraft
  } = useApp();

  const [copied, setCopied] = useState(false);

  // Generate persistent complaint number & timestamp on mount if not already present
  useEffect(() => {
    let num = complaintNumber;
    let ts = submissionTimestamp;

    if (!num) {
      const randomDigits = Math.floor(10000 + Math.random() * 90000);
      num = `NCRP-2026-${randomDigits}`;
      setComplaintNumber(num);
    }

    if (!ts) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      ts = now.toLocaleDateString('en-GB', options);
      setSubmissionTimestamp(ts);
    }

    saveDraft({ complaintNumber: num, submissionTimestamp: ts });
  }, []);

  const handleCopyNumber = () => {
    if (complaintNumber) {
      navigator.clipboard.writeText(complaintNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadSummary = () => {
    const ticket = complaintNumber || 'NCRP-2026-DEMO';
    const dateStr = submissionTimestamp || new Date().toLocaleString();
    const categoryName = selectedCategory || 'Financial Fraud';

    const content = `==================================================
NATIONAL CYBER CRIME REPORTING PORTAL (UX PROTOTYPE)
COMPLAINT RECEIPT & SUMMARY
==================================================

IMPORTANT NOTE:
This document is a prototype receipt for demonstration purposes only.
Not an official government legal document.

--------------------------------------------------
COMPLAINT DETAILS
--------------------------------------------------
Complaint Number : ${ticket}
Submitted On     : ${dateStr}
Reporting Path   : ${categoryName}

--------------------------------------------------
CITIZEN STORY / WHAT HAPPENED
--------------------------------------------------
"${complaintText || 'No story entered.'}"

--------------------------------------------------
INCIDENT DETAILS
--------------------------------------------------
Date of Incident : ${dontKnowDate ? "I don't know" : (incidentDate || 'Not specified')}
Amount Involved  : ${dontKnowAmount ? "I don't know" : (detailAmount || extractedAmount || '₹10,000')}
Method / Channel : ${extractedMethod || 'Digital Payment Link'}
Transaction ID   : ${dontHaveTxnId ? "I don't have it" : (transactionId || 'Not provided')}
Bank / Service   : ${bankService || 'Not specified'}

--------------------------------------------------
EVIDENCE ATTACHED
--------------------------------------------------
${noEvidenceChecked
  ? "Citizen marked: I don't have evidence right now."
  : uploadedFiles.length > 0
  ? uploadedFiles.map((f, i) => `${i + 1}. ${f.name} (${(f.size / 1024).toFixed(1)} KB)`).join('\n')
  : 'No evidence attached.'}

==================================================
Government of India | Ministry of Home Affairs | I4C
1930 Emergency Helpline
==================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NCRP-Complaint-Summary-${ticket}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleTrackComplaint = () => {
    setCurrentPage(10);
  };

  const handleReturnHome = () => {
    setCurrentPage(1);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 09 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-6 text-center">
          
          {/* REASSURING SUCCESS ICON & HEADING */}
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.successTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-gray-600">
              {t.successSubtitle}
            </p>
          </div>

          {/* COMPLAINT NUMBER & TIMESTAMP CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-6 max-w-xl mx-auto text-center">
            
            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
              <span className="text-xs font-extrabold text-gray-600 uppercase tracking-wider block">
                {t.complaintNumberLabel}
              </span>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl sm:text-3xl font-black text-gov-navy tracking-wide">
                  {complaintNumber || 'NCRP-2026-48217'}
                </span>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="flex items-center gap-1 bg-gov-navy hover:bg-gov-navyHover text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.copiedToast}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {submissionTimestamp && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.submittedAtLabel}: {submissionTimestamp}</span>
                </div>
              )}
            </div>

            {/* DOWNLOAD SUMMARY BUTTON */}
            <div>
              <button
                type="button"
                onClick={handleDownloadSummary}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadSummaryBtn}</span>
              </button>
            </div>

            {/* "WHAT HAPPENS NEXT?" TIMELINE SECTION */}
            <div className="pt-4 border-t border-gray-100 text-left space-y-4">
              <h4 className="text-base font-extrabold text-gov-navy">
                {t.whatNextTitle}
              </h4>

              {/* TIMELINE STEPS */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                  <div className="flex items-center gap-1 text-emerald-800 font-extrabold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Step 1</span>
                  </div>
                  <span className="font-bold text-gov-navy block">{t.timelineStep1}</span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1 opacity-80">
                  <div className="text-gray-500 font-extrabold">Step 2</div>
                  <span className="font-bold text-gray-700 block">{t.timelineStep2}</span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1 opacity-80">
                  <div className="text-gray-500 font-extrabold">Step 3</div>
                  <span className="font-bold text-gray-700 block">{t.timelineStep3}</span>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1 opacity-80">
                  <div className="text-gray-500 font-extrabold">Step 4</div>
                  <span className="font-bold text-gray-700 block">{t.timelineStep4}</span>
                </div>

              </div>

              {/* PROTOTYPE DISCLAIMER NOTICE */}
              <p className="text-xs text-gray-500 italic bg-gray-50 p-3 rounded-lg border border-gray-200">
                ℹ {t.nextStepsNotice}
              </p>
            </div>

          </div>
        </div>

        {/* 3. Bottom Action Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/80">
          <button
            onClick={handleReturnHome}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{t.returnHomeBtn}</span>
          </button>

          <button
            onClick={handleTrackComplaint}
            className="flex items-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:ring-4 focus:ring-amber-300 outline-none cursor-pointer"
          >
            <span>{t.trackComplaintBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
