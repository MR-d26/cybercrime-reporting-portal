import React from 'react';
import { useApp } from '../context/AppContext';
import { Check, CheckCircle2 } from 'lucide-react';

export const ProgressStepper: React.FC<{ activeStep?: number }> = ({ activeStep }) => {
  const { t, lastSavedTime, currentPage } = useApp();

  const stepNum = activeStep || (currentPage >= 3 ? (currentPage === 3 ? 2 : currentPage - 1) : 1);

  const steps = [
    { number: 1, label: t.step1Label },
    { number: 2, label: t.step2Label },
    { number: 3, label: t.step3Label },
    { number: 4, label: t.step4Label },
    { number: 5, label: t.step5Label },
    { number: 6, label: t.step6Label },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 py-2.5 flex items-center justify-between gap-2 border-b border-gray-200/60 relative z-30 overflow-hidden">
      {/* 6 Steps arranged neatly in one line without horizontal scrolling */}
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 flex-1 min-w-0 overflow-hidden">
        {steps.map((step) => {
          const isCompleted = step.number < stepNum;
          const isActive = step.number === stepNum;

          return (
            <div
              key={step.number}
              className={`flex items-center gap-1 sm:gap-1.5 shrink-0 relative ${
                isActive ? 'pb-1' : ''
              }`}
            >
              {/* Badge Icon / Number */}
              {isCompleted ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300/60">
                  <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                </div>
              ) : isActive ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0F2540] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {step.number}
                </div>
              ) : (
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200/80 text-gray-500 font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0">
                  {step.number}
                </div>
              )}

              {/* Step Label - single line, no wrap */}
              <span
                className={`text-[11px] sm:text-xs md:text-sm whitespace-nowrap ${
                  isActive
                    ? 'text-gov-navy font-extrabold'
                    : isCompleted
                    ? 'text-gray-700 font-semibold'
                    : 'text-gray-500 font-medium'
                }`}
              >
                {step.label}
              </span>

              {/* Active Underline */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F2540] rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Right-aligned Saved Just Now Badge */}
      <div className="bg-[#E8F5E9] text-[#1B5E20] border border-emerald-200/80 px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold shrink-0 flex items-center gap-1 shadow-xs whitespace-nowrap">
        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
        <span>
          {t.savedJustNow} {lastSavedTime ? `(${lastSavedTime})` : ''}
        </span>
      </div>
    </div>
  );
};
