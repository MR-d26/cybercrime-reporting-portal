import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Home, Info, PhoneCall, HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export const MenuModal: React.FC = () => {
  const { t, isMenuModalOpen, setIsMenuModalOpen, setCurrentPage } = useApp();

  if (!isMenuModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-gov-lg border border-gray-200 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-gov-navy text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold">{t.menuTitle}</h2>
          </div>
          <button
            onClick={() => setIsMenuModalOpen(false)}
            className="text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors focus:ring-2 focus:ring-amber-300 outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <button
            onClick={() => {
              setCurrentPage(1);
              setIsMenuModalOpen(false);
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-amber-50 text-left border border-transparent hover:border-amber-200 text-gov-navy font-semibold text-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100/80 rounded-lg text-gov-saffron group-hover:bg-gov-saffron group-hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <span>{t.menuHome}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gov-saffron transition-colors" />
          </button>

          <button
            onClick={() => {
              setIsMenuModalOpen(false);
              alert("National Cybercrime Coordination Centre (I4C) under Ministry of Home Affairs, Govt of India.");
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-amber-50 text-left border border-transparent hover:border-amber-200 text-gov-navy font-semibold text-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100/80 rounded-lg text-gov-saffron group-hover:bg-gov-saffron group-hover:text-white transition-colors">
                <Info className="w-5 h-5" />
              </div>
              <span>{t.menuAbout}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gov-saffron transition-colors" />
          </button>

          <a
            href="tel:1930"
            className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-amber-50 text-left border border-transparent hover:border-amber-200 text-gov-navy font-semibold text-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100/80 rounded-lg text-gov-saffron group-hover:bg-gov-saffron group-hover:text-white transition-colors">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span>{t.menuHelplines}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gov-saffron transition-colors" />
          </a>

          <button
            onClick={() => {
              setIsMenuModalOpen(false);
              alert("FAQ & Citizen Guidance section is part of the NCRP UX Prototype.");
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-amber-50 text-left border border-transparent hover:border-amber-200 text-gov-navy font-semibold text-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100/80 rounded-lg text-gov-saffron group-hover:bg-gov-saffron group-hover:text-white transition-colors">
                <HelpCircle className="w-5 h-5" />
              </div>
              <span>{t.menuFAQ}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gov-saffron transition-colors" />
          </button>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
          <button
            onClick={() => setIsMenuModalOpen(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 rounded-lg text-xs transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
