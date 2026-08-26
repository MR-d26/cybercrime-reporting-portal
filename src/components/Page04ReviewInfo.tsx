import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { extractInformationFromStory } from '../utils/informationExtractor';
import { CategoryId } from '../utils/complaintRouter';
import {
  FileText,
  IndianRupee,
  Smartphone,
  FolderGit2,
  Edit3,
  Check,
  X,
  ArrowLeft,
  ArrowRight,
  Loader2
} from 'lucide-react';

export const Page04ReviewInfo: React.FC = () => {
  const {
    t,
    complaintText,
    selectedCategory,
    extractedIncident,
    setExtractedIncident,
    extractedAmount,
    setExtractedAmount,
    extractedMethod,
    setExtractedMethod,
    geminiAnalysis,
    isAnalyzingGemini,
    setCurrentPage,
    saveDraft
  } = useApp();

  const defaultInfo = extractInformationFromStory(complaintText, selectedCategory);

  // Compute default extraction from Gemini or fallback extractor if not already set by user editing
  useEffect(() => {
    if (!extractedIncident && geminiAnalysis?.whatHappened) {
      setExtractedIncident(geminiAnalysis.whatHappened);
    } else if (!extractedIncident) {
      setExtractedIncident(defaultInfo.incident);
    }

    if (!extractedAmount && geminiAnalysis?.amount) {
      setExtractedAmount(geminiAnalysis.amount);
    } else if (!extractedAmount) {
      setExtractedAmount(defaultInfo.amount || "N/A");
    }

    if (!extractedMethod && geminiAnalysis?.method) {
      setExtractedMethod(geminiAnalysis.method);
    } else if (!extractedMethod) {
      setExtractedMethod(defaultInfo.method);
    }
  }, [complaintText, selectedCategory, geminiAnalysis]);

  // Inline editing state for each field
  const [editingField, setEditingField] = useState<'incident' | 'amount' | 'method' | 'path' | null>(null);
  const [tempValue, setTempValue] = useState('');

  const handleStartEdit = (field: 'incident' | 'amount' | 'method' | 'path', currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const handleSaveEdit = (field: 'incident' | 'amount' | 'method' | 'path') => {
    if (field === 'incident') setExtractedIncident(tempValue);
    else if (field === 'amount') setExtractedAmount(tempValue);
    else if (field === 'method') setExtractedMethod(tempValue);

    saveDraft({
      extractedIncident: field === 'incident' ? tempValue : extractedIncident,
      extractedAmount: field === 'amount' ? tempValue : extractedAmount,
      extractedMethod: field === 'method' ? tempValue : extractedMethod
    });
    setEditingField(null);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const handleBackToPath = () => {
    setCurrentPage(3);
  };

  const handleContinue = () => {
    saveDraft({ step: 4 });
    setCurrentPage(5);
  };

  // Preserve user-confirmed category path from Page 03
  const getCategoryTitle = (catId: CategoryId | null) => {
    if (catId === 'financial') return t.catFinancialTitle || "Financial Fraud";
    if (catId === 'account_identity') return t.catAccountTitle || "Online / Account Fraud";
    if (catId === 'harassment') return t.catHarassmentTitle || "Cyber Harassment";
    if (catId === 'job_fraud') return t.catJobTitle || "Online Job / Employment Fraud";
    if (catId === 'other') return t.catOtherTitle || "Other Cybercrime";
    return geminiAnalysis?.suggestedCategory || defaultInfo.pathTitle;
  };

  const displayPathTitle = getCategoryTitle(selectedCategory || (geminiAnalysis ? geminiAnalysis.mappedCategoryId : null));

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">
      {/* 1. Official Approved Background Image Asset for Page 04 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* 2. Main Content Container (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Progress Stepper Bar (Step 3 Active) */}
        <ProgressStepper activeStep={3} />

        {/* Main Content Body - Standardized max-w-4xl matching Pages 2, 3, 5, 6 */}
        <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Header Title & Subtitle */}
            <div className="text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
                {t.reviewTitle}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#E65100]">
                {t.reviewSubtitle}
              </p>
            </div>

            {/* LOADING STATE WHILE GEMINI EXTRACTS */}
            {isAnalyzingGemini && (
              <div className="bg-white rounded-2xl border border-amber-300 shadow-gov p-6 text-center space-y-2">
                <Loader2 className="w-6 h-6 text-gov-navy animate-spin mx-auto" />
                <p className="text-sm font-extrabold text-gov-navy">
                  Understanding your complaint...
                </p>
              </div>
            )}

            {/* MAIN STRUCTURED INFORMATION CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-gov overflow-hidden">
              <div className="p-6 md:p-8 space-y-6 text-left">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* 1. INCIDENT / SUMMARY FIELD */}
                  <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2 relative group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gov-navy font-bold text-xs uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-gov-saffron" />
                        <span>{t.fieldIncident}</span>
                      </div>
                      {editingField !== 'incident' && (
                        <button
                          onClick={() => handleStartEdit('incident', extractedIncident || defaultInfo.incident)}
                          className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{t.editBtn}</span>
                        </button>
                      )}
                    </div>

                    {editingField === 'incident' ? (
                      <div className="space-y-2 pt-1">
                        <textarea
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          rows={3}
                          className="w-full p-2.5 border border-gov-navy rounded-lg text-sm text-gray-800 outline-none focus:ring-2 focus:ring-amber-300"
                        />
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSaveEdit('incident')}
                            className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.saveFieldBtn}</span>
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>{t.cancelFieldBtn}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-base font-bold text-gov-navy leading-relaxed pt-1">
                        {extractedIncident || defaultInfo.incident}
                      </p>
                    )}
                  </div>

                  {/* 2. AMOUNT INVOLVED FIELD */}
                  <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2 relative group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gov-navy font-bold text-xs uppercase tracking-wider">
                        <IndianRupee className="w-4 h-4 text-gov-saffron" />
                        <span>{t.fieldAmount}</span>
                      </div>
                      {editingField !== 'amount' && (
                        <button
                          onClick={() => handleStartEdit('amount', extractedAmount || defaultInfo.amount || "N/A")}
                          className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{t.editBtn}</span>
                        </button>
                      )}
                    </div>

                    {editingField === 'amount' ? (
                      <div className="space-y-2 pt-1">
                        <input
                          type="text"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-full p-2 border border-gov-navy rounded-lg text-sm text-gray-800 outline-none"
                        />
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSaveEdit('amount')}
                            className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.saveFieldBtn}</span>
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>{t.cancelFieldBtn}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xl font-black text-gov-saffron tracking-tight pt-1">
                        {extractedAmount || "N/A"}
                      </p>
                    )}
                  </div>

                  {/* 3. METHOD / CHANNEL FIELD */}
                  <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2 relative group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gov-navy font-bold text-xs uppercase tracking-wider">
                        <Smartphone className="w-4 h-4 text-gov-saffron" />
                        <span>{t.fieldMethod}</span>
                      </div>
                      {editingField !== 'method' && (
                        <button
                          onClick={() => handleStartEdit('method', extractedMethod || defaultInfo.method)}
                          className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{t.editBtn}</span>
                        </button>
                      )}
                    </div>

                    {editingField === 'method' ? (
                      <div className="space-y-2 pt-1">
                        <input
                          type="text"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-full p-2 border border-gov-navy rounded-lg text-sm text-gray-800 outline-none"
                        />
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSaveEdit('method')}
                            className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.saveFieldBtn}</span>
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-3 py-1 rounded text-xs cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>{t.cancelFieldBtn}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-base font-bold text-gov-navy leading-relaxed pt-1">
                        {extractedMethod || defaultInfo.method}
                      </p>
                    )}
                  </div>

                  {/* 4. REPORTING PATH FIELD */}
                  <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2 relative group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gov-navy font-bold text-xs uppercase tracking-wider">
                        <FolderGit2 className="w-4 h-4 text-gov-saffron" />
                        <span>{t.fieldPath}</span>
                      </div>
                      <button
                        onClick={() => setCurrentPage(3)}
                        className="text-xs font-bold text-gov-saffron hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Change Path</span>
                      </button>
                    </div>
                    <p className="text-base font-bold text-gov-navy leading-relaxed pt-1">
                      {displayPathTitle}
                    </p>
                  </div>

                </div>

                {/* BOTTOM CONFIRMATION SECTION */}
                <div className="pt-4 border-t border-gray-100 bg-emerald-50/60 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-0.5 text-left">
                    <h4 className="text-base sm:text-lg font-bold text-gov-navy">
                      {t.confirmQuestion}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {t.confirmSubtitle}
                    </p>
                  </div>
                  <button
                    onClick={handleContinue}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:ring-4 focus:ring-amber-300 outline-none cursor-pointer shrink-0"
                  >
                    <span>{t.yesContinueBtn.replace('→', '').trim()}</span>
                    <ArrowRight className="w-5 h-5 text-amber-300" />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Action Navigation Bar */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200/80">
            <button
              onClick={handleBackToPath}
              className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToPathBtn}</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
