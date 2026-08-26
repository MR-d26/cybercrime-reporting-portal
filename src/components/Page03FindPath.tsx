import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { suggestPathFromStory, CategoryId } from '../utils/complaintRouter';
import {
  CreditCard,
  UserCheck,
  ShieldAlert,
  Briefcase,
  HelpCircle,
  Edit3,
  ArrowRight,
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Page03FindPath: React.FC = () => {
  const {
    t,
    complaintText,
    selectedCategory,
    setSelectedCategory,
    setCurrentPage,
    saveDraft
  } = useApp();

  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);

  // Automatically compute suggested path if none explicitly selected
  const suggestedCategoryId = suggestPathFromStory(complaintText);
  const activeCategory: CategoryId = selectedCategory || suggestedCategoryId;

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(suggestedCategoryId);
    }
  }, [suggestedCategoryId, selectedCategory]);

  const getCategoryDetails = (catId: CategoryId) => {
    switch (catId) {
      case 'financial':
        return {
          title: t.catFinancialTitle,
          desc: t.catFinancialDesc,
          icon: CreditCard,
          color: 'bg-amber-100/80 text-gov-saffron border-amber-300'
        };
      case 'account_identity':
        return {
          title: t.catAccountTitle,
          desc: t.catAccountDesc,
          icon: UserCheck,
          color: 'bg-blue-100/80 text-blue-700 border-blue-300'
        };
      case 'harassment':
        return {
          title: t.catHarassmentTitle,
          desc: t.catHarassmentDesc,
          icon: ShieldAlert,
          color: 'bg-red-100/80 text-red-700 border-red-300'
        };
      case 'job_fraud':
        return {
          title: t.catJobTitle,
          desc: t.catJobDesc,
          icon: Briefcase,
          color: 'bg-emerald-100/80 text-emerald-700 border-emerald-300'
        };
      case 'other':
      default:
        return {
          title: t.catOtherTitle,
          desc: t.catOtherDesc,
          icon: HelpCircle,
          color: 'bg-gray-100 text-gray-700 border-gray-300'
        };
    }
  };

  const currentDetails = getCategoryDetails(activeCategory);
  const IconComponent = currentDetails.icon;

  const handleEditStory = () => {
    setCurrentPage(2);
  };

  const handleSelectCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    saveDraft({ selectedCategory: catId });
    setShowCategoryDrawer(false);
  };

  const handleContinue = () => {
    saveDraft({ step: 3, selectedCategory: activeCategory });
    setCurrentPage(4);
  };

  const allCategories: CategoryId[] = [
    'financial',
    'account_identity',
    'harassment',
    'job_fraud',
    'other'
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 03 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Progress Stepper Bar (Step 2 Active) */}
      <ProgressStepper activeStep={2} />

      {/* 3. Main Content Container */}
      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        
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

          {/* SUGGESTED REPORTING PATH CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov overflow-hidden transition-all">
            <div className="p-6 md:p-8 space-y-5 text-left">
              
              {/* Badge & Guidance notice */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 bg-amber-100/80 text-gov-saffron px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{t.suggestedBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.guidanceNotice}</span>
                </div>
              </div>

              {/* Suggested Path Title & Description */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-1">
                <div className={`p-4 rounded-2xl border ${currentDetails.color} shrink-0`}>
                  <IconComponent className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gov-navy">
                    {currentDetails.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    {currentDetails.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* YOUR STORY DISPLAY CARD (Secondary) */}
            <div className="bg-amber-50/60 border-t border-amber-200/60 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="space-y-1 flex-1">
                <span className="text-xs font-bold text-gov-navy uppercase tracking-wider block">
                  {t.yourStoryTitle}:
                </span>
                <p className="text-xs sm:text-sm text-gray-800 italic line-clamp-2">
                  "{complaintText || t.textareaPlaceholder}"
                </p>
              </div>
              <button
                onClick={handleEditStory}
                className="flex items-center gap-1.5 bg-white hover:bg-amber-100/60 text-gov-navy font-bold px-3 py-1.5 rounded-lg text-xs border border-amber-300 shadow-xs transition-colors shrink-0 outline-none"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{t.editStoryBtn}</span>
              </button>
            </div>
          </div>

          {/* CHOOSE A DIFFERENT PATH COLLAPSIBLE DRAWER */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
            <button
              onClick={() => setShowCategoryDrawer(!showCategoryDrawer)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors outline-none"
            >
              <span className="font-bold text-sm sm:text-base text-gov-navy">
                {showCategoryDrawer ? t.hideDifferentPathBtn : t.chooseDifferentPathBtn}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gov-saffron">
                {showCategoryDrawer ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {showCategoryDrawer && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/60 space-y-3 animate-in fade-in duration-150 text-left">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t.selectCategoryPrompt}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {allCategories.map((catId) => {
                    const details = getCategoryDetails(catId);
                    const CatIcon = details.icon;
                    const isSelected = activeCategory === catId;

                    return (
                      <button
                        key={catId}
                        onClick={() => handleSelectCategory(catId)}
                        className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                          isSelected
                            ? 'bg-amber-50 border-gov-saffron ring-2 ring-gov-saffron/20 shadow-xs'
                            : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg shrink-0 ${details.color}`}>
                          <CatIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm text-gov-navy truncate">
                              {details.title}
                            </h4>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-gov-saffron shrink-0" />}
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2 mt-0.5">
                            {details.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Bottom Action Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/80">
          <button
            onClick={handleEditStory}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none"
          >
            <Edit3 className="w-4 h-4" />
            <span>{t.editStoryBtn}</span>
          </button>

          <button
            onClick={handleContinue}
            className="flex items-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer focus:ring-4 focus:ring-amber-300 outline-none"
          >
            <span>{t.continueWithPathBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
