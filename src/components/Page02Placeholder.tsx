import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Page02Placeholder: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
      <div className="inline-flex p-4 bg-emerald-100 text-emerald-800 rounded-full">
        <CheckCircle2 className="w-12 h-12" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy">
        Page 02: Tell Us What Happened (Placeholder)
      </h2>
      <p className="text-gray-600 max-w-lg mx-auto">
        You have successfully initiated the reporting flow from Page 01. Page 02 will be implemented when instructed.
      </p>
      <div>
        <button
          onClick={() => setCurrentPage(1)}
          className="inline-flex items-center gap-2 bg-gov-navy hover:bg-gov-navyHover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Page 01 (Welcome)</span>
        </button>
      </div>
    </div>
  );
};
