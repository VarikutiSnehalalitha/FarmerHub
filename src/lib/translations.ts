import { LanguageCode } from '@/types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  helplineLabel: string;

  // Navigation
  navHome: string;
  navMyCrops: string;
  navCropDoctor: string;
  navWeather: string;
  navMandi: string;
  navSchemes: string;
  navExpert: string;
  navUpdates: string;
  navMyFarm: string;
  navProfile: string;

  // Actions
  actionSearch: string;
  actionAddCrop: string;
  actionDiagnoseNow: string;
  actionCallKisanHelp: string;
  actionAskVoice: string;
  actionChangeLang: string;
  actionChangeLocation: string;
  actionSave: string;
  actionCalculateProfit: string;
  actionListenAudio: string;
  actionStopAudio: string;

  // Sections
  headingQuickActions: string;
  headingMyActiveCrops: string;
  headingWeatherAdvisory: string;
  headingLiveMandiRates: string;
  headingGovtSchemes: string;
  headingPestDoctor: string;
  headingDailyFeed: string;

  // Banner & Greeting
  welcomeGreeting: string;
  todayAdvisoryAvailable: string;
  acresField: string;

  // Disclaimers & Alerts
  bannerDemoMode: string;
  disclaimerMedical: string;
  spraySuitable: string;
  sprayUnsuitable: string;
  irrigationNeeded: string;
  irrigationNotNeeded: string;

  // Metrics
  windSpeed: string;
  rainProbability: string;
  humidity: string;
  uvIndex: string;

  // Subtitles & Micro-copy
  cropDoctorAction: string;
  cropDoctorSub: string;
  mandiActionSub: string;
  schemesActionSub: string;
  weatherActionSub: string;
  kccActionSub: string;
  allCropsView: string;
  allMandisCompare: string;
  modalRate: string;
  minRate: string;
  maxRate: string;
  perQuintal: string;
  varietyLabel: string;
  acreageLabel: string;
  sowingDateLabel: string;
  harvestDateLabel: string;
  upcomingTask: string;
  sourceLabel: string;
  arrivalsLabel: string;
  tonnes: string;
  dateLabel: string;

  // Location selector
  locationSelectorTitle: string;
  locationSelectorSub: string;

  // Voice Assistant
  voicePrompt: string;
  voiceListening: string;
  voicePlaceholder: string;
}

