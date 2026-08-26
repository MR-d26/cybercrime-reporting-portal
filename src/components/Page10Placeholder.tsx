import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Clock, Search } from 'lucide-react';

export const Page10Placeholder: React.FC = () => {
  const { setCurrentPage, complaintNumber, submissionTimestamp, selectedCategory } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
      <div className="inline-flex p-4 bg-blue-100 text-gov-navy rounded-full shadow-md">
        <Search className="w-12 h-12" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy">
        Page 10: Complaint Tracking (Placeholder)
      </h2>
      <p className="text-sm text-gray-600 max-w-md mx-auto font-medium">
        This is a prototype placeholder for tracking complaint status using your unique complaint number.
      </p>
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-gov max-w-xl mx-auto text-left space-y-3">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Complaint Number:</span>
          <span className="text-xl font-black text-gov-navy block">{complaintNumber || 'NCRP-2026-48217'}</span>
        </div>
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Status:</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full mt-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Received & Under Prototype Review</span>
          </span>
        </div>
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Reporting Path:</span>
          <span className="text-sm font-bold text-gray-800 block capitalize">{selectedCategory || 'Financial Fraud'}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(9)}
          className="inline-flex items-center gap-2 bg-gov-navy hover:bg-gov-navyHover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Page 09 (Submission success)</span>
        </button>
      </div>
    </div>
  );
};
