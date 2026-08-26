import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Page05Placeholder: React.FC = () => {
  const { setCurrentPage, complaintText, selectedCategory, extractedAmount } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
      <div className="inline-flex p-4 bg-emerald-100 text-emerald-800 rounded-full">
        <CheckCircle2 className="w-12 h-12" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy">
        Page 05: Add Details (Placeholder)
      </h2>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-gov max-w-xl mx-auto text-left space-y-3">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Confirmed Path:</span>
          <span className="text-base font-bold text-gov-saffron block capitalize">{selectedCategory || 'Financial Fraud'}</span>
        </div>
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Extracted Amount:</span>
          <span className="text-base font-bold text-emerald-700 block">{extractedAmount || '₹10,000'}</span>
        </div>
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Citizen Story:</span>
          <p className="text-sm text-gray-800 italic bg-amber-50 p-3 rounded-lg border border-amber-200 mt-1">
            "{complaintText || 'No story text entered.'}"
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(4)}
          className="inline-flex items-center gap-2 bg-gov-navy hover:bg-gov-navyHover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Page 04 (Review information)</span>
        </button>
      </div>
    </div>
  );
};
