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
