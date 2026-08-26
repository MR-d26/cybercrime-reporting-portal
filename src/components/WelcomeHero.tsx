import React from 'react';
import { useApp } from '../context/AppContext';
import { ReassuranceCards } from './ReassuranceCards';
import { ArrowRight, Lock } from 'lucide-react';

export const WelcomeHero: React.FC = () => {
  const { t, setCurrentPage, saveDraft } = useApp();

  const handleStartReporting = () => {
    saveDraft({
      startedAt: new Date().toISOString(),
      step: 1
    });
    setCurrentPage(2);
  };

  return (
    <section className="relative overflow-x-hidden min-h-screen bg-[#FAF9F6] pt-6 pb-6 md:pt-8 md:pb-8 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between">
      {/* 1. Official Approved Background Image Asset */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none z-0" aria-hidden="true" />

      {/* 2. Main Welcome Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end min-h-[400px] md:min-h-[440px]">
          {/* Left Column: Main Typography & Primary CTA */}
          <div className="lg:col-span-7 space-y-4 text-left pb-4">
            {/* Main Welcome Heading: 42-50px desktop */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gov-navy leading-[1.12] tracking-tight">
              {t.welcomeTitle.includes('Welcome to the') ? (
                <>
                  <span className="block">Welcome to the</span>
                  <span className="block">National Cyber Crime</span>
                  <span className="block">Reporting Portal</span>
                </>
              ) : (
                t.welcomeTitle
              )}
            </h1>

            {/* Subtitle in Muted Saffron */}
            <p className="text-xl sm:text-2xl md:text-[23px] font-bold text-[#E65100] leading-snug">
              {t.welcomeSubtitle}
            </p>

            {/* Core UX Explanation Paragraph: 16-18px */}
            <p className="text-base sm:text-lg md:text-[17px] text-gray-800 leading-relaxed max-w-2xl font-medium">
              {t.welcomeExplanation}
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleStartReporting}
                className="group inline-flex items-center justify-center gap-3 bg-[#0F2540] hover:bg-[#1A365D] text-white text-base sm:text-lg font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all focus:ring-4 focus:ring-amber-300 outline-none cursor-pointer"
                aria-label="Start reporting cybercrime"
              >
                <span>{t.startReportingBtn.replace('→', '').trim()}</span>
                <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Micro-trust indicator below button */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold pt-1">
                <Lock className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>{t.trustBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Provided lady.png Asset (Shifted left and increased height further) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start items-end relative h-full lg:-ml-8">
            <div className="w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[550px] -mb-8 lg:-mb-10 z-10">
              <img
                src="/images/lady.png"
                alt="Indian Welcome Assistance"
                className="w-full h-auto max-h-[540px] lg:max-h-[630px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* 3. Reassurance Cards Row Container */}
        <div className="mt-4 md:mt-6 relative z-20">
          <ReassuranceCards />
        </div>
      </div>
    </section>
  );
};
