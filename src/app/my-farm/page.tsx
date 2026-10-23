'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  BookOpenCheck,
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Calendar,
  X,
  FileSpreadsheet,
  Download,
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function MyFarmPage() {
  const { profile, crops, addExpense } = useFarmer();
  const { currentLanguage, t } = useLanguage();

  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [selectedCropId, setSelectedCropId] = useState<string>(crops[0]?.id || '');
  const [expCategory, setExpCategory] = useState<'seeds' | 'fertilizer' | 'pesticides' | 'machinery' | 'labor' | 'irrigation' | 'transport'>('fertilizer');
  const [expAmount, setExpAmount] = useState('1500');
  const [expNotes, setExpNotes] = useState('');
  const [expDate, setExpDate] = useState('2026-10-22');

  const allExpenses = crops.flatMap((c) =>
    c.expenses.map((e) => ({ ...e, cropName: c.cropName }))
  );
  const totalExpenseAmount = allExpenses.reduce((sum, e) => sum + e.amount, 0);

  const totalCultivatedAcres = crops.reduce((sum, c) => sum + c.acreage, 0);
  const estimatedRevenue = totalCultivatedAcres * 20 * 2580;
  const netEstimatedProfit = Math.max(0, estimatedRevenue - totalExpenseAmount);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCropId) return;
    addExpense(selectedCropId, {
      category: expCategory,
      amount: parseFloat(expAmount) || 0,
      notes: expNotes || expCategory,
      date: expDate
    });
    setIsExpenseModalOpen(false);
    setExpNotes('');
  };

  const isTe = currentLanguage === 'te';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <BookOpenCheck className="w-8 h-8 text-earth-700" />
            <span>
              {isTe
                ? 'నా పొలం & ఖర్చుల బహీఖాతా (Farm Ledger)'
                : 'मेरा खेत व बहीखाता (Farm Ledger & Financial Records)'}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'సాగు ఖర్చులు, ఎరువులు-విత్తనాలు, కూలీ ఖర్చులు మరియు నికర లాభాల పారదర్శక లెక్క'
              : 'खेत की लागत, खाद-बीज का खर्च, मजदूरी और शुद्ध मुनाफे का पारदर्शी हिसाब'}
          </p>
        </div>

        <button
          onClick={() => setIsExpenseModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-earth-700 hover:bg-earth-800 text-white font-black text-sm shadow-md transition-all active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span>{isTe ? 'కొత్త ఖర్చు నమోదు చేయండి' : 'नया खर्च जोड़ें (Add Expense)'}</span>
        </button>
      </div>

      {/* Farm Overview & Financial KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Total Land */}
        <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>{isTe ? 'మొత్తం వ్యవసాయ భూమి' : 'कुल कृषि भूमि'}</span>
            <MapPin className="w-4 h-4 text-kisan-700" />
          </div>
          <div className="text-3xl font-black text-slate-900 mt-2">
            {profile.farmSizeAcres} {t('acresField')}
          </div>
          <div className="text-xs text-slate-500 mt-1 font-semibold">
            {isTe ? 'సాగులో ఉన్నది:' : 'सक्रिय बोई गई:'} {totalCultivatedAcres} {t('acresField')}
          </div>
        </div>

        {/* KPI 2: Total Cultivation Cost */}
        <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>{isTe ? 'మొత్తం సాగు ఖర్చులు' : 'कुल दर्ज लागत (Expenses)'}</span>
            <TrendingDown className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-3xl font-black text-rose-600 mt-2">
            ₹{totalExpenseAmount.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-slate-500 mt-1 font-semibold">
            {isTe ? 'విత్తనాలు, ఎరువులు & కూలీ' : 'खाद, बीज, डीजल व मजदूरी'}
          </div>
        </div>

        {/* KPI 3: Estimated Harvest Revenue */}
        <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>{isTe ? 'అంచనా దిగుబడి అమ్మకం' : 'अनुमानित उपज बिक्री'}</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-emerald-700 mt-2">
            ₹{estimatedRevenue.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-slate-500 mt-1 font-semibold">
            {isTe ? 'ప్రస్తుత మార్కెట్ ధర ప్రకారం' : 'वर्तमान मंडी भाव पर'}
          </div>
        </div>

        {/* KPI 4: Net Estimated Profit */}
        <div className="bg-gradient-to-br from-kisan-800 to-kisan-950 text-white rounded-3xl p-5 shadow-md border-2 border-kisan-700">
          <div className="flex items-center justify-between text-xs text-yellow-300 font-bold">
            <span>{isTe ? 'అంచనా నికర లాభం' : 'अनुमानित शुद्ध मुनाफा'}</span>
            <DollarSign className="w-4 h-4 text-yellow-300" />
          </div>
          <div className="text-3xl font-black text-yellow-300 mt-2">
            ₹{netEstimatedProfit.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-cream-200 mt-1 font-semibold">
            {isTe ? 'ఖర్చులు పోనూ నికర ఆదాయం' : 'लागत घटाने के बाद शुद्ध आय'}
          </div>
        </div>
      </div>

      {/* Farm Details Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border-2 border-slate-200 space-y-4">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-earth-700" />
          <span>{isTe ? 'పొలం మరియు నీటి వనరుల వివరాలు' : 'खेत एवं सिंचाई संसाधन विवरण'}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-500 block mb-1">{isTe ? 'రైతు పేరు' : 'किसान का नाम'}</span>
            <span className="font-black text-slate-800 text-sm">{profile.name}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-500 block mb-1">{isTe ? 'గ్రామం / జిల్లా' : 'स्थान (गाँव / जिला)'}</span>
            <span className="font-black text-slate-800 text-sm">
              {profile.village || 'గ్రామం'}, {profile.district}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-500 block mb-1">{isTe ? 'నేల రకం (Soil)' : 'मिट्टी का प्रकार'}</span>
            <span className="font-black text-slate-800 text-sm">
              {profile.soilType || (isTe ? 'నల్ల రేగడి నేల' : 'काली दोमट')}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-500 block mb-1">{isTe ? 'నీటి వనరు (Water)' : 'सिंचाई साधन'}</span>
            <span className="font-black text-slate-800 text-sm capitalize">
              {profile.irrigationType === 'borewell' ? (isTe ? 'బోరుబావి / ట్యూబ్‌వెల్' : 'नलकूप / ट्यूबवेल') : (profile.irrigationType || 'బోరుబావి')}
            </span>
          </div>
        </div>
      </div>

      {/* Expenses Ledger Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border-2 border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              {isTe ? 'ఖర్చుల బహీఖాతా (Expense Ledger)' : 'खर्च एवं लागत बहीखाता (Expense Ledger)'}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {isTe ? 'తేదీవారీగా నమోదు చేసిన ఖర్చులు' : 'तारीखवार दर्ज की गई सभी लागतें'}
            </p>
          </div>

          <button
            onClick={() => alert(isTe ? 'బహీఖాతా నివేదిక డౌన్‌లోడ్ అవుతోంది... (Excel/PDF)' : 'बहीखाता रिपोर्ट डाउनलोड हो रही है... (Excel/PDF)')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isTe ? 'డౌన్‌లోడ్' : 'रिपोर्ट डाउनलोड'}</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">{t('dateLabel')}</th>
                <th className="py-3 px-4">{isTe ? 'పంట' : 'फसल'}</th>
                <th className="py-3 px-4">{isTe ? 'వర్గం (Category)' : 'श्रेणी (Category)'}</th>
                <th className="py-3 px-4">{isTe ? 'వివరాలు (Notes)' : 'विवरण (Notes)'}</th>
                <th className="py-3 px-4 text-right">{isTe ? 'మొత్తం (₹ Amount)' : 'रकम (₹ Amount)'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {allExpenses.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    {isTe
                      ? 'ఇంకా ఎలాంటి ఖర్చులు నమోదు చేయలేదు. "కొత్త ఖర్చు నమోదు చేయండి" బటన్ నొక్కండి.'
                      : 'अभी कोई खर्च दर्ज नहीं है। "नया खर्च जोड़ें" बटन दबाएं।'}
                  </td>
                </tr>
              ) : (
                allExpenses.map((exp) => (
                  <tr key={exp.id} className="hover:bg-cream-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-800">{exp.date}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">{exp.cropName}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-earth-100 text-earth-900 capitalize">
                        {exp.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{exp.notes || '-'}</td>
                    <td className="py-3 px-4 text-right font-black text-slate-900 text-sm">
                      ₹{exp.amount.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {allExpenses.length > 0 && (
              <tfoot>
                <tr className="border-t-2 border-slate-200 font-black text-sm bg-slate-50">
                  <td colSpan={4} className="py-3 px-4 text-slate-800">
                    {isTe ? 'మొత్తం ఖర్చు (Total Expenses):' : 'कुल लागत (Total Expenses):'}
                  </td>
                  <td className="py-3 px-4 text-right text-rose-700">
                    ₹{totalExpenseAmount.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {/* Add Expense Modal */}
      {isExpenseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-kisan-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">
                {isTe ? 'ఖర్చు నమోదు చేయండి' : 'नया खर्च दर्ज करें'}
              </h3>
              <button
                onClick={() => setIsExpenseModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-3 text-sm">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isTe ? 'పంటను ఎంచుకోండి' : 'फसल चुनें'}
                </label>
                <select
                  value={selectedCropId}
                  onChange={(e) => setSelectedCropId(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                >
                  {crops.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.cropName} ({c.acreage} {t('acresField')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isTe ? 'ఖర్చు వర్గం' : 'खर्च की श्रेणी'}
                </label>
                <select
                  value={expCategory}
                  onChange={(e) => setExpCategory(e.target.value as any)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                >
                  <option value="fertilizer">{isTe ? 'ఎరువులు (DAP/Urea/Potash)' : 'खाद / उर्वरक'}</option>
                  <option value="seeds">{isTe ? 'విత్తనాలు (Seeds)' : 'बीज'}</option>
                  <option value="pesticides">{isTe ? 'పురుగుమందులు / తెగులు మందులు' : 'कीटनाशक / दवा'}</option>
                  <option value="machinery">{isTe ? 'ట్రాక్టర్ అద్దె & డీజిల్' : 'डीजल व ट्रैक्टर'}</option>
                  <option value="labor">{isTe ? 'కూలీ ఖర్చులు (Labor)' : 'मजदूरी'}</option>
                  <option value="irrigation">{isTe ? 'నీటి పారుదల / విద్యుత్' : 'सिंचाई बिजली बिल'}</option>
                  <option value="transport">{isTe ? 'మార్కెట్ రవాణా ఖర్చులు' : 'मंडी परिवहन'}</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isTe ? 'మొత్తం (₹ Amount)' : 'रकम (₹ Amount)'}
                </label>
                <input
                  type="number"
                  value={expAmount}
                  onChange={(e) => setExpAmount(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 text-base font-black"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isTe ? 'వివరాలు (Notes)' : 'विवरण (टिप्पणी)'}
                </label>
                <input
                  type="text"
                  value={expNotes}
                  onChange={(e) => setExpNotes(e.target.value)}
                  placeholder={isTe ? 'ఉదా. 2 బస్తాల DAP, 1 బస్తా పొటాష్' : 'उदा. 2 बोरी डीएपी और 1 बोरी पोटाश'}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">{t('dateLabel')}</label>
                <input
                  type="date"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-earth-700 hover:bg-earth-800 text-white font-black rounded-2xl shadow-lg transition-all"
                >
                  {isTe ? 'ఖర్చును భద్రపరచండి' : 'खर्च सहेजें (Save Expense)'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
