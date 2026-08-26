import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TRANSLATIONS, TranslationSchema } from '../i18n/translations';

export type FontScale = 'sm' | 'normal' | 'lg' | 'xl';
export type ContrastMode = 'normal' | 'high-light' | 'high-dark';
export type LineHeightMode = 'normal' | 'relaxed' | 'loose';
export type LetterSpacingMode = 'normal' | 'wide';

export interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
  contrastMode: ContrastMode;
  setContrastMode: (mode: ContrastMode) => void;
  lineHeight: LineHeightMode;
  setLineHeight: (lh: LineHeightMode) => void;
  letterSpacing: LetterSpacingMode;
  setLetterSpacing: (ls: LetterSpacingMode) => void;
  focusRing: boolean;
  setFocusRing: (enabled: boolean) => void;
  isAccessibilityModalOpen: boolean;
  setIsAccessibilityModalOpen: (open: boolean) => void;
  isMenuModalOpen: boolean;
  setIsMenuModalOpen: (open: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  resetAccessibility: () => void;
  lastSavedTime: string | null;

  // Page 02 State & Persistence
  complaintText: string;
  setComplaintText: (text: string) => void;
  voiceTranscript: string;
  setVoiceTranscript: (transcript: string) => void;
  saveDraft: (additionalData?: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_SETTINGS = 'ncrp_prototype_settings';
const STORAGE_KEY_DRAFT = 'ncrp_prototype_draft_v2';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [fontScale, setFontScale] = useState<FontScale>('normal');
  const [contrastMode, setContrastMode] = useState<ContrastMode>('normal');
  const [lineHeight, setLineHeight] = useState<LineHeightMode>('normal');
  const [letterSpacing, setLetterSpacing] = useState<LetterSpacingMode>('normal');
  const [focusRing, setFocusRing] = useState<boolean>(false);

  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);

  // Complaint state for Page 02
  const [complaintText, setComplaintTextState] = useState<string>('');
  const [voiceTranscript, setVoiceTranscriptState] = useState<string>('');

  // Load saved settings & draft from localStorage
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        if (parsed.language) setLanguageState(parsed.language);
        if (parsed.fontScale) setFontScale(parsed.fontScale);
        if (parsed.contrastMode) setContrastMode(parsed.contrastMode);
        if (parsed.lineHeight) setLineHeight(parsed.lineHeight);
        if (parsed.letterSpacing) setLetterSpacing(parsed.letterSpacing);
        if (parsed.focusRing !== undefined) setFocusRing(parsed.focusRing);
      }
      const savedDraft = localStorage.getItem(STORAGE_KEY_DRAFT);
      if (savedDraft) {
        const parsedDraft = JSON.parse(savedDraft);
        if (parsedDraft.complaintText) setComplaintTextState(parsedDraft.complaintText);
        if (parsedDraft.voiceTranscript) setVoiceTranscriptState(parsedDraft.voiceTranscript);
        if (parsedDraft.currentPage) setCurrentPage(parsedDraft.currentPage);
        if (parsedDraft.savedAt) setLastSavedTime(parsedDraft.savedAt);
      }
    } catch (e) {
      console.warn("Failed to parse settings/draft from localStorage:", e);
    }
  }, []);

  // Save draft to localStorage
  const saveDraft = (additionalData: any = {}) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    try {
      localStorage.setItem(STORAGE_KEY_DRAFT, JSON.stringify({
        complaintText,
        voiceTranscript,
        currentPage,
        language,
        savedAt: timestamp,
        ...additionalData
      }));
      setLastSavedTime(timestamp);
    } catch (e) {
      console.warn("Failed to save draft:", e);
    }
  };

  // Sync draft when complaintText or voiceTranscript changes
  useEffect(() => {
    if (complaintText || voiceTranscript) {
      saveDraft();
    }
  }, [complaintText, voiceTranscript]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const setComplaintText = (text: string) => {
    setComplaintTextState(text);
  };

  const setVoiceTranscript = (transcript: string) => {
    setVoiceTranscriptState(transcript);
  };

  const resetAccessibility = () => {
    setFontScale('normal');
    setContrastMode('normal');
    setLineHeight('normal');
    setLetterSpacing('normal');
    setFocusRing(false);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      t,
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
      isAccessibilityModalOpen,
      setIsAccessibilityModalOpen,
      isMenuModalOpen,
      setIsMenuModalOpen,
      currentPage,
      setCurrentPage,
      resetAccessibility,
      lastSavedTime,
      complaintText,
      setComplaintText,
      voiceTranscript,
      setVoiceTranscript,
      saveDraft
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
