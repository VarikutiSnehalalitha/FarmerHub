'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { GOVERNMENT_SCHEMES, checkSchemeEligibility } from '@/lib/schemeData';
import {
  Landmark,
  CheckCircle,
  FileText,
  ExternalLink,
  PhoneCall,
  Bookmark,
  BookmarkCheck,
  Search,
  Sparkles
} from 'lucide-react';

export default function SchemesPage() {
  const { savedSchemeIds, toggleSavedScheme } = useFarmer();
  const { currentLanguage } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [activeTab, setActiveTab] = useState<'all' | 'eligibility' | 'saved'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Eligibility questionnaire state
  const [landSize, setLandSize] = useState('3.5');
  const [hasKcc, setHasKcc] = useState(false);
  const [irrigation, setIrrigation] = useState<'borewell' | 'canal' | 'rainfed' | 'none'>('borewell');
  const [interestedMachinery, setInterestedMachinery] = useState(true);
  const [interestedOrganic, setInterestedOrganic] = useState(false);

  const matchedResults = checkSchemeEligibility({
    landSizeAcres: parseFloat(landSize) || 0,
    hasKcc,
    irrigationSource: irrigation,
    interests: [
      interestedMachinery ? 'machinery' : null,
      interestedOrganic ? 'organic' : null
    ].filter(Boolean) as any
  });

  const categories = [
    { id: 'All', label: isTe ? 'అన్ని పథకాలు (All)' : 'सभी योजनाएं (All)' },
    { id: 'income_support', label: isTe ? 'రైతు పెట్టుబడి సాయం' : 'सीधी आर्थिक मदद' },
    { id: 'insurance', label: isTe ? 'పంటల బీమా (Crop Insurance)' : 'फसल बीमा (Crop Insurance)' },
    { id: 'credit', label: isTe ? 'రాయితీ రుణాలు (KCC Credit)' : 'सस्ता ऋण (KCC Credit)' },
    { id: 'irrigation', label: isTe ? 'బిందు & తుంపర సేద్యం' : 'ड्रिप व स्प्रिंकलर (Irrigation)' },
    { id: 'machinery', label: isTe ? 'వ్యవసాయ యంత్ర రాయితీ' : 'कृषि यंत्र सब्सिडी' },
    { id: 'organic', label: isTe ? 'సేంద్రీయ & ప్రకృతి వ్యవసాయం' : 'जैविक व प्राकृतिक खेती' }
  ];

  const filteredSchemes = GOVERNMENT_SCHEMES.filter((sch) => {
    const titleMatch =
      sch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sch.hindiTitle && sch.hindiTitle.includes(searchQuery)) ||
      (sch.teluguTitle && sch.teluguTitle.includes(searchQuery)) ||
      sch.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' ? true : sch.category === selectedCategory;
    const matchesSaved = activeTab === 'saved' ? savedSchemeIds.includes(sch.id) : true;
    return titleMatch && matchesCat && matchesSaved;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Landmark className="w-8 h-8 text-emerald-700" />
            <span>
              {isTe
                ? 'ప్రభుత్వ పథకాలు & రాయితీలు (AP, తెలంగాణ & కేంద్ర పథకాలు)'
                : 'सरकारी योजनाएं एवं सब्सिडी (Government Schemes & Subsidies)'}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'ఆంధ్రప్రదేశ్ (రైతు భరోసా), తెలంగాణ (రైతు బంధు, బీమా) & కేంద్ర ప్రభుత్వ వ్యవసాయ పథకాల సమాచారం'
              : 'केंद्र एवं राज्य सरकार की कृषि कल्याणकारी योजनाएं, ऑनलाइन आवेदन व पात्रता जांच'}
          </p>
        </div>

        <div className="flex border-2 border-slate-200 rounded-2xl p-1 bg-white">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'all' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? 'అన్ని పథకాలు' : 'सभी योजनाएं'}
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'eligibility' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>{isTe ? 'అర్హత తనిఖీ (Eligibility)' : 'पात्रता जांचें (Eligibility)'}</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'saved' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? `సేవ్ చేసినవి (${savedSchemeIds.length})` : `सहेजी गई (${savedSchemeIds.length})`}
          </button>
        </div>
      </div>

      {activeTab === 'eligibility' ? (
        /* Interactive Eligibility Questionnaire */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-5">
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <span>{isTe ? 'రైతు అర్హత ప్రశ్నావళి' : 'सरल पात्रता प्रश्नावली'}</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {isTe
                  ? '3 సాధారణ ప్రశ్నలకు సమాధానమిచ్చి మీరు ఏయే ప్రభుత్వ పథకాలకు అర్హులో తెలుసుకోండి'
                  : '3 आसान सवालों के उत्तर दें और जानें कि आप किन-किन सरकारी अनुदानों के लिए पात्र हैं'}
              </p>
            </div>

            <div className="space-y-4 text-xs font-bold text-slate-700">
              {/* Question 1 */}
              <div>
                <label className="block mb-1.5">
                  {isTe ? '1. మీకు ఎంత విస్తీర్ణంలో సాగుభూమి ఉంది? (ఎకరాల్లో)' : '1. आपके पास कितनी कृषि भूमि है? (एकड़ में)'}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-base font-black text-slate-900"
                />
              </div>

              {/* Question 2 */}
              <div>
                <label className="block mb-1.5">
                  {isTe ? '2. మీ పొలంలో ప్రధాన నీటి పారుదల వనరు ఏమిటి?' : '2. खेत में सिंचाई का मुख्य साधन क्या है?'}
                </label>
                <select
                  value={irrigation}
                  onChange={(e) => setIrrigation(e.target.value as any)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-sm font-bold"
                >
                  <option value="borewell">{isTe ? 'బోరుబావి / ట్యూబ్‌వెల్ (Borewell)' : 'नलकूप / ट्यूबवेल (Borewell)'}</option>
                  <option value="canal">{isTe ? 'కాలువ / బావి (Canal / Open Well)' : 'नहर / कुआं (Canal / Well)'}</option>
                  <option value="rainfed">{isTe ? 'వర్షాధార సేద్యం (Rainfed / వర్షాకాలం)' : 'पूर्णतः वर्षा आधारित (Rainfed / Barani)'}</option>
                  <option value="none">{isTe ? 'నీటి వనరు లేదు' : 'कोई सिंचाई साधन नहीं'}</option>
                </select>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block mb-1.5">
                  {isTe ? '3. మీ వద్ద కిసాన్ క్రెడిట్ కార్డు (KCC) ఉందా?' : '3. क्या आपके पास किसान क्रेडिट कार्ड (KCC) है?'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasKcc(true)}
                    className={`py-2.5 rounded-xl border text-center font-bold ${
                      hasKcc ? 'border-kisan-600 bg-kisan-100 text-kisan-900' : 'border-slate-300'
                    }`}
                  >
                    {isTe ? 'అవును, KCC ఉంది' : 'हाँ, KCC है'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasKcc(false)}
                    className={`py-2.5 rounded-xl border text-center font-bold ${
                      !hasKcc ? 'border-kisan-600 bg-kisan-100 text-kisan-900' : 'border-slate-300'
                    }`}
                  >
                    {isTe ? 'లేదు, KCC లేదు' : 'नहीं, KCC नहीं है'}
                  </button>
                </div>
              </div>

              {/* Interests checkboxes */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="block text-slate-500 text-[11px] uppercase tracking-wider">
                  {isTe ? 'అదనపు ఆసక్తులు:' : 'अतिरिक्त आवश्यकताएं:'}
                </span>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                  <input
                    type="checkbox"
                    checked={interestedMachinery}
                    onChange={(e) => setInterestedMachinery(e.target.checked)}
                    className="w-4 h-4 rounded text-kisan-700"
                  />
                  <span>
                    {isTe
                      ? 'ట్రాక్టర్ లేదా యంత్ర పరికరాలపై 50% రాయితీ కావాలి'
                      : 'ट्रैक्टर या नए कृषि यंत्रों पर 50% सब्सिडी चाहिए'}
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                  <input
                    type="checkbox"
                    checked={interestedOrganic}
                    onChange={(e) => setInterestedOrganic(e.target.checked)}
                    className="w-4 h-4 rounded text-kisan-700"
                  />
                  <span>
                    {isTe
                      ? 'సేంద్రీయ / ప్రకృతి వ్యవసాయ ప్రోత్సాహకం కావాలి'
                      : 'जैविक / प्राकृतिक खेती के लिए ₹31,000 अनुदान चाहिए'}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Matches List */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-black text-slate-900 flex items-center justify-between">
              <span>
                {isTe ? `మీకు అర్హత ఉన్న పథకాలు (${matchedResults.length})` : `आपके लिए पात्र योजनाएं (${matchedResults.length})`}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {isTe ? 'స్మార్ట్ అర్హత ఇంజిన్' : 'स्वचालित पात्रता इंजन'}
              </span>
            </h2>

            <div className="space-y-4">
              {matchedResults.map(({ scheme, matchReason }) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {isTe ? 'అధిక అర్హత సరిపోలింది (High Match)' : 'उच्च पात्रता मिलान (High Match)'}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mt-1">
                        {isTe ? scheme.teluguTitle || scheme.title : scheme.hindiTitle || scheme.title}
                      </h3>
                      <p className="text-xs text-slate-500">{scheme.department}</p>
                    </div>

                    <button
                      onClick={() => toggleSavedScheme(scheme.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-colors"
                      title={isTe ? 'సేవ్ చేయండి' : 'सहेजें'}
                    >
                      {savedSchemeIds.includes(scheme.id) ? (
                        <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-semibold">
                    <span className="font-bold text-emerald-900">{isTe ? 'అర్హత కారణం:' : 'पात्रता का कारण:'}</span> {matchReason}
                  </div>

                  <div className="text-xs text-slate-700">
                    <span className="font-bold">{isTe ? 'ఆర్థిక ప్రయోజనం:' : 'वित्तीय लाभ:'}</span> {scheme.financialBenefit}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium">
                      {isTe ? 'హెల్ప్‌లైన్:' : 'हेल्पलाइन:'} {scheme.helpline}
                    </span>
                    <a
                      href={scheme.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-kisan-700 hover:text-kisan-900 flex items-center gap-1 underline underline-offset-2"
                    >
                      {isTe ? 'అధికారిక పోర్టల్' : 'आधिकारिक पोर्टल'} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* All / Saved Schemes Catalog */
        <div className="space-y-6">
          {/* Search and Category Filters */}
          <div className="space-y-3">
            <div className="bg-white rounded-3xl p-4 shadow-md border-2 border-slate-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400 ml-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isTe
                    ? 'పథకం పేరుతో వెతకండి (ఉదా: రైతు భరోసా, పీఎం కిసాన్, రైతు బీమా, డ్రిప్, ట్రాక్టర్)...'
                    : 'योजना का नाम खोजें (उदा. पीएम किसान, फसल बीमा, केसीसी, ड्रिप, ट्रैक्टर)...'
                }
                className="w-full pr-4 py-2 text-sm font-medium focus:outline-hidden"
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`text-xs px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                    selectedCategory === c.id
                      ? 'bg-kisan-700 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-kisan-400'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scheme Cards */}
          <div className="space-y-5">
            {filteredSchemes.map((sch) => (
              <div
                key={sch.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-4 hover:border-emerald-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black uppercase tracking-wider bg-cream-200 text-earth-900 px-3 py-0.5 rounded-full">
                        {sch.state || sch.scope} • {sch.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      {isTe ? sch.teluguTitle || sch.title : sch.hindiTitle || sch.title}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">{sch.department}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSavedScheme(sch.id)}
                      className="p-2.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-500 transition-colors"
                      title={isTe ? 'సేవ్ చేయండి' : 'सहेजें'}
                    >
                      {savedSchemeIds.includes(sch.id) ? (
                        <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Financial Benefit Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-kisan-50 border border-emerald-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    {isTe ? 'పథకం ద్వారా లభించే ఆర్థిక ప్రయోజనం' : 'योजना से मिलने वाला वित्तीय लाभ'}
                  </div>
                  <div className="text-sm font-black text-emerald-950 mt-1 leading-relaxed">
                    {sch.financialBenefit}
                  </div>
                </div>

                {/* Criteria and Documents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Eligibility */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-800 block">
                      {isTe ? 'అర్హత నిబంధనలు:' : 'पात्रता की शर्तें:'}
                    </span>
                    <ul className="space-y-1.5 text-slate-700">
                      {sch.eligibilityCriteria.map((crit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{crit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Required Documents */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="font-black text-slate-800 block">
                      {isTe ? 'కావలసిన పత్రాలు (Checklist):' : 'आवश्यक दस्तावेज (Checklist):'}
                    </span>
                    <ul className="space-y-1.5 text-slate-700">
                      {sch.requiredDocuments.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Steps & Helpline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-semibold">
                    <PhoneCall className="w-4 h-4 text-kisan-700" />
                    <span>{isTe ? 'హెల్ప్‌లైన్:' : 'हेल्पलाइन:'} {sch.helpline}</span>
                  </div>

                  <a
                    href={sch.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-kisan-700 hover:bg-kisan-800 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <span>{isTe ? 'అధికారిక వెబ్‌సైట్‌లో దరఖాస్తు చేయండి' : 'आधिकारिक पोर्टल पर आवेदन करें'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
