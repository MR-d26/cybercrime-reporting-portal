import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle } from 'lucide-react';

export const ProgressStepper: React.FC = () => {
  const { t, lastSavedTime } = useApp();

  const steps = [
    { number: 1, label: t.step1Label, active: true },
    { number: 2, label: t.step2Label, active: false },
    { number: 3, label: t.step3Label, active: false },
    { number: 4, label: t.step4Label, active: false },
    { number: 5, label: t.step5Label, active: false },
    { number: 6, label: t.step6Label, active: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/80 bg-white/40 backdrop-blur-xs">
      {/* Stepper items */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto py-1 scrollbar-none">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex items-center gap-2 shrink-0 ${
              step.active ? 'border-b-2 border-gov-navy pb-1' : ''
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step.active
                  ? 'bg-gov-navy text-white shadow-xs'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.number}
            </span>
            <span
              className={`text-xs md:text-sm font-medium ${
                step.active ? 'text-gov-navy font-bold' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Auto-save Status Badge */}
      <div className="flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold shrink-0">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>{lastSavedTime ? `${t.savedJustNow} (${lastSavedTime})` : t.savedJustNow}</span>
      </div>
    </div>
  );
};
