'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { MANDI_SAMPLE_DATA, calculateNetMandiReturn, NetReturnResult } from '@/lib/mandiData';
import {
  Store,
  Search,
  Calculator,
  TrendingUp,
  MapPin,
  Truck,
  ArrowRight,
  Info
} from 'lucide-react';

export default function MandiPage() {
  const { currentLocation } = useFarmer();
  const { currentLanguage } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [searchCommodity, setSearchCommodity] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'prices' | 'calculator'>('prices');

  // Net Return Calculator Form State
  const [calcQuantity, setCalcQuantity] = useState('50'); // 50 Quintals
  const [calcMandiRate, setCalcMandiRate] = useState('2580'); // ₹/Quintal
  const [calcDistance, setCalcDistance] = useState('25'); // 25 km
  const [calcTransportRate, setCalcTransportRate] = useState('25'); // ₹25/km for tractor trolley
  const [calcLoadingCost, setCalcLoadingCost] = useState('15'); // ₹15/quintal
  const [calcCommissionPercent, setCalcCommissionPercent] = useState('1.5');
  const [calcOtherExpenses, setCalcOtherExpenses] = useState('500');

  const filteredMandis = MANDI_SAMPLE_DATA.filter((m) => {
    const matchesQuery =
      m.commodity.toLowerCase().includes(searchCommodity.toLowerCase()) ||
      m.variety.toLowerCase().includes(searchCommodity.toLowerCase()) ||
      m.market.toLowerCase().includes(searchCommodity.toLowerCase()) ||
      m.district.toLowerCase().includes(searchCommodity.toLowerCase());
    const matchesState = selectedState === 'All' ? true : m.state === selectedState;
    return matchesQuery && matchesState;
  });

  // Calculate net returns
  const calculationResult: NetReturnResult = calculateNetMandiReturn({
    quantityQuintals: parseFloat(calcQuantity) || 0,
    modalPricePerQuintal: parseFloat(calcMandiRate) || 0,
    distanceKm: parseFloat(calcDistance) || 0,
    transportRatePerKm: parseFloat(calcTransportRate) || 0,
    loadingUnloadingPerQuintal: parseFloat(calcLoadingCost) || 0,
    mandiCommissionPercent: parseFloat(calcCommissionPercent) || 0,
    otherExpenses: parseFloat(calcOtherExpenses) || 0
  });

  const availableStates = ['All', 'Andhra Pradesh', 'Telangana', 'Madhya Pradesh', 'Punjab', 'Haryana', 'Rajasthan', 'Gujarat', 'Maharashtra', 'Karnataka'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Store className="w-8 h-8 text-amber-600" />
            <span>
              {isTe
                ? 'మార్కెట్ యార్డు ధరలు & నికర లాభం కాలిక్యులేటర్'
                : 'मंडी भाव एवं शुद्ध मुनाफा कैलकुलेटर (Mandi Rates & Net Return)'}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'ఆంధ్రప్రదేశ్ & తెలంగాణ మార్కెట్ యార్డులు, AGMARKNET మరియు e-NAM తాజా ధరల వివరాలు'
              : 'कृषि विपणन एवं निरीक्षण निदेशालय (AGMARKNET) एवं राष्ट्रीय कृषि बाजार (e-NAM)'}
          </p>
        </div>

        <div className="flex border-2 border-slate-200 rounded-2xl p-1 bg-white">
          <button
            onClick={() => setActiveTab('prices')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
              activeTab === 'prices' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isTe ? 'తాజా ధరలు (Live Rates)' : 'ताज़ा भाव (Live Rates)'}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'calculator' ? 'bg-kisan-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{isTe ? 'లాభం కాలిక్యులేటర్' : 'मुनाफा कैलकुलेटर'}</span>
          </button>
        </div>
      </div>

      {activeTab === 'prices' ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-slate-200 flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchCommodity}
                onChange={(e) => setSearchCommodity(e.target.value)}
                placeholder={
                  isTe
                    ? 'పంట లేదా మార్కెట్ యార్డ్ పేరుతో వెతకండి (ఉదా: మిరప, గుంటూరు, వరంగల్, పత్తి, నిజామాబాద్)...'
                    : 'फसल या मंडी खोजें (उदा. गेहूं, सरसों, सेहोर, लसण, प्याज)...'
                }
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-2xl focus:border-kisan-600 focus:outline-hidden text-sm font-medium"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                {isTe ? 'రాష్ట్రం:' : 'राज्य:'}
              </span>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="p-3 border-2 border-slate-200 rounded-2xl focus:border-kisan-600 text-xs font-bold bg-white text-slate-800"
              >
                {availableStates.map((st) => (
                  <option key={st} value={st}>
                    {st === 'All' ? (isTe ? 'అన్ని రాష్ట్రాలు (All States)' : 'सभी राज्य (All States)') : st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mandi Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMandis.map((mandi) => (
              <div
                key={mandi.id}
                className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 hover:border-amber-300 transition-all space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {mandi.market} • {mandi.district} ({mandi.state})
                    </span>
                    <h2 className="text-xl font-black text-slate-900 mt-1">{mandi.commodity}</h2>
                    <p className="text-xs text-slate-500 font-semibold">{mandi.variety}</p>
                  </div>
                  {mandi.distanceKm && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-slate-100 text-slate-700 border border-slate-200">
                      📍 {mandi.distanceKm} km
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500">
                      {isTe ? 'సగటు ధర (Modal Rate)' : 'मॉडल भाव (Modal Rate)'}
                    </span>
                    <div className="text-3xl font-black text-amber-700">
                      ₹{mandi.modalPrice.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[11px] text-slate-400 font-semibold">
                      {isTe ? 'క్వింటాలుకు (₹/Qtl)' : 'प्रति क्विंटल (₹/Qtl)'}
                    </span>
                  </div>
                  <div className="text-right text-xs text-slate-600 space-y-1">
                    <div>
                      {isTe ? 'కనిష్టం:' : 'न्यूनतम:'} <span className="font-bold text-slate-800">₹{mandi.minPrice}</span>
                    </div>
                    <div>
                      {isTe ? 'గరిష్టం:' : 'अधिकतम:'} <span className="font-bold text-slate-800">₹{mandi.maxPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Arrivals & Date Footer */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 font-medium">
                  <span>{isTe ? 'రాక (ఆవక్):' : 'आवक:'} {mandi.arrivalsTonnes} {isTe ? 'టన్నులు' : 'टन'}</span>
                  <span>{isTe ? 'తేదీ:' : 'दिनांक:'} {mandi.date}</span>
                </div>

                {/* Use in Calculator Button */}
                <button
                  onClick={() => {
                    setCalcMandiRate(String(mandi.modalPrice));
                    if (mandi.distanceKm) setCalcDistance(String(mandi.distanceKm));
                    setActiveTab('calculator');
                  }}
                  className="w-full py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-earth-900 font-bold text-xs border border-earth-300 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{isTe ? 'ఈ ధరకు నికర లాభం లెక్కించండి' : 'इस भाव पर शुद्ध मुनाफा जोड़ें'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Net Return Calculator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-4">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-amber-600" />
              <span>{isTe ? 'మండీ ఖర్చులు & విక్రయ వివరాలు' : 'मंडी खर्चे एवं बिक्री विवरण'}</span>
            </h2>

            <div className="space-y-3 text-xs font-bold text-slate-700">
              <div>
                <label className="block mb-1">{isTe ? 'ఉత్పత్తి పరిమాణం (క్వింటాళ్లలో)' : 'कुल उपज मात्रा (क्विंटल में)'}</label>
                <input
                  type="number"
                  value={calcQuantity}
                  onChange={(e) => setCalcQuantity(e.target.value)}
                  className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block mb-1">{isTe ? 'మండీ ధర (₹ ప్రతి క్వింటాలుకు)' : 'मंडी भाव (₹ प्रति क्विंटल)'}</label>
                <input
                  type="number"
                  value={calcMandiRate}
                  onChange={(e) => setCalcMandiRate(e.target.value)}
                  className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'దూరం (కి.మీ)' : 'दूरी (किलोमीटर)'}</label>
                  <input
                    type="number"
                    value={calcDistance}
                    onChange={(e) => setCalcDistance(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'రవాణా రేటు (₹/కి.మీ)' : 'किराया (₹ प्रति किमी)'}</label>
                  <input
                    type="number"
                    value={calcTransportRate}
                    onChange={(e) => setCalcTransportRate(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1">{isTe ? 'కూలీ ఖర్చు (₹/క్వింటాలు)' : 'हमाली/लोडिंग (₹/क्विंटल)'}</label>
                  <input
                    type="number"
                    value={calcLoadingCost}
                    onChange={(e) => setCalcLoadingCost(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <label className="block mb-1">{isTe ? 'కమిషన్ (%)' : 'कमीशन (%)'}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={calcCommissionPercent}
                    onChange={(e) => setCalcCommissionPercent(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">{isTe ? 'ఇతర ఖర్చులు (₹ - కాటా ఫీజు, బార్దానా)' : 'अन्य खर्चे (₹ - तुलाई, बारदाना)'}</label>
                <input
                  type="number"
                  value={calcOtherExpenses}
                  onChange={(e) => setCalcOtherExpenses(e.target.value)}
                  className="w-full p-2.5 border-2 border-slate-300 rounded-xl font-black text-slate-900 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Net Return Summary Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
              <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-emerald-200">
                {isTe ? 'రైతు చేతికి అందే నికర మొత్తం' : 'किसान के हाथ में शुद्ध आय'}
              </span>

              <div>
                <span className="text-xs text-emerald-300 font-bold block">
                  {isTe ? 'అన్ని ఖర్చులు పోను నికర లాభం (Net Income)' : 'सभी खर्चे काटकर शुद्ध मुनाफा (Net Realization)'}
                </span>
                <div className="text-4xl sm:text-5xl font-black mt-1">
                  ₹{calculationResult.netTakeHomeEarnings.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-300 mt-1 font-semibold">
                  {isTe ? 'నికర ధర:' : 'शुद्ध दर:'} ₹{calculationResult.effectiveRatePerQuintal.toLocaleString('en-IN')} / {isTe ? 'క్వింటాలు' : 'क्विंटल'}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-700/60 text-xs">
                <div>
                  <span className="text-slate-300 block">{isTe ? 'స్థూల విక్రయం:' : 'सकल बिक्री:'}</span>
                  <span className="text-base font-black text-white">
                    ₹{calculationResult.grossRevenue.toLocaleString('en-IN')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-300 block">{isTe ? 'మొత్తం ఖర్చులు:' : 'कुल खर्चे:'}</span>
                  <span className="text-base font-black text-rose-300">
                    -₹{calculationResult.totalDeductions.toLocaleString('en-IN')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-300 block">{isTe ? 'రవాణా:' : 'भाड़ा:'}</span>
                  <span className="text-sm font-bold text-slate-200">
                    ₹{calculationResult.totalTransportCost}
                  </span>
                </div>
                <div>
                  <span className="text-slate-300 block">{isTe ? 'కూలీ & కమిషన్:' : 'हमाली/कमीशन:'}</span>
                  <span className="text-sm font-bold text-slate-200">
                    ₹{(calculationResult.totalLoadingCost + calculationResult.totalCommissionCost).toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
