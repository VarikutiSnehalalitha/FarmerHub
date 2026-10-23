'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { INDIAN_LANGUAGES } from '@/lib/languages';
import { LanguageCode } from '@/types';
import { searchPesticides } from '@/lib/pesticideData';
import {
  UserCheck,
  Globe,
  ShieldCheck,
  Save,
  CheckCircle,
  Database,
  Search,
  AlertTriangle
} from 'lucide-react';

export default function ProfilePage() {
  const { profile, updateProfile, currentLocation } = useFarmer();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [activeTab, setActiveTab] = useState<'profile' | 'pesticide_db'>('profile');
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone || '');
  const [village, setVillage] = useState(profile.village || '');
  const [farmSize, setFarmSize] = useState(String(profile.farmSizeAcres));
  const [soilType, setSoilType] = useState(profile.soilType || (isTe ? 'నల్ల రేగడి నేల (Black Clay Loam)' : 'काली दोमट मिट्टी (Black Clay Loam)'));
  const [irrigation, setIrrigation] = useState(profile.irrigationType || 'borewell');
  const [isSaved, setIsSaved] = useState(false);

  // Pesticide DB Search State
  const [pestSearchQuery, setPestSearchQuery] = useState('');
  const filteredPesticides = searchPesticides(pestSearchQuery);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      phone,
      village,
      farmSizeAcres: parseFloat(farmSize) || 2,
      soilType,
      irrigationType: irrigation as any
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <UserCheck className="w-8 h-8 text-kisan-700" />
            <span>
              {isTe
                ? 'రైతు ప్రొఫైల్ & పురుగుమందుల భద్రతా డేటాబేస్'
                : `${t('navProfile')} व कीटनाशक सुरक्षा डेटाबेस`}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'రైతు వివరాలు, భాష ఎంపిక మరియు CIBRC ధృవీకరించిన వ్యవసాయ రసాయన మార్గదర్శకాలు'
              : 'किसान विवरण, भाषा प्राथमिकता एवं CIBRC प्रमाणित कृषि रसायन संदर्भ'}
          </p>
        </div>

        <div className="flex border-2 border-slate-200 rounded-2xl p-1 bg-white">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'profile' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? 'రైతు ప్రొఫైల్' : 'किसान प्रोफ़ाइल'}
          </button>
          <button
            onClick={() => setActiveTab('pesticide_db')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'pesticide_db' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
            <span>{isTe ? 'పురుగుమందుల రక్షణ డేటా' : 'कीटनाशक सुरक्षा डेटाबेस'}</span>
          </button>
        </div>
      </div>

      {activeTab === 'profile' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Editor Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-900">
                {isTe ? 'వ్యక్తిగత & వ్యవసాయ వివరాలు' : 'व्यक्तिगत एवं कृषि जानकारी'}
              </h2>
              {isSaved && (
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isTe ? 'విజయవంతంగా భద్రపరచబడింది!' : 'सुरक्षित हो गया!'}</span>
                </span>
              )}
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs font-bold text-slate-700">
              <div>
                <label className="block mb-1">{isTe ? 'రైతు పూర్తి పేరు (Farmer Name)' : 'किसान का पूरा नाम (Farmer Name)'}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-black text-slate-900 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'మొబైల్ నంబర్ (Phone)' : 'मोबाइल नंबर (Phone)'}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                  />
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'గ్రామం / పట్టణం (Village)' : 'गाँव / कस्बा (Village)'}</label>
                  <input
                    type="text"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'రాష్ట్రం (State)' : 'राज्य (State)'}</label>
                  <input
                    type="text"
                    value={currentLocation.state}
                    disabled
                    className="w-full p-3 border-2 border-slate-200 rounded-xl bg-slate-50 font-bold text-slate-500"
                  />
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'జిల్లా (District)' : 'जिला (District)'}</label>
                  <input
                    type="text"
                    value={currentLocation.district}
                    disabled
                    className="w-full p-3 border-2 border-slate-200 rounded-xl bg-slate-50 font-bold text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'మొత్తం పొలం విస్తీర్ణం (ఎకరాలు)' : 'कुल खेत रकबा (एकड़)'}</label>
                  <input
                    type="number"
                    step="0.5"
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                  />
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'నీటి పారుదల వనరు' : 'सिंचाई साधन'}</label>
                  <select
                    value={irrigation}
                    onChange={(e) => setIrrigation(e.target.value as any)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                  >
                    <option value="borewell">{isTe ? 'బోరుబావి (Borewell)' : 'नलकूप / ट्यूबवेल (Borewell)'}</option>
                    <option value="canal">{isTe ? 'కాలువ / చెరువు (Canal / Tank)' : 'नहर (Canal)'}</option>
                    <option value="drip">{isTe ? 'డ్రిప్ బిందు సేద్యం (Drip System)' : 'ड्रिप सिंचाई (Drip System)'}</option>
                    <option value="sprinkler">{isTe ? 'స్ప్రింక్లర్ (Sprinkler)' : 'स्प्रिंकलर (Sprinkler)'}</option>
                    <option value="rainfed">{isTe ? 'వర్షాధార సేద్యం (Rainfed)' : 'वर्षा आधारित (Rainfed)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1">{isTe ? 'నేల రకం (Soil Type)' : 'मिट्टी का प्रकार (Soil Type)'}</label>
                <input
                  type="text"
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  placeholder={isTe ? 'ఉదా: నల్ల రేగడి నేల లేదా ఎర్ర చెలక నేల' : 'उदा. गहरी काली मिट्टी या पीली दोमट'}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-kisan-700 hover:bg-kisan-800 text-white font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  <span>{isTe ? 'వివరాలను భద్రపరచండి (Save Profile)' : 'प्रोफ़ाइल सहेजें (Save Profile)'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Language and Cloud Sync Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Preferred Language Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-kisan-700" />
                <h3 className="text-lg font-black text-slate-900">
                  {isTe ? 'ప్రాధాన్య భాష (Language)' : 'प्राथमिक भाषा (Language)'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {isTe
                  ? 'మీరు భారతదేశంలోని 22 అధికారిక భాషలలో దేనినైనా ఎంచుకోవచ్చు.'
                  : 'आप भारत की 22 अनुसूचित भाषाओं में से किसी भी भाषा का चयन कर सकते हैं।'}
              </p>

              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-1">
                {INDIAN_LANGUAGES.map((lang) => {
                  const isCurrent = lang.code === currentLanguage;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as LanguageCode)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        isCurrent
                          ? 'border-kisan-600 bg-kisan-100 text-kisan-900 font-black'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{lang.name}</div>
                      <div className="text-[10px] text-slate-400">{lang.englishName}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cloud & Offline Synchronization Status */}
            <div className="bg-gradient-to-br from-earth-800 to-earth-900 text-white rounded-3xl p-6 shadow-md border-2 border-earth-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                  {isTe ? 'డేటా భద్రత & బ్యాకప్' : 'डेटा सुरक्षा व बैकअप'}
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-yellow-300" />
                <span>{isTe ? 'Supabase క్లౌడ్ సింక్ యాక్టివ్' : 'Supabase क्लाउड सिंक सक्रिय'}</span>
              </h3>
              <p className="text-xs text-cream-200 leading-relaxed font-medium">
                {isTe
                  ? 'మీ పంటల రికార్డులు, తెగుళ్ల పరిశీలన వివరాలు మరియు బహీఖాతా స్థానికంగా సురక్షితంగా ఉంటాయి మరియు ఇంటర్నెట్ ఉన్నప్పుడు క్లౌడ్‌లో భద్రపరచబడతాయి.'
                  : 'आपके सभी फसल रिकॉर्ड, रोग जांच और बहीखाता स्थानीय रूप से सुरक्षित हैं तथा इंटरनेट जुड़ने पर स्वचालित रूप से क्लाउड पर बैकअप हो जाते हैं।'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Pesticide & Fertilizer Safety Database Browser */
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-kisan-700" />
                  <span>
                    {isTe
                      ? 'CIBRC ధృవీకరించిన వ్యవసాయ రసాయన భద్రతా డేటాబేస్'
                      : 'CIBRC प्रमाणित कृषि रसायन सुरक्षा डेटाबेस'}
                  </span>
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {isTe
                    ? 'కేంద్ర పురుగుమందుల బోర్డు (CIBRC), భారత ప్రభుత్వం ఆమోదించిన ఉత్పత్తుల వివరాలు'
                    : 'केंद्रीय कीटनाशक बोर्ड एवं पंजीकरण समिति (CIBRC), भारत सरकार द्वारा अधिकृत उत्पाद'}
                </p>
              </div>

              <div className="relative max-w-sm w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={pestSearchQuery}
                  onChange={(e) => setPestSearchQuery(e.target.value)}
                  placeholder={
                    isTe
                      ? 'మందు పేరు లేదా తెగులుతో వెతకండి (ఉదా: Delegate, Thrips, Coragen)...'
                      : 'दवा का नाम या कीट खोजें (उदा. Coragen, Rust, Mahu)...'
                  }
                  className="w-full pl-10 pr-4 py-2.5 border-2 border-slate-200 rounded-xl focus:border-kisan-600 text-xs font-medium"
                />
              </div>
            </div>

            {/* Safety Rules Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{isTe ? 'భద్రతా నియమాలు:' : 'सुरक्षा नियम:'}</span>{' '}
                {isTe
                  ? 'ఎల్లప్పుడూ లేబుల్ మరియు CIBRC సిఫారసుల ప్రకారమే మందులు వాడండి. పురుగుమందు పిచికారీ చేసిన తర్వాత నిర్దేశిత వ్యవధి (PHI) పూర్తయ్యే వరకు పంటను కోయరాదు.'
                  : 'कभी भी प्रतिबंधित या बिना लेबल वाले रसायनों का प्रयोग न करें। कीटनाशक छिड़काव के बाद निर्धारित प्रतीक्षा अवधि (PHI) तक फसल की कटाई न करें।'}
              </div>
            </div>

            {/* Verified Chemical Cards */}
            <div className="space-y-4">
              {filteredPesticides.map((pest) => (
                <div
                  key={pest.id}
                  className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/50 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-base text-slate-900">{pest.tradeName}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
                          {pest.cibrcApprovedStatus}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-semibold mt-0.5">
                        {isTe ? 'క్రియాశీల పదార్ధం:' : 'सक्रिय घटक:'} <span className="text-slate-900 font-bold">{pest.activeIngredient}</span> • {isTe ? 'వర్గం:' : 'श्रेणी:'} {pest.category}
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {isTe ? 'వేచి ఉండవలసిన సమయం (PHI):' : 'प्रतीक्षा अवधि (PHI):'} {pest.preHarvestIntervalDays} {isTe ? 'రోజులు' : 'दिन'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-xl border border-slate-200">
                    <div>
                      <span className="font-bold text-slate-800">{isTe ? 'ఆమోదిత పంటలు:' : 'स्वीकृत फसलें:'}</span> {pest.approvedCrops.join(', ')}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">{isTe ? 'లక్ష్య తెగుళ్లు / కీటకాలు:' : 'लक्षित कीट / रोग:'}</span> {pest.targetPests.join(', ')}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">{isTe ? 'సిఫార్సు మోతాదు:' : 'अनुशंसित मात्रा:'}</span> {pest.approvedDosagePerAcre}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">{isTe ? 'నీటి పరిమాణం:' : 'पानी की मात्रा:'}</span> {pest.recommendedWaterVolume}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 text-xs text-emerald-950 font-medium">
                    <span className="font-bold text-emerald-900">{isTe ? 'సేంద్రీయ ప్రత్యామ్నాయం (IPM):' : 'जैविक विकल्प (IPM First):'}</span> {pest.ipmAlternative}
                  </div>

                  <div className="text-[11px] text-slate-500 pt-1 flex justify-between">
                    <span>{isTe ? 'రిజిస్ట్రేషన్ సంఖ్య:' : 'पंजीकरण संख्या:'} {pest.registrationNumber}</span>
                    <span>{isTe ? 'మూలం:' : 'स्रोत:'} {pest.officialSource}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
