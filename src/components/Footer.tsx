import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Save } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, lastSavedTime, setIsAccessibilityModalOpen } = useApp();

  return (
    <footer className="mt-auto bg-gray-100/80 border-t border-gray-200 text-gray-600 text-xs text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Ministry & Prototype Info */}
        <div className="flex items-center gap-2 text-left">
          <Shield className="w-4 h-4 text-gov-navy shrink-0" />
          <div>
            <span className="font-semibold text-gray-800 block">{t.footerGovInfo}</span>
            <span className="text-[11px] text-gray-500 block">{t.footerNotice}</span>
          </div>
        </div>

        {/* Right: Draft Status & Accessibility Link */}
        <div className="flex items-center gap-4 text-gray-500">
          {lastSavedTime && (
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200 text-[11px] font-medium">
              <Save className="w-3.5 h-3.5 text-emerald-600" />
              <span>Saved at {lastSavedTime}</span>
            </div>
          )}
          <button
            onClick={() => setIsAccessibilityModalOpen(true)}
            className="hover:underline text-gov-navy font-medium text-[11px]"
          >
            {t.accessibility}
          </button>
        </div>
      </div>

      {/* Indian Tricolor Bottom Accent Strip (Saffron Top Bar, White Body, Ashoka Green Bottom Bar) */}
      <div className="h-1.5 w-full bg-[#1B5E20]" aria-hidden="true" />
    </footer>
  );
};
