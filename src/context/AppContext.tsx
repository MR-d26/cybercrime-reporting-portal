import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TRANSLATIONS, TranslationSchema } from '../i18n/translations';
import { CategoryId } from '../utils/complaintRouter';

export type FontScale = 'sm' | 'normal' | 'lg' | 'xl';
export type ContrastMode = 'normal' | 'high-light' | 'high-dark';
export type LineHeightMode = 'normal' | 'relaxed' | 'loose';
export type LetterSpacingMode = 'normal' | 'wide';

export interface UploadedFileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
}

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

  // Complaint, Router & Extracted State
  complaintText: string;
  setComplaintText: (text: string) => void;
  voiceTranscript: string;
  setVoiceTranscript: (transcript: string) => void;
  selectedCategory: CategoryId | null;
  setSelectedCategory: (cat: CategoryId | null) => void;
  extractedIncident: string;
  setExtractedIncident: (incident: string) => void;
  extractedAmount: string;
  setExtractedAmount: (amount: string) => void;
  extractedMethod: string;
  setExtractedMethod: (method: string) => void;

  // Page 05 Form Fields
  incidentDate: string;
  setIncidentDate: (date: string) => void;
  incidentTime: string;
  setIncidentTime: (time: string) => void;
  dontKnowDate: boolean;
  setDontKnowDate: (val: boolean) => void;

  detailAmount: string;
  setDetailAmount: (amount: string) => void;
  dontKnowAmount: boolean;
  setDontKnowAmount: (val: boolean) => void;

  transactionId: string;
  setTransactionId: (id: string) => void;
  dontHaveTxnId: boolean;
  setDontHaveTxnId: (val: boolean) => void;

  bankService: string;
  setBankService: (bank: string) => void;
  dontKnowBank: boolean;
  setDontKnowBank: (val: boolean) => void;

  platformName: string;
  setPlatformName: (platform: string) => void;
  accountUsername: string;
  setAccountUsername: (user: string) => void;
  companyName: string;
  setCompanyName: (comp: string) => void;
  contactDetail: string;
  setContactDetail: (contact: string) => void;

  // Page 06 Evidence Fields
  uploadedFiles: UploadedFileItem[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFileItem[]>>;
  noEvidenceChecked: boolean;
  setNoEvidenceChecked: (val: boolean) => void;
  additionalEvidenceNotes: string;
  setAdditionalEvidenceNotes: (notes: string) => void;

  // Page 07 Review & Confirmation Field
  reviewConfirmed: boolean;
  setReviewConfirmed: (val: boolean) => void;

  // Page 08 OTP Verification State
  otpVerified: boolean;
  setOtpVerified: (val: boolean) => void;

  saveDraft: (additionalData?: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_SETTINGS = 'ncrp_prototype_settings';
const STORAGE_KEY_DRAFT = 'ncrp_prototype_draft_v8';

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

  // Complaint, Router & Extraction state
  const [complaintText, setComplaintTextState] = useState<string>('');
  const [voiceTranscript, setVoiceTranscriptState] = useState<string>('');
  const [selectedCategory, setSelectedCategoryState] = useState<CategoryId | null>(null);
  const [extractedIncident, setExtractedIncidentState] = useState<string>('');
  const [extractedAmount, setExtractedAmountState] = useState<string>('');
  const [extractedMethod, setExtractedMethodState] = useState<string>('');

  // Page 05 Form Fields
  const [incidentDate, setIncidentDate] = useState<string>('');
  const [incidentTime, setIncidentTime] = useState<string>('');
  const [dontKnowDate, setDontKnowDate] = useState<boolean>(false);
  const [detailAmount, setDetailAmount] = useState<string>('');
  const [dontKnowAmount, setDontKnowAmount] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>('');
  const [dontHaveTxnId, setDontHaveTxnId] = useState<boolean>(false);
  const [bankService, setBankService] = useState<string>('');
  const [dontKnowBank, setDontKnowBank] = useState<boolean>(false);
  const [platformName, setPlatformName] = useState<string>('');
  const [accountUsername, setAccountUsername] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactDetail, setContactDetail] = useState<string>('');

  // Page 06 Evidence Fields
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [noEvidenceChecked, setNoEvidenceChecked] = useState<boolean>(false);
  const [additionalEvidenceNotes, setAdditionalEvidenceNotes] = useState<string>('');

  // Page 07 Confirmation Field
  const [reviewConfirmed, setReviewConfirmed] = useState<boolean>(false);

  // Page 08 OTP Verification State
  const [otpVerified, setOtpVerified] = useState<boolean>(false);

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
        if (parsedDraft.selectedCategory) setSelectedCategoryState(parsedDraft.selectedCategory);
        if (parsedDraft.extractedIncident) setExtractedIncidentState(parsedDraft.extractedIncident);
        if (parsedDraft.extractedAmount) setExtractedAmountState(parsedDraft.extractedAmount);
        if (parsedDraft.extractedMethod) setExtractedMethodState(parsedDraft.extractedMethod);

        if (parsedDraft.incidentDate) setIncidentDate(parsedDraft.incidentDate);
        if (parsedDraft.incidentTime) setIncidentTime(parsedDraft.incidentTime);
        if (parsedDraft.dontKnowDate !== undefined) setDontKnowDate(parsedDraft.dontKnowDate);
        if (parsedDraft.detailAmount) setDetailAmount(parsedDraft.detailAmount);
        if (parsedDraft.dontKnowAmount !== undefined) setDontKnowAmount(parsedDraft.dontKnowAmount);
        if (parsedDraft.transactionId) setTransactionId(parsedDraft.transactionId);
        if (parsedDraft.dontHaveTxnId !== undefined) setDontHaveTxnId(parsedDraft.dontHaveTxnId);
        if (parsedDraft.bankService) setBankService(parsedDraft.bankService);
        if (parsedDraft.dontKnowBank !== undefined) setDontKnowBank(parsedDraft.dontKnowBank);
        if (parsedDraft.platformName) setPlatformName(parsedDraft.platformName);
        if (parsedDraft.accountUsername) setAccountUsername(parsedDraft.accountUsername);
        if (parsedDraft.companyName) setCompanyName(parsedDraft.companyName);
        if (parsedDraft.contactDetail) setContactDetail(parsedDraft.contactDetail);

        if (parsedDraft.uploadedFiles) setUploadedFiles(parsedDraft.uploadedFiles);
        if (parsedDraft.noEvidenceChecked !== undefined) setNoEvidenceChecked(parsedDraft.noEvidenceChecked);
        if (parsedDraft.additionalEvidenceNotes) setAdditionalEvidenceNotes(parsedDraft.additionalEvidenceNotes);

        if (parsedDraft.reviewConfirmed !== undefined) setReviewConfirmed(parsedDraft.reviewConfirmed);
        if (parsedDraft.otpVerified !== undefined) setOtpVerified(parsedDraft.otpVerified);

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
        selectedCategory,
        extractedIncident,
        extractedAmount,
        extractedMethod,
        incidentDate,
        incidentTime,
        dontKnowDate,
        detailAmount,
        dontKnowAmount,
        transactionId,
        dontHaveTxnId,
        bankService,
        dontKnowBank,
        platformName,
        accountUsername,
        companyName,
        contactDetail,
        uploadedFiles,
        noEvidenceChecked,
        additionalEvidenceNotes,
        reviewConfirmed,
        otpVerified,
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

  useEffect(() => {
    if (complaintText || selectedCategory || extractedIncident || uploadedFiles.length > 0 || reviewConfirmed || otpVerified) {
      saveDraft();
    }
  }, [
    complaintText, selectedCategory, extractedIncident, extractedAmount, extractedMethod,
    incidentDate, incidentTime, dontKnowDate, detailAmount, dontKnowAmount,
    transactionId, dontHaveTxnId, bankService, dontKnowBank, platformName, accountUsername, companyName, contactDetail,
    uploadedFiles, noEvidenceChecked, additionalEvidenceNotes, reviewConfirmed, otpVerified
  ]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const setComplaintText = (text: string) => {
    setComplaintTextState(text);
  };

  const setVoiceTranscript = (transcript: string) => {
    setVoiceTranscriptState(transcript);
  };

  const setSelectedCategory = (cat: CategoryId | null) => {
    setSelectedCategoryState(cat);
  };

  const setExtractedIncident = (incident: string) => {
    setExtractedIncidentState(incident);
  };

  const setExtractedAmount = (amount: string) => {
    setExtractedAmountState(amount);
  };

  const setExtractedMethod = (method: string) => {
    setExtractedMethodState(method);
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
      selectedCategory,
      setSelectedCategory,
      extractedIncident,
      setExtractedIncident,
      extractedAmount,
      setExtractedAmount,
      extractedMethod,
      setExtractedMethod,
      incidentDate,
      setIncidentDate,
      incidentTime,
      setIncidentTime,
      dontKnowDate,
      setDontKnowDate,
      detailAmount,
      setDetailAmount,
      dontKnowAmount,
      setDontKnowAmount,
      transactionId,
      setTransactionId,
      dontHaveTxnId,
      setDontHaveTxnId,
      bankService,
      setBankService,
      dontKnowBank,
      setDontKnowBank,
      platformName,
      setPlatformName,
      accountUsername,
      setAccountUsername,
      companyName,
      setCompanyName,
      contactDetail,
      setContactDetail,
      uploadedFiles,
      setUploadedFiles,
      noEvidenceChecked,
      setNoEvidenceChecked,
      additionalEvidenceNotes,
      setAdditionalEvidenceNotes,
      reviewConfirmed,
      setReviewConfirmed,
      otpVerified,
      setOtpVerified,
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
