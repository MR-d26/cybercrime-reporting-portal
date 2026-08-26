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
    backToPathBtn: "← Back to reporting path",
    yesContinueBtn: "Yes, continue →",

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
    backToPathBtn: "← रिपोर्टिंग मार्ग पर वापस जाएं",
    yesContinueBtn: "हाँ, आगे बढ़ें →",

    footerNotice: "यह वेबसाइट केवल अनुसंधान और मूल्यांकन उद्देश्यों के लिए एक यूएक्स प्रोटोटाइप है। यह आधिकारिक रिपोर्टिंग के लिए नहीं है।",
    footerGovInfo: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल | गृह मंत्रालय, भारत सरकार",
    accessibilityTitle: "सुगम्यता नियंत्रण (Accessibility)",
    fontSizeLabel: "फ़ॉन्ट का आकार",
    fontScaleDefault: "मानक",
    lineHeightLabel: "पंक्ति रिक्ति",
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
    backToPathBtn: "← रिपोर्टिंग मार्गावर परत जा",
    yesContinueBtn: "होय, पुढे जा →",

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
    backToPathBtn: "← புகாரளிப்பு வழிக்குத் திரும்பு",
    yesContinueBtn: "ஆம், தொடரவும் →",

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
    backToPathBtn: "← রিপোর্টিং পথে ফিরে যান",
    yesContinueBtn: "হ্যাঁ, এগিয়ে যান →",

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
    notSureDesc: "క్రింది ఉదాహరణల నుండి ఎంచుకోండి లేదా మీ ಸ್ವంత మాటలలో రాయండి.",
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
    backToPathBtn: "← నివేదిక మార్గానికి తిరిగి వెళ్ళండి",
    yesContinueBtn: "అవును, కొనసాగించండి →",

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
