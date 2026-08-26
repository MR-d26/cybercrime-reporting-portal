import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TRANSLATIONS, TranslationSchema } from '../i18n/translations';
import { CategoryId } from '../utils/complaintRouter';
import { analyzeComplaintWithGemini, GeminiAnalysisResult } from '../services/geminiService';

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

  // Gemini State & Analysis Method
  geminiAnalysis: GeminiAnalysisResult | null;
  isAnalyzingGemini: boolean;
  geminiError: string | null;
  runGeminiAnalysis: (textToAnalyze?: string) => Promise<void>;

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

  // Page 09 Persistent Complaint Number & Timestamp
  complaintNumber: string;
  setComplaintNumber: (num: string) => void;
  submissionTimestamp: string;
  setSubmissionTimestamp: (ts: string) => void;

  resetComplaintFlow: () => void;
  saveDraft: (additionalData?: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_SETTINGS = 'ncrp_prototype_settings';
const STORAGE_KEY_DRAFT = 'ncrp_prototype_draft_v11';

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

  // Gemini State
  const [geminiAnalysis, setGeminiAnalysis] = useState<GeminiAnalysisResult | null>(null);
  const [isAnalyzingGemini, setIsAnalyzingGemini] = useState<boolean>(false);
  const [geminiError, setGeminiError] = useState<string | null>(null);

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

  // Page 09 Submission State
  const [complaintNumber, setComplaintNumberState] = useState<string>('');
  const [submissionTimestamp, setSubmissionTimestampState] = useState<string>('');

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

        if (parsedDraft.geminiAnalysis) setGeminiAnalysis(parsedDraft.geminiAnalysis);

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

        if (parsedDraft.complaintNumber) setComplaintNumberState(parsedDraft.complaintNumber);
        if (parsedDraft.submissionTimestamp) setSubmissionTimestampState(parsedDraft.submissionTimestamp);

        if (parsedDraft.currentPage) setCurrentPage(parsedDraft.currentPage);
        if (parsedDraft.savedAt) setLastSavedTime(parsedDraft.savedAt);
      }
    } catch (e) {
      console.warn("Failed to parse settings/draft from localStorage:", e);
    }
  }, []);

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
        geminiAnalysis,
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
        complaintNumber,
        submissionTimestamp,
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
    if (complaintText || selectedCategory || extractedIncident || uploadedFiles.length > 0 || reviewConfirmed || otpVerified || complaintNumber) {
      saveDraft();
    }
  }, [
    complaintText, selectedCategory, extractedIncident, extractedAmount, extractedMethod, geminiAnalysis,
    incidentDate, incidentTime, dontKnowDate, detailAmount, dontKnowAmount,
    transactionId, dontHaveTxnId, bankService, dontKnowBank, platformName, accountUsername, companyName, contactDetail,
    uploadedFiles, noEvidenceChecked, additionalEvidenceNotes, reviewConfirmed, otpVerified, complaintNumber, submissionTimestamp
  ]);

  const runGeminiAnalysis = async (textToAnalyze?: string) => {
    const targetText = textToAnalyze || complaintText;
    if (!targetText || !targetText.trim()) return;

    setIsAnalyzingGemini(true);
    setGeminiError(null);

    try {
      console.log(`[AppContext Debug] Running Gemini extraction on text: "${targetText.substring(0, 60)}..."`);
      const result = await analyzeComplaintWithGemini(targetText);
      
      setGeminiAnalysis(result);
      setSelectedCategoryState(result.mappedCategoryId);

      // Pre-fill Page 04 Review Info
      setExtractedIncidentState(result.whatHappened || targetText);
      setExtractedAmountState(result.amount || '');
      setExtractedMethodState(result.method || '');

      // Pre-fill Page 05 Form Details (ONLY if extracted by Gemini and not empty)
      if (result.amount) setDetailAmount(result.amount);
      if (result.transactionId) setTransactionId(result.transactionId);
      if (result.bank || result.upiId) setBankService(result.bank || result.upiId || '');
      if (result.platform || result.website) setPlatformName(result.platform || result.website || '');
      if (result.suspectUsername || result.suspectProfileUrl) {
        setAccountUsername(result.suspectUsername || result.suspectProfileUrl || '');
      }
      if (result.phoneNumber || result.email) setContactDetail(result.phoneNumber || result.email || '');
      if (result.companyName) setCompanyName(result.companyName);
      if (result.date) setIncidentDate(result.date);
      if (result.time) setIncidentTime(result.time);

      saveDraft({
        geminiAnalysis: result,
        selectedCategory: result.mappedCategoryId,
        extractedIncident: result.whatHappened || targetText,
        extractedAmount: result.amount || '',
        extractedMethod: result.method || '',
        platformName: result.platform || result.website || platformName,
        accountUsername: result.suspectUsername || result.suspectProfileUrl || accountUsername,
        detailAmount: result.amount || detailAmount,
        transactionId: result.transactionId || transactionId
      });
    } catch (error: any) {
      console.warn("[AppContext Debug] Gemini API call failed or unavailable:", error);
      setGeminiError("Guidance is temporarily unavailable.");
      setGeminiAnalysis(null);
    } finally {
      setIsAnalyzingGemini(false);
    }
  };

  const resetComplaintFlow = () => {
    setComplaintTextState('');
    setVoiceTranscriptState('');
    setSelectedCategoryState(null);
    setExtractedIncidentState('');
    setExtractedAmountState('');
    setExtractedMethodState('');
    setGeminiAnalysis(null);
    setGeminiError(null);
    setIncidentDate('');
    setIncidentTime('');
    setDontKnowDate(false);
    setDetailAmount('');
    setDontKnowAmount(false);
    setTransactionId('');
    setDontHaveTxnId(false);
    setBankService('');
    setDontKnowBank(false);
    setPlatformName('');
    setAccountUsername('');
    setCompanyName('');
    setContactDetail('');
    setUploadedFiles([]);
    setNoEvidenceChecked(false);
    setAdditionalEvidenceNotes('');
    setReviewConfirmed(false);
    setOtpVerified(false);
    setComplaintNumberState('');
    setSubmissionTimestampState('');
    setCurrentPage(1);
    try {
      localStorage.removeItem(STORAGE_KEY_DRAFT);
    } catch (e) {
      console.warn("Failed to clear draft from localStorage:", e);
    }
  };

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  const setComplaintText = (text: string) => {
    setComplaintTextState(text);
    // Clear old/stale Gemini result & form pre-fills when user edits story on Page 02
    setGeminiAnalysis(null);
    setGeminiError(null);
    setSelectedCategoryState(null);
    setExtractedIncidentState('');
    setExtractedAmountState('');
    setExtractedMethodState('');
    setDetailAmount('');
    setTransactionId('');
    setBankService('');
    setPlatformName('');
    setAccountUsername('');
    setContactDetail('');
    setCompanyName('');
    setIncidentDate('');
    setIncidentTime('');
  };

  const setVoiceTranscript = (transcript: string) => {
    setVoiceTranscriptState(transcript);
    // Clear old/stale Gemini result & form pre-fills when new voice transcript arrives
    setGeminiAnalysis(null);
    setGeminiError(null);
    setSelectedCategoryState(null);
    setExtractedIncidentState('');
    setExtractedAmountState('');
    setExtractedMethodState('');
    setDetailAmount('');
    setTransactionId('');
    setBankService('');
    setPlatformName('');
    setAccountUsername('');
    setContactDetail('');
    setCompanyName('');
    setIncidentDate('');
    setIncidentTime('');
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

  const setComplaintNumber = (num: string) => {
    setComplaintNumberState(num);
  };

  const setSubmissionTimestamp = (ts: string) => {
    setSubmissionTimestampState(ts);
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
      geminiAnalysis,
      isAnalyzingGemini,
      geminiError,
      runGeminiAnalysis,
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
      complaintNumber,
      setComplaintNumber,
      submissionTimestamp,
      setSubmissionTimestamp,
      resetComplaintFlow,
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