export const TRANSLATIONS: Record<string, Partial<TranslationDictionary>> = {
  te: {
    appName: 'కిసాన్ సహాయక్',
    tagline: 'భారతీయ రైతుల నిజమైన డిజిటల్ మిత్రుడు',
    helplineLabel: 'జాతీయ కిసాన్ హెల్ప్‌లైన్ (24x7 ఉచితం):',

    navHome: 'హోమ్',
    navMyCrops: 'నా పంటలు',
    navCropDoctor: 'క్రాప్ డాక్టర్',
    navWeather: 'వాతావరణం',
    navMandi: 'మార్కెట్ ధరలు',
    navSchemes: 'ప్రభుత్వ పథకాలు',
    navExpert: 'వ్యవసాయ నిపుణులు',
    navUpdates: 'రోజువారీ అప్‌డేట్స్',
    navMyFarm: 'నా పొలం & ఖర్చులు',
    navProfile: 'ప్రొఫైల్ & సెట్టింగ్‌లు',

    actionSearch: 'శోధించండి...',
    actionAddCrop: 'కొత్త పంటను జోడించండి',
    actionDiagnoseNow: 'రోగ నిర్ధారణ చేయండి',
    actionCallKisanHelp: 'కిసాన్ కాల్ సెంటర్ 1800-180-1551',
    actionAskVoice: 'వాయిస్ అసిస్టెంట్ (మాట్లాడండి)',
    actionChangeLang: 'భాష మార్చండి',
    actionChangeLocation: 'ప్రాంతం మార్చండి',
    actionSave: 'భద్రపరచండి',
    actionCalculateProfit: 'నికర లాభం లెక్కించండి',
    actionListenAudio: 'వినండి (ఆడియో)',
    actionStopAudio: 'ఆపండి',

    headingQuickActions: 'త్వరిత సేవలు',
    headingMyActiveCrops: 'పొలంలో ఉన్న పంటలు',
    headingWeatherAdvisory: 'వాతావరణం & వ్యవసాయ సలహా',
    headingLiveMandiRates: 'నేటి తాజా మార్కెట్ ధరలు',
    headingGovtSchemes: 'రైతు సంక్షేమ పథకాలు & సబ్సిడీలు',
    headingPestDoctor: 'క్రాప్ డాక్టర్: తెగులు గుర్తింపు & మందులు',
    headingDailyFeed: 'రోజువారీ వ్యవసాయ వార్తలు & హెచ్చరికలు',

    welcomeGreeting: 'నమస్కారం',
    todayAdvisoryAvailable: 'ఈరోజు మీ పొలానికి వాతావరణం, తాజా మార్కెట్ ధరలు మరియు వ్యవసాయ సలహాలు సిద్ధంగా ఉన్నాయి.',
    acresField: 'ఎకరాల పొలం',

    bannerDemoMode: 'డెమో మోడ్: మీరు లాగిన్ లేకుండా అన్ని ఫీచర్లను ఉపయోగించవచ్చు.',
    disclaimerMedical: 'ఈ సలహాలు ICAR / వ్యవసాయ పరిశోధనా సంస్థల ప్రమాణాల ప్రకారం ఇవ్వబడ్డాయి. మందుల పిచికారీకి ముందు లేబుల్ చదవండి.',
    spraySuitable: 'మందుల పిచికారీకి వాతావరణం అనుకూలంగా ఉంది (Spray Safe)',
    sprayUnsuitable: 'గాలులు లేదా వర్షం అవకాశం - పిచికారీ చేయవద్దు (Postpone Spray)',
    irrigationNeeded: 'పొలానికి నీటి తడులు అవసరం.',
    irrigationNotNeeded: 'వర్ష సూచన ఉన్నందున నీటి తడులు ఆపండి.',

    windSpeed: 'గాలి వేగం',
    rainProbability: 'వర్షం పడే అవకాశం',
    humidity: 'తేమ శాతం',
    uvIndex: 'UV సూచిక',

    cropDoctorAction: 'క్రాప్ డాక్టర్',
    cropDoctorSub: 'ఫోటోతో తెగులును గుర్తించండి',
    mandiActionSub: 'నేటి తాజా ధరలు',
    schemesActionSub: 'సబ్సిడీలు & అర్హత',
    weatherActionSub: '7 రోజుల వాతావరణం',
    kccActionSub: 'ఉచిత కిసాన్ హెల్ప్‌లైన్',
    allCropsView: 'అన్ని పంటలను చూడండి',
    allMandisCompare: 'అన్ని మార్కెట్లను పోల్చండి',
    modalRate: 'మోడల్ ధర',
    minRate: 'కనిష్ట',
    maxRate: 'గరిష్ట',
    perQuintal: 'క్వింటాల్‌కు (₹/Qtl)',
    varietyLabel: 'రకం',
    acreageLabel: 'విస్తీర్ణం',
    sowingDateLabel: 'విత్తిన తేదీ',
    harvestDateLabel: 'కోత తేదీ',
    upcomingTask: 'రాబోయే వ్యవసాయ పని',
    sourceLabel: 'మూలం',
    arrivalsLabel: 'రాబడి',
    tonnes: 'టన్నులు',
    dateLabel: 'తేదీ',

    locationSelectorTitle: 'జిల్లా మరియు రాష్ట్రాన్ని ఎంచుకోండి',
    locationSelectorSub: 'వాతావరణం, మార్కెట్ ధరలు మరియు సలహాలు ఈ జిల్లా ప్రకారం చూపబడతాయి',

    voicePrompt: 'నమస్కారం రైతు సోదరా! మీరు వాతావరణం, మార్కెట్ ధరలు లేదా పంట తెగుళ్ల గురించి నన్ను అడగవచ్చు.',
    voiceListening: 'వింటున్నాము... దయచేసి మాట్లాడండి',
    voicePlaceholder: 'ఉదా. ఈరోజు మార్కెట్‌లో మిర్చి లేదా పత్తి ధర ఎంత?',
  },

  hi: {
    appName: 'किसान सहायक',
    tagline: 'भारतीय किसानों का सच्चा डिजिटल साथी',
    helplineLabel: 'राष्ट्रीय किसान हेल्पलाइन (24x7 निःशुल्क):',

    navHome: 'होम',
    navMyCrops: 'मेरी फसलें',
    navCropDoctor: 'फसल डॉक्टर',
    navWeather: 'मौसम व सलाह',
    navMandi: 'मंडी भाव',
    navSchemes: 'सरकारी योजनाएं',
    navExpert: 'कृषि विशेषज्ञ',
    navUpdates: 'दैनिक अपडेट',
    navMyFarm: 'मेरा खेत व खर्च',
    navProfile: 'प्रोफ़ाइल व सेटिंग्स',

    actionSearch: 'खोजें...',
    actionAddCrop: 'नई फसल जोड़ें',
    actionDiagnoseNow: 'रोग की जांच करें',
    actionCallKisanHelp: 'किसान कॉल सेंटर 1800-180-1551',
    actionAskVoice: 'बोलकर पूछें (AI Voice)',
    actionChangeLang: 'भाषा बदलें',
    actionChangeLocation: 'स्थान बदलें',
    actionSave: 'सहेजें',
    actionCalculateProfit: 'शुद्ध मुनाफा निकालें',
    actionListenAudio: 'बोलकर सुनें',
    actionStopAudio: 'रोकें',

    headingQuickActions: 'त्वरित सेवाएं',
    headingMyActiveCrops: 'खेत में लगी फसलें',
    headingWeatherAdvisory: 'मौसम व कृषि सलाह',
    headingLiveMandiRates: 'आज के ताज़ा मंडी भाव',
    headingGovtSchemes: 'किसानों के लिए प्रमुख योजनाएं',
    headingPestDoctor: 'फसल डॉक्टर: रोग पहचानें व दवा जानें',
    headingDailyFeed: 'दैनिक कृषि समाचार व अलर्ट',

    welcomeGreeting: 'राम-राम',
    todayAdvisoryAvailable: 'आज आपके खेत के लिए मौसम, ताज़ा मंडी भाव और कृषि सलाह उपलब्ध हैं।',
    acresField: 'एकड़ खेत',

    bannerDemoMode: 'डेमो मोड सक्रिय: आप बिना लॉगिन के सभी सुविधाओं का परीक्षण कर सकते हैं।',
    disclaimerMedical: 'यह सलाह आईसीएआर / कृषि विज्ञान केंद्र के मानकों पर आधारित है। दवा छिड़काव से पहले पैकेट लेबल अवश्य पढ़ें।',
    spraySuitable: 'कीटनाशक छिड़काव के लिए मौसम अनुकूल है (Spray Safe)',
    sprayUnsuitable: 'तेज हवा या बारिश की संभावना - छिड़काव न करें (Postpone Spray)',
    irrigationNeeded: 'खेत में सिंचाई की आवश्यकता है।',
    irrigationNotNeeded: 'बारिश संभावित है, सिंचाई स्थगित करें।',

    windSpeed: 'हवा की गति',
    rainProbability: 'बारिश की संभावना',
    humidity: 'नमी (Humidity)',
    uvIndex: 'पराबैंगनी (UV)',

    cropDoctorAction: 'फसल डॉक्टर',
    cropDoctorSub: 'रोग की फोटो जांचें',
    mandiActionSub: 'आज के ताज़ा भाव',
    schemesActionSub: 'सब्सिडी व पात्रता',
    weatherActionSub: '7 दिन का पूर्वानुमान',
    kccActionSub: 'किसान कॉल सेंटर',
    allCropsView: 'सभी फसलें देखें',
    allMandisCompare: 'सभी मंडियां तुलना करें',
    modalRate: 'मॉडल भाव',
    minRate: 'न्यूनतम',
    maxRate: 'अधिकतम',
    perQuintal: 'प्रति क्विंटल (₹/Qtl)',
    varietyLabel: 'किस्म',
    acreageLabel: 'रकबा',
    sowingDateLabel: 'बुवाई तिथि',
    harvestDateLabel: 'अनुमानित कटाई',
    upcomingTask: 'आगामी कार्य',
    sourceLabel: 'स्रोत',
    arrivalsLabel: 'आवक',
    tonnes: 'टन',
    dateLabel: 'दिनांक',

    locationSelectorTitle: 'अपना जिला व राज्य चुनें',
    locationSelectorSub: 'मौसम, मंडी भाव और सलाह इसी स्थान के अनुसार दिखाई जाएगी',

    voicePrompt: 'नमस्ते किसान भाई! आप मुझसे मौसम, मंडी भाव या फसल रोग के बारे में कुछ भी पूछ सकते हैं।',
    voiceListening: 'सुन रहे हैं... कृपया बोलें',
    voicePlaceholder: 'उदा. आज गेहूं का मंडी भाव क्या है?',
  },

  en: {
    appName: 'Kisan Sahayak',
    tagline: 'Empowering Indian Farmers from Sowing to Selling',
    helplineLabel: 'National Kisan Helpline (24x7 Toll-Free):',

    navHome: 'Home',
    navMyCrops: 'My Crops',
    navCropDoctor: 'Crop Doctor',
    navWeather: 'Weather',
    navMandi: 'Mandi Prices',
    navSchemes: 'Govt Schemes',
    navExpert: 'Ask an Expert',
    navUpdates: 'Daily Updates',
    navMyFarm: 'My Farm Ledger',
    navProfile: 'Profile & Settings',

    actionSearch: 'Search...',
    actionAddCrop: 'Add New Crop',
    actionDiagnoseNow: 'Diagnose Plant Disease',
    actionCallKisanHelp: 'Kisan Call Centre 1800-180-1551',
    actionAskVoice: 'Voice Assistant',
    actionChangeLang: 'Change Language',
    actionChangeLocation: 'Change Location',
    actionSave: 'Save Record',
    actionCalculateProfit: 'Calculate Net Return',
    actionListenAudio: 'Listen Aloud',
    actionStopAudio: 'Stop Audio',

    headingQuickActions: 'Quick Actions',
    headingMyActiveCrops: 'My Enrolled Crops',
    headingWeatherAdvisory: 'Weather & Agricultural Advisory',
    headingLiveMandiRates: 'Live Mandi Market Rates',
    headingGovtSchemes: 'Government Schemes & Subsidies',
    headingPestDoctor: 'Crop Doctor: Instant Pest & Disease Diagnosis',
    headingDailyFeed: 'Daily Farming Advisories & News',

    welcomeGreeting: 'Welcome',
    todayAdvisoryAvailable: "Today's weather, market prices, and farming advice are available for your farm.",
    acresField: 'Acres Land',

    bannerDemoMode: 'Demo / Offline Mode Active: You can explore all features with sample Indian farm data.',
    disclaimerMedical: 'Recommendations follow ICAR / CIBRC approved guidelines. Always inspect official pesticide label prior to application.',
    spraySuitable: 'Favorable conditions for pesticide spraying (Spray Safe)',
    sprayUnsuitable: 'High winds or rain forecast: Postpone spraying (Postpone Spray)',
    irrigationNeeded: 'Soil moisture low: Irrigation recommended.',
    irrigationNotNeeded: 'Rainfall expected: Postpone irrigation.',

    windSpeed: 'Wind Speed',
    rainProbability: 'Rain Probability',
    humidity: 'Humidity',
    uvIndex: 'UV Index',

    cropDoctorAction: 'Crop Doctor',
    cropDoctorSub: 'Diagnose with photo',
    mandiActionSub: "Today's fresh rates",
    schemesActionSub: 'Subsidies & Eligibility',
    weatherActionSub: '7-day forecast',
    kccActionSub: 'Kisan Call Centre',
    allCropsView: 'View All Crops',
    allMandisCompare: 'Compare All Mandis',
    modalRate: 'Modal Price',
    minRate: 'Min',
    maxRate: 'Max',
    perQuintal: 'per Quintal (₹/Qtl)',
    varietyLabel: 'Variety',
    acreageLabel: 'Area',
    sowingDateLabel: 'Sowing Date',
    harvestDateLabel: 'Est. Harvest',
    upcomingTask: 'Next Task',
    sourceLabel: 'Source',
    arrivalsLabel: 'Arrivals',
    tonnes: 'Tonnes',
    dateLabel: 'Date',

    locationSelectorTitle: 'Select District & State',
    locationSelectorSub: 'Weather, market prices, and advisories will be tailored to this district',

    voicePrompt: 'Namaste Farmer! Ask me anything regarding weather, mandi rates, or crop diseases.',
    voiceListening: 'Listening... Please speak now',
    voicePlaceholder: 'e.g. What is the mandi rate for chilli or cotton today?',
  },

  ta: {
    appName: 'கிசான் சஹாயக்',
    tagline: 'இந்திய விவசாயிகளின் நம்பகமான டிஜிட்டல் தோழன்',
    helplineLabel: 'தேசிய உழவர் உதவி எண் (24x7 இலவசம்):',
    navHome: 'முகப்பு',
    navMyCrops: 'என் பயிர்கள்',
    navCropDoctor: 'பயிர் மருத்துவர்',
    navWeather: 'வானிலை & ஆலோசனை',
    navMandi: 'சந்தை விலைகள்',
    navSchemes: 'அரசு திட்டங்கள்',
    navExpert: 'நிபுணரிடம் கேளுங்கள்',
    navUpdates: 'தினசரி புதுப்பிப்புகள்',
    navMyFarm: 'என் பண்ணை & செலவுகள்',
    navProfile: 'சுயவிவரம்',
    actionCallKisanHelp: 'கிசான் கால் சென்டர் 1800-180-1551',
    actionAskVoice: 'பேசி கேளுங்கள்',
    headingQuickActions: 'விரைவு சேவைகள்',
    headingMyActiveCrops: 'பயிரிடப்பட்ட பயிர்கள்',
    headingWeatherAdvisory: 'வானிலை & வேளாண் ஆலோசனை',
    headingLiveMandiRates: 'இன்றைய நேரடி சந்தை விலைகள்',
    welcomeGreeting: 'வணக்கம்',
    todayAdvisoryAvailable: 'இன்று உங்கள் பண்ணைக்கான வானிலை மற்றும் சந்தை விலைகள் தயாராக உள்ளன.',
    acresField: 'ஏக்கர் நிலம்',
    spraySuitable: 'மருந்து தெளிக்க உகந்தது (Spray Safe)',
    sprayUnsuitable: 'தெளிக்க வேண்டாம் (Postpone Spray)',
  },

  kn: {
    appName: 'ಕಿಸಾನ್ ಸಹಾಯಕ',
    tagline: 'ಭಾರತೀಯ ರೈತರ ನಂಬಿಕಸ್ಥ ಡಿಜಿಟಲ್ ಮಿತ್ರ',
    helplineLabel: 'ರಾಷ್ಟ್ರೀಯ ಕಿಸಾನ್ ಸಹಾಯವಾಣಿ (24x7 ಉಚಿತ):',
    navHome: 'ಮುಖಪುಟ',
    navMyCrops: 'ನನ್ನ ಬೆಳೆಗಳು',
    navCropDoctor: 'ಬೆಳೆ ವೈದ್ಯ',
    navWeather: 'ಹವಾಮಾನ ಮತ್ತು ಸಲಹೆ',
    navMandi: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    navSchemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    navExpert: 'ತಜ್ಞರನ್ನು ಕೇಳಿ',
    navUpdates: 'ದೈನಂದಿನ ನವೀಕರಣಗಳು',
    navMyFarm: 'ನನ್ನ ಜಮೀನು',
    navProfile: 'ಪ್ರೊಫೈಲ್',
    actionCallKisanHelp: 'ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ 1800-180-1551',
    actionAskVoice: 'ಮಾತನಾಡಿ ಕೇಳಿ',
    headingQuickActions: 'ತ್ವರಿತ ಸೇವೆಗಳು',
    headingLiveMandiRates: 'ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ದರಗಳು',
    welcomeGreeting: 'ನಮಸ್ಕಾರ',
    acresField: 'ಎಕರೆ ಜಮೀನು',
    spraySuitable: 'ಸಿಂಪಡಣೆಗೆ ಅನುಕೂಲಕರವಾಗಿದೆ',
    sprayUnsuitable: 'ಸಿಂಪಡಣೆ ಮಾಡಬೇಡಿ',
  },

  pa: {
    appName: 'ਕਿਸਾਨ ਸਹਾਇਕ',
    tagline: 'ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਦਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ',
    helplineLabel: 'ਰਾਸ਼ਟਰੀ ਕਿਸਾਨ ਹੈਲਪਲਾਈਨ (24x7 ਮੁਫ਼ਤ):',
    navHome: 'ਮੁੱਖ ਪੰਨਾ',
    navMyCrops: 'ਮੇਰੀਆਂ ਫਸਲਾਂ',
    navCropDoctor: 'ਫਸਲ ਡਾਕਟਰ',
    navWeather: 'ਮੌਸਮ ਤੇ ਸਲਾਹ',
    navMandi: 'ਮੰਡੀ ਭਾਅ',
    navSchemes: 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ',
    navExpert: 'ਮਾਹਿਰ ਤੋਂ ਪੁੱਛੋ',
    navUpdates: 'ਰੋਜ਼ਾਨਾ ਅਪਡੇਟ',
    navMyFarm: 'ਮੇਰਾ ਖੇਤ ਤੇ ਖਰਚ',
    navProfile: 'ਪ੍ਰੋਫਾਈਲ',
    actionCallKisanHelp: 'ਕਿਸਾਨ ਕਾਲ ਸੈਂਟਰ 1800-180-1551',
    actionAskVoice: 'ਬੋਲ ਕੇ ਪੁੱਛੋ',
    headingLiveMandiRates: 'ਅੱਜ ਦੇ ਤਾਜ਼ਾ ਮੰਡੀ ਭਾਅ',
    headingWeatherAdvisory: 'ਮੌਸਮ ਅਤੇ ਖੇਤੀਬਾੜੀ ਸਲਾਹ',
    welcomeGreeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
    acresField: 'ਏਕੜ ਜ਼ਮੀਨ',
  },

  bn: {
    appName: 'কিষাণ সহায়ক',
    tagline: 'ভারতীয় কৃষকদের ডিজিটাল সহযোগী',
    helplineLabel: 'জাতীয় কিষাণ হেল্পলাইন (24x7 টোল-ফ্রি):',
    navHome: 'হোম',
    navMyCrops: 'আমার ফসল',
    navCropDoctor: 'ফসল ডাক্তার',
    navWeather: 'আবহাওয়া ও পরামর্শ',
    navMandi: 'মান্ডি দর',
    navSchemes: 'সরকারি প্রকল্প',
    navExpert: 'বিশেষজ্ঞের পরামর্শ',
    navUpdates: 'দৈনিক আপডেট',
    navMyFarm: 'আমার খামার',
    navProfile: 'প্রোফাইল',
    actionCallKisanHelp: 'কিষাণ কল সেন্টার 1800-180-1551',
    actionAskVoice: 'ভয়েসে জিজ্ঞাসা করুন',
    headingLiveMandiRates: 'আজকের মান্ডি দর',
    headingWeatherAdvisory: 'আবহাওয়া ও কৃষি পরামর্শ',
    welcomeGreeting: 'নমস্কার',
    acresField: 'একর জমি',
  },

  mr: {
    appName: 'किसान सहाय्यक',
    tagline: 'भारतीय शेतकऱ्यांचा खरा डिजिटल मित्र',
    helplineLabel: 'राष्ट्रीय किसान हेल्पलाइन (24x7 मोफत):',
    navHome: 'होम',
    navMyCrops: 'माझी पिके',
    navCropDoctor: 'पीक डॉक्टर',
    navWeather: 'हवामान व सल्ला',
    navMandi: 'बाजार भाव',
    navSchemes: 'सरकारी योजना',
    navExpert: 'तज्ज्ञांचा सल्ला',
    navUpdates: 'दैनिक अपडेट्स',
    navMyFarm: 'माझे शेत व हिशोब',
    navProfile: 'प्रोफाइल',
    actionCallKisanHelp: 'किसान कॉल सेंटर 1800-180-1551',
    actionAskVoice: 'बोलून विचारा',
    headingLiveMandiRates: 'आजचे ताजे बाजार भाव',
    headingWeatherAdvisory: 'हवामान व कृषी सल्ला',
    welcomeGreeting: 'राम-राम / नमस्कार',
    acresField: 'एकर शेत',
  },

  gu: {
    appName: 'કિસાન સહાયક',
    tagline: 'ભારતીય ખેડૂતોનો સાચો ડિજિટલ સાથી',
    helplineLabel: 'રાષ્ટ્રીય કિસાન હેલ્પલાઇન (24x7 મફત):',
    navHome: 'હોમ',
    navMyCrops: 'મારા પાક',
    navCropDoctor: 'પાક ડૉક્ટર',
    navWeather: 'હવામાન અને સલાહ',
    navMandi: 'બજાર ભાવ',
    navSchemes: 'સરકારી યોજનાઓ',
    navExpert: 'નિષ્ણાત પૂછો',
    navUpdates: 'દૈનિક અપડેટ્સ',
    navMyFarm: 'મારું ખેતર',
    navProfile: 'પ્રોફાઇલ',
    actionCallKisanHelp: 'કિસાન કૉલ સેન્ટર 1800-180-1551',
    actionAskVoice: 'બોલીને પૂછો',
    headingLiveMandiRates: 'આજના તાજા બજાર ભાવ',
    welcomeGreeting: 'નમસ્તે',
    acresField: 'એકર જમીન',
  }
};

export function getTranslation(lang: string, key: keyof TranslationDictionary): string {
  // 1. Direct language match
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
    return TRANSLATIONS[lang][key] as string;
  }
  // 2. Fallback to English (universal, avoids showing Hindi when South Indian or other regional lang chosen)
  if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) {
    return TRANSLATIONS['en'][key] as string;
  }
  // 3. Fallback to Hindi
  if (TRANSLATIONS['hi'] && TRANSLATIONS['hi'][key]) {
    return TRANSLATIONS['hi'][key] as string;
  }
  return String(key);
}
