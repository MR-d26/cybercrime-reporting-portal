export type LanguageCode = 'en' | 'hi' | 'mr' | 'ta' | 'bn' | 'te';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' }
];

export interface TranslationSchema {
  emergencyBanner: string;
  helplineShort: string;
  helpline24x7: string;
  govTitle: string;
  govMinistry: string;
  i4cTitle: string;
  portalName: string;
  uxPrototype: string;
  langSelect: string;
  accessibility: string;
  quickMenu: string;

  // Page 01 Welcome
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeExplanation: string;
  startReportingBtn: string;
  trustBadge: string;
  reassurance1Title: string;
  reassurance1Desc: string;
  reassurance2Title: string;
  reassurance2Desc: string;
  reassurance3Title: string;
  reassurance3Desc: string;
  reassurance4Title: string;
  reassurance4Desc: string;

  // Page 02 Tell Us What Happened
  step1Label: string;
  step2Label: string;
  step3Label: string;
  step4Label: string;
  step5Label: string;
  step6Label: string;
  savedJustNow: string;
  tellUsTitle: string;
  tellUsSubtitle: string;
  textareaPlaceholder: string;
  textSecureNotice: string;
  orDivider: string;
  speakTitle: string;
  speakSubtitle: string;
  startSpeaking: string;
  stopRecording: string;
  recordingActive: string;
  privacyNotice: string;
  transcriptTitle: string;
  editBtn: string;
  recordAgainBtn: string;
  useThisBtn: string;
  notSureTitle: string;
  notSureDesc: string;
  viewExamples: string;
  hideExamples: string;
  scenario1: string;
  scenario2: string;
  scenario3: string;
  scenario4: string;
  continueBtn: string;

  // Page 03 Find The Right Path
  findPathTitle: string;
  findPathSubtitle: string;
  suggestedBadge: string;
  basedOnStory: string;
  guidanceNotice: string;
  yourStoryTitle: string;
  editStoryBtn: string;
  continueWithPathBtn: string;
  chooseDifferentPathBtn: string;
  hideDifferentPathBtn: string;
  selectCategoryPrompt: string;

  // Category Titles & Descriptions
  catFinancialTitle: string;
  catFinancialDesc: string;
  catAccountTitle: string;
  catAccountDesc: string;
  catHarassmentTitle: string;
  catHarassmentDesc: string;
  catJobTitle: string;
  catJobDesc: string;
  catOtherTitle: string;
  catOtherDesc: string;

  // Page 04 Review Your Information
  reviewTitle: string;
  reviewSubtitle: string;
  fieldIncident: string;
  fieldAmount: string;
  fieldMethod: string;
  fieldPath: string;
  saveFieldBtn: string;
  cancelFieldBtn: string;
  confirmQuestion: string;
  confirmSubtitle: string;
  backToPathBtn: string;
  yesContinueBtn: string;

  // Page 05 Add More Details
  detailsTitle: string;
  detailsSubtitle: string;
  q1Title: string;
  q1Sub: string;
  dateLabel: string;
  timeLabel: string;
  dontKnowOption: string;
  q2Title: string;
  q2Sub: string;
  amountLabel: string;
  q3Title: string;
  q3Sub: string;
  txnLabel: string;
  dontHaveOption: string;
  bankLabel: string;
  bankSub: string;
  platformLabel: string;
  usernameLabel: string;
  companyLabel: string;
  contactLabel: string;
  backBtn: string;
  nextEvidenceBtn: string;

  // Page 06 Add Evidence
  evidenceTitle: string;
  evidenceSubtitle: string;
  whatCanUploadTitle: string;
  evidenceCheck1: string;
  evidenceCheck2: string;
  evidenceCheck3: string;
  evidenceCheck4: string;
  uploadAreaTitle: string;
  uploadAreaSub: string;
  uploadBtn: string;
  removeFileBtn: string;
  invalidFileError: string;
  noEvidenceOption: string;
  noEvidenceNotice: string;
  additionalNotesLabel: string;
  additionalNotesPlaceholder: string;
  continueToSubmitBtn: string;

  // Page 07 Review & Submit
  reviewSubmitTitle: string;
  reviewSubmitSubtitle: string;
  notSubmittedBadge: string;
  sec1Title: string;
  sec2Title: string;
  sec2Sub: string;
  sec2ChangeBtn: string;
  sec3Title: string;
  sec3EditBtn: string;
  sec4Title: string;
  sec4NoEvidence: string;
  sec4NoEvidenceChoice: string;
  sec4EditBtn: string;
  readyTitle: string;
  readySub: string;
  confirmCheckboxLabel: string;
  continueToOtpBtn: string;

  // Page 08 OTP Verification
  otpTitle: string;
  otpSubtitle: string;
  maskedNumberNotice: string;
  demoModeBadge: string;
  otpLabel: string;
  resendBtn: string;
  resendCooldownText: string;
  otpErrorText: string;
  otpVerifiedSuccess: string;
  securityNoticeTitle: string;
  securityNoticeSub: string;
  backToReviewBtn: string;
  continueToSubmissionBtn: string;

  // Page 09 Submission Success
  successTitle: string;
  successSubtitle: string;
  complaintNumberLabel: string;
  copyBtn: string;
  copiedToast: string;
  submittedAtLabel: string;
  downloadSummaryBtn: string;
  whatNextTitle: string;
  timelineStep1: string;
  timelineStep2: string;
  timelineStep3: string;
  timelineStep4: string;
  nextStepsNotice: string;
  trackComplaintBtn: string;
  returnHomeBtn: string;

  // Page 10 Track Complaint
  trackTitle: string;
  trackSubtitle: string;
  lookupLabel: string;
  lookupBtn: string;
  lookupHelpText: string;
  notFoundError: string;
  currentStatusLabel: string;
  statusUnderReview: string;
  statusExplanation: string;
  timelineHeader: string;
  stage1Title: string;
  stage1Sub: string;
  stage2Title: string;
  stage2Sub: string;
  stage3Title: string;
  stage3Sub: string;
  stage4Title: string;
  stage4Sub: string;
  compactSummaryTitle: string;
  backToConfirmBtn: string;
  startNewBtn: string;

