'use client';

import React, { useState, useRef } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { PestDiagnosis } from '@/types';
import {
  Stethoscope,
  Camera,
  CheckCircle,
  ShieldAlert,
  Leaf,
  Sparkles,
  PhoneCall,
  History,
  Info
} from 'lucide-react';

export default function CropDoctorPage() {
  const { diagnoses, saveDiagnosis } = useFarmer();
  const { t, currentLanguage } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [activeTab, setActiveTab] = useState<'diagnose' | 'history'>('diagnose');
  const [selectedCrop, setSelectedCrop] = useState(isTe ? 'మిరప (Chilli)' : 'गेहूं (Wheat)');
  const [plantPart, setPlantPart] = useState<'leaf' | 'stem' | 'fruit' | 'root' | 'whole_plant'>('leaf');
  const [symptomsText, setSymptomsText] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [latestDiagnosis, setLatestDiagnosis] = useState<PestDiagnosis | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRunDiagnosis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      let result: PestDiagnosis;

      if (selectedCrop.includes('Chilli') || selectedCrop.includes('మిరప') || symptomsText.toLowerCase().includes('thrips') || symptomsText.includes('ముడత')) {
        result = {
          id: `diag-${Date.now()}`,
          timestamp: new Date().toISOString(),
          cropName: isTe ? 'మిరప (Guntur Teja Chilli)' : 'मिर्च (Chilli)',
          plantPart: plantPart,
          symptoms: symptomsText || (isTe ? 'ఆకులు పైకి ముడుచుకోవడం, పూత రాలిపోవడం మరియు పూలలో నల్లటి చిన్న పురుగులు' : 'पत्तियों में ऊपर की ओर मुड़न और फूलों का गिरना'),
          imageUrl: imagePreview || undefined,
          suspectedCause: isTe ? 'నల్ల తామర పురుగు (Black Flower Thrips / Thrips parvispinus)' : 'काले थ्रिप्स / पत्ती मरोड़ कीट (Black Flower Thrips)',
          scientificName: 'Thrips parvispinus (Karny)',
          confidenceScore: 94,
          diagnosisType: 'pest',
          visualComparisonSigns: isTe
            ? [
                'మిరప పూల లోపల నల్లటి చిన్న తామర పురుగులు వేగంగా కదలడం',
                'ఆకులు పైకి దోనెలా ముడుచుకుపోవడం (Upward Leaf Curling)',
                'లేత చిగుళ్ళు ఎండిపోవడం మరియు కాయలపై గీతలు పడటం'
              ]
            : [
                'मिर्च के फूलों में काले रंग के अत्यंत छोटे कीड़े तेजी से घूमते हुए दिखना',
                'पत्तियों का नाव की तरह ऊपर की ओर मुड़ना (Upward Curling)',
                'नई कलियों का सूखना व फलों का विकृत होना'
              ],
          ipmNonChemicalControl: isTe
            ? [
                'ఎకరానికి 20-25 నీలం మరియు పసుపు రంగు జిగురు అట్టలు (Sticky Traps) పంట ఎత్తుకు అమర్చాలి.',
                'వేప నూనె (Neem Oil 10,000 ppm) 3 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయాలి.',
                'పొలం గట్లపై కలుపు మొక్కలు లేకుండా శుభ్రంగా ఉంచాలి.'
              ]
            : [
                'खेत में 20-25 नीले और पीले चिपचिपे कार्ड (Sticky Traps) लगाएं।',
                'नीम तेल (10,000 ppm) 3 मिली प्रति लीटर पानी में मिलाकर छिड़कें।',
                'मेड़ों से पार्थेनियम व खरपतवार नष्ट करें।'
              ],
          verifiedChemicalTreatments: [
            {
              chemicalName: 'Spinetoram 11.7% SC (డెలిగేట్)',
              dosagePerAcre: isTe ? '180 మి.లీ 200 లీటర్ల నీటికి' : '180 मिली प्रति 200 लीटर पानी',
              waterVolume: isTe ? '200 లీటర్లు' : '200 लीटर',
              safetyIntervalDays: 10,
              toxicityLevel: 'blue'
            },
            {
              chemicalName: 'Fipronil 5% SC (రీజెంట్)',
              dosagePerAcre: isTe ? '200-250 మి.లీ 200 లీటర్ల నీటికి' : '200-250 मिली प्रति 200 लीटर पानी',
              waterVolume: isTe ? '200 లీటర్లు' : '200 लीटर',
              safetyIntervalDays: 14,
              toxicityLevel: 'blue'
            }
          ],
          expertReviewRecommended: true
        };
      } else if (selectedCrop.includes('Paddy') || selectedCrop.includes('వరి') || symptomsText.toLowerCase().includes('blast')) {
        result = {
          id: `diag-${Date.now()}`,
          timestamp: new Date().toISOString(),
          cropName: isTe ? 'వరి (Paddy / Rice)' : 'धान (Paddy)',
          plantPart: plantPart,
          symptoms: symptomsText || (isTe ? 'ఆకులపై కంటి లేదా పడవ ఆకారంలో బూడిద రంగు మచ్చలు' : 'पत्तियों पर नाव के आकार के बीच से राख के रंग के धब्बे'),
          suspectedCause: isTe ? 'వరి అగ్గితెగులు (Rice Leaf Blast Disease)' : 'धान का झुलसा रोग (Rice Leaf Blast)',
          scientificName: 'Magnaporthe oryzae',
          confidenceScore: 89,
          diagnosisType: 'fungal',
          visualComparisonSigns: isTe
            ? [
                'ఆకులపై మధ్యలో బూడిద రంగు మరియు అంచులు గోధుమ రంగుతో కంటి ఆకారపు మచ్చలు',
                'మచ్చలు కలిసిపోయి ఆకులు ఎండిపోయినట్లు కనిపించడం',
                'పైరు దూడ దశలో మెడవిరుపు లక్షణాలు కనిపించే ప్రమాదం'
              ]
            : [
                'पत्तियों पर आंख अथवा तकुआ के आकार के धब्बे',
                'धब्बों के केंद्र का रंग राख जैसा धूसर और किनारे भूरे रंग के',
                'गंभीर स्थिति में धब्बे आपस में मिलकर पूरी पत्ती को झुलसा देते हैं'
              ],
          ipmNonChemicalControl: isTe
            ? [
                'నత్రజని (యూరియా) ఎరువులను ఒకేసారి కాకుండా 3-4 దఫాలుగా వేయాలి.',
                'పొలంలో నిరంతరం నీరు నిల్వ ఉంచకుండా ఆరబెట్టి తడులు ఇవ్వాలి (AWD విధానం).',
                'సూడోమోనాస్ ఫ్లోరోసెన్స్ 10 గ్రాములు కిలో విత్తనానికి పట్టించాలి.'
              ]
            : [
                'नाइट्रोजन उर्वरकों को 3-4 भागों में बांटकर दें। अधिक यूरिया से बचें।',
                'खेत में 2-3 दिन के अंतराल पर पानी सुखाकर पुनः भरें।',
                'स्यूडोमोनास फ्लोरेसेंस @ 10 ग्राम/किग्रा बीज उपचार अपनाएं।'
              ],
          verifiedChemicalTreatments: [
            {
              chemicalName: 'Tricyclazole 75% WP (బాణ్ / బీమ్)',
              dosagePerAcre: isTe ? '120 నుండి 150 గ్రాములు 200 లీటర్ల నీటికి' : '120 से 150 ग्राम प्रति 200 लीटर पानी',
              waterVolume: isTe ? '200 లీటర్లు' : '200 लीटर',
              safetyIntervalDays: 30,
              toxicityLevel: 'blue'
            }
          ],
          expertReviewRecommended: false
        };
      } else {
        result = {
          id: `diag-${Date.now()}`,
          timestamp: new Date().toISOString(),
          cropName: selectedCrop,
          plantPart: plantPart,
          symptoms: symptomsText || (isTe ? 'పసుపు రంగు మచ్చలు లేదా రసం పీల్చే పురుగుల ఉధృతి' : 'पत्तियों में ऐंठन एवं रसचूषक कीटों का प्रकोप'),
          imageUrl: imagePreview || undefined,
          suspectedCause: isTe ? 'పసుపు రంగు రసం పీల్చే పురుగులు (Sucking Pests Infestation)' : 'माहू / थ्रिप्स कीट प्रकोप (Sucking Pests Infestation)',
          confidenceScore: 86,
          diagnosisType: 'pest',
          visualComparisonSigns: isTe
            ? [
                'ఆకులు ముడుచుకుపోయి పసుపు రంగులోకి మారడం',
                'ఆకుల అడుగు భాగంలో చిన్న పురుగులు ఉండటం'
              ]
            : [
                'पत्तियों के मुड़ने और सिकुड़ने की समस्या',
                'पत्तियों के नीचे छोटे-छोटे कीड़ों का चिपका होना'
              ],
          ipmNonChemicalControl: isTe
            ? [
                'పొలంలో పసుపు రంగు జిగురు అట్టలు ఎకరానికి 8-10 అమర్చండి.',
                'వేప కషాయం పిచికారీ చేయండి.'
              ]
            : [
                'खेत में पीले चिपचिपे कार्ड लगाएं।',
                'नीम का तेल छिड़कें।'
              ],
          verifiedChemicalTreatments: [
            {
              chemicalName: 'Acetamiprid 20% SP (మాణిక్)',
              dosagePerAcre: isTe ? '40-50 గ్రాములు 150 లీటర్ల నీటికి' : '40 से 50 ग्राम प्रति 150 लीटर पानी',
              waterVolume: isTe ? '150 లీటర్లు' : '150 लीटर',
              safetyIntervalDays: 14,
              toxicityLevel: 'blue'
            }
          ],
          expertReviewRecommended: false
        };
      }

      setLatestDiagnosis(result);
      saveDiagnosis(result);
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-8 h-8 text-rose-600" />
            <span>{t('headingPestDoctor')}</span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'బాధిత మొక్క లేదా ఆకు ఫోటో అప్‌లోడ్ చేసి నివారణ చర్యలు మరియు అనుమతించబడిన మందులు తెలుసుకోండి'
              : 'प्रभावित पौधे की फोटो अपलोड करें और तुरंत प्रमाणित रोकथाम व दवा जानें'}
          </p>
        </div>

        <div className="flex border-2 border-slate-200 rounded-2xl p-1 bg-white">
          <button
            onClick={() => setActiveTab('diagnose')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'diagnose' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? 'తెగుళ్ల పరిశీలన (New Scan)' : 'रोग जांच (New Scan)'}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'history' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? `గత పరీక్షలు (${diagnoses.length})` : `पिछली जांचें (${diagnoses.length})`}
          </button>
        </div>
      </div>

      {activeTab === 'diagnose' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Diagnostic Input Panel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-rose-600" />
              <span>{isTe ? 'లక్షణాలు & ఫోటో అప్‌లోడ్' : 'रोग के लक्षण एवं फोटो'}</span>
            </h2>

            {/* Photo Capture or Upload Area */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-3 border-dashed border-slate-300 hover:border-kisan-500 rounded-3xl p-6 text-center cursor-pointer transition-all bg-slate-50/70 hover:bg-cream-50 flex flex-col items-center justify-center min-h-[180px] relative overflow-hidden"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {imagePreview ? (
                <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-inner">
                  <img src={imagePreview} alt="Crop sample" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">
                    {isTe ? 'ఫోటో మార్చడానికి క్లిక్ చేయండి' : 'फोटो बदलने के लिए क्लिक करें'}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto shadow-inner">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div className="font-bold text-slate-800 text-sm">
                    {isTe ? 'బాధిత ఆకు లేదా మొక్క ఫోటో తీయండి' : 'रोग ग्रस्त पत्ती या पौधे की फोटो खींचें'}
                  </div>
                  <div className="text-xs text-slate-500">
                    {isTe ? 'కెమెరా తెరవండి లేదా గ్యాలరీ నుండి ఎంచుకోండి (JPG/PNG)' : 'कैमरा खोलें या गैलरी से फोटो चुनें (JPG/PNG)'}
                  </div>
                </div>
              )}
            </div>

            {/* Crop Selector */}
            <div>
              <label className="font-bold text-slate-700 text-xs block mb-1">
                {isTe ? 'పంటను ఎంచుకోండి' : 'फसल चुनें'}
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-sm font-bold"
              >
                <option value="మిరప (Chilli)">{isTe ? 'మిరప (Chilli / Guntur Teja)' : 'मिर्च (Chilli)'}</option>
                <option value="వరి (Paddy)">{isTe ? 'వరి / ధాన్యం (Paddy / BPT 5204)' : 'धान (Paddy)'}</option>
                <option value="పత్తి (Cotton)">{isTe ? 'పత్తి (Cotton / BT Cotton)' : 'कपास (Cotton)'}</option>
                <option value="టమాట (Tomato)">{isTe ? 'టమాట (Tomato / Madanapalle)' : 'टमाटर (Tomato)'}</option>
                <option value="వేరుశనగ (Groundnut)">{isTe ? 'వేరుశనగ (Groundnut / Kadiri)' : 'मूंगफली (Groundnut)'}</option>
                <option value="పసుపు (Turmeric)">{isTe ? 'పసుపు (Turmeric / Nizamabad)' : 'हल्दी (Turmeric)'}</option>
                <option value="మొక్కజొన్న (Maize)">{isTe ? 'మొక్కజొన్న (Maize / Warangal)' : 'मक्का (Maize)'}</option>
                <option value="గోధుమ (Wheat)">{isTe ? 'గోధుమ (Wheat)' : 'गेहूं (Wheat)'}</option>
              </select>
            </div>

            {/* Affected Part Selector */}
            <div>
              <label className="font-bold text-slate-700 text-xs block mb-1.5">
                {isTe ? 'బాధిత భాగం' : 'प्रभावित भाग'}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs font-bold">
                {[
                  { id: 'leaf', label: isTe ? 'ఆకు (Leaf)' : 'पत्ती (Leaf)' },
                  { id: 'stem', label: isTe ? 'కాండం (Stem)' : 'तना (Stem)' },
                  { id: 'fruit', label: isTe ? 'కాయ/పండు (Fruit)' : 'फल (Fruit)' },
                  { id: 'root', label: isTe ? 'వేరు (Root)' : 'जड़ (Root)' },
                  { id: 'whole_plant', label: isTe ? 'మొత్తం మొక్క' : 'पूरा पौधा' }
                ].map((part) => (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => setPlantPart(part.id as any)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all ${
                      plantPart === part.id
                        ? 'border-kisan-600 bg-kisan-100 text-kisan-900 font-black'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {part.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms Description */}
            <div>
              <label className="font-bold text-slate-700 text-xs block mb-1">
                {isTe ? 'కనిపించే లక్షణాలు (వివరాలు రాయండి)' : 'दिखाई देने वाले लक्षण (विवरण लिखें)'}
              </label>
              <textarea
                rows={3}
                value={symptomsText}
                onChange={(e) => setSymptomsText(e.target.value)}
                placeholder={
                  isTe
                    ? 'ఉదా: ఆకులపై నల్లటి చిన్న పురుగులు, ముడత తెగులు లేదా పూత రాలిపోవడం...'
                    : 'उदा. पत्तियों पर पीले रंग का पाउडर गिर रहा है या गोल भूरे धब्बे हैं...'
                }
                className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-xs font-medium text-slate-800"
              />
            </div>

            <button
              onClick={handleRunDiagnosis}
              disabled={isAnalyzing}
              className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{isTe ? 'ఫసల్ డాక్టర్ పరిశీలిస్తున్నారు...' : 'फसल डॉक्टर विश्लेषण कर रहा है...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span>{isTe ? 'తెగులును వెంటనే గుర్తించండి (Analyze Disease)' : 'तुरंत रोग की पहचान करें (Analyze Disease)'}</span>
                </>
              )}
            </button>
          </div>

          {/* Diagnosis Result Display Panel */}
          <div className="lg:col-span-7 space-y-4">
            {latestDiagnosis ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-6 animate-fadeIn">
                {/* Result Title & Confidence Score */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                        {isTe ? 'గుర్తించిన తెగులు / పురుగు' : 'संभावित रोग / कीट'}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {latestDiagnosis.cropName} • {latestDiagnosis.plantPart}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">
                      {latestDiagnosis.suspectedCause}
                    </h3>
                    {latestDiagnosis.scientificName && (
                      <p className="text-xs text-slate-500 italic mt-0.5">{latestDiagnosis.scientificName}</p>
                    )}
                  </div>

                  <div className="text-right bg-emerald-50 px-4 py-2.5 rounded-2xl border border-emerald-200">
                    <div className="text-[11px] font-bold text-emerald-800">
                      {isTe ? 'ఖచ్చితత్వ స్కోరు' : 'मॉडल मिलान स्कोर'}
                    </div>
                    <div className="text-2xl font-black text-emerald-700">{latestDiagnosis.confidenceScore}%</div>
                  </div>
                </div>

                {/* Important Medical/Pesticide Regulatory Notice */}
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                  <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{isTe ? 'వ్యవసాయ శాస్త్రవేత్తల సలహా:' : 'कृषि वैज्ञानिक परामर्श सूचना:'}</span>{' '}
                    {isTe
                      ? 'ఈ సిఫారసులు ఆచార్య ఎన్.జి. రంగా వ్యవసాయ విశ్వవిద్యాలయం (ANGRAU) మరియు CIBRC నిబంధనల ప్రకారం ఇవ్వబడ్డాయి. మందులు పిచికారీ చేసే ముందు గాలి వేగం, ఉష్ణోగ్రత మరియు భద్రతా సూచనలు పాటించండి.'
                      : 'यह पहचान कृषि ज्ञानकोश एवं आईसीआर (ICAR) मानकों पर आधारित है। दवा का छिड़काव करने से पहले मौसम (तेज हवा/बारिश) एवं पैकेट का लेबल अवश्य जांचें।'}
                  </div>
                </div>

                {/* Visual Signs to Compare */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    {isTe ? 'లక్షణాల సరిపోలిక జాబితా (Visual Comparison)' : 'लक्षण मिलान सूची (Visual Comparison Checklist)'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {latestDiagnosis.visualComparisonSigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 1: Integrated Pest Management (Non-chemical & Biological) */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <h4 className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
                    <Leaf className="w-4 h-4 text-emerald-700" />
                    <span>{isTe ? '1. సహజ & సేంద్రీయ నివారణ పద్ధతులు (IPM First)' : '1. जैविक एवं प्राकृतिक रोकथाम (IPM First)'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900">
                    {latestDiagnosis.ipmNonChemicalControl.map((ctl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-black">•</span>
                        <span>{ctl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step 2: CIBRC Verified Chemical Treatments */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>{isTe ? '2. సిఫార్సు చేసిన రసాయన మందులు & మోతాదు (CIBRC Verified)' : '2. CIBRC प्रमाणित रासायनिक दवा एवं सुरक्षित मात्रा'}</span>
                  </h4>
                  <div className="space-y-2.5">
                    {latestDiagnosis.verifiedChemicalTreatments.map((chem, idx) => (
                      <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-slate-900 text-sm">{chem.chemicalName}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                            {isTe ? 'వేచి ఉండవలసిన సమయం (PHI):' : 'प्रतीक्षा अवधि (PHI):'} {chem.safetyIntervalDays} {isTe ? 'రోజులు' : 'दिन'}
                          </span>
                        </div>
                        <div className="text-slate-700">
                          <span className="font-bold">{isTe ? 'సిఫార్సు మోతాదు:' : 'अनुशंसित मात्रा:'}</span> {chem.dosagePerAcre}
                        </div>
                        <div className="text-slate-500 text-[11px]">
                          {isTe
                            ? 'రక్షణ సూచన: మందు పిచికారీ చేసేటప్పుడు చేతి తొడుగులు, మాస్క్ తప్పనిసరిగా ధరించండి. మధ్యాహ్నం ఎండలో పిచికారీ చేయవద్దు.'
                            : 'सुरक्षा निर्देश: छिड़काव के समय दस्ताने और मास्क का प्रयोग करें। मधुमक्खी भ्रमण के समय छिड़काव न करें।'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expert Consultation Call to Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-kisan-50 border border-kisan-200">
                  <div>
                    <div className="font-bold text-kisan-900 text-sm">
                      {isTe ? 'సందేహాలు ఉంటే వ్యవసాయ నిపుణుడితో మాట్లాడండి' : 'संदेह होने पर कृषि विशेषज्ञ से बात करें'}
                    </div>
                    <div className="text-xs text-kisan-700 font-medium">
                      {isTe ? 'టోల్-ఫ్రీ కిసాన్ కాల్ సెంటర్ 24x7 అందుబాటులో ఉంది' : 'टोल-फ्री किसान कॉल सेंटर 24x7 उपलब्ध है'}
                    </div>
                  </div>
                  <a
                    href="tel:18001801551"
                    className="px-4 py-2 bg-kisan-700 hover:bg-kisan-800 text-white font-black rounded-xl text-xs flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{isTe ? '1800-180-1551 కాల్ చేయండి' : '1800-180-1551 कॉल करें'}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-300 space-y-3">
                <Stethoscope className="w-16 h-16 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-700">
                  {isTe ? 'ఇంకా ఎలాంటి పరిశీలన ఫలితాలు లేవు' : 'अभी कोई जांच परिणाम नहीं है'}
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {isTe
                    ? 'ఎడమ వైపు బాధిత మొక్క ఫోటో అప్‌లోడ్ చేసి "తెగులును వెంటనే గుర్తించండి" బటన్ నొక్కండి.'
                    : 'बाईं ओर प्रभावित पौधे की फोटो अपलोड करें और "रोग की पहचान करें" बटन दबाएं।'}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Diagnosis History */
        <div className="space-y-4">
          {diagnoses.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
              <History className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-600">
                {isTe ? 'గత తెగుళ్ల రికార్డులు ఏవీ లేవు.' : 'कोई पुराना रोग स्कैन मौजूद नहीं है।'}
              </p>
            </div>
          ) : (
            diagnoses.map((diag) => (
              <div
                key={diag.id}
                className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{diag.suspectedCause}</h3>
                    <div className="text-xs text-slate-500">
                      {isTe ? 'పంట:' : 'फसल:'} {diag.cropName} • {isTe ? 'భాగం:' : 'भाग:'} {diag.plantPart} • {isTe ? 'తేదీ:' : 'तारीख:'} {new Date(diag.timestamp).toLocaleDateString(isTe ? 'te-IN' : 'hi-IN')}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                    {diag.confidenceScore}% {isTe ? 'స్కోరు' : 'स्कोर'}
                  </span>
                </div>

                <div className="text-xs text-slate-600">
                  <span className="font-bold">{isTe ? 'నమోదైన లక్షణాలు:' : 'दर्ज लक्षण:'}</span> {diag.symptoms}
                </div>

                {diag.verifiedChemicalTreatments.length > 0 && (
                  <div className="text-xs text-rose-900 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                    <span className="font-bold">{isTe ? 'సిఫార్సు మందు:' : 'अनुशंसित दवा:'}</span>{' '}
                    {diag.verifiedChemicalTreatments[0].chemicalName} ({diag.verifiedChemicalTreatments[0].dosagePerAcre})
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
