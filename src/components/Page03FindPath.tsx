import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { analyzeComplaint, CategoryId } from '../utils/complaintRouter';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Edit2,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const Page03FindPath: React.FC = () => {
  const {
    t,
    complaintText,
    selectedCategory,
    setSelectedCategory,
    setCurrentPage,
    geminiAnalysis,
    isAnalyzingGemini,
    geminiError,
    runGeminiAnalysis,
    saveDraft
  } = useApp();

  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  // Fallback analysis using client-side router
  const fallbackAnalysis = analyzeComplaint(complaintText);

  // Run Gemini analysis on mount if not already performed
  useEffect(() => {
    if (!geminiAnalysis && complaintText.trim().length > 0 && !isAnalyzingGemini) {
      runGeminiAnalysis(complaintText);
    }
  }, [complaintText]);

  // Determine active suggested category ID
  const activeSuggestedId: CategoryId = geminiAnalysis
    ? geminiAnalysis.mappedCategoryId
    : (selectedCategory || fallbackAnalysis.suggestedCategory);

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(activeSuggestedId);
    }
  }, [activeSuggestedId, selectedCategory]);

  const categories: Array<{ id: CategoryId; title: string; desc: string }> = [
    { id: 'financial', title: t.catFinancialTitle, desc: t.catFinancialDesc },
    { id: 'account_identity', title: t.catAccountTitle, desc: t.catAccountDesc },
    { id: 'harassment', title: t.catHarassmentTitle, desc: t.catHarassmentDesc },
    { id: 'job_fraud', title: t.catJobTitle, desc: t.catJobDesc },
    { id: 'other', title: t.catOtherTitle, desc: t.catOtherDesc }
  ];

  const currentCategoryObj = categories.find((c) => c.id === (selectedCategory || activeSuggestedId)) || categories[0];

  const handleContinue = () => {
    saveDraft();
    setCurrentPage(4);
  };

  const handleEditStory = () => {
    setCurrentPage(2);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 03 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Progress Stepper Bar (Step 2 Active) */}
      <ProgressStepper activeStep={2} />

      {/* 3. Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.findPathTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.findPathSubtitle}
            </p>
          </div>

          {/* LOADING STATE FOR GEMINI ANALYSIS */}
          {isAnalyzingGemini ? (
            <div className="bg-white rounded-2xl border border-amber-300 shadow-gov p-8 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-gov-navy animate-spin mx-auto" />
              <p className="text-sm font-extrabold text-gov-navy">
                Understanding your description...
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Organizing details and finding the most appropriate reporting path.
              </p>
            </div>
          ) : (
            <>
              {/* GEMINI FALLBACK NOTICE IF API KEY NOT CONFIGURED */}
              {geminiError && (
                <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold rounded-xl text-left">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{t.guidanceNotice} ({geminiError})</span>
                </div>
              )}

              {/* SUGGESTED REPORTING PATH CARD */}
              <div className="bg-white rounded-2xl border-2 border-amber-400/90 shadow-gov p-6 md:p-8 space-y-6 text-left relative overflow-hidden bg-gradient-to-br from-white via-white to-amber-50/30">
                <div className="flex items-center justify-between gap-2 border-b border-amber-100 pb-4">
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>{t.suggestedBadge}</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-500 italic">
                    {t.guidanceNotice}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">
                    {t.basedOnStory}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-gov-navy">
                    {currentCategoryObj.title}
                  </h3>

                  <p className="text-sm text-gray-700 font-medium leading-relaxed bg-amber-50/60 p-4 rounded-xl border border-amber-200/80">
                    {geminiAnalysis ? geminiAnalysis.explanation : currentCategoryObj.desc}
                  </p>
                </div>

                {/* USER STORY RECAP WITH EDIT BUTTON */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {t.yourStoryTitle}
                    </span>
                    <button
                      type="button"
                      onClick={handleEditStory}
                      className="text-xs font-bold text-gov-navy hover:text-gov-saffron flex items-center gap-1 cursor-pointer"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>{t.editStoryBtn}</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-700 font-medium line-clamp-2 italic">
                    "{complaintText || 'No complaint text provided.'}"
                  </p>
                </div>

                {/* PRIMARY ACTIONS & DRAWER TOGGLE */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="flex-1 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <span>{t.continueWithPathBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDrawer(!showDrawer)}
                    className="px-5 py-3.5 bg-white hover:bg-gray-50 border border-gray-300 text-gov-navy font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{showDrawer ? t.hideDifferentPathBtn : t.chooseDifferentPathBtn}</span>
                    {showDrawer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* COLLAPSIBLE CATEGORY CHOOSER DRAWER */}
                {showDrawer && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                      {t.selectCategoryPrompt}
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                      {categories.map((cat) => {
                        const isSelected = (selectedCategory || activeSuggestedId) === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              saveDraft({ selectedCategory: cat.id });
                            }}
                            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-50 border-2 border-amber-500 shadow-xs'
                                : 'bg-white border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-extrabold text-gov-navy">
                                {cat.title}
                              </span>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                            </div>
                            <p className="text-xs text-gray-600 mt-1 font-medium leading-relaxed">
                              {cat.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </>
          )}

        </div>

        {/* 4. Bottom Action Navigation Bar */}
        <div className="mt-8 flex items-center justify-end pt-4 border-t border-gray-200/80">
          <button
            type="button"
            onClick={handleContinue}
            className="flex items-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-98"
          >
            <span>{t.continueBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