  // Footer & Modals
  footerNotice: string;
  footerGovInfo: string;
  accessibilityTitle: string;
  fontSizeLabel: string;
  fontScaleDefault: string;
  lineHeightLabel: string;
  letterSpacingLabel: string;
  contrastModeLabel: string;
  contrastNormal: string;
  contrastHighLight: string;
  contrastHighDark: string;
  focusHighlightLabel: string;
  resetBtn: string;
  closeBtn: string;
  menuTitle: string;
  menuHome: string;
  menuAbout: string;
  menuHelplines: string;
  menuFAQ: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  en: {
    emergencyBanner: "Emergency Helpline for Financial Cyber Fraud: Call 1930 immediately to freeze stolen funds.",
    helplineShort: "1930",
    helpline24x7: "24x7 Helpline",
    govTitle: "GOVERNMENT OF INDIA",
    govMinistry: "Ministry of Home Affairs",
    i4cTitle: "Indian Cybercrime Coordination Centre (I4C)",
    portalName: "National Cyber Crime Reporting Portal",
    uxPrototype: "UX PROTOTYPE",
    langSelect: "Language",
    accessibility: "Accessibility",
    quickMenu: "Menu",

    welcomeTitle: "Welcome to the National Cyber Crime Reporting Portal",
    welcomeSubtitle: "We're here to help you report cybercrime.",
    welcomeExplanation: "You don't need to know which category your complaint belongs to. Tell us what happened and we'll guide you through the process.",
    startReportingBtn: "Start reporting →",
    trustBadge: "Secure • Confidential • Trusted by Government of India",
    reassurance1Title: "Your information is protected",
    reassurance1Desc: "Your information stays secure and confidential.",
    reassurance2Title: "Available in Indian languages",
    reassurance2Desc: "Report in the language you're most comfortable with.",
    reassurance3Title: "Your progress is saved automatically",
    reassurance3Desc: "Continue your report without losing your progress.",
    reassurance4Title: "Need help?",
    reassurance4Desc: "For financial cyber fraud, call 1930 immediately.",

    step1Label: "Tell us what happened",
    step2Label: "Find the right path",
    step3Label: "Review information",
    step4Label: "Add details",
    step5Label: "Add evidence",
    step6Label: "Review & submit",
    savedJustNow: "Saved just now",
    tellUsTitle: "Tell us what happened",
    tellUsSubtitle: "Describe the incident in your own words. You don't need to know the category.",
    textareaPlaceholder: "For example: Someone sent me a fake electricity bill SMS and ₹10,000 was deducted after I clicked the payment link.",
    textSecureNotice: "Your information is secure and will only be used for investigation.",
    orDivider: "OR",
    speakTitle: "Speak instead",
    speakSubtitle: "You can describe the incident using voice. We'll convert it to text.",
    startSpeaking: "Start speaking",
    stopRecording: "Stop recording",
    recordingActive: "Recording...",
    privacyNotice: "We respect your privacy. Recordings are not stored.",
    transcriptTitle: "Here's what we heard",
    editBtn: "Edit",
    recordAgainBtn: "Record again",
    useThisBtn: "Use this text",
    notSureTitle: "Not sure what to write?",
    notSureDesc: "Choose an example below or write in your own words.",
    viewExamples: "View examples",
    hideExamples: "Hide examples",
    scenario1: "Money was deducted from my bank account after clicking a link.",
    scenario2: "Someone sent me a suspicious payment request on UPI / QR code.",
    scenario3: "My social media account was hacked or someone made a fake profile.",
    scenario4: "I received a fake job offer letter asking for registration fees.",
    continueBtn: "Continue →",

    findPathTitle: "We can help you find the right reporting path",
    findPathSubtitle: "Based on what you told us, we've identified a possible reporting path. Please review it before continuing.",
    suggestedBadge: "SUGGESTED REPORTING PATH",
    basedOnStory: "Based on what you told us, this appears to relate to:",
    guidanceNotice: "This is guidance only. You remain in control.",
    yourStoryTitle: "Your story",
    editStoryBtn: "Edit story",
    continueWithPathBtn: "Continue with this path →",
    chooseDifferentPathBtn: "Choose a different path",
    hideDifferentPathBtn: "Hide path choices",
    selectCategoryPrompt: "Select a reporting path that fits your complaint best:",

    catFinancialTitle: "Financial Fraud",
    catFinancialDesc: "This path is for cases where money was lost or someone attempted to obtain money through a digital payment, bank account, UPI, payment link, or similar method.",
    catAccountTitle: "Online / Account Fraud",
    catAccountDesc: "This path is for cases where a social media, email, or digital account was compromised or someone is impersonating you online.",
    catHarassmentTitle: "Cyber Harassment",
    catHarassmentDesc: "This path is for cases involving online threats, blackmail, harassment, abusive messages, or unauthorized sharing of private media.",
    catJobTitle: "Online Job / Employment Fraud",
    catJobDesc: "This path is for cases where fake job offers, recruitment scams, or work-from-home tasks requested upfront registration fees.",
    catOtherTitle: "Other Cybercrime",
    catOtherDesc: "We couldn't confidently identify a specific reporting path. You can review your story or choose the closest option below.",

    reviewTitle: "Here's what we understood.",
    reviewSubtitle: "We extracted the key details from your story. Please review them carefully before continuing.",
    fieldIncident: "Incident / Summary",
    fieldAmount: "Amount Involved",
    fieldMethod: "Method / Channel",
    fieldPath: "Reporting Path",
    saveFieldBtn: "Save",
    cancelFieldBtn: "Cancel",
    confirmQuestion: "Is this information correct?",
    confirmSubtitle: "You can edit any detail now or continue to the next step.",
    backToPathBtn: "Back to reporting path",
    yesContinueBtn: "Yes, continue →",

    detailsTitle: "Just a few more details.",
    detailsSubtitle: "Add any information you have. If you don't know something, you can tell us.",
    q1Title: "When did this incident happen?",
    q1Sub: "An approximate date or time is okay if you're not sure.",
    dateLabel: "Incident Date",
    timeLabel: "Approximate Time (Optional)",
    dontKnowOption: "I don't know",
    q2Title: "How much money was involved?",
    q2Sub: "Enter the amount you lost or were asked to pay.",
    amountLabel: "Amount Involved (₹)",
    q3Title: "Do you have a transaction ID or reference number?",
    q3Sub: "You may find this on your bank statement, SMS, or payment receipt.",
    txnLabel: "Transaction / UTR / Reference ID",
    dontHaveOption: "I don't have it",
    bankLabel: "Bank or Payment Service",
    bankSub: "e.g. SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "Platform or Website Involved",
    usernameLabel: "Suspect Profile / Username / Link",
    companyLabel: "Company or Person Name Involved",
    contactLabel: "Suspect Contact Number / Link",
    backBtn: "Back",
    nextEvidenceBtn: "Next step: Add evidence →",

    evidenceTitle: "Add supporting evidence",
    evidenceSubtitle: "Upload anything that can help explain what happened. You don't need to have everything.",
    whatCanUploadTitle: "Helpful evidence suggestions for your complaint:",
    evidenceCheck1: "Transaction or payment screenshots",
    evidenceCheck2: "Suspicious SMS or email received",
    evidenceCheck3: "Bank statement or payment receipt",
    evidenceCheck4: "Suspect profile, phone number, or link",
    uploadAreaTitle: "Upload evidence files",
    uploadAreaSub: "Click to select or drag & drop files here (PNG, JPG, PDF up to 10MB)",
    uploadBtn: "Select File",
    removeFileBtn: "Remove",
    invalidFileError: "This file type isn't supported. Please upload a PNG, JPG, or PDF.",
    noEvidenceOption: "I don't have evidence to upload right now",
    noEvidenceNotice: "You can continue without uploading anything. You remain in control.",
    additionalNotesLabel: "Anything else you'd like us to know? (Optional)",
    additionalNotesPlaceholder: "Add any additional information that may help explain the evidence you've uploaded.",
    continueToSubmitBtn: "Continue →",

    reviewSubmitTitle: "Review your complaint",
    reviewSubmitSubtitle: "Please check your information carefully before continuing.",
    notSubmittedBadge: "Your complaint has not been submitted yet.",
    sec1Title: "1. Your story",
    sec2Title: "2. Reporting path",
    sec2Sub: "This is the reporting path you selected.",
    sec2ChangeBtn: "Change",
    sec3Title: "3. Incident details",
    sec3EditBtn: "Edit details",
    sec4Title: "4. Evidence",
    sec4NoEvidence: "No evidence attached",
    sec4NoEvidenceChoice: "I don't have evidence right now.",
    sec4EditBtn: "Edit evidence",
    readyTitle: "Ready to continue?",
    readySub: "Your complaint will move to OTP verification next. It has not been submitted yet.",
    confirmCheckboxLabel: "I have reviewed the information above and confirm that it is correct to the best of my knowledge.",
    continueToOtpBtn: "Continue to OTP verification →",

    otpTitle: "Verify your mobile number",
    otpSubtitle: "We'll send a one-time password to verify your identity before your complaint is submitted.",
    maskedNumberNotice: "OTP sent to +91 ••••••4821",
    demoModeBadge: "Demo mode: use 123456",
    otpLabel: "Enter 6-digit OTP",
    resendBtn: "Resend OTP",
    resendCooldownText: "Resend OTP in {sec}s",
    otpErrorText: "That OTP doesn't match. Please check the code and try again.",
    otpVerifiedSuccess: "Mobile number verified",
    securityNoticeTitle: "Your information is protected",
    securityNoticeSub: "Your complaint details are saved securely during this prototype experience.",
    backToReviewBtn: "Back to review",
    continueToSubmissionBtn: "Continue to submission →",

    successTitle: "Your complaint has been submitted",
    successSubtitle: "Your complaint has been successfully received.",
    complaintNumberLabel: "Complaint Number",
    copyBtn: "Copy",
    copiedToast: "Complaint number copied.",
    submittedAtLabel: "Submitted",
    downloadSummaryBtn: "Download summary",
    whatNextTitle: "What happens next?",
    timelineStep1: "Complaint submitted",
    timelineStep2: "Under review",
    timelineStep3: "Further action / information if required",
    timelineStep4: "Status updates",
    nextStepsNotice: "This is a prototype demonstration. No real police officer or government department has been assigned yet.",
    trackComplaintBtn: "Track your complaint →",
    returnHomeBtn: "Return to home",

    trackTitle: "Track your complaint",
    trackSubtitle: "Check the current status of your cybercrime complaint and see what happens next.",
    lookupLabel: "Complaint number",
    lookupBtn: "Check status",
    lookupHelpText: "You can find your complaint number on your confirmation receipt.",
    notFoundError: "We couldn't find a complaint with that number.",
    currentStatusLabel: "CURRENT STATUS",
    statusUnderReview: "Under review",
    statusExplanation: "Your complaint has been received and is currently shown as under review in this prototype.",
    timelineHeader: "Complaint Progress Timeline",
    stage1Title: "Complaint submitted",
    stage1Sub: "Your complaint was successfully recorded.",
    stage2Title: "Complaint received",
    stage2Sub: "Your complaint has been received.",
    stage3Title: "Under review",
    stage3Sub: "Current stage (Prototype demo state)",
    stage4Title: "Further action / update",
    stage4Sub: "You may receive an update if additional information is needed.",
    compactSummaryTitle: "Complaint Summary",
    backToConfirmBtn: "Back to confirmation",
    startNewBtn: "Start a new complaint",

    footerNotice: "This website is a UX prototype for research and evaluation purposes only. Not for official filing.",
    footerGovInfo: "National Cyber Crime Reporting Portal | Ministry of Home Affairs, Government of India",
    accessibilityTitle: "Accessibility Controls",
    fontSizeLabel: "Font Size",
    fontScaleDefault: "Standard",
    lineHeightLabel: "Line Spacing",
    letterSpacingLabel: "Letter Spacing",
    contrastModeLabel: "Contrast Mode",
    contrastNormal: "Standard Contrast",
    contrastHighLight: "High Contrast (Light)",
    contrastHighDark: "High Contrast (Dark)",
    focusHighlightLabel: "Keyboard Focus Ring",
    resetBtn: "Reset to Defaults",
    closeBtn: "Close",
    menuTitle: "Portal Quick Navigation",
    menuHome: "Home / Welcome",
    menuAbout: "About I4C & Portal",
    menuHelplines: "Emergency Helplines (1930)",
    menuFAQ: "Frequently Asked Questions"
  },
  hi: {
    emergencyBanner: "वित्तीय साइबर धोखाधड़ी के लिए आपातकालीन हेल्पलाइन: चोरी की गई राशि को तुरंत फ्रीज करने के लिए 1930 पर कॉल करें।",
    helplineShort: "1930",
    helpline24x7: "24x7 हेल्पलाइन",
    govTitle: "भारत सरकार",
    govMinistry: "गृह मंत्रालय",
    i4cTitle: "भारतीय साइबर अपराध समन्वय केंद्र (I4C)",
    portalName: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल",
    uxPrototype: "यूएक्स प्रोटोटाइप",
    langSelect: "भाषा",
    accessibility: "सुगम्यता (Accessibility)",
    quickMenu: "मेनू",

    welcomeTitle: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल में आपका स्वागत है",
    welcomeSubtitle: "हम साइबर अपराध की रिपोर्ट करने में आपकी सहायता के लिए यहाँ हैं।",
    welcomeExplanation: "आपको यह जानने की आवश्यकता नहीं है कि आपकी शिकायत किस श्रेणी की है। हमें बताएं कि क्या हुआ और हम पूरी प्रक्रिया में आपका मार्गदर्शन करेंगे।",
    startReportingBtn: "रिपोर्ट दर्ज करना शुरू करें →",
    trustBadge: "सुरक्षित • गोपनीय • भारत सरकार द्वारा विश्वसनीय",
    reassurance1Title: "आपकी जानकारी सुरक्षित है",
    reassurance1Desc: "आपकी जानकारी पूरी तरह से सुरक्षित और गोपनीय रहती है।",
    reassurance2Title: "भारतीय भाषाओं में उपलब्ध",
    reassurance2Desc: "अपनी सुविधानुसार अपनी भाषा में रिपोर्ट दर्ज करें।",
    reassurance3Title: "आपकी प्रगति स्वतः सहेजी जाती है",
    reassurance3Desc: "बिना कोई जानकारी खोए अपनी रिपोर्ट जारी रखें।",
    reassurance4Title: "सहायता चाहिए?",
    reassurance4Desc: "वित्तीय साइबर धोखाधड़ी के लिए तुरंत 1930 पर कॉल करें।",

    step1Label: "हमें बताएं कि क्या हुआ",
    step2Label: "सही मार्ग चुनें",
    step3Label: "जानकारी की समीक्षा करें",
    step4Label: "विवरण जोड़ें",
    step5Label: "साक्ष्य जोड़ें",
    step6Label: "समीक्षा और सबमिट करें",
    savedJustNow: "अभी सहेजा गया",
    tellUsTitle: "हमें बताएं कि क्या हुआ",
    tellUsSubtitle: "अपने शब्दों में घटना का वर्णन करें। आपको श्रेणी जानने की आवश्यकता नहीं है।",
    textareaPlaceholder: "उदाहरण के लिए: किसी ने मुझे नकली बिजली बिल का एसएमएस भेजा और भुगतान लिंक पर क्लिक करने के बाद ₹10,000 कट गए।",
    textSecureNotice: "आपकी जानकारी सुरक्षित है और इसका उपयोग केवल जांच के लिए किया जाएगा।",
    orDivider: "अथवा",
    speakTitle: "बोलकर दर्ज करें",
    speakSubtitle: "आप अपनी आवाज में घटना का विवरण दे सकते हैं। हम इसे टेक्स्ट में बदल देंगे।",
    startSpeaking: "बोलना शुरू करें",
    stopRecording: "रिकॉर्डिंग रोकें",
    recordingActive: "रिकॉर्डिंग जारी है...",
    privacyNotice: "हम आपकी गोपनीयता का सम्मान करते हैं। वॉइस रिकॉर्डिंग सहेजी नहीं जाती हैं।",
    transcriptTitle: "यह हमें सुनाई दिया",
    editBtn: "संपादित करें",
    recordAgainBtn: "पुनः रिकॉर्ड करें",
    useThisBtn: "इस टेक्स्ट का उपयोग करें",
    notSureTitle: "समझ नहीं आ रहा क्या लिखें?",
    notSureDesc: "नीचे दिए गए उदाहरणों में से चुनें या अपने शब्दों में लिखें।",
    viewExamples: "उदाहरण देखें",
    hideExamples: "उदाहरण छिपाएं",
    scenario1: "एक लिंक पर क्लिक करने के बाद मेरे बैंक खाते से पैसे कट गए।",
    scenario2: "किसी ने मुझे UPI / QR कोड पर संदिग्ध भुगतान अनुरोध भेजा।",
    scenario3: "मेरा सोशल मीडिया अकाउंट हैक हो गया या किसी ने फर्जी प्रोफाइल बना ली।",
    scenario4: "मुझे एक फर्जी नौकरी का ऑफर लेटर मिला जिसमें पंजीकरण शुल्क मांगा गया।",
    continueBtn: "आगे बढ़ें →",

    findPathTitle: "हम सही रिपोर्टिंग मार्ग खोजने में आपकी सहायता कर सकते हैं",
    findPathSubtitle: "आपके विवरण के आधार पर, हमने एक संभावित रिपोर्टिंग मार्ग की पहचान की है। कृपया आगे बढ़ने से पहले इसकी समीक्षा करें।",
    suggestedBadge: "सुझाया गया रिपोर्टिंग मार्ग",
    basedOnStory: "आपके विवरण के आधार पर, यह संबंधित प्रतीत होता है:",
    guidanceNotice: "यह केवल मार्गदर्शन है। आप नियंत्रण में रहते हैं।",
    yourStoryTitle: "आपका विवरण",
    editStoryBtn: "विवरण संपादित करें",
    continueWithPathBtn: "इस मार्ग के साथ आगे बढ़ें →",
    chooseDifferentPathBtn: "दूसरा मार्ग चुनें",
    hideDifferentPathBtn: "विकल्प छिपाएं",
    selectCategoryPrompt: "एक रिपोर्टिंग मार्ग चुनें जो आपकी शिकायत के सबसे अनुकूल हो:",

    catFinancialTitle: "वित्तीय धोखाधड़ी (Financial Fraud)",
    catFinancialDesc: "यह मार्ग उन मामलों के लिए है जहां डिजिटल भुगतान, बैंक खाते, UPI या भुगतान लिंक के माध्यम से पैसे का नुकसान हुआ है।",
    catAccountTitle: "ऑनलाइन / अकाउंट धोखाधड़ी",
    catAccountDesc: "यह मार्ग उन मामलों के लिए है जहां सोशल मीडिया या डिजिटल अकाउंट हैक हो गया है या कोई आपका नाम इस्तेमाल कर रहा है।",
    catHarassmentTitle: "साइबर उत्पीड़न (Cyber Harassment)",
    catHarassmentDesc: "यह मार्ग ऑनलाइन धमकी, ब्लैकमेल, उत्पीड़न या अनुचित संदेशों से संबंधित मामलों के लिए है।",
    catJobTitle: "ऑनलाइन नौकरी धोखाधड़ी",
    catJobDesc: "यह मार्ग फर्जी नौकरी के प्रस्तावों या वर्क-फ्रॉम-होम के नाम पर ली गई पंजीकरण फीस से संबंधित है।",
    catOtherTitle: "अन्य साइबर अपराध",
    catOtherDesc: "हम निश्चित रूप से किसी विशिष्ट श्रेणी की पहचान नहीं कर सके। आप अपना विवरण देख सकते हैं या नीचे उपयुक्त विकल्प चुन सकते हैं।",

    reviewTitle: "यह हमें समझ आया।",
    reviewSubtitle: "हमने आपके विवरण से मुख्य जानकारी निकाली है। कृपया आगे बढ़ने से पहले ध्यानपूर्वक समीक्षा करें।",
    fieldIncident: "घटना / सारांश",
    fieldAmount: "शामिल राशि",
    fieldMethod: "तरीका / माध्यम",
    fieldPath: "रिपोर्टिंग मार्ग",
    saveFieldBtn: "सहेजें",
    cancelFieldBtn: "रद्द करें",
    confirmQuestion: "क्या यह जानकारी सही है?",
    confirmSubtitle: "आप अभी किसी भी विवरण को संपादित कर सकते हैं या अगले चरण पर जा सकते हैं।",
    backToPathBtn: "रिपोर्टिंग मार्ग पर वापस जाएं",
    yesContinueBtn: "हाँ, आगे बढ़ें →",

    detailsTitle: "बस कुछ और विवरण।",
    detailsSubtitle: "आपके पास जो भी जानकारी है उसे जोड़ें। यदि आप कुछ नहीं जानते हैं, तो हमें बता सकते हैं।",
    q1Title: "यह घटना कब हुई थी?",
    q1Sub: "यदि आप निश्चित नहीं हैं तो एक अनुमानित तारीख या समय चलेगा।",
    dateLabel: "घटना की तारीख",
    timeLabel: "अनुमानित समय (वैकल्पिक)",
    dontKnowOption: "मुझे नहीं पता",
    q2Title: "कितने पैसे शामिल थे?",
    q2Sub: "आपके द्वारा खोई गई या मांगी गई राशि दर्ज करें।",
    amountLabel: "शामिल राशि (₹)",
    q3Title: "क्या आपके पास लेन-देन आईडी (Transaction ID) या संदर्भ संख्या है?",
    q3Sub: "आप इसे अपने बैंक विवरण, एसएमएस या भुगतान रसीद पर पा सकते हैं।",
    txnLabel: "लेन-देन / UTR / संदर्भ आईडी",
    dontHaveOption: "मेरे पास यह नहीं है",
    bankLabel: "बैंक या भुगतान सेवा",
    bankSub: "जैसे SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "संबंधित प्लेटफॉर्म या वेबसाइट",
    usernameLabel: "संदिग्ध प्रोफाइल / यूजरनेम / लिंक",
    companyLabel: "संबंधित कंपनी या व्यक्ति का नाम",
    contactLabel: "संदिग्ध का संपर्क नंबर / लिंक",
    backBtn: "पीछे जाएं",
    nextEvidenceBtn: "अगला चरण: साक्ष्य जोड़ें →",

    evidenceTitle: "सहायक साक्ष्य जोड़ें",
    evidenceSubtitle: "ऐसी कोई भी सामग्री अपलोड करें जो घटना को समझाने में मदद कर सके। आपके पास सब कुछ होना आवश्यक नहीं है।",
    whatCanUploadTitle: "आपकी शिकायत के लिए उपयोगी साक्ष्य सुझाव:",
    evidenceCheck1: "लेन-देन या भुगतान का स्क्रीनशॉट",
    evidenceCheck2: "प्राप्त हुआ संदिग्ध एसएमएस या ईमेल",
    evidenceCheck3: "बैंक स्टेटमेंट या भुगतान रसीद",
    evidenceCheck4: "संदिग्ध की प्रोफाइल, फोन नंबर या लिंक",
    uploadAreaTitle: "साक्ष्य फ़ाइलें अपलोड करें",
    uploadAreaSub: "फ़ाइलें चुनने के लिए क्लिक करें या यहाँ ड्रैग करें (PNG, JPG, PDF अधिकतम 10MB)",
    uploadBtn: "फ़ाइल चुनें",
    removeFileBtn: "हटाएं",
    invalidFileError: "यह फ़ाइल प्रकार समर्थित नहीं है। कृपया PNG, JPG, या PDF अपलोड करें।",
    noEvidenceOption: "मेरे पास अभी अपलोड करने के लिए साक्ष्य नहीं हैं",
    noEvidenceNotice: "आप बिना कुछ अपलोड किए भी आगे बढ़ सकते हैं। आप नियंत्रण में रहते हैं।",
    additionalNotesLabel: "क्या आप हमें कुछ और बताना चाहते हैं? (वैकल्पिक)",
    additionalNotesPlaceholder: "अपलोड किए गए साक्ष्यों को समझाने में मदद करने वाली कोई अतिरिक्त जानकारी जोड़ें।",
    continueToSubmitBtn: "आगे बढ़ें →",

    reviewSubmitTitle: "अपनी शिकायत की समीक्षा करें",
    reviewSubmitSubtitle: "कृपया आगे बढ़ने से पहले अपनी जानकारी की ध्यानपूर्वक जांच करें।",
    notSubmittedBadge: "आपकी शिकायत अभी सबमिट नहीं की गई है।",
    sec1Title: "1. आपकी कहानी / विवरण",
    sec2Title: "2. रिपोर्टिंग मार्ग",
    sec2Sub: "यह वह रिपोर्टिंग मार्ग है जिसे आपने चुना है।",
    sec2ChangeBtn: "बदलें",
    sec3Title: "3. घटना के विवरण",
    sec3EditBtn: "विवरण संपादित करें",
    sec4Title: "4. साक्ष्य",
    sec4NoEvidence: "कोई साक्ष्य संलग्न नहीं है",
    sec4NoEvidenceChoice: "मेरे पास अभी साक्ष्य नहीं हैं।",
    sec4EditBtn: "साक्ष्य संपादित करें",
    readyTitle: "आगे बढ़ने के लिए तैयार हैं?",
    readySub: "आपकी शिकायत आगे ओटीपी सत्यापन पर जाएगी। यह अभी सबमिट नहीं हुई है।",
    confirmCheckboxLabel: "मैंने ऊपर दी गई जानकारी की समीक्षा कर ली है और पुष्टि करता हूँ कि यह मेरी जानकारी के अनुसार सही है।",
    continueToOtpBtn: "ओटीपी सत्यापन पर आगे बढ़ें →",

    otpTitle: "अपना मोबाइल नंबर सत्यापित करें",
    otpSubtitle: "आपकी शिकायत सबमिट करने से पहले आपकी पहचान सत्यापित करने के लिए हम एक ओटीपी भेजेंगे।",
    maskedNumberNotice: "ओटीपी +91 ••••••4821 पर भेजा गया",
    demoModeBadge: "डेमो मोड: 123456 का उपयोग करें",
    otpLabel: "6 अंकों का ओटीपी दर्ज करें",
    resendBtn: "ओटीपी पुनः भेजें",
    resendCooldownText: "{sec}s में पुनः भेजें",
    otpErrorText: "वह ओटीपी मेल नहीं खाता। कृपया कोड जांचें और पुनः प्रयास करें।",
    otpVerifiedSuccess: "मोबाइल नंबर सत्यापित हो गया",
    securityNoticeTitle: "आपकी जानकारी सुरक्षित है",
    securityNoticeSub: "इस प्रोटोटाइप अनुभव के दौरान आपकी शिकायत के विवरण सुरक्षित रूप से सहेजे गए हैं।",
    backToReviewBtn: "समीक्षा पर वापस जाएं",
    continueToSubmissionBtn: "सबमिशन पर आगे बढ़ें →",

    successTitle: "आपकी शिकायत दर्ज कर ली गई है",
    successSubtitle: "आपकी शिकायत सफलतापूर्वक प्राप्त हो गई है।",
    complaintNumberLabel: "शिकायत संख्या",
    copyBtn: "कॉपी करें",
    copiedToast: "शिकायत संख्या कॉपी हो गई।",
    submittedAtLabel: "दर्ज की तारीख",
    downloadSummaryBtn: "सारांश डाउनलोड करें",
    whatNextTitle: "आगे क्या होगा?",
    timelineStep1: "शिकायत दर्ज की गई",
    timelineStep2: "समीक्षाधीन",
    timelineStep3: "आवश्यकता पड़ने पर आगे की कार्रवाई",
    timelineStep4: "स्थिति अपडेट",
    nextStepsNotice: "यह एक प्रोटोटाइप प्रदर्शन है। अभी कोई वास्तविक पुलिस अधिकारी या सरकारी विभाग नहीं सौंपा गया है।",
    trackComplaintBtn: "अपनी शिकायत ट्रैक करें →",
    returnHomeBtn: "मुख्य पृष्ठ पर लौटें",

    trackTitle: "अपनी शिकायत ट्रैक करें",
    trackSubtitle: "अपनी साइबर अपराध शिकायत की वर्तमान स्थिति जांचें और देखें कि आगे क्या होता है।",
    lookupLabel: "शिकायत संख्या",
    lookupBtn: "स्थिति जांचें",
    lookupHelpText: "आप अपनी पुष्टि रसीद पर अपनी शिकायत संख्या पा सकते हैं।",
    notFoundError: "हमें उस संख्या वाली कोई शिकायत नहीं मिली।",
    currentStatusLabel: "वर्तमान स्थिति",
    statusUnderReview: "समीक्षाधीन",
    statusExplanation: "आपकी शिकायत प्राप्त हो गई है और वर्तमान में इस प्रोटोटाइप में समीक्षाधीन दिखाई गई है।",
    timelineHeader: "शिकायत प्रगति समयरेखा",
    stage1Title: "शिकायत दर्ज की गई",
    stage1Sub: "आपकी शिकायत सफलतापूर्वक दर्ज की गई थी।",
    stage2Title: "शिकायत प्राप्त हुई",
    stage2Sub: "आपकी शिकायत प्राप्त हो गई है।",
    stage3Title: "समीक्षाधीन",
    stage3Sub: "वर्तमान चरण (प्रोटोटाइप डेमो स्थिति)",
    stage4Title: "आगे की कार्रवाई / अपडेट",
    stage4Sub: "अतिरिक्त जानकारी की आवश्यकता होने पर आपको एक अपडेट मिल सकता है।",
    compactSummaryTitle: "शिकायत सारांश",
    backToConfirmBtn: "पुष्टि पर वापस जाएं",
    startNewBtn: "एक नई शिकायत शुरू करें",

    footerNotice: "यह वेबसाइट केवल अनुसंधान और मूल्यांकन उद्देश्यों के लिए एक यूक्स प्रोटोटाइप है। यह आधिकारिक रिपोर्टिंग के लिए नहीं है।",
    footerGovInfo: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल | गृह मंत्रालय, भारत सरकार",
    accessibilityTitle: "सुगम्यता नियंत्रण (Accessibility)",
    fontSizeLabel: "फ़ॉन्ट का आकार",
    fontScaleDefault: "मानक",
    lineHeightLabel: "लाइन स्पेसिंग",
    letterSpacingLabel: "अक्षर रिक्ति",
    contrastModeLabel: "कंट्रास्ट मोड",
    contrastNormal: "मानक कंट्रास्ट",
    contrastHighLight: "उच्च कंट्रास्ट (लाइट)",
    contrastHighDark: "उच्च कंट्रास्ट (डार्क)",
    focusHighlightLabel: "कीबोर्ड फ़ोकस रिंग",
    resetBtn: "मूल स्थिति में लाएं",
    closeBtn: "बंद करें",
    menuTitle: "पोर्टल त्वरित नेविगेशन",
    menuHome: "मुख्य पृष्ठ",
    menuAbout: "I4C और पोर्टल के बारे में",
    menuHelplines: "आपातकालीन हेल्पलाइन (1930)",
    menuFAQ: "अक्सर पूछे जाने वाले प्रश्न"
  },
  mr: {
    emergencyBanner: "आर्थिक सायबर फसवणुकीसाठी आपत्कालीन हेल्पलाइन: चोरलेली रक्कम त्वरित गोठवण्यासाठी 1930 वर कॉल करा.",
    helplineShort: "1930",
    helpline24x7: "24x7 हेल्पलाइन",
    govTitle: "भारत सरकार",
    govMinistry: "गृह मंत्रालय",
    i4cTitle: "भारतीय सायबर गुन्हेगारी समन्वय केंद्र (I4C)",
    portalName: "राष्ट्रीय सायबर गुन्हे रिपोर्टिंग पोर्टल",
    uxPrototype: "UX प्रोटोटाइप",
    langSelect: "भाषा",
    accessibility: "सुलभता (Accessibility)",
    quickMenu: "मेनू",

    welcomeTitle: "राष्ट्रीय सायबर गुन्हे रिपोर्टिंग पोर्टलवर आपले स्वागत आहे",
    welcomeSubtitle: "सायबर गुन्ह्याची तक्रार नोंदवण्यासाठी आम्ही तुम्हाला मदत करण्यास तयार आहोत.",
    welcomeExplanation: "तुमची तक्रार कोणत्या प्रकारात येते हे तुम्हाला माहीत असण्याची गरज नाही. काय घडले ते आम्हाला सांगा आणि आम्ही तुम्हाला मार्गदर्शन करू.",
    startReportingBtn: "तक्रार नोंदवण्यास सुरुवात करा →",
    trustBadge: "सुरक्षित • गोपनीय • भारत सरकारद्वारे विश्वासार्ह",
    reassurance1Title: "तुमची माहिती सुरक्षित आहे",
    reassurance1Desc: "तुमची माहिती पूर्णपणे सुरक्षित आणि गोपनीय राहते.",
    reassurance2Title: "भारतीय भाषांमध्ये उपलब्ध",
    reassurance2Desc: "तुम्हाला सोयीस्कर वाटणाऱ्या भाषेत तक्रार नोंदवा.",
    reassurance3Title: "तुमची प्रगती आपोआप सेव्ह होते",
    reassurance3Desc: "कोणतीही माहिती न गमावता तुमची तक्रार पुढे सुरू ठेवा.",
    reassurance4Title: "मदत हवी आहे?",
    reassurance4Desc: "आर्थिक सायबर फसवणुकीसाठी त्वरित 1930 वर कॉल करा.",

    step1Label: "काय घडले ते सांगा",
    step2Label: "योग्य मार्ग निवडा",
    step3Label: "माहितीची पुनरावलोकन करा",
    step4Label: "तपशील जोडा",
    step5Label: "पुरावा जोडा",
    step6Label: "पुनरावलोकन आणि सबमिट करा",
    savedJustNow: "आत्ताच सेव्ह झाले",
    tellUsTitle: "काय घडले ते सांगा",
    tellUsSubtitle: "तुमच्या स्वतःच्या शब्दांत घटनेचे वर्णन करा. तुम्हाला वर्गवारी माहीत असण्याची गरज नाही.",
    textareaPlaceholder: "उदाहरणार्थ: कोणीतरी मला बनावट वीज बिलाचा SMS पाठवला आणि पेमेंट लिंकवर क्लिक केल्यानंतर ₹10,000 कापले गेले.",
    textSecureNotice: "तुमची माहिती सुरक्षित आहे आणि ती केवळ तपासासाठी वापरली जाईल.",
    orDivider: "किंवा",
    speakTitle: "बोलून सांगा",
    speakSubtitle: "तुम्ही आवाजाद्वारे घटनेचे वर्णन करू शकता. आम्ही त्याचे मजकुरात रूपांतर करू.",
    startSpeaking: "बोलणे सुरू करा",
    stopRecording: "रेकॉर्डिंग थांबवा",
    recordingActive: "रेकॉर्डिंग सुरू आहे...",
    privacyNotice: "आम्ही तुमच्या गोपनीयतेचा आदर करतो. व्हॉईस रेकॉर्डिंग सेव्ह केले जात नाहीत.",
    transcriptTitle: "आम्हाला हे ऐकू आले",
    editBtn: "संपादित करा",
    recordAgainBtn: "पुन्हा रेकॉर्ड करा",
    useThisBtn: "हा मजकूर वापरा",
    notSureTitle: "काय लिहावे हे समजत नाही?",
    notSureDesc: "खालील उदाहरणांमधून निवडा किंवा तुमच्या शब्दांत लिहा.",
    viewExamples: "उदाहरणे पहा",
    hideExamples: "उदाहरणे लपवा",
    scenario1: "लिंकवर क्लिक केल्यानंतर माझ्या बँक खात्यातून पैसे कापले गेले.",
    scenario2: "कोणीतरी मला UPI / QR कोडवर संशयास्पद पेमेंट विनंती पाठवली.",
    scenario3: "माझे सोशल मीडिया अकाउंट हॅक झाले किंवा कोणीतरी बनावट प्रोफाइल बनवली.",
    scenario4: "मला नोंदणी शुल्काची मागणी करणारे बनावट नोकरीचे ऑफर लेटर मिळाले.",
    continueBtn: "पुढे जा →",

    findPathTitle: "योग्य रिपोर्टिंग मार्ग शोधण्यात आम्ही मदत करू शकतो",
    findPathSubtitle: "तुम्ही दिलेल्या माहितीच्या आधारे आम्ही एक संभाव्य मार्ग ओळखला आहे. पुढे जाण्यापूर्वी पुनरावलोकन करा.",
    suggestedBadge: "सुचवलेला रिपोर्टिंग मार्ग",
    basedOnStory: "तुमच्या तक्रारीनुसार, हे याशी संबंधित आहे:",
    guidanceNotice: "हे केवळ मार्गदर्शक आहे. अंतिम निर्णय तुमचाच असेल.",
    yourStoryTitle: "तुमची तक्रार",
    editStoryBtn: "तक्रार संपादित करा",
    continueWithPathBtn: "या मार्गाने पुढे जा →",
    chooseDifferentPathBtn: "दूसरा मार्ग निवडा",
    hideDifferentPathBtn: "पर्याय लपवा",
    selectCategoryPrompt: "तुमच्या तक्रारीसाठी सर्वात योग्य मार्ग निवडा:",

    catFinancialTitle: "आर्थिक फसवणूक (Financial Fraud)",
    catFinancialDesc: "डिजिटल पेमेंट, बँक खाते, UPI किंवा पेमेंट लिंकद्वारे पैसे गमावलेल्या प्रकरणांसाठी हा मार्ग आहे.",
    catAccountTitle: "ऑनलाईन / अकाउंट फसवणूक",
    catAccountDesc: "सोशल मीडिया किंवा डिजिटल अकाउंट हॅक झाले असल्यास किंवा कोणीतरी तुमचे नाव वापरत असल्यास हा मार्ग वापरा.",
    catHarassmentTitle: "सायबर छळ (Cyber Harassment)",
    catHarassmentDesc: "ऑनलाईन धमक्या, ब्लॅकमेलिंग किंवा त्रासदायक संदेशांशी संबंधित प्रकरणांसाठी हा मार्ग आहे.",
    catJobTitle: "ऑनलाईन नोकरी फसवणूक",
    catJobDesc: "बनावट नोकरीच्या ऑफर किंवा वर्क-फ्रॉम-होम नोंदणी शुल्काशी संबंधित फसवणुकीसाठी हा मार्ग आहे.",
    catOtherTitle: "इतर सायबर गुन्हे",
    catOtherDesc: "आम्ही विशिष्ट मार्ग निश्चित करू शकलो नाही. तुम्ही तुमची तक्रार तपासून खालील योग्य पर्याय निवडू शकता.",

    reviewTitle: "आम्हाला हे समजले.",
    reviewSubtitle: "आम्ही तुमच्या तक्रारीतून मुख्य तपशील काढले आहेत. पुढे जाण्यापूर्वी काळजीपूर्वक पुनरावलोकन करा.",
    fieldIncident: "घटना / सारांश",
    fieldAmount: "रक्कम",
    fieldMethod: "पद्धत / माध्यम",
    fieldPath: "रिपोर्टिंग मार्ग",
    saveFieldBtn: "सेव्ह करा",
    cancelFieldBtn: "रद्द करा",
    confirmQuestion: "ही माहिती बरोबर आहे का?",
    confirmSubtitle: "तुम्ही आता कोणताही तपशील संपादित करू शकता किंवा पुढील पायरीवर जाऊ शकता.",
    backToPathBtn: "रिपोर्टिंग मार्गावर परत जा",
    yesContinueBtn: "होय, पुढे जा →",

    detailsTitle: "फक्त आणखी काही तपशील.",
    detailsSubtitle: "तुमच्याकडे असलेली कोणतीही माहिती जोडा. तुम्हाला काही माहीत नसल्यास सांगू शकता.",
    q1Title: "ही घटना कधी घडली?",
    q1Sub: "खात्री नसल्यास अंदाजे तारीख किंवा वेळ चालेल.",
    dateLabel: "घटनेची तारीख",
    timeLabel: "अंदाजे वेळ (पर्यायी)",
    dontKnowOption: "मला माहीत नाही",
    q2Title: "किती रक्कम गुंतली होती?",
    q2Sub: "गमावलेली किंवा मागितलेली रक्कम प्रविष्ट करा.",
    amountLabel: "रक्कम (₹)",
    q3Title: "तुमच्याकडे ट्रान्सझॅक्शन आयडी किंवा संदर्भ क्रमांक आहे का?",
    q3Sub: "हे तुमच्या बँक स्टेटमेंट, SMS किंवा पावतीवर मिळू शकते.",
    txnLabel: "ट्रान्सझॅक्शन / UTR / संदर्भ आयडी",
    dontHaveOption: "माझ्याकडे हे नाही",
    bankLabel: "बँक किंवा पेमेंट सेवा",
    bankSub: "उदा. SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "संबंधित प्लॅटफॉर्म किंवा वेबसाइट",
    usernameLabel: "संशयित प्रोफाइल / युझरनेम / लिंक",
    companyLabel: "संबंधित कंपनी किंवा व्यक्तीचे नाव",
    contactLabel: "संशयिताचा संपर्क क्रमांक / लिंक",
    backBtn: "मागे जा",
    nextEvidenceBtn: "पुढील पायरी: पुरावा जोडा →",

    evidenceTitle: "पोषक पुरावा जोडा",
    evidenceSubtitle: "घडलेला प्रकार स्पष्ट करण्यास मदत करणारी कोणतीही माहिती अपलोड करा. सर्व काही असणे आवश्यक नाही.",
    whatCanUploadTitle: "तुमच्या तक्रारीसाठी उपयुक्त पुराव्यांचे सूचने:",
    evidenceCheck1: "व्यवहार किंवा पेमेंटचे स्क्रीनशॉट",
    evidenceCheck2: "मिळालेला संशयास्पद SMS किंवा ईमेल",
    evidenceCheck3: "बँक स्टेटमेंट किंवा पावती",
    evidenceCheck4: "संशयिताची प्रोफाइल, फोन नंबर किंवा लिंक",
    uploadAreaTitle: "पुरावा फाईल्स अपलोड करा",
    uploadAreaSub: "फाईल्स निवडण्यासाठी क्लिक करा किंवा येथे ड्रॅग करा (PNG, JPG, PDF कमाल 10MB)",
    uploadBtn: "फाईल निवडा",
    removeFileBtn: "काढून टाका",
    invalidFileError: "हा फाईल प्रकार समर्थित नाही. कृपया PNG, JPG, किंवा PDF अपलोड करा.",
    noEvidenceOption: "माझ्याकडे आत्ता अपलोड करण्यासाठी पुरावा नाही",
    noEvidenceNotice: "तुम्ही काहीही अपलोड न करता देखील पुढे जाऊ शकता. अंतिम निर्णय तुमचाच असेल.",
    additionalNotesLabel: "तुम्हाला आम्हाला आणखी काही सांगायचे आहे का? (पर्यायी)",
    additionalNotesPlaceholder: "अपलोड केलेल्या पुराव्याचे स्पष्टीकरण देणारी कोणतीही अतिरिक्त माहिती जोडा.",
    continueToSubmitBtn: "पुढे जा →",

    reviewSubmitTitle: "तुमच्या तक्रारीची पुनरावलोकन करा",
    reviewSubmitSubtitle: "पुढे जाण्यापूर्वी तुमची माहिती काळजीपूर्वक तपासा.",
    notSubmittedBadge: "तुमची तक्रार अजून सबमिट केलेली नाही.",
    sec1Title: "1. तुमची तक्रार",
    sec2Title: "2. रिपोर्टिंग मार्ग",
    sec2Sub: "हा तुम्ही निवडलेला रिपोर्टिंग मार्ग आहे.",
    sec2ChangeBtn: "बदला",
    sec3Title: "3. घटनेचे तपशील",
    sec3EditBtn: "तपशील संपादित करा",
    sec4Title: "4. पुरावा",
    sec4NoEvidence: "कोणताही पुरावा जोडलेला नाही",
    sec4NoEvidenceChoice: "माझ्याकडे आत्ता पुरावा नाही.",
    sec4EditBtn: "पुरावा संपादित करा",
    readyTitle: "पुढे जाण्यास तयार आहात?",
    readySub: "तुमची तक्रार पुढे OTP पडताळणीकडे जाईल. ती अजून सबमिट झालेली नाही.",
    confirmCheckboxLabel: "मी वरील माहितीची पुनरावलोकन केली आहे आणि माझ्या माहितीनुसार ती बरोबर आहे याची खात्री करतो.",
    continueToOtpBtn: "OTP पडताळणीकडे पुढे जा →",

    otpTitle: "तुमचा मोबाईल नंबर पडताळा",
    otpSubtitle: "तुमची तक्रार सबमिट करण्यापूर्वी तुमची ओळख पडताळण्यासाठी आम्ही एक OTP पाठवू.",
    maskedNumberNotice: "OTP +91 ••••••4821 वर पाठवला",
    demoModeBadge: "डेमो मोड: 123456 वापरा",
    otpLabel: "6 अंकी OTP प्रविष्ट करा",
    resendBtn: "OTP पुन्हा पाठवा",
    resendCooldownText: "{sec}s मध्ये पुन्हा पाठवा",
    otpErrorText: "तो OTP जुळत नाही. कृपया कोड तपासा आणि पुन्हा प्रयत्न करा.",
    otpVerifiedSuccess: "मोबाईल नंबर पडताळला गेला",
    securityNoticeTitle: "तुमची माहिती सुरक्षित आहे",
    securityNoticeSub: "या प्रोटोटाइप अनुभवादरम्यान तुमच्या तक्रारीचे तपशील सुरक्षितपणे सेव्ह केले जातात.",
    backToReviewBtn: "पुनरावलोकनाकडे परत जा",
    continueToSubmissionBtn: "सबमिशनकडे पुढे जा →",

    successTitle: "तुमची तक्रार सबमिट झाली आहे",
    successSubtitle: "तुमची तक्रार यशस्वीरित्या प्राप्त झाली आहे.",
    complaintNumberLabel: "तक्रार क्रमांक",
    copyBtn: "कॉपी करा",
    copiedToast: "तक्रार क्रमांक कॉपी झाला.",
    submittedAtLabel: "सबमिट केल्याची तारीख",
    downloadSummaryBtn: "सारांश डाउनलोड करा",
    whatNextTitle: "पुढे काय होईल?",
    timelineStep1: "तक्रार सबमिट झाली",
    timelineStep2: "पुनरावलोकनाधीन",
    timelineStep3: "आवश्यकतेनुसार पुढील कारवाई",
    timelineStep4: "स्थिती अपडेट्स",
    nextStepsNotice: "हे एक प्रोटोटाइप प्रात्यक्षिक आहे. अद्याप कोणताही वास्तविक पोलिस अधिकारी किंवा सरकारी विभाग नियुक्त केलेला नाही.",
    trackComplaintBtn: "तुमची तक्रार ट्रॅक करा →",
    returnHomeBtn: "मुख्य पृष्ठावर परत जा",

    trackTitle: "तुमची तक्रार ट्रॅक करा",
    trackSubtitle: "तुमच्या सायबर गुन्ह्याच्या तक्रारीची सद्यस्थिती तपासा आणि पुढे काय होईल ते पहा.",
    lookupLabel: "तक्रार क्रमांक",
    lookupBtn: "स्थिती तपासा",
    lookupHelpText: "तुम्ही तुमच्या पोचपावतीवर तुमचा तक्रार क्रमांक शोधू शकता.",
    notFoundError: "आम्हाला त्या क्रमांकाची कोणतीही तक्रार आढळली नाही.",
    currentStatusLabel: "सद्यस्थिती",
    statusUnderReview: "पुनरावलोकनाधीन",
    statusExplanation: "तुमची तक्रार प्राप्त झाली आहे आणि सध्या या प्रोटोटाइपमध्ये पुनरावलोकनाधीन दाखवली आहे.",
    timelineHeader: "तक्रार प्रगती वेळेची रेषा",
    stage1Title: "तक्रार सबमिट झाली",
    stage1Sub: "तुमची तक्रार यशस्वीरित्या नोंदवली गेली.",
    stage2Title: "तक्रार प्राप्त झाली",
    stage2Sub: "तुमची तक्रार प्राप्त झाली आहे.",
    stage3Title: "पुनरावलोकनाधीन",
    stage3Sub: "सध्याचा टप्पा (प्रोटोटाइप डेमो स्थिती)",
    stage4Title: "पुढील कारवाई / अपडेट",
    stage4Sub: "अतिरिक्त माहिती आवश्यक असल्यास तुम्हाला अपडेट मिळू शकतो.",
    compactSummaryTitle: "तक्रार सारांश",
    backToConfirmBtn: "पुष्टीकरणाकडे परत जा",
    startNewBtn: "नवीन तक्रार सुरू करा",

    footerNotice: "ही वेबसाइट केवळ संशोधन आणि मूल्यमापनासाठी एक UX प्रोटोटाइप आहे. अधिकृत तक्रारीसाठी नाही.",
    footerGovInfo: "राष्ट्रीय सायबर गुन्हे रिपोर्टिंग पोर्टल | गृह मंत्रालय, भारत सरकार",
    accessibilityTitle: "सुलभता नियंत्रणे (Accessibility)",
    fontSizeLabel: "अक्षरांचा आकार",
    fontScaleDefault: "मानक",
    lineHeightLabel: "ओळ अंतर",
    letterSpacingLabel: "अक्षर अंतर",
    contrastModeLabel: "काँट्रास्ट मोड",
    contrastNormal: "मानक काँट्रास्ट",
    contrastHighLight: "उच्च काँट्रास्ट (लाइट)",
    contrastHighDark: "उच्च काँट्रास्ट (डार्क)",
    focusHighlightLabel: "कीबोर्ड फोकस रिंग",
    resetBtn: "रीसेट करा",
    closeBtn: "बंद करा",
    menuTitle: "पोर्टल जलद नेव्हिगेशन",
    menuHome: "मुख्य पृष्ठ",
    menuAbout: "I4C आणि पोर्टलबाबत",
    menuHelplines: "आपत्कालीन हेल्पलाइन (1930)",
    menuFAQ: "सतत विचारले जाणारे प्रश्न"
  },
  ta: {
    emergencyBanner: "நிதி இணையக் குற்ற மோசடிக்கான அவசர உதவி எண்கள்: திருடப்பட்ட நிதியை முடக்க உடனடியாக 1930 ஐ அழைக்கவும்.",
    helplineShort: "1930",
    helpline24x7: "24x7 உதவி எண்",
    govTitle: "இந்திய அரசு",
    govMinistry: "உள்துறை அமைச்சகம்",
    i4cTitle: "இந்திய இணையக் குற்ற ஒருங்கிணைப்பு மையம் (I4C)",
    portalName: "தேசிய இணையக் குற்றப் புகாரளிப்பு தளம்",
    uxPrototype: "UX மாதிரி",
    langSelect: "மொழி",
    accessibility: "அணுகல்தன்மை (Accessibility)",
    quickMenu: "பட்டியல்",

    welcomeTitle: "தேசிய இணையக் குற்றப் புகாரளிப்பு தளத்திற்கு நல்வரவு",
    welcomeSubtitle: "இணையக் குற்றங்களைப் புகாரளிக்க உங்களுக்கு உதவ நாங்கள் தயாராக உள்ளோம்.",
    welcomeExplanation: "உங்கள் புகார் எந்தப் பிரிவைச் சேர்ந்தது என்பதை நீங்கள் அறிய வேண்டிய அவசியமில்லை. என்ன நடந்தது என்பதை எங்களிடம் கூறுங்கள், நாங்கள் உங்களுக்கு வழிகாட்டுவோம்.",
    startReportingBtn: "புகாரளிக்க தொடங்குங்கள் →",
    trustBadge: "பாதுகாப்பானது • ரகசியமானது • இந்திய அரசால் நம்பகமானது",
    reassurance1Title: "உங்கள் தகவல்கள் பாதுகாக்கப்பட்டவை",
    reassurance1Desc: "உங்கள் தகவல்கள் பாதுகாப்பாகவும் ரகசியமாகவும் இருக்கும்.",
    reassurance2Title: "இந்திய மொழிகளில் கிடைக்கிறது",
    reassurance2Desc: "உங்களுக்கு மிகவும் வசதியான மொழியில் புகாரளிக்கவும்.",
    reassurance3Title: "உங்கள் தகவல்கள் தானாகவே சேமிக்கப்படும்",
    reassurance3Desc: "எந்தத் தகவலையும் இழக்காமல் உங்கள் புகாரைத் தொடரவும்.",
    reassurance4Title: "உதவி தேவையா?",
    reassurance4Desc: "நிதி இணையக் குற்றங்களுக்கு உடனடியாக 1930 ஐ அழைக்கவும்.",

    step1Label: "என்ன நடந்தது என்று சொல்லுங்கள்",
    step2Label: "சரியான வழியைத் தேர்வு செய்யவும்",
    step3Label: "தகவலை மதிப்பாய்வு செய்யவும்",
    step4Label: "விவரங்களைச் சேர்க்கவும்",
    step5Label: "ஆதாரங்களைச் சேர்க்கவும்",
    step6Label: "மதிப்பாய்வு செய்து சமர்ப்பிக்கவும்",
    savedJustNow: "இப்போது சேமிக்கப்பட்டது",
    tellUsTitle: "என்ன நடந்தது என்று சொல்லுங்கள்",
    tellUsSubtitle: "நிகழ்வை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும். பிரிவு எதுவென்று அறிய வேண்டியதில்லை.",
    textareaPlaceholder: "உதாரணம்: யாரோ போலி மின்சார கட்டண SMS அனுப்பினர், கட்டண இணைப்பைக் கிளிக் செய்த பிறகு ₹10,000 பிடிக்கப்பட்டது.",
    textSecureNotice: "உங்கள் தகவல்கள் பாதுகாப்பானவை மற்றும் விசாரணைக்கு மட்டுமே பயன்படுத்தப்படும்.",
    orDivider: "அல்லது",
    speakTitle: "பேசிப் புகாரளிக்கவும்",
    speakSubtitle: "குரல் மூலம் நிகழ்வை விவரிக்கலாம். அதை உரை வடிவமாக மாற்றுவோம்.",
    startSpeaking: "பேசத் தொடங்குங்கள்",
    stopRecording: "பதிவை நிறுத்துங்கள்",
    recordingActive: "பதிவாகிறது...",
    privacyNotice: "உங்கள் தனியுரிமையை நாங்கள் மதிக்கிறோம். குரல் பதிவுகள் சேமிக்கப்படாது.",
    transcriptTitle: "நாங்கள் கேட்டது இதுதான்",
    editBtn: "திருத்து",
    recordAgainBtn: "மீண்டும் பதிவு செய்",
    useThisBtn: "இந்த உரையைப் பயன்படுத்து",
    notSureTitle: "என்ன எழுதுவது என்று தெரியவில்லையா?",
    notSureDesc: "கீழே உள்ள உதாரணங்களில் இருந்து தேர்வு செய்யவும் அல்லது சொந்தமாக எழுதவும்.",
    viewExamples: "உதாரணங்களைப் பார்க்கவும்",
    hideExamples: "உதாரணங்களை மறைக்கவும்",
    scenario1: "இணைப்பைக் கிளிக் செய்த பிறகு எனது வங்கி கணக்கிலிருந்து பணம் பிடிக்கப்பட்டது.",
    scenario2: "UPI / QR குறியீட்டில் யாரோ சந்தேகத்திற்கிடமான கட்டணக் கோரிக்கையை அனுப்பினர்.",
    scenario3: "எனது சமூக ஊடகக் கணக்கு ஹேக் செய்யப்பட்டது அல்லது போலி சுயவிவரம் உருவாக்கப்பட்டது.",
    scenario4: "பதிவுக் கட்டணம் கேட்கும் போலி வேலை வாய்ப்பு கடிதம் எனக்கு வந்தது.",
    continueBtn: "தொடரவும் →",

    findPathTitle: "சரியான புகாரளிக்கும் வழியைக் கண்டறிய நாங்கள் உதவுகிறோம்",
    findPathSubtitle: "நீங்கள் கூறியதன் அடிப்படையில், சாத்தியமான புகாரளிப்பு வழியை நாங்கள் கண்டறிந்துள்ளோம். தொடர்வதற்கு முன் மதிப்பாய்வு செய்யவும்.",
    suggestedBadge: "பரிந்துரைக்கப்பட்ட புகாரளிப்பு வழி",
    basedOnStory: "உங்கள் விவரங்களின்படி, இது இதனுடன் தொடர்புடையது:",
    guidanceNotice: "இது வழிகாட்டுதல் மட்டுமே. இறுதி முடிவு உங்களுடையதே.",
    yourStoryTitle: "உங்கள் புகார் விவரம்",
    editStoryBtn: "விவரத்தைத் திருத்து",
    continueWithPathBtn: "இந்த வழியில் தொடரவும் →",
    chooseDifferentPathBtn: "வேறு வழியைத் தேர்வு செய்க",
    hideDifferentPathBtn: "தேர்வுகளை மறை",
    selectCategoryPrompt: "உங்கள் புகாருக்கு மிகவும் பொருத்தமான வழியைத் தேர்ந்தெடுக்கவும்:",

    catFinancialTitle: "நிதி மோசடி (Financial Fraud)",
    catFinancialDesc: "டிஜிட்டல் கட்டணம், வங்கி கணக்கு அல்லது UPI மூலம் பணம் இழந்த வழக்குகளுக்கானது.",
    catAccountTitle: "ஆன்லைன் கணக்கு மோசடி",
    catAccountDesc: "சமூக ஊடகக் கணக்கு ஹேக் செய்யப்பட்ட அல்லது போலி சுயவிவர வழக்குகளுக்கானது.",
    catHarassmentTitle: "இணைய துன்புறுத்தல்",
    catHarassmentDesc: "ஆன்லைன் மிரட்டல்கள், அச்சுறுத்தல்கள் அல்லது தொல்லைகளுக்கானது.",
    catJobTitle: "போலி வேலைவாய்ப்பு மோசடி",
    catJobDesc: "போலி வேலை வாய்ப்புகள் அல்லது கட்டணம் கேட்ட வேலை மோசடிகளுக்கானது.",
    catOtherTitle: "இதர இணையக் குற்றங்கள்",
    catOtherDesc: "குறிப்பிட்ட வழியைக் கண்டறிய முடியவில்லை. உங்கள் புகாரை மதிப்பாய்வு செய்து கீழே தேர்வு செய்யவும்.",

    reviewTitle: "நாங்கள் புரிந்துகொண்டது இதுதான்.",
    reviewSubtitle: "உங்கள் புகாரிலிருந்து முக்கிய விவரங்களை எடுத்துள்ளோம். தொடர்வதற்கு முன் கவனமாக மதிப்பாய்வு செய்யவும்.",
    fieldIncident: "நிகழ்வு / சுருக்கம்",
    fieldAmount: "பாதிக்கப்பட்ட தொகை",
    fieldMethod: "முறை / ஊடகம்",
    fieldPath: "புகாரளிப்பு வழி",
    saveFieldBtn: "சேமி",
    cancelFieldBtn: "ரத்து செய்",
    confirmQuestion: "இந்தத் தகவல் சரியானதா?",
    confirmSubtitle: "நீங்கள் இப்போது எந்த விவரத்தையும் திருத்தலாம் அல்லது அடுத்த கட்டத்திற்குத் தொடரலாம்.",
    backToPathBtn: "புகாரளிப்பு வழிக்குத் திரும்பு",
    yesContinueBtn: "ஆம், தொடரவும் →",

    detailsTitle: "இன்னும் சில விவரங்கள் மட்டும்.",
    detailsSubtitle: "உங்களிடம் உள்ள தகவல்களைச் சேர்க்கவும். ஏதேனும் தெரியவில்லை என்றால் தெரிவிக்கலாம்.",
    q1Title: "இந்த சம்பவம் எப்போது நடந்தது?",
    q1Sub: "உறுதியாக தெரியவில்லை என்றால் தோராயமான தேதி அல்லது நேரம் போதுமானது.",
    dateLabel: "சம்பவ தேதி",
    timeLabel: "தோராயமான நேரம் (விருப்பத்தேர்வு)",
    dontKnowOption: "எனக்குத் தெரியாது",
    q2Title: "எவ்வளவு பணம் பாதிக்கப்பட்டது?",
    q2Sub: "இழந்த அல்லது கேட்கப்பட்ட தொகையை உள்ளிடவும்.",
    amountLabel: "பாதிக்கப்பட்ட தொகை (₹)",
    q3Title: "பரிவர்த்தனை ஐடி அல்லது குறிப்பு எண் உள்ளதா?",
    q3Sub: "வங்கி அறிக்கை, SMS அல்லது ரசீதில் இதைக் காணலாம்.",
    txnLabel: "பரிவர்த்தனை / UTR / குறிப்பு ஐடி",
    dontHaveOption: "என்னிடம் இல்லை",
    bankLabel: "வங்கி அல்லது கட்டண சேவை",
    bankSub: "எ.கா. SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "தொடர்புடைய தளம் அல்லது இணையதளம்",
    usernameLabel: "சந்தேகத்திற்குரிய கணக்கு / பெயர் / இணைப்பு",
    companyLabel: "தொடர்புடைய நிறுவனம் அல்லது நபர் பெயர்",
    contactLabel: "சந்தேகத்திற்குரிய நபரின் தொடர்பு எண் / இணைப்பு",
    backBtn: "பின்செல்",
    nextEvidenceBtn: "அடுத்த கட்டம்: ஆதாரம் சேர் →",

    evidenceTitle: "ஆதாரங்களைச் சேர்க்கவும்",
    evidenceSubtitle: "நிகழ்வை விவரிக்க உதவும் கோப்புகளைப் பதிவேற்றவும். அனைத்தும் இருக்க வேண்டிய அவசியமில்லை.",
    whatCanUploadTitle: "உங்கள் புகாருக்குப் பயன்படும் ஆதாரப் பரிந்துரைகள்:",
    evidenceCheck1: "பரிவர்த்தனை திரைப்படங்கள்",
    evidenceCheck2: "சந்தேகத்திற்குரிய SMS அல்லது மின்னஞ்சல்",
    evidenceCheck3: "வங்கி அறிக்கை அல்லது ரசீது",
    evidenceCheck4: "சந்தேகத்திற்குரிய நபரின் சுயவிவரம் அல்லது எண்",
    uploadAreaTitle: "ஆதாரக் கோப்புகளைப் பதிவேற்றவும்",
    uploadAreaSub: "பதிவேற்ற கிளிக் செய்யவும் அல்லது இங்கே இழுத்து இடவும் (PNG, JPG, PDF அதிகபட்சம் 10MB)",
    uploadBtn: "கோப்பைத் தேர்வு செய்",
    removeFileBtn: "நீக்கு",
    invalidFileError: "இந்த கோப்பு வகை ஆதரிக்கப்படவில்லை. PNG, JPG அல்லது PDF ஐப் பதிவேற்றவும்.",
    noEvidenceOption: "என்னிடம் தற்போது பதிவேற்ற ஆதாரம் இல்லை",
    noEvidenceNotice: "எதையும் பதிவேற்றாமலும் நீங்கள் தொடரலாம். முடிவு உங்களுடையதே.",
    additionalNotesLabel: "வேறேதேனும் தெரிவிக்க விரும்புகிறீர்களா? (விருப்பத்தேர்வு)",
    additionalNotesPlaceholder: "பதிவேற்றிய ஆதாரங்களை விளக்கும் கூடுதல் தகவல்களைச் சேர்க்கவும்.",
    continueToSubmitBtn: "தொடரவும் →",

    reviewSubmitTitle: "உங்கள் புகாரை மதிப்பாய்வு செய்யவும்",
    reviewSubmitSubtitle: "தொடர்வதற்கு முன் உங்கள் தகவலை கவனமாக சரிபார்க்கவும்.",
    notSubmittedBadge: "உங்கள் புகார் இன்னும் சமர்ப்பிக்கப்படவில்லை.",
    sec1Title: "1. உங்கள் புகார் விவரம்",
    sec2Title: "2. புகாரளிப்பு வழி",
    sec2Sub: "இது நீங்கள் தேர்ந்தெடுத்த புகாரளிப்பு வழி.",
    sec2ChangeBtn: "மாற்று",
    sec3Title: "3. சம்பவ விவரங்கள்",
    sec3EditBtn: "விவரங்களைத் திருத்து",
    sec4Title: "4. ஆதாரங்கள்",
    sec4NoEvidence: "ஆதாரங்கள் எதுவும் இணைக்கப்படவில்லை",
    sec4NoEvidenceChoice: "என்னிடம் தற்போது ஆதாரம் இல்லை.",
    sec4EditBtn: "ஆதாரங்களைத் திருத்து",
    readyTitle: "தொடரத் தயாரா?",
    readySub: "உங்கள் புகார் அடுத்து OTP சரிபார்ப்பிற்கு செல்லும். இது இன்னும் சமர்ப்பிக்கப்படவில்லை.",
    confirmCheckboxLabel: "மேலே உள்ள தகவலை நான் மதிப்பாய்வு செய்து, எனது அறிவுக்கு எட்டிய வரை அது சரியானது என்பதை உறுதிப்படுத்துகிறேன்.",
    continueToOtpBtn: "OTP சரிபார்ப்பிற்குத் தொடரவும் →",

    otpTitle: "உங்கள் மொபைல் எண்ணைச் சரிபார்க்கவும்",
    otpSubtitle: "புகார் சமர்ப்பிக்கப்படுவதற்கு முன்பு உங்கள் அடையாளத்தைச் சரிபார்க்க ஒரு முறை கடவுச்சொல் அனுப்பப்படும்.",
    maskedNumberNotice: "OTP +91 ••••••4821 க்கு அனுப்பப்பட்டது",
    demoModeBadge: "டெமோ முறை: 123456 ஐப் பயன்படுத்தவும்",
    otpLabel: "6 இலக்க OTP ஐ உள்ளிடவும்",
    resendBtn: "OTP ஐ மீண்டும் அனுப்பு",
    resendCooldownText: "{sec} வினாடிகளில் மீண்டும் அனுப்பு",
    otpErrorText: "அந்த OTP பொருந்தவில்லை. குறியீட்டைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    otpVerifiedSuccess: "மொபைல் எண் சரிபார்க்கப்பட்டது",
    securityNoticeTitle: "உங்கள் தகவல் பாதுகாக்கப்படுகிறது",
    securityNoticeSub: "இந்த மாதிரி அனுபவத்தின் போது உங்கள் புகார்களின் விவரங்கள் பாதுகாப்பாக சேமிக்கப்படும்.",
    backToReviewBtn: "மதிப்பாய்விற்குத் திரும்பு",
    continueToSubmissionBtn: "சமர்ப்பிப்பிற்குத் தொடரவும் →",

    successTitle: "உங்கள் புகார் சமர்ப்பிக்கப்பட்டது",
    successSubtitle: "உங்கள் புகார் வெற்றிகரமாக பெறப்பட்டது.",
    complaintNumberLabel: "புகார் எண்",
    copyBtn: "நகலெடு",
    copiedToast: "புகார் எண் நகலெடுக்கப்பட்டது.",
    submittedAtLabel: "சமர்ப்பிக்கப்பட்ட தேதி",
    downloadSummaryBtn: "சுருக்கத்தைப் பதிவிறக்கவும்",
    whatNextTitle: "அடுத்து என்ன நடக்கும்?",
    timelineStep1: "புகார் சமர்ப்பிக்கப்பட்டது",
    timelineStep2: "மதிப்பாய்வில் உள்ளது",
    timelineStep3: "தேவைப்பட்டால் கூடுதல் நடவடிக்கை",
    timelineStep4: "நிலை மாற்றங்கள்",
    nextStepsNotice: "இது ஒரு மாதிரி செயல்முறை விளக்கம். இன்னும் எந்த காவல்துறை அதிகாரியோ அல்லது அரசுத் துறையோ நியமிக்கப்படவில்லை.",
    trackComplaintBtn: "உங்கள் புகாரைக் கண்காணிக்கவும் →",
    returnHomeBtn: "முதன்மைப் பக்கத்திற்குத் திரும்பு",

    trackTitle: "உங்கள் புகாரைக் கண்காணிக்கவும்",
    trackSubtitle: "உங்கள் இணையக் குற்றப் புகாரின் தற்போதைய நிலையையும், அடுத்து என்ன நடக்கும் என்பதையும் சரிபார்க்கவும்.",
    lookupLabel: "புகார் எண்",
    lookupBtn: "நிலையைச் சரிபார்",
    lookupHelpText: "உங்கள் உறுதிப்படுத்தல் ரசீதில் உங்கள் புகார் எண்ணைக் காணலாம்.",
    notFoundError: "அந்த எண்ணில் எங்களால் புகாரைக் கண்டுபிடிக்க முடியவில்லை.",
    currentStatusLabel: "தற்போதைய நிலை",
    statusUnderReview: "மதிப்பாய்வில் உள்ளது",
    statusExplanation: "உங்கள் புகார் பெறப்பட்டு, இந்த மாதிரி அமைப்பில் தற்போது மதிப்பாய்வில் உள்ளதாகக் காட்டப்படுகிறது.",
    timelineHeader: "புகார் முன்னேற்றக் காலக்கோடு",
    stage1Title: "புகார் சமர்ப்பிக்கப்பட்டது",
    stage1Sub: "உங்கள் புகார் வெற்றிகரமாகப் பதிவு செய்யப்பட்டது.",
    stage2Title: "புகார் பெறப்பட்டது",
    stage2Sub: "உங்கள் புகார் பெறப்பட்டது.",
    stage3Title: "மதிப்பாய்வில் உள்ளது",
    stage3Sub: "தற்போதைய நிலை (மாதிரி விளக்கம் மட்டுமே)",
    stage4Title: "கூடுதல் நடவடிக்கை / புதுப்பிப்பு",
    stage4Sub: "கூடுதல் தகவல் தேவைப்பட்டால் உங்களுக்குப் புதுப்பிப்பு கிடைக்கலாம்.",
    compactSummaryTitle: "புகார் சுருக்கம்",
    backToConfirmBtn: "உறுதிப்படுத்தலுக்குத் திரும்பு",
    startNewBtn: "புதிய புகாரைத் தொடங்கு",

    footerNotice: "இந்த இணையதளம் ஆராய்ச்சி மற்றும் மதிப்பீட்டு நோக்கங்களுக்கான UX மாதிரி மட்டுமே. அதிகாரப்பூர்வ தாக்கல் செய்ய அல்ல.",
    footerGovInfo: "தேசிய இணையக் குற்றப் புகாரளிப்பு தளம் | உள்துறை அமைச்சகம், இந்திய அரசு",
    accessibilityTitle: "அணுகல்தன்மை கட்டுப்பாடுகள்",
    fontSizeLabel: "எழுத்து அளவு",
    fontScaleDefault: "இயல்பான",
    lineHeightLabel: "வரி இடைவெளி",
    letterSpacingLabel: "எழுத்து இடைவெளி",
    contrastModeLabel: "மாறுபட்ட முறை",
    contrastNormal: "இயல்பான மாறுபாடு",
    contrastHighLight: "அதிக மாறுபாடு (ஒளி)",
    contrastHighDark: "அதிக மாறுபாடு (இருள்)",
    focusHighlightLabel: "விசைப்பலகை கவனம் வளையம்",
    resetBtn: "மீட்டமை",
    closeBtn: "மூடு",
    menuTitle: "விரைவு வழிசெலுத்தல்",
    menuHome: "முதன்மை பக்கம்",
    menuAbout: "I4C பற்றி",
    menuHelplines: "அவசர உதவி எண் (1930)",
    menuFAQ: "அடிக்கடி கேட்கப்படும் கேள்விகள்"
  },
  bn: {
    emergencyBanner: "আর্থিক সাইবার জালিয়াতির জন্য জরুরি হেল্পলাইন: চুরি হওয়া অর্থ অবিলম্বে ফ্রিজ করতে ১৯৩০ এ কল করুন।",
    helplineShort: "১৯৩০",
    helpline24x7: "২৪x৭ হেল্পলাইন",
    govTitle: "ভারত সরকার",
    govMinistry: "স্বরাষ্ট্র মন্ত্রক",
    i4cTitle: "ইন্ডিয়ান সাইবারক্রাইম কোঅর্ডিনেশন সেন্টার (I4C)",
    portalName: "জাতীয় সাইবার অপরাধ রিপোর্টিং পোর্টাল",
    uxPrototype: "ইউএক্স প্রোটোটাইপ",
    langSelect: "ভাষা",
    accessibility: "অ্যাক্সেসিবিলিটি",
    quickMenu: "মেনু",

    welcomeTitle: "জাতীয় সাইবার অপরাধ রিপোর্টিং পোর্টালে আপনাকে স্বাগতম",
    welcomeSubtitle: "সাইবার অপরাধের রিপোর্ট করতে আমরা আপনাকে সাহায্য করতে এখানে আছি।",
    welcomeExplanation: "আপনার অভিযোগটি কোন বিভাগের অন্তর্গত তা আপনার জানার প্রয়োজন নেই। কী ঘটেছে আমাদের বলুন এবং আমরা আপনাকে পুরো প্রক্রিয়াটিতে নির্দেশিকা দেব।",
    startReportingBtn: "রিপোর্ট করা শুরু করুন →",
    trustBadge: "সুরক্ষিত • গোপনীয় • ভারত সরকার দ্বারা বিশ্বস্ত",
    reassurance1Title: "আপনার তথ্য সুরক্ষিত",
    reassurance1Desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং গোপন থাকে।",
    reassurance2Title: "ভারতীয় ভাষায় উপলব্ধ",
    reassurance2Desc: "আপনার সুবিধাজনক ভাষায় স্বাচ্ছন্দ্যে রিপোর্ট করুন।",
    reassurance3Title: "আপনার অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়",
    reassurance3Desc: "কোনো তথ্য না হারিয়ে আপনার রিপোর্ট চালিয়ে যান।",
    reassurance4Title: "সাহায্য প্রয়োজন?",
    reassurance4Desc: "আর্থিক সাইবার জালিয়াতির জন্য অবিলম্বে ১৯৩০ এ কল করুন।",

    step1Label: "কী ঘটেছে আমাদের বলুন",
    step2Label: "সঠিক পথ খুঁজুন",
    step3Label: "তথ্য পর্যালোচনা করুন",
    step4Label: "বিস্তারিত যোগ করুন",
    step5Label: "প্রমাণ যোগ করুন",
    step6Label: "পর্যালোচনা ও জমা দিন",
    savedJustNow: "এইমাত্র সংরক্ষিত হয়েছে",
    tellUsTitle: "কী ঘটেছে আমাদের বলুন",
    tellUsSubtitle: "আপনার নিজের ভাষায় ঘটনা বর্ণনা করুন। বিভাগ জানার প্রয়োজন নেই।",
    textareaPlaceholder: "উদাহরণস্বরূপ: কেউ আমাকে একটি জাল বিদ্যুৎ বিলের SMS পাঠিয়েছে এবং পেমেন্ট লিঙ্কে ক্লিক করার পরে ₹১০,০০০ কেটে নেওয়া হয়েছে।",
    textSecureNotice: "আপনার তথ্য সুরক্ষিত এবং কেবল তদন্তের জন্য ব্যবহার করা হবে।",
    orDivider: "অথবা",
    speakTitle: "ভয়েস এর মাধ্যমে বলুন",
    speakSubtitle: "আপনি ভয়েস ব্যবহার করে ঘটনা বর্ণনা করতে পারেন। আমরা এটিকে টেক্সটে রূপান্তর করব।",
    startSpeaking: "কথা বলা শুরু করুন",
    stopRecording: "রেকর্ডিং বন্ধ করুন",
    recordingActive: "রেকর্ডিং হচ্ছে...",
    privacyNotice: "আমরা আপনার গোপনীয়তাকে সম্মান করি। ভয়েস রেকর্ডিং সংরক্ষণ করা হয় না।",
    transcriptTitle: "আমরা যা শুনেছি",
    editBtn: "সম্পাদনা করুন",
    recordAgainBtn: "পুনরায় রেকর্ড করুন",
    useThisBtn: "এই টেক্সট ব্যবহার করুন",
    notSureTitle: "কী লিখবেন বুঝতে পারছেন না?",
    notSureDesc: "নিচের উদাহরণগুলো থেকে বেছে নিন বা নিজের ভাষায় লিখুন।",
    viewExamples: "উদাহরণ দেখুন",
    hideExamples: "উদাহরণ লুকান",
    scenario1: "একটি লিঙ্কে ক্লিক করার পর আমার ব্যাঙ্ক অ্যাকাউন্ট থেকে টাকা কেটে নেওয়া হয়েছে।",
    scenario2: "কেউ আমাকে UPI / QR কোডে একটি সন্দেহজনক পেমেন্ট অনুরোধ পাঠিয়েছে।",
    scenario3: "আমার সোশ্যাল মিডিয়া অ্যাকাউন্ট হ্যাক করা হয়েছে বা কেউ একটি ভুয়া প্রোফাইল তৈরি করেছে।",
    scenario4: "আমি একটি ভুয়া চাকরির অফার লেটার পেয়েছি যেখানে রেজিস্ট্রেশন ফি চাওয়া হয়েছে।",
    continueBtn: "চালিয়ে যান →",

    findPathTitle: "আমরা আপনাকে সঠিক রিপোর্টিং পথ খুঁজে পেতে সাহায্য করতে পারি",
    findPathSubtitle: "আপনার দেওয়া তথ্যের ভিত্তিতে আমরা একটি সম্ভাব্য রিপোর্টিং পথ চিহ্নিত করেছি। এগিয়ে যাওয়ার আগে এটি পর্যালোচনা করুন।",
    suggestedBadge: "সুপ্রস্তাবিত রিপোর্টিং পথ",
    basedOnStory: "আপনার তথ্যের ভিত্তিতে এটি সম্পর্কিত বলে মনে হচ্ছে:",
    guidanceNotice: "এটি কেবল একটি নির্দেশিকা। সিদ্ধান্ত আপনারই।",
    yourStoryTitle: "আপনার বিবরণ",
    editStoryBtn: "বিবরণ সম্পাদনা করুন",
    continueWithPathBtn: "এই পথে এগিয়ে যান →",
    chooseDifferentPathBtn: "অন্য পথ বেছে নিন",
    hideDifferentPathBtn: "বিকল্পগুলো লুকান",
    selectCategoryPrompt: "আপনার অভিযোগের জন্য সবচেয়ে উপযুক্ত একটি পথ বেছে নিন:",

    catFinancialTitle: "আর্থিক জালিয়াতি (Financial Fraud)",
    catFinancialDesc: "ডিজিটাল পেমেন্ট, ব্যাঙ্ক অ্যাকাউন্ট বা UPI এর মাধ্যমে অর্থ হারানো মামলার জন্য এই পথ।",
    catAccountTitle: "অনলাইন / অ্যাকাউন্ট জালিয়াতি",
    catAccountDesc: "সোশ্যাল মিডিয়া বা ডিজিটাল অ্যাকাউন্ট হ্যাক হওয়া মামলার জন্য এই পথ।",
    catHarassmentTitle: "সাইবার হয়রানি (Cyber Harassment)",
    catHarassmentDesc: "অনলাইন হুমকি, ব্ল্যাকমেইল বা হয়রানি সংক্রান্ত মামলার জন্য এই পথ।",
    catJobTitle: "অনলাইন চাকরি জালিয়াতি",
    catJobDesc: "ভুয়া চাকরির অফার বা কাজের নামে রেজিস্ট্রেশন ফি নেওয়ার জন্য এই পথ।",
    catOtherTitle: "অন্যান্য সাইবার অপরাধ",
    catOtherDesc: "আমরা নিশ্চিতভাবে নির্দিষ্ট পথ চিহ্নিত করতে পারিনি। আপনি নিচে সবচেয়ে নিকটতম বিকল্প বেছে নিতে পারেন।",

    reviewTitle: "আমরা যা বুঝেছি।",
    reviewSubtitle: "আমরা আপনার বিবরণ থেকে মূল তথ্য বের করেছি। এগিয়ে যাওয়ার আগে অনুগ্রহ করে যত্ন সহকারে পর্যালোচনা করুন।",
    fieldIncident: "ঘটনা / সারসংক্ষেপ",
    fieldAmount: "জড়িত অর্থ",
    fieldMethod: "পদ্ধতি / মাধ্যম",
    fieldPath: "রিপোর্টিং পথ",
    saveFieldBtn: "সংরক্ষণ করুন",
    cancelFieldBtn: "বাতিল করুন",
    confirmQuestion: "এই তথ্য কি সঠিক?",
    confirmSubtitle: "আপনি এখন যেকোনো তথ্য সম্পাদনা করতে পারেন বা পরবর্তী ধাপে যেতে পারেন।",
    backToPathBtn: "রিপোর্টিং পথে ফিরে যান",
    yesContinueBtn: "হ্যাঁ, এগিয়ে যান →",

    detailsTitle: "আর কয়েকটি বিবরণ।",
    detailsSubtitle: "আপনার কাছে যে তথ্য আছে তা যোগ করুন। কিছু জানা না থাকলে আমাদের জানাতে পারেন।",
    q1Title: "এই ঘটনাটি কখন ঘটেছিল?",
    q1Sub: "আপনি নিশ্চিত না হলে একটি আনুমানিক তারিখ বা সময় গ্রহণযোগ্য।",
    dateLabel: "ঘটনার তারিখ",
    timeLabel: "আনুমানিক সময় (ঐচ্ছিক)",
    dontKnowOption: "আমি জানি না",
    q2Title: "কত টাকা জড়িত ছিল?",
    q2Sub: "আপনার হারানো বা চাওয়া টাকার পরিমাণ লিখুন।",
    amountLabel: "জড়িত অর্থ (₹)",
    q3Title: "আপনার কাছে কি ট্রানজ্যাকশন আইডি বা রেফারেন্স নম্বর আছে?",
    q3Sub: "আপনি এটি আপনার ব্যাঙ্ক স্টেটমেন্ট, এসএমএস বা রসিদে পেতে পারেন।",
    txnLabel: "ট্রানজ্যাকশন / UTR / রেফারেন্স আইডি",
    dontHaveOption: "আমার কাছে এটি নেই",
    bankLabel: "ব্যাঙ্ক বা পেমেন্ট পরিষেবা",
    bankSub: "যেমন SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "সংশ্লিষ্ট প্ল্যাটফর্ম বা ওয়েবসাইট",
    usernameLabel: "সন্দেহভাজন প্রোফাইল / ইউজারনেম / লিঙ্ক",
    companyLabel: "সংশ্লিষ্ট কোম্পানি বা ব্যক্তির নাম",
    contactLabel: "সন্দেহভাজন ব্যক্তির যোগাযোগ নম্বর / লিঙ্ক",
    backBtn: "পেছনে যান",
    nextEvidenceBtn: "পরবর্তী ধাপ: প্রমাণ যোগ করুন →",

    evidenceTitle: "সহায়ক প্রমাণ যোগ করুন",
    evidenceSubtitle: "কী ঘটেছে তা ব্যাখ্যা করতে সাহায্য করে এমন যেকোনো ফোল্ডার আপলোড করুন। সব কিছু থাকা আবশ্যক নয়।",
    whatCanUploadTitle: "আপনার অভিযোগের জন্য সহায়ক প্রমাণের পরামর্শ:",
    evidenceCheck1: "লেনদেন বা পেমেন্টের স্ক্রিনশট",
    evidenceCheck2: "প্রাপ্ত সন্দেহজনক এসএমএস বা ইমেল",
    evidenceCheck3: "ব্যাঙ্ক স্টেটমেন্ট বা পেমেন্ট রসিদ",
    evidenceCheck4: "সন্দেহভাজন ব্যক্তির প্রোফাইল, ফোন নম্বর বা লিঙ্ক",
    uploadAreaTitle: "প্রমাণ ফাইল আপলোড করুন",
    uploadAreaSub: "ফাইল বাছতে ক্লিক করুন বা এখানে ড্র্যাগ করুন (PNG, JPG, PDF সর্বোচ্চ 10MB)",
    uploadBtn: "ফাইল বাছুন",
    removeFileBtn: "মুছে ফেলুন",
    invalidFileError: "এই ফাইল ফর্ম্যাট সমর্থিত নয়। অনুগ্রহ করে PNG, JPG, বা PDF আপলোড করুন।",
    noEvidenceOption: "আমার কাছে এই মুহূর্তে আপলোড করার মতো প্রমাণ নেই",
    noEvidenceNotice: "আপনি কিছু আপলোড না করেও এগিয়ে যেতে পারেন। সিদ্ধান্ত আপনারই।",
    additionalNotesLabel: "আপনি কি আমাদের আর কিছু জানাতে চান? (ঐচ্ছিক)",
    additionalNotesPlaceholder: "আপলোড করা প্রমাণ ব্যাখ্যা করতে সহায়তা করে এমন কোনো অতিরিক্ত তথ্য যোগ করুন।",
    continueToSubmitBtn: "এগিয়ে যান →",

    reviewSubmitTitle: "আপনার অভিযোগ পর্যালোচনা করুন",
    reviewSubmitSubtitle: "এগিয়ে যাওয়ার আগে আপনার তথ্য যত্ন সহকারে পরীক্ষা করুন।",
    notSubmittedBadge: "আপনার অভিযোগ এখনও জমা দেওয়া হয়নি।",
    sec1Title: "১. আপনার বিবরণ",
    sec2Title: "২. রিপোর্টিং পথ",
    sec2Sub: "এটি আপনার নির্বাচিত রিপোর্টিং পথ।",
    sec2ChangeBtn: "পরিবর্তন",
    sec3Title: "৩. ঘটনার বিবরণ",
    sec3EditBtn: "বিবরণ সম্পাদনা করুন",
    sec4Title: "৪. প্রমাণ",
    sec4NoEvidence: "কোনো প্রমাণ সংযুক্ত করা হয়নি",
    sec4NoEvidenceChoice: "আমার কাছে এই মুহূর্তে প্রমাণ নেই।",
    sec4EditBtn: "প্রমাণ সম্পাদনা করুন",
    readyTitle: "এগিয়ে যেতে প্রস্তুত?",
    readySub: "আপনার অভিযোগটি পরবর্তী ওটিপি যাচাইকরণে যাবে। এটি এখনও জমা দেওয়া হয়নি।",
    confirmCheckboxLabel: "আমি উপরের তথ্য পর্যালোচনা করেছি এবং নিশ্চিত করছি যে এটি আমার জানা মতে সঠিক।",
    continueToOtpBtn: "ওটিপি যাচাইকরণে এগিয়ে যান →",

    otpTitle: "আপনার মোবাইল নম্বর যাচাই করুন",
    otpSubtitle: "আপনার অভিযোগ জমা দেওয়ার আগে আপনার পরিচয় যাচাই করতে আমরা একটি ওয়ান-টাইম পাসওয়ার্ড পাঠাব।",
    maskedNumberNotice: "ওটিপি পাঠানো হয়েছে +91 ••••••4821 নম্বরে",
    demoModeBadge: "ডেমো মোড: 123456 ব্যবহার করুন",
    otpLabel: "৬ সংখ্যার ওটিপি লিখুন",
    resendBtn: "ওটিপি পুনরায় পাঠান",
    resendCooldownText: "{sec} সেকেন্ডে পুনরায় পাঠান",
    otpErrorText: "সেই ওটিপি মিলছে না। অনুগ্রহ করে কোড পরীক্ষা করুন এবং আবার চেষ্টা করুন।",
    otpVerifiedSuccess: "মোবাইল নম্বর যাচাই করা হয়েছে",
    securityNoticeTitle: "আপনার তথ্য সুরক্ষিত",
    securityNoticeSub: "এই প্রোটোটাইপ অভিজ্ঞতার সময় আপনার অভিযোগের বিবরণ নিরাপদে সংরক্ষিত থাকে।",
    backToReviewBtn: "পর্যালোচনায় ফিরে যান",
    continueToSubmissionBtn: "জমা দেওয়ার জন্য এগিয়ে যান →",

    successTitle: "আপনার অভিযোগ জমা দেওয়া হয়েছে",
    successSubtitle: "আপনার অভিযোগ সফলভাবে গৃহীত হয়েছে।",
    complaintNumberLabel: "অভিযোগ নম্বর",
    copyBtn: "কপি করুন",
    copiedToast: "অভিযোগ নম্বর কপি করা হয়েছে।",
    submittedAtLabel: "জমা দেওয়ার তারিখ",
    downloadSummaryBtn: "সারসংক্ষেপ ডাউনলোড করুন",
    whatNextTitle: "পরবর্তী পদক্ষেপ কী?",
    timelineStep1: "অভিযোগ জমা দেওয়া হয়েছে",
    timelineStep2: "পর্যালোচনার অধীনে",
    timelineStep3: "প্রয়োজন হলে আরও পদক্ষেপ",
    timelineStep4: "স্ট্যাটাস আপডেট",
    nextStepsNotice: "এটি একটি প্রোটোটাইপ প্রদর্শনী। এখনও কোনো প্রকৃত পুলিশ কর্মকর্তা বা সরকারি বিভাগ বরাদ্দ করা হয়নি।",
    trackComplaintBtn: "আপনার অভিযোগ ট্র্যাক করুন →",
    returnHomeBtn: "হোম পেজে ফিরে যান",

    trackTitle: "আপনার অভিযোগ ট্র্যাক করুন",
    trackSubtitle: "আপনার সাইবার অপরাধ অভিযোগের বর্তমান স্ট্যাটাস পরীক্ষা করুন এবং পরবর্তীতে কী হবে তা দেখুন।",
    lookupLabel: "অভিযোগ নম্বর",
    lookupBtn: "স্ট্যাটাস পরীক্ষা করুন",
    lookupHelpText: "আপনি আপনার নিশ্চিতকরণ রসিদে আপনার অভিযোগ নম্বর পেতে পারেন।",
    notFoundError: "আমরা সেই নম্বর সহ কোনো অভিযোগ খুঁজে পাইনি।",
    currentStatusLabel: "বর্তমান স্ট্যাটাস",
    statusUnderReview: "পর্যালোচনার অধীনে",
    statusExplanation: "আপনার অভিযোগটি পাওয়া গেছে এবং বর্তমানে এই প্রোটোটাইপে পর্যালোচনার অধীনে দেখানো হচ্ছে।",
    timelineHeader: "অভিযোগ অগ্রগতির টাইমলাইন",
    stage1Title: "অভিযোগ জমা দেওয়া হয়েছে",
    stage1Sub: "আপনার অভিযোগ সফলভাবে রেকর্ড করা হয়েছে।",
    stage2Title: "অভিযোগ পাওয়া গেছে",
    stage2Sub: "আপনার অভিযোগ পাওয়া গেছে।",
    stage3Title: "পর্যালোচনার অধীনে",
    stage3Sub: "বর্তমান পর্যায় (প্রোটোটাইপ ডেমো অবস্থা)",
    stage4Title: "আরও পদক্ষেপ / আপডেট",
    stage4Sub: "অতিরিক্ত তথ্যের প্রয়োজন হলে আপনি একটি আপডেট পেতে পারেন।",
    compactSummaryTitle: "অভিযোগ সারসংক্ষেপ",
    backToConfirmBtn: "নিশ্চিতকরণে ফিরে যান",
    startNewBtn: "একটি নতুন অভিযোগ শুরু করুন",

    footerNotice: "এই ওয়েবসাইটটি কেবল গবেষণা এবং মূল্যায়নের উদ্দেশ্যে একটি ইউএক্স প্রোটোটাইপ। এটি অফিসিয়াল দাখিলের জন্য নয়।",
    footerGovInfo: "জাতীয় সাইবার অপরাধ রিপোর্টিং পোর্টাল | স্বরাষ্ট্র মন্ত্রক, ভারত সরকার",
    accessibilityTitle: "অ্যাক্সেসিবিলিটি সেটিংস",
    fontSizeLabel: "ফন্টের আকার",
    fontScaleDefault: "মানক",
    lineHeightLabel: "লাইন স্পেসিং",
    letterSpacingLabel: "লেটার স্পেসিং",
    contrastModeLabel: "কনট্রাস্ট মোড",
    contrastNormal: "সাধারণ কনট্রাস্ট",
    contrastHighLight: "উচ্চ কনট্রাস্ট (লাইটিং)",
    contrastHighDark: "উচ্চ কনট্রাস্ট (ডার্ক)",
    focusHighlightLabel: "কীবোর্ড ফোকাস রিং",
    resetBtn: "রিসেট করুন",
    closeBtn: "বন্ধ করুন",
    menuTitle: "দ্রুত নেভিগেশন",
    menuHome: "হোম পেজ",
    menuAbout: "I4C এবং পোর্টাল সম্পর্কে",
    menuHelplines: "জরুরি হেল্পলাইন (১৯৩০)",
    menuFAQ: "সাধারণ জিজ্ঞাসা"
  },
  te: {
    emergencyBanner: "ఆర్థిక సైబర్ మోసాల కోసం అత్యవసర హెల్ప్‌లైన్: దొంగిలించబడిన నిధులను తక్షణమే స్తంభింపజేయడానికి 1930కి కాల్ చేయండి.",
    helplineShort: "1930",
    helpline24x7: "24x7 హెల్ప్‌లైన్",
    govTitle: "భారత ప్రభుత్వం",
    govMinistry: "హోం వ్యవహారాల మంత్రిత్వ శాఖ",
    i4cTitle: "ఇండియన్ సైబర్ క్రైమ్ కోఆర్డినేషన్ సెంటర్ (I4C)",
    portalName: "జాతీయ సైబర్ నేరాల నివేదిక పోర్టల్",
    uxPrototype: "UX ప్రోటోటైప్",
    langSelect: "భాష",
    accessibility: "యాక్సెసిబిలిటీ",
    quickMenu: "మెనూ",

    welcomeTitle: "జాతీయ సైబర్ నేరాల నివేదిక పోర్టల్‌కు స్వాగతం",
    welcomeSubtitle: "సైబర్ నేరాలను నివేదించడంలో మీకు సహాయం చేయడానికి మేము ఇక్కడ ఉన్నాము.",
    welcomeExplanation: "మీ ఫిర్యాదు ఏ వర్గానికి చెందినదో మీరు తెలుసుకోవాల్సిన అవసరం లేదు. ఏమి జరిగిందో మాకు చెప్పండి మరియు మేము మిమ్మల్ని సరైన మార్గంలో నడిపిస్తాము.",
    startReportingBtn: "నివేదించడం ప్రారంభించండి →",
    trustBadge: "సురక్షితమైనది • రహస్యమైనది • భారత ప్రభుత్వంచే విశ్వసించబడినది",
    reassurance1Title: "మీ సమాచారం సురక్షితం",
    reassurance1Desc: "మీ సమాచారం ఎల్లప్పుడూ సురక్షితంగా మరియు రహస్యంగా ఉంటుంది.",
    reassurance2Title: "భారతీయ భాషలలో అందుబాటులో ఉంది",
    reassurance2Desc: "మీకు అనుకూలమైన భాషలో నివేదిక నమోదు చేయండి.",
    reassurance3Title: "మీ పురోగతి ఎప్పటికప్పుడు సేవ్ చేయబడుతుంది",
    reassurance3Desc: "ఏ సమాచారం కోల్పోకుండా మీ నివేదికను కొనసాగించండి.",
    reassurance4Title: "సహాయం కావాలా?",
    reassurance4Desc: "ఆర్థిక సైబర్ మోసాల కోసం వెంటనే 1930కి కాల్ చేయండి.",

    step1Label: "ఏమి జరిగిందో మాకు చెప్పండి",
    step2Label: "సరైన మార్గాన్ని ఎంచుకోండి",
    step3Label: "సమాచారాన్ని సమీక్షించండి",
    step4Label: "వివరాలను జోడించండి",
    step5Label: "ఆధారాలను జోడించండి",
    step6Label: "సమీక్షించి సమర్పించండి",
    savedJustNow: "ఇప్పుడే సేవ్ చేయబడింది",
    tellUsTitle: "ఏమి జరిగిందో మాకు చెప్పండి",
    tellUsSubtitle: "మీ స్వంత మాటలలో సంఘటనను వివరించండి. వర్గం ఏంటో తెలుసుకోవాల్సిన అవసరం లేదు.",
    textareaPlaceholder: "ఉదాహరణకు: ఎవరైనా నాకు నకిలీ విద్యుత్ బిల్లు SMS పంపారు మరియు నేను చెల్లింపు లింక్‌ను క్లిక్ చేసిన తర్వాత ₹10,000 కట్ అయ్యాయి.",
    textSecureNotice: "మీ సమాచారం సురక్షితం మరియు దర్యాప్తు కోసం మాత్రమే ఉపయోగించబడుతుంది.",
    orDivider: "లేదా",
    speakTitle: "వాయిస్ ద్వారా చెప్పండి",
    speakSubtitle: "మీరు వాయిస్ ఉపయోగించి సంఘటనను వివరించవచ్చు. మేము దానిని టెక్స్ట్‌గా మారుస్తాము.",
    startSpeaking: "మాట్లాడటం ప్రారంభించండి",
    stopRecording: "రికార్డింగ్ ఆపండి",
    recordingActive: "రికార్డింగ్ జరుగుతోంది...",
    privacyNotice: "మేము మీ గోప్యతను గౌరవిస్తాము. వాయిస్ రికార్డింగ్‌లు సేవ్ చేయబడవు.",
    transcriptTitle: "మేము విన్నది ఇదిగో",
    editBtn: "సవరించండి",
    recordAgainBtn: "మళ్లీ రికార్డ్ చేయండి",
    useThisBtn: "ఈ టెక్స్ట్‌ని ఉపయోగించండి",
    notSureTitle: "ఏమి రాయాలో అర్థం కావడం లేదా?",
    notSureDesc: "క్రింది ఉదాహరణల నుండి ఎంచుకోండి లేదా మీ స్వంత మాటలలో రాయండి.",
    viewExamples: "ఉదాహరణలను చూడండి",
    hideExamples: "ఉదాహరణలను దాచండి",
    scenario1: "లింక్ క్లిక్ చేసిన తర్వాత నా బ్యాంక్ ఖాతా నుండి డబ్బు కట్ అయింది.",
    scenario2: "ఎవరైనా నాకు UPI / QR కోడ్‌పై అనుమానాస్పద చెల్లింపు అభ్యర్థనను పంపారు.",
    scenario3: "నా సోషల్ మీడియా ఖాతా హ్యాక్ అయింది లేదా ఎవరైనా నకిలీ ప్రొఫైల్ సృష్టించారు.",
    scenario4: "రిజిస్ట్రేషన్ ఫీజు అడిగే నకిలీ ఉద్యోగ ఆఫర్ లెటర్ నాకు వచ్చింది.",
    continueBtn: "కొనసాగించండి →",

    findPathTitle: "సరైన నివేదిక మార్గాన్ని కనుగొనడంలో మేము మీకు సహాయం చేయగలము",
    findPathSubtitle: "మీరు చెప్పిన సమాచారం ఆధారంగా, మేము ఒక నివేదిక మార్గాన్ని గుర్తించాము. దయచేసి ముందుకు వెళ్లేముందు దానిని సమీక్షించండి.",
    suggestedBadge: "సూచించబడిన నివేదిక మార్గం",
    basedOnStory: "మీరు ఇచ్చిన సమాచారం ఆధారంగా, ఇది దీనికి సంబంధించినది:",
    guidanceNotice: "ఇది మార్గదర్శకత్వం మాత్రమే. చివరి నిర్ణయం మీదే.",
    yourStoryTitle: "మీ ఫిర్యాదు వివరాలు",
    editStoryBtn: "వివరాలను సవరించండి",
    continueWithPathBtn: "ఈ మార్గంలో కొనసాగించండి →",
    chooseDifferentPathBtn: "వేరొక మార్గాన్ని ఎంచుకోండి",
    hideDifferentPathBtn: "ఎంపికలను దాచండి",
    selectCategoryPrompt: "మీ ఫిర్యాదుకు బాగా సరిపోయే నివేదిక మార్గాన్ని ఎంచుకోండి:",

    catFinancialTitle: "ఆర్థిక మోసం (Financial Fraud)",
    catFinancialDesc: "డిజిటల్ చెల్లింపులు, బ్యాంక్ ఖాతా లేదా UPI ద్వారా డబ్బు కోల్పోయిన కేసుల కోసం ఈ మార్గం.",
    catAccountTitle: "ఆన్‌లైన్ / ఖాతా మోసం",
    catAccountDesc: "సోషల్ మీడియా లేదా డిజిటల్ ఖాతా హ్యాక్ అయిన కేసుల కోసం ఈ మార్గం.",
    catHarassmentTitle: "సైబర్ వేధింపులు (Cyber Harassment)",
    catHarassmentDesc: "ఆన్‌లైన్ బెదిరింపులు, బ్లాక్‌మెయిలింగ్ లేదా వేధింపులకు సంబంధించిన కేసుల కోసం ఈ మార్గం.",
    catJobTitle: "ఆన్‌లైన్ ఉద్యోగ మోసం",
    catJobDesc: "నకిలీ ఉద్యోగ ఆఫర్లు లేదా రిజిస్ట్రేషన్ ఫీజుల పేరుతో జరిగే మోసాల కోసం ఈ మార్గం.",
    catOtherTitle: "ఇతర సైబర్ నేరాలు",
    catOtherDesc: "మేము నిర్దిష్ట మార్గాన్ని గురించలేకపోయాము. మీరు మీ వివరాలను సమీక్షించి క్రింది సరైన మార్గాన్ని ఎంచుకోవచ్చు.",

    reviewTitle: "మేము గ్రహించిన వివరాలు ఇవిగో.",
    reviewSubtitle: "మీ వివరాల నుండి మేము ముఖ్యమైన విషయాలను సేకరించాము. కొనసాగే ముందు దయచేసి జాగ్రత్తగా సమీక్షించండి.",
    fieldIncident: "సంఘటన / సారాంశం",
    fieldAmount: "బాధిత మొత్తం",
    fieldMethod: "పద్ధతి / మార్గం",
    fieldPath: "నివేదిక మార్గం",
    saveFieldBtn: "సేవ్ చేయండి",
    cancelFieldBtn: "రద్దు చేయండి",
    confirmQuestion: "ఈ సమాచారం సరైనదేనా?",
    confirmSubtitle: "మీరు ఇప్పుడు ఏ వివరాలనైనా సవరించవచ్చు లేదా తదుపరి దశకు వెళ్ళవచ్చు.",
    backToPathBtn: "నివేదిక మార్గానికి తిరిగి వెళ్ళండి",
    yesContinueBtn: "అవును, కొనసాగించండి →",

    detailsTitle: "మరికొన్ని వివరాలు మాత్రమే.",
    detailsSubtitle: "మీ వద్ద ఉన్న సమాచారాన్ని జోడించండి. మీకు తెలియని విషయం ఉంటే మాకు చెప్పవచ్చు.",
    q1Title: "ఈ సంఘటన ఎప్పుడు జరిగింది?",
    q1Sub: "మీకు కచ్చితంగా తెలియకపోతే అంచనా తేదీ లేదా సమయం సరిపోతుంది.",
    dateLabel: "సంఘటన తేదీ",
    timeLabel: "అంచనా సమయం (ఐచ్ఛికం)",
    dontKnowOption: "నాకు తెలియదు",
    q2Title: "ఎంత మొత్తం డబ్బు ప్రమేయం ఉంది?",
    q2Sub: "మీరు కోల్పోయిన లేదా అడిగిన మొత్తాన్ని నమోదు చేయండి.",
    amountLabel: "మొత్తం (₹)",
    q3Title: "మీ వద్ద లావాదేవీ ID లేదా రిఫరెన్స్ నంబర్ ఉందా?",
    q3Sub: "ఇది మీ బ్యాంక్ స్టేట్‌మెంట్, SMS లేదా రసీదులో ఉండవచ్చు.",
    txnLabel: "లావాదేవీ / UTR / రిఫరెన్స్ ID",
    dontHaveOption: "నా వద్ద లేదు",
    bankLabel: "బ్యాంక్ లేదా పేమెంట్ సేవ",
    bankSub: "ఉదా. SBI, HDFC, PhonePe, Paytm, Google Pay",
    platformLabel: "సంబంధిత ప్లాట్‌ఫారమ్ లేదా వెబ్‌సైట్",
    usernameLabel: "అనుమానితుడి ప్రొఫైల్ / యూజర్‌నేమ్ / లింక్",
    companyLabel: "సంబంధిత సంస్థ లేదా వ్యక్తి పేరు",
    contactLabel: "అనుమానితుడి సంప్రదింపు సంఖ్య / లింక్",
    backBtn: "వెనుకకు",
    nextEvidenceBtn: "తదుపరి దశ: ఆధారం జోడించండి →",

    evidenceTitle: "ఆధారాలను జోడించండి",
    evidenceSubtitle: "ఏమి జరిగిందో వివరించడానికి సహాయపడే ఏదైనా ఫైల్‌ను అప్‌లోడ్ చేయండి. అన్నీ ఉండాల్సిన అవసరం లేదు.",
    whatCanUploadTitle: "మీ ఫిర్యాదుకు సహాయపడే ఆధారాల సూచనలు:",
    evidenceCheck1: "లావాదేవీ లేదా పేమెంట్ స్క్రీన్‌షాట్‌లు",
    evidenceCheck2: "వచ్చిన అనుమానాస్పద SMS లేదా ఇమెయిల్",
    evidenceCheck3: "బ్యాంక్ స్టేట్‌మెంట్ లేదా రసీదు",
    evidenceCheck4: "అనుమానితుడి ప్రొఫైల్ లేదా ఫోన్ నంబర్",
    uploadAreaTitle: "ఆధారాల ఫైళ్లను అప్‌లోడ్ చేయండి",
    uploadAreaSub: "ఎంచుకోవడానికి క్లిక్ చేయండి లేదా ఇక్కడ డ్రాగ్ చేయండి (PNG, JPG, PDF గరిష్టంగా 10MB)",
    uploadBtn: "ఫైల్‌ను ఎంచుకోండి",
    removeFileBtn: "తొలగించండి",
    invalidFileError: "ఈ ఫైల్ ఫార్మాట్ సపోర్ట్ చేయదు. దయచేసి PNG, JPG లేదా PDFని అప్‌లోడ్ చేయండి.",
    noEvidenceOption: "నా వద్ద ప్రస్తుతం అప్‌లోడ్ చేయడానికి ఆధారాలు లేవు",
    noEvidenceNotice: "మీరు ఏమీ అప్‌లోడ్ చేయకుండా కూడా కొనసాగవచ్చు. నిర్ణయం మీదే.",
    additionalNotesLabel: "మీరు మాకు ఇంకా ఏమైనా చెప్పాలనుకుంటున్నారా? (ఐచ్ఛికం)",
    additionalNotesPlaceholder: "అప్‌లోడ్ చేసిన ఆధారాలను వివరించడానికి సహాయపడే అదనపు సమాచారాన్ని జోడించండి.",
    continueToSubmitBtn: "కొనసాగించండి →",

    reviewSubmitTitle: "మీ ఫిర్యాదును సమీక్షించండి",
    reviewSubmitSubtitle: "కొనసాగించే ముందు మీ సమాచారాన్ని జాగ్రత్తగా పరిశీలించండి.",
    notSubmittedBadge: "మీ ఫిర్యాదు ఇంకా సమర్పించబడలేదు.",
    sec1Title: "1. మీ ఫిర్యాదు వివరాలు",
    sec2Title: "2. నివేదిక మార్గం",
    sec2Sub: "ఇది మీరు ఎంచుకున్న నివేదిక మార్గం.",
    sec2ChangeBtn: "మార్చండి",
    sec3Title: "3. సంఘటన వివరాలు",
    sec3EditBtn: "వివరాలను సవరించండి",
    sec4Title: "4. ఆధారాలు",
    sec4NoEvidence: "ఏ ఆధారాలు జత చేయబడలేదు",
    sec4NoEvidenceChoice: "నా వద్ద ప్రస్తుతం ఆధారాలు లేవు.",
    sec4EditBtn: "ఆధారాలను సవరించండి",
    readyTitle: "కొనసాగడానికి సిద్ధంగా ఉన్నారా?",
    readySub: "మీ ఫిర్యాదు తదుపరి OTP ప్రామాణీకరణకు వెళుతుంది. ఇది ఇంకా సమర్పించబడలేదు.",
    confirmCheckboxLabel: "నేను పైన పేర్కొన్న సమాచారాన్ని సమీక్షించాను మరియు నా జ్ఞానం మేరకు అది సరైనదని ధృవీకరిస్తున్నాను.",
    continueToOtpBtn: "OTP ప్రామాణీకరణకు కొనసాగించండి →",

    otpTitle: "మీ మొబైల్ నంబర్‌ను ధృవీకరించండి",
    otpSubtitle: "మీ ఫిర్యాదు సమర్పించబడటానికి ముందు మీ గుర్తింపును ధృవీకరించడానికి మేము ఒక నిమిషం పాస్‌వర్డ్‌ను పంపుతాము.",
    maskedNumberNotice: "OTP +91 ••••••4821 కి పంపబడింది",
    demoModeBadge: "డెమో మోడ్: 123456 ఉపయోగించండి",
    otpLabel: "6 అంకెల OTP నమోదు చేయండి",
    resendBtn: "OTP మళ్లీ పంపండి",
    resendCooldownText: "{sec} సెకన్లలో మళ్లీ పంపండి",
    otpErrorText: "ఆ OTP సరిపోలడం లేదు. దయచేసి కోడ్‌ని తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
    otpVerifiedSuccess: "మొబైల్ నంబర్ ధృవీకరించబడింది",
    securityNoticeTitle: "మీ సమాచారం రక్షించబడుతుంది",
    securityNoticeSub: "ఈ ప్రోటోటైప్ అనుభవంలో మీ ఫిర్యాదు వివరాలు సురక్షితంగా సేవ్ చేయబడతాయి.",
    backToReviewBtn: "సమీక్షకు తిరిగి వెళ్లండి",
    continueToSubmissionBtn: "సమర్పణకు కొనసాగించండి →",

    successTitle: "మీ ఫిర్యాదు సమర్పించబడింది",
    successSubtitle: "మీ ఫిర్యాదు విజయవంతంగా స్వీకరించబడింది.",
    complaintNumberLabel: "ఫిర్యాదు సంఖ్య",
    copyBtn: "కాపీ చేయండి",
    copiedToast: "ఫిర్యాదు సంఖ్య కాపీ చేయబడింది.",
    submittedAtLabel: "సమర్పించిన తేదీ",
    downloadSummaryBtn: "సారాంశాన్ని డౌన్‌లోడ్ చేయండి",
    whatNextTitle: "తదుపరి ఏమి జరుగుతుంది?",
    timelineStep1: "ఫిర్యాదు సమర్పించబడింది",
    timelineStep2: "సమీక్షలో ఉంది",
    timelineStep3: "అవసరమైతే తదుపరి చర్య",
    timelineStep4: "స్టేటస్ అప్‌డేట్‌లు",
    nextStepsNotice: "ఇది ప్రోటోటైప్ ప్రదర్శన మాత్రమే. ఇంకా ఏ ఇతర పోలీస్ అధికారి లేదా ప్రభుత్వ విభాగం కేటాయించబడలేదు.",
    trackComplaintBtn: "మీ ఫిర్యాదును ట్రాక్ చేయండి →",
    returnHomeBtn: "ముఖ్య పేజీకి తిరిగి వెళ్లండి",

    trackTitle: "మీ ఫిర్యాదును ట్రాక్ చేయండి",
    trackSubtitle: "మీ సైబర్ నేర ఫిర్యాదు యొక్క ప్రస్తుత స్థితిని తనిఖీ చేయండి మరియు తదుపరి ఏమి జరుగుతుందో చూడండి.",
    lookupLabel: "ఫిర్యాదు సంఖ్య",
    lookupBtn: "స్థితిని తనిఖీ చేయండి",
    lookupHelpText: "మీరు మీ ధృవీకరణ రసీదుపై మీ ఫిర్యాదు సంఖ్యను కనుగొనవచ్చు.",
    notFoundError: "ఆ సంఖ్యతో కూడిన ఫిర్యాదును మేము కనుగొనలేకపోయాము.",
    currentStatusLabel: "ప్రస్తుత స్థితి",
    statusUnderReview: "సమీక్షలో ఉంది",
    statusExplanation: "మీ ఫిర్యాదు స్వీకరించబడింది మరియు ప్రస్తుతం ఈ ప్రోటోటైప్‌లో సమీక్షలో ఉన్నట్లు చూపబడింది.",
    timelineHeader: "ఫిర్యాదు పురోగతి కాలక్రమం",
    stage1Title: "ఫిర్యాదు సమర్పించబడింది",
    stage1Sub: "మీ ఫిర్యాదు విజయవంతంగా నమోదు చేయబడింది.",
    stage2Title: "ఫిర్యాదు స్వీకరించబడింది",
    stage2Sub: "మీ ఫిర్యాదు స్వీకరించబడింది.",
    stage3Title: "సమీక్షలో ఉంది",
    stage3Sub: "ప్రస్తుత దశ (ప్రోటోటైప్ డెమో స్థితి)",
    stage4Title: "తదుపరి చర్య / అప్‌డేట్",
    stage4Sub: "అదనపు సమాచారం అవసరమైతే మీకు అప్‌డేట్ రావచ్చు.",
    compactSummaryTitle: "ఫిర్యాదు సారాంశం",
    backToConfirmBtn: "ధృవీకరణకు తిరిగి వెళ్లండి",
    startNewBtn: "కొత్త ఫిర్యాదును ప్రారంభించండి",

    footerNotice: "ఈ వెబ్‌సైట్ పరిశోధన మరియు మూల్యాంకన అవసరాల కోసం రూపొందించబడిన UX ప్రోటోటైప్ మాత్రమే. అధికారిక నమోదు కోసం కాదు.",
    footerGovInfo: "జాతీయ సైబర్ నేరాల నివేదిక పోర్టల్ | హోం వ్యవహారాల మంత్రిత్వ శాఖ, భారత ప్రభుత్వం",
    accessibilityTitle: "యాక్సెసిబిలిటీ నియంత్రణలు",
    fontSizeLabel: "ఫాంట్ పరిమాణం",
    fontScaleDefault: "సాధారణ",
    lineHeightLabel: "లైన్ స్పేసింగ్",
    letterSpacingLabel: "అక్షరాల స్పేసింగ్",
    contrastModeLabel: "కాంట్రాస్ట్ మోడ్",
    contrastNormal: "సాధారణ కాంట్రాస్ట్",
    contrastHighLight: "హై కాంట్రాస్ట్ (లైట్)",
    contrastHighDark: "హై కాంట్రాస్ట్ (డార్క్)",
    focusHighlightLabel: "కీబోర్డ్ ఫోకస్ రింగ్",
    resetBtn: "రీసెట్ చేయండి",
    closeBtn: "మూసివేయి",
    menuTitle: "త్వరిత నావిగేషన్",
    menuHome: "ముఖ్య పేజీ",
    menuAbout: "I4C మరియు పోర్టల్ గురించి",
    menuHelplines: "అత్యవసర హెల్ప్‌లైన్ (1930)",
    menuFAQ: "తరచుగా అడిగే ప్రశ్నలు"
  }
};
