import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LANGUAGES, LanguageCode } from '../i18n/translations';
import { AshokaEmblemSVG, I4CLogoSVG } from './Emblems';
import { PhoneCall, Globe, Accessibility, Menu, ChevronDown, Check } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    t,
    language,
    setLanguage,
    setIsAccessibilityModalOpen,
    setIsMenuModalOpen
  } = useApp();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [emblemError, setEmblemError] = useState(false);
  const [i4cLogoError, setI4cLogoError] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      {/* 1. Top Emergency Helpline Banner */}
      <div className="bg-[#E65100] text-white px-4 py-1.5 flex items-center justify-between gap-2 text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2 max-w-4xl mx-auto md:mx-0">
          <PhoneCall className="w-4 h-4 text-amber-200 shrink-0" />
          <span>{t.emergencyBanner}</span>
        </div>
        <a
          href="tel:1930"
          className="bg-[#0F2540] hover:bg-[#1A365D] text-white px-3 py-0.5 rounded-full flex items-center gap-2 shadow-xs transition-colors shrink-0"
          title="Call 1930 Emergency Helpline"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <div className="text-left leading-none">
            <span className="font-extrabold text-sm md:text-base tracking-wide block">{t.helplineShort}</span>
            <span className="text-[9px] text-amber-200 block">{t.helpline24x7}</span>
          </div>
        </a>
      </div>

      {/* 2. Official Header Row */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left Branding Group */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Official Government Emblem Asset from UXDT NIC India */}
          <div className="flex items-center gap-2.5">
            {!emblemError ? (
              <img
                src="https://www.uxdt.nic.in/wp-content/uploads/2019/12/emblem-dark.png"
                alt="State Emblem of India"
                className="h-10 md:h-12 w-auto object-contain shrink-0"
                onError={() => setEmblemError(true)}
              />
            ) : (
              <AshokaEmblemSVG className="w-7 h-10 md:w-9 md:h-12 shrink-0" />
            )}
            <div className="hidden sm:block text-left border-r border-gray-300 pr-3 md:pr-4">
              <span className="block text-[10px] md:text-[11px] font-black tracking-wider text-gov-navy uppercase leading-tight">
                {t.govTitle}
              </span>
              <span className="block text-[10px] md:text-[11px] text-gray-600 font-semibold leading-tight">
                {t.govMinistry}
              </span>
            </div>
          </div>

          {/* Official I4C / ICCCC Logo Asset from UXDT NIC India */}
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3 md:pr-4">
            {!i4cLogoError ? (
              <img
                src="https://www.uxdt.nic.in/wp-content/uploads/2024/02/icccc-logo-preview.png"
                alt="Indian Cybercrime Coordination Centre (I4C)"
                className="h-8 sm:h-9 md:h-11 w-auto object-contain shrink-0"
                onError={() => setI4cLogoError(true)}
              />
            ) : (
              <I4CLogoSVG className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
            )}
            <div className="hidden lg:block text-left">
              <span className="block text-[11px] font-bold text-gov-navy leading-tight">
                {t.i4cTitle}
              </span>
            </div>
          </div>

          {/* Portal Title & UX Prototype Badge */}
          <div className="text-left">
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-gov-navy leading-tight">
              {t.portalName}
            </h1>
            <span className="inline-block bg-[#E65100] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider mt-0.5">
              {t.uxPrototype}
            </span>
          </div>
        </div>

        {/* Right Header Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gov-navy font-semibold px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors focus:ring-2 focus:ring-gov-navy outline-none cursor-pointer"
              aria-expanded={isLangOpen}
            >
              <Globe className="w-4 h-4 text-gov-navy" />
              <span>{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-gov-lg py-1 z-50">
                <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  {t.langSelect}
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs sm:text-sm flex items-center justify-between hover:bg-amber-50 cursor-pointer ${
                      language === lang.code ? 'font-bold text-gov-saffron bg-amber-50/60' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    {language === lang.code && <Check className="w-4 h-4 text-gov-saffron" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accessibility Control Button */}
          <button
            onClick={() => setIsAccessibilityModalOpen(true)}
            className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gov-navy font-semibold px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors focus:ring-2 focus:ring-gov-navy outline-none cursor-pointer"
          >
            <Accessibility className="w-4 h-4 text-gov-navy" />
            <span className="hidden sm:inline">{t.accessibility}</span>
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gov-navy font-semibold px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors focus:ring-2 focus:ring-gov-navy outline-none cursor-pointer"
          >
            <Menu className="w-4 h-4 text-gov-navy" />
            <span className="hidden sm:inline">{t.quickMenu}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
