import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { CategoryId } from '../utils/complaintRouter';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Edit2,
  ChevronDown,
  ChevronUp,
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

  // Run Gemini analysis on mount if not already performed for current text
  useEffect(() => {
    if (!geminiAnalysis && complaintText.trim().length > 0 && !isAnalyzingGemini && !geminiError) {
      runGeminiAnalysis(complaintText);
    }
  }, [complaintText, geminiAnalysis, isAnalyzingGemini, geminiError]);

  const categories: Array<{ id: CategoryId; title: string; desc: string }> = [
    { id: 'account_identity', title: t.catAccountTitle, desc: t.catAccountDesc },
    { id: 'financial', title: t.catFinancialTitle, desc: t.catFinancialDesc },
    { id: 'harassment', title: t.catHarassmentTitle, desc: t.catHarassmentDesc },
    { id: 'job_fraud', title: t.catJobTitle, desc: t.catJobDesc },
    { id: 'other', title: t.catOtherTitle, desc: t.catOtherDesc }
  ];

  const handleContinue = () => {
    saveDraft();
    setCurrentPage(4);
  };

  const handleBackToStory = () => {
    setCurrentPage(2);
  };

  const handleEditStory = () => {
    setCurrentPage(2);
  };

  // Determine active category for highlight
  const activeCategoryId: CategoryId | null = selectedCategory || (geminiAnalysis ? geminiAnalysis.mappedCategoryId : null);

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">
      {/* 1. Page-Level Decorative Background Layer (Clearly Visible ~30% Opacity, Right Top) */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: "url('/images/indian-cybercrime-background.png')",
          backgroundPosition: 'right top',
          backgroundSize: 'cover'
        }}
        aria-hidden="true"
      />

      {/* 2. Content Layer (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <ProgressStepper activeStep={2} />

        <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between">
          
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

            {/* 1. LOADING STATE WHILE GEMINI IS ANALYZING */}
            {isAnalyzingGemini && (
              <div className="bg-white rounded-2xl border border-amber-300 shadow-gov p-8 text-center space-y-3">
                <Loader2 className="w-8 h-8 text-gov-navy animate-spin mx-auto" />
                <p className="text-sm font-extrabold text-gov-navy">
                  Understanding your description...
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Organizing details and finding the most appropriate reporting path.
                </p>
              </div>
            )}

            {/* 2. SUCCESSFUL GEMINI SUGGESTED REPORTING PATH */}
            {!isAnalyzingGemini && geminiAnalysis && (
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
                    {geminiAnalysis.suggestedCategory}
                  </h3>

                  <p className="text-sm text-gray-700 font-medium leading-relaxed bg-amber-50/60 p-4 rounded-xl border border-amber-200/80">
                    {geminiAnalysis.explanation}
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
                        const isSelected = activeCategoryId === cat.id;
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
            )}

            {/* 3. GEMINI UNAVAILABLE / FAILURE STATE */}
            {!isAnalyzingGemini && !geminiAnalysis && (
              <div className="bg-white rounded-2xl border border-gray-300 shadow-gov p-6 md:p-8 space-y-6 text-left">
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Guidance is temporarily unavailable</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    We couldn't determine a suggested reporting path right now. You can choose a reporting path manually from the list below.
                  </p>
                </div>

                {/* USER STORY RECAP */}
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

                {/* MANUAL CATEGORY SELECTION LIST */}
                <div className="space-y-3">
                  <p className="text-xs font-extrabold text-gov-navy uppercase tracking-wider">
                    {t.selectCategoryPrompt}
                  </p>

                  <div className="grid grid-cols-1 gap-2.5">
                    {categories.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
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

              </div>
            )}

          </div>

          {/* Bottom Action Navigation Bar */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200/80">
            <button
              type="button"
              onClick={handleBackToStory}
              className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!selectedCategory && !geminiAnalysis}
              className={`flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all ${
                selectedCategory || geminiAnalysis
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
