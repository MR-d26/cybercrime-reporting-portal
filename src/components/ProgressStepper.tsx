import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle } from 'lucide-react';

export const ProgressStepper: React.FC<{ activeStep?: number }> = ({ activeStep = 1 }) => {
  const { t, lastSavedTime, currentPage } = useApp();

  // If activeStep prop is omitted, infer from currentPage
  const stepNum = activeStep || (currentPage >= 3 ? 2 : 1);

  const steps = [
    { number: 1, label: t.step1Label, active: stepNum === 1 },
    { number: 2, label: t.step2Label, active: stepNum === 2 },
    { number: 3, label: t.step3Label, active: stepNum === 3 },
    { number: 4, label: t.step4Label, active: stepNum === 4 },
    { number: 5, label: t.step5Label, active: stepNum === 5 },
    { number: 6, label: t.step6Label, active: stepNum === 6 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/90 bg-white/90 backdrop-blur-md relative z-30 shadow-xs">
      {/* Stepper items */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-7 overflow-x-auto py-1 scrollbar-none">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex items-center gap-2 shrink-0 ${
              step.active ? 'border-b-2 border-gov-navy pb-0.5' : ''
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                step.active
                  ? 'bg-gov-navy text-white shadow-xs'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {step.number}
            </span>
            <span
              className={`text-xs md:text-sm ${
                step.active ? 'text-gov-navy font-extrabold' : 'text-gray-700 font-bold'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Auto-save Status Badge with High-Contrast Bold Time */}
      <div className="flex items-center gap-1.5 bg-emerald-800 text-white px-3.5 py-1 rounded-full text-xs font-extrabold shadow-sm shrink-0">
        <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
        <span>
          {t.savedJustNow} {lastSavedTime ? <strong className="text-amber-200 ml-1">({lastSavedTime})</strong> : ''}
        </span>
      </div>
    </div>
  );
};
