'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { EXPERT_CONTACTS } from '@/lib/expertData';
import {
  Headset,
  PhoneCall,
  MapPin,
  Calendar,
  Languages,
  Send,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

export default function ExpertPage() {
  const { currentLocation } = useFarmer();
  const { currentLanguage } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [searchDistrict, setSearchDistrict] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [selectedCrop, setSelectedCrop] = useState(isTe ? 'మిరప (Chilli)' : 'गेहूं (Wheat)');
  const [consultType, setConsultType] = useState<'callback' | 'whatsapp' | 'kvk_visit'>('callback');
  const [farmerPhone, setFarmerPhone] = useState('9876543210');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setQuestionText('');
    }, 2500);
  };

  const filteredExperts = EXPERT_CONTACTS.filter((exp) => {
    return (
      exp.name.toLowerCase().includes(searchDistrict.toLowerCase()) ||
      exp.specialty.toLowerCase().includes(searchDistrict.toLowerCase()) ||
      exp.district.toLowerCase().includes(searchDistrict.toLowerCase()) ||
      exp.state.toLowerCase().includes(searchDistrict.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Headset className="w-8 h-8 text-kisan-700" />
            <span>
              {isTe
                ? 'వ్యవసాయ శాస్త్రవేత్తల సలహాలు & కిసాన్ కాల్ సెంటర్'
                : 'कृषि विशेषज्ञ एवं किसान कॉल सेंटर (Expert Consultation)'}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'కృషి విజ్ఞాన కేంద్రం (KVK) శాస్త్రవేత్తలు, ANGRAU, PJTSAU అధికారులతో ప్రత్యక్ష సలహాలు పొందండి'
              : 'कृषि विज्ञान केंद्र (KVK) के वैज्ञानिकों एवं कृषि अधिकारियों से सीधी सलाह प्राप्त करें'}
          </p>
        </div>
      </div>

      {/* Emergency Toll-Free Kisan Call Centre Hero Card */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-6 sm:p-8 text-kisan-950 shadow-xl border-2 border-yellow-300 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-black uppercase tracking-wider bg-white/30 px-3 py-1 rounded-full border border-white/40">
            {isTe ? 'భారత ప్రభుత్వం • జాతీయ టోల్-ఫ్రీ హెల్ప్‌లైన్' : 'भारत सरकार • राष्ट्रीय टोल-फ्री हेल्पलाइन'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            {isTe ? 'కిసాన్ కాల్ సెంటర్ (Kisan Call Centre)' : 'किसान कॉल सेंटर (Kisan Call Centre)'}
          </h2>
          <p className="text-sm font-semibold text-kisan-950/80 max-w-xl">
            {isTe
              ? 'తెలుగు సహా 22 భారతీయ భాషల్లో వ్యవసాయ శాస్త్రవేత్తలతో ఉచితంగా మాట్లాడండి. ఉదయం 6:00 నుండి రాత్రి 10:00 వరకు వారంలో 7 రోజులు అందుబాటులో ఉంటుంది.'
              : '22 भारतीय भाषाओं में कृषि वैज्ञानिकों से निःशुल्क फोन पर बात करें। सुबह 6:00 से रात 10:00 बजे तक सभी 7 दिन सेवा चालू है।'}
          </p>
        </div>

        <a
          href="tel:18001801551"
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-yellow-300 font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <PhoneCall className="w-7 h-7 text-yellow-300 animate-bounce" />
          <span>1800-180-1551</span>
        </a>
      </div>

      {/* Submit Consultation Query Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-5">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-kisan-700" />
              <span>{isTe ? 'శాస్త్రవేత్తను ప్రశ్న అడగండి (Ask an Expert)' : 'वैज्ञानिक से सवाल पूछें (Ask an Expert)'}</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {isTe
                ? 'మీ జిల్లా కృషి విజ్ఞాన కేంద్రం (KVK) శాస్త్రవేత్తకు మీ వ్యవసాయ సమస్యను పంపండి'
                : 'अपने जिले के कृषि विज्ञान केंद्र (KVK) वैज्ञानिक को अपनी समस्या भेजें'}
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-300 text-center space-y-2 animate-fadeIn">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-base font-black text-emerald-900">
                {isTe ? 'మీ ప్రశ్న విజయవంతంగా నమోదైంది!' : 'आपका सवाल सफलतापूर्वक दर्ज कर लिया गया है!'}
              </h3>
              <p className="text-xs text-emerald-800">
                {isTe
                  ? `KVK వ్యవసాయ శాస్త్రవేత్త 24 గంటల్లోగా మీ ఫోన్ నంబర్ ${farmerPhone} కు కాల్ లేదా వాట్సాప్ ద్వారా సమాధానం ఇస్తారు.`
                  : `KVK कृषि अधिकारी 24 घंटे के भीतर आपके नंबर ${farmerPhone} पर कॉल या व्हाट्सएप द्वारा संपर्क करेंगे।`}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-700 underline"
              >
                {isTe ? 'మరో ప్రశ్న అడగండి' : 'नया सवाल पूछें'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitRequest} className="space-y-4 text-xs font-bold text-slate-700">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'పంటను ఎంచుకోండి' : 'फसल चुनें'}</label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                  >
                    <option value="మిరప (Chilli)">{isTe ? 'మిరప (Chilli)' : 'मिर्च (Chilli)'}</option>
                    <option value="వరి (Paddy)">{isTe ? 'వరి (Paddy)' : 'धान (Paddy)'}</option>
                    <option value="పత్తి (Cotton)">{isTe ? 'పత్తి (Cotton)' : 'कपास (Cotton)'}</option>
                    <option value="టమాట (Tomato)">{isTe ? 'టమాట (Tomato)' : 'टमाटर (Tomato)'}</option>
                    <option value="గోధుమ (Wheat)">{isTe ? 'గోధుమ (Wheat)' : 'गेहूं (Wheat)'}</option>
                    <option value="ఇతర పంటలు">{isTe ? 'ఇతర పంటలు' : 'सब्जियां / अन्य'}</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'సంప్రదింపు ఫోన్ నంబర్' : 'संपर्क फोन नंबर'}</label>
                  <input
                    type="tel"
                    value={farmerPhone}
                    onChange={(e) => setFarmerPhone(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">
                  {isTe ? 'మీ సమస్య లేదా ప్రశ్న వివరాలు రాయండి' : 'अपनी समस्या या सवाल का विवरण लिखें'}
                </label>
                <textarea
                  rows={4}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={
                    isTe
                      ? 'ఉదా: మిరప తోటలో నల్ల తామర పురుగు ఎక్కువైంది, పూత రాలిపోతోంది. ఏ మందు పిచికారీ చేయాలి?...'
                      : 'उदा. फसल की पत्तियां पीली पड़ रही हैं और बढ़वार रुक गई है, कौन सी खाद या स्प्रे दें?...'
                  }
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-xs font-medium"
                  required
                />
              </div>

              <div>
                <label className="block mb-1.5">{isTe ? 'సలహా మాధ్యమం ఎంచుకోండి' : 'परामर्श का माध्यम चुनें'}</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultType('callback')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      consultType === 'callback'
                        ? 'border-kisan-600 bg-kisan-100 text-kisan-900 font-black'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    📞 {isTe ? 'ఫోన్ కాల్' : 'फोन कॉल'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultType('whatsapp')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      consultType === 'whatsapp'
                        ? 'border-kisan-600 bg-kisan-100 text-kisan-900 font-black'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    💬 {isTe ? 'వాట్సాప్' : 'व्हाट्सएप'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultType('kvk_visit')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      consultType === 'kvk_visit'
                        ? 'border-kisan-600 bg-kisan-100 text-kisan-900 font-black'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🏛️ {isTe ? 'KVK సందర్శన' : 'KVK विजिट'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-kisan-700 hover:bg-kisan-800 text-white font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isTe ? 'సలహా అభ్యర్థన పంపండి (Submit Request)' : 'परामर्श अनुरोध भेजें (Submit Consultation Request)'}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Directory of Verified KVK Scientists */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900">
              {isTe ? 'ఆంధ్రప్రదేశ్ & తెలంగాణ KVK శాస్త్రవేత్తలు' : 'जिले के कृषि वैज्ञानिक (KVK Directory)'}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {filteredExperts.length} {isTe ? 'నిపుణులు' : 'विशेषज्ञ'}
            </span>
          </div>

          <div className="space-y-4">
            {filteredExperts.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border-2 border-slate-200 space-y-3 hover:border-kisan-400 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{exp.name}</h3>
                    <p className="text-xs text-kisan-700 font-bold">{exp.designation}</p>
                    <p className="text-xs text-slate-500 font-medium">{exp.institution}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-cream-200 text-earth-900">
                    {exp.state}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                  <div className="text-slate-800">
                    <span className="font-bold">{isTe ? 'నైపుణ్యం:' : 'विशेषज्ञता:'}</span> {exp.specialty}
                  </div>
                  <div className="text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.district}, {exp.state}</span>
                  </div>
                  <div className="text-slate-600 flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isTe ? 'భాషలు:' : 'भाषाएं:'} {exp.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.availableDays}</span>
                  </div>

                  <a
                    href={`tel:${exp.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs shadow-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{exp.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
