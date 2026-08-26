import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import { verifyMockOtp, DEMO_OTP } from '../utils/otpVerifier';
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  Info
} from 'lucide-react';

export const Page08OtpVerification: React.FC = () => {
  const {
    t,
    otpVerified,
    setOtpVerified,
    setCurrentPage,
    saveDraft
  } = useApp();

  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState<number>(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // 30s Cooldown Timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Handle individual digit change
  const handleChange = (index: number, value: string) => {
    setErrorMessage(null);
    const cleaned = value.replace(/[^0-9]/g, '');
    if (!cleaned) {
      const newDigits = [...digits];
      newDigits[index] = '';
      setDigits(newDigits);
      return;
    }

    const char = cleaned[cleaned.length - 1];
    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);

    // Auto advance focus
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check full OTP if complete
    const fullOtp = newDigits.join('');
    if (fullOtp.length === 6) {
      validateOtp(fullOtp);
    }
  };

  // Handle Backspace navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
    if (!pastedData) return;

    const newDigits = Array(6).fill('');
    for (let i = 0; i < pastedData.length; i++) {
      newDigits[i] = pastedData[i];
    }
    setDigits(newDigits);

    if (pastedData.length === 6) {
      validateOtp(pastedData);
    } else {
      inputRefs.current[pastedData.length]?.focus();
    }
  };

  const validateOtp = (otp: string) => {
    if (verifyMockOtp(otp)) {
      setOtpVerified(true);
      setErrorMessage(null);
      saveDraft({ otpVerified: true });
    } else {
      setOtpVerified(false);
      setErrorMessage(t.otpErrorText);
    }
  };

  const handleResend = () => {
    if (cooldown > 0) return;
    setCooldown(30);
    setDigits(Array(6).fill(''));
    setErrorMessage(null);
    setOtpVerified(false);
    inputRefs.current[0]?.focus();
  };

  const handleBackToReview = () => {
    setCurrentPage(7);
  };

  const handleContinueToSubmission = () => {
    if (otpVerified) {
      saveDraft({ step: 8, otpVerified: true });
      setCurrentPage(9);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 08 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Progress Stepper Bar (Step 6 Active) */}
      <ProgressStepper activeStep={6} />

      {/* 3. Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.otpTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.otpSubtitle}
            </p>
          </div>

          {/* MAIN OTP CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-6 max-w-2xl mx-auto text-center">
            
            {/* MASKED MOBILE NUMBER & DEMO BADGE */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 text-gov-navy px-4 py-2 rounded-xl font-bold text-sm">
                <Smartphone className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{t.maskedNumberNotice}</span>
              </div>

              {/* DEMO MODE HINT BADGE */}
              <div>
                <span className="inline-flex items-center gap-1.5 bg-amber-100/80 border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{t.demoModeBadge}</span>
                </span>
              </div>
            </div>

            {/* 6 INDIVIDUAL OTP INPUT BOXES */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                {t.otpLabel}
              </label>
              
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-11 h-13 sm:w-13 sm:h-15 text-center text-xl sm:text-2xl font-black rounded-xl border-2 outline-none transition-all ${
                      otpVerified
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : errorMessage
                        ? 'border-red-400 bg-red-50 text-red-900 focus:ring-2 focus:ring-red-400/20'
                        : 'border-gray-300 bg-white text-gov-navy focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* VERIFICATION SUCCESS BADGE */}
            {otpVerified && (
              <div className="flex items-center justify-center gap-2 p-3.5 bg-emerald-100/90 border border-emerald-300 text-emerald-900 rounded-xl font-extrabold text-sm animate-in fade-in duration-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>{t.otpVerifiedSuccess}</span>
              </div>
            )}

            {/* ERROR NOTICE */}
            {errorMessage && !otpVerified && (
              <div className="flex items-center justify-center gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl font-bold text-xs animate-in fade-in duration-150">
                <AlertCircle className="w-4.5 h-4.5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* RESEND OTP BUTTON & COOLDOWN TIMER */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResend}
                disabled={cooldown > 0}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                  cooldown > 0
                    ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                    : 'text-gov-navy hover:text-gov-saffron hover:bg-amber-50 cursor-pointer'
                }`}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${cooldown > 0 ? '' : 'animate-spin-slow'}`} />
                <span>
                  {cooldown > 0
                    ? t.resendCooldownText.replace('{sec}', cooldown.toString())
                    : t.resendBtn}
                </span>
              </button>
            </div>

            {/* REASSURANCE / PROTECTION BOX */}
            <div className="pt-4 border-t border-gray-100 text-left bg-blue-50/50 p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-gov-navy font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{t.securityNoticeTitle}</span>
              </div>
              <p className="text-xs text-gray-600 font-medium pl-6">
                {t.securityNoticeSub}
              </p>
            </div>

          </div>
        </div>

        {/* 4. Bottom Action Navigation Bar */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200/80">
          <button
            onClick={handleBackToReview}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToReviewBtn}</span>
          </button>

          <button
            onClick={handleContinueToSubmission}
            disabled={!otpVerified}
            className={`flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all ${
              otpVerified
                ? 'bg-[#0F2540] hover:bg-[#1A365D] text-white cursor-pointer hover:shadow-lg active:scale-98 focus:ring-4 focus:ring-amber-300'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>{t.continueToSubmissionBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
