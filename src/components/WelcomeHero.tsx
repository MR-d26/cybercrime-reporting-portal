import React from 'react';
import { useApp } from '../context/AppContext';
import { NamasteCitizenSVG, IndiaGateWatermarkSVG, AshokaChakraWatermarkSVG } from './Emblems';
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
    <section className="relative overflow-hidden bg-[#FAF9F6] pt-5 pb-6 md:pt-7 md:pb-7 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between">
      {/* 1. Indian Visual Identity Background Motifs */}
      {/* Subtle Saffron Accent Gradient at top left - 3-5% Opacity */}
      <div className="absolute top-0 left-0 w-80 h-36 bg-gradient-to-br from-[#E65100]/10 via-amber-400/5 to-transparent rounded-br-full pointer-events-none -translate-x-8 -translate-y-8 blur-xl" />
      
      {/* Ashoka Chakra Watermark Center Background - 3.5% Opacity */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <AshokaChakraWatermarkSVG className="w-[420px] h-[420px] md:w-[540px] md:h-[540px]" />
      </div>

      {/* India Gate Architectural Silhouette Watermark Right Background */}
      <div className="absolute right-0 top-0 w-full max-w-md h-full pointer-events-none flex justify-end items-center opacity-80">
        <IndiaGateWatermarkSVG className="w-full h-auto max-h-[400px]" />
      </div>

      {/* 2. Main Welcome Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[360px] md:min-h-[390px]">
          {/* Left Column: Main Typography & Primary CTA */}
          <div className="lg:col-span-8 space-y-4 text-left">
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
            <p className="text-base sm:text-lg md:text-[17px] text-gray-700 leading-relaxed max-w-2xl font-normal">
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
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium pt-1">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t.trustBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary Namaste Citizen SVG (Reduced Size, Non-dominant) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[220px] sm:max-w-[250px] lg:max-w-[270px]">
              <NamasteCitizenSVG className="w-full h-auto drop-shadow-xs" />
            </div>
          </div>
        </div>

        {/* 3. Reassurance Cards Row Container */}
        <div className="mt-6 md:mt-7">
          <ReassuranceCards />
        </div>
      </div>
    </section>
  );
};
