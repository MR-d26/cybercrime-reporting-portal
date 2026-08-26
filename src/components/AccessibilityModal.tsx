import React from 'react';
import { useApp, FontScale, ContrastMode, LineHeightMode, LetterSpacingMode } from '../context/AppContext';
import { X, RotateCcw, Type, Eye, AlignLeft, Sparkles, Focus } from 'lucide-react';

export const AccessibilityModal: React.FC = () => {
  const {
    t,
    isAccessibilityModalOpen,
    setIsAccessibilityModalOpen,
    fontScale,
    setFontScale,
    contrastMode,
    setContrastMode,
    lineHeight,
    setLineHeight,
    letterSpacing,
    setLetterSpacing,
    focusRing,
    setFocusRing,
    resetAccessibility
  } = useApp();

  if (!isAccessibilityModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl shadow-gov-lg border border-gray-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-heading"
      >
        {/* Modal Header */}
        <div className="bg-gov-navy text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 id="accessibility-heading" className="text-lg font-bold">
              {t.accessibilityTitle}
            </h2>
          </div>
          <button
            onClick={() => setIsAccessibilityModalOpen(false)}
            className="text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors focus:ring-2 focus:ring-amber-300 outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* 1. Font Size Control */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Type className="w-4 h-4 text-gov-saffron" />
              <span>{t.fontSizeLabel}</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {([
                { id: 'sm', label: 'A-' },
                { id: 'normal', label: t.fontScaleDefault },
                { id: 'lg', label: 'A+' },
                { id: 'xl', label: 'A++' }
              ] as { id: FontScale; label: string }[]).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFontScale(item.id)}
                  className={`py-2 px-3 rounded-lg border font-bold text-sm transition-all focus:ring-2 focus:ring-gov-navy outline-none ${
                    fontScale === item.id
                      ? 'bg-gov-navy text-white border-gov-navy shadow-xs'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Contrast Mode Control */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Eye className="w-4 h-4 text-gov-saffron" />
              <span>{t.contrastModeLabel}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { id: 'normal', label: t.contrastNormal },
                { id: 'high-light', label: t.contrastHighLight },
                { id: 'high-dark', label: t.contrastHighDark }
              ] as { id: ContrastMode; label: string }[]).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setContrastMode(item.id)}
                  className={`py-2 px-2.5 rounded-lg border font-semibold text-xs transition-all focus:ring-2 focus:ring-gov-navy outline-none ${
                    contrastMode === item.id
                      ? 'bg-gov-saffron text-white border-gov-saffron shadow-xs'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Line Spacing Control */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <AlignLeft className="w-4 h-4 text-gov-saffron" />
              <span>{t.lineHeightLabel}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {([
                { id: 'normal', label: 'Normal' },
                { id: 'relaxed', label: 'Relaxed' },
                { id: 'loose', label: 'Loose' }
              ] as { id: LineHeightMode; label: string }[]).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLineHeight(item.id)}
                  className={`py-2 px-3 rounded-lg border font-semibold text-xs transition-all focus:ring-2 focus:ring-gov-navy outline-none ${
                    lineHeight === item.id
                      ? 'bg-gov-navy text-white border-gov-navy shadow-xs'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Keyboard Focus Ring Toggle */}
          <div className="flex items-center justify-between p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80">
            <div className="flex items-center gap-2.5">
              <Focus className="w-5 h-5 text-gov-saffron" />
              <div>
                <span className="block font-bold text-sm text-gov-navy">{t.focusHighlightLabel}</span>
                <span className="block text-xs text-gray-600">High visibility outline for keyboard navigation</span>
              </div>
            </div>
            <button
              onClick={() => setFocusRing(!focusRing)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                focusRing ? 'bg-gov-saffron' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  focusRing ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={resetAccessibility}
            className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm hover:underline outline-none"
          >
            <RotateCcw className="w-4 h-4 text-gray-500" />
            <span>{t.resetBtn}</span>
          </button>
          <button
            onClick={() => setIsAccessibilityModalOpen(false)}
            className="bg-gov-navy hover:bg-gov-navyHover text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors focus:ring-2 focus:ring-gov-navy outline-none"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
