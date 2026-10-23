'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { CROP_DIRECTORY } from '@/lib/cropData';
import {
  Sprout,
  Plus,
  Calendar,
  DollarSign,
  Droplets,
  Layers,
  Bug,
  BookOpen,
  X,
  CheckCircle,
  Clock,
  Trash2,
  Check
} from 'lucide-react';

export default function MyCropsPage() {
  const { crops, addCrop, deleteCrop, logActivity, addExpense } = useFarmer();
  const { t, currentLanguage } = useLanguage();

  const [activeTab, setActiveTab] = useState<'my_crops' | 'directory'>('my_crops');
  const [selectedDirectoryCrop, setSelectedDirectoryCrop] = useState(CROP_DIRECTORY[0]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [selectedCropForActivity, setSelectedCropForActivity] = useState<string>('');

  // Add Crop Form State
  const [newCropName, setNewCropName] = useState('गेहूं (Wheat)');
  const [newVariety, setNewVariety] = useState('HD-2967');
  const [newSowingDate, setNewSowingDate] = useState('2026-10-21');
  const [newAcreage, setNewAcreage] = useState('2.5');
  const [newStage, setNewStage] = useState('Sowing & Germination');

  // Add Activity Form State
  const [actType, setActType] = useState<'irrigation' | 'fertilizer' | 'pesticide' | 'weeding' | 'harvesting'>('irrigation');
  const [actTitle, setActTitle] = useState('');
  const [actCost, setActCost] = useState('0');
  const [actDate, setActDate] = useState('2026-10-22');

  const handleCreateCrop = (e: React.FormEvent) => {
    e.preventDefault();
    addCrop({
      cropId: newCropName.toLowerCase().includes('wheat') ? 'wheat' : 'custom',
      cropName: newCropName,
      variety: newVariety,
      sowingDate: newSowingDate,
      acreage: parseFloat(newAcreage) || 1,
      currentStage: newStage,
      expectedHarvestDate: '2027-03-15'
    });
    setIsAddModalOpen(false);
  };

  const handleCreateActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCropForActivity) return;
    logActivity(selectedCropForActivity, {
      type: actType,
      title: actTitle || `${actType} कार्य`,
      date: actDate,
      cost: parseFloat(actCost) || 0,
      completed: true
    });
    if (parseFloat(actCost) > 0) {
      addExpense(selectedCropForActivity, {
        date: actDate,
        category: actType === 'fertilizer' ? 'fertilizer' : actType === 'pesticide' ? 'pesticides' : 'labor',
        amount: parseFloat(actCost) || 0,
        notes: actTitle
      });
    }
    setIsActivityModalOpen(false);
    setActTitle('');
    setActCost('0');
  };

  const isTe = currentLanguage === 'te';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Sprout className="w-8 h-8 text-kisan-700" />
            <span>{isTe ? 'నా పంటలు & వ్యవసాయ క్యాలెండర్' : `${t('navMyCrops')} एवं फसल कैलेंडर`}</span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'పొలంలో వేసిన పంటల పర్యవేక్షణ, ఎదుగుదల దశలు మరియు సమగ్ర సాగు పద్ధతులు'
              : 'खेत में बोई गई फसलों की निगरानी, विकास चरण और सम्पूर्ण कृषि पैकेज'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-kisan-700 hover:bg-kisan-800 text-white font-black text-sm shadow-md transition-all active:scale-95"
          >
            <Plus className="w-5 h-5" />
            <span>{t('actionAddCrop')}</span>
          </button>
        </div>
      </div>

      {/* Segment Tabs */}
      <div className="flex border-b-2 border-slate-200">
        <button
          onClick={() => setActiveTab('my_crops')}
          className={`py-3 px-6 text-sm font-black border-b-4 -mb-[2px] transition-all ${
            activeTab === 'my_crops'
              ? 'border-kisan-700 text-kisan-800 bg-kisan-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {isTe ? `నా ప్రస్తుత పంటలు (${crops.length})` : `मेरी सक्रिय फसलें (${crops.length})`}
        </button>
        <button
          onClick={() => setActiveTab('directory')}
          className={`py-3 px-6 text-sm font-black border-b-4 -mb-[2px] transition-all ${
            activeTab === 'directory'
              ? 'border-kisan-700 text-kisan-800 bg-kisan-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {isTe ? 'పంటల సమగ్ర సమాచారం (Crop Directory)' : 'फसल ज्ञानकोश (Crop Directory)'}
        </button>
      </div>

      {activeTab === 'my_crops' ? (
        /* My Crops List */
        <div className="space-y-6">
          {crops.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-slate-300 space-y-3">
              <Sprout className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">
                {isTe ? 'ఇంకా ఎలాంటి పంటను జోడించలేదు' : 'अभी कोई फसल नहीं जोड़ी गई है'}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                {isTe
                  ? 'సమయానికి నీటి తడులు, ఎరువులు మరియు పురుగుమందుల నోటిఫికేషన్లు పొందడానికి మీ పంటను జోడించండి.'
                  : 'अपनी बोई गई फसलें जोड़ें ताकि समय पर सिंचाई, खाद और छिड़काव के नोटिफिकेशन मिल सकें।'}
              </p>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-kisan-700 text-white font-bold text-sm"
              >
                + {isTe ? 'మొదటి పంటను జోడించండి' : 'पहली फसल जोड़ें'}
              </button>
            </div>
          ) : (
            crops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-5"
              >
                {/* Crop Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-black text-slate-900">{crop.cropName}</h2>
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
                        {crop.currentStage}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold mt-1">
                      {t('varietyLabel')}: <span className="text-slate-800">{crop.variety || (isTe ? 'దేశవాళీ / హైబ్రిడ్' : 'देशी / प्रमाणिक')}</span> • {t('acreageLabel')}:{' '}
                      <span className="text-slate-800">{crop.acreage} {t('acresField')}</span> • {t('sowingDateLabel')}:{' '}
                      <span className="text-slate-800">{crop.sowingDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedCropForActivity(crop.id);
                        setIsActivityModalOpen(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-kisan-50 hover:bg-kisan-100 text-kisan-800 border border-kisan-300 font-bold text-xs flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" /> {isTe ? 'పని / ఖర్చు నమోదు' : 'कार्य / खर्च दर्ज करें'}
                    </button>
                    <button
                      onClick={() => deleteCrop(crop.id)}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-xl hover:bg-red-50"
                      title="Delete Crop"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Growth Stage Tracker */}
                <div className="bg-cream-50/70 p-4 rounded-2xl border border-cream-200">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-2">
                    <span>{isTe ? 'విత్తడం (Sowing)' : 'बुवाई (Sowing)'}</span>
                    <span>{isTe ? 'శాకీయ దశ (Vegetative)' : 'वानस्पतिक वृद्धि (Vegetative)'}</span>
                    <span>{isTe ? 'పూత దశ (Flowering)' : 'पुष्पकाल (Flowering)'}</span>
                    <span>{isTe ? 'కాత దశ (Fruiting)' : 'दाना भराव (Grain Fill)'}</span>
                    <span>{isTe ? 'కోత (Harvest)' : 'कटाई (Harvest)'}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-kisan-500 via-emerald-600 to-harvest-500 h-full w-[45%] rounded-full shadow-inner"></div>
                  </div>
                </div>

                {/* Activity & Expenses Feed for this crop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Field Activities */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-kisan-700" /> {isTe ? 'వ్యవసాయ పనులు & కార్యకలాపాలు' : 'कृषि कार्य एवं गतिविधियां'}
                    </h3>
                    <div className="space-y-2">
                      {crop.activities.map((act) => (
                        <div
                          key={act.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            {act.completed ? (
                              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            ) : (
                              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            )}
                            <div>
                              <div className="font-bold text-slate-800">{act.title}</div>
                              <div className="text-[11px] text-slate-500">{act.date}</div>
                            </div>
                          </div>
                          {act.cost ? (
                            <span className="font-black text-slate-700">₹{act.cost}</span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expenses Ledger */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-earth-700" /> लागत व खर्च (Expenses)
                    </h3>
                    <div className="space-y-2">
                      {crop.expenses.map((exp) => (
                        <div
                          key={exp.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-earth-50/50 border border-earth-100 text-xs"
                        >
                          <div>
                            <div className="font-bold text-earth-900">{exp.notes || exp.category}</div>
                            <div className="text-[11px] text-slate-500 capitalize">{exp.category} • {exp.date}</div>
                          </div>
                          <span className="font-black text-earth-800 text-sm">₹{exp.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        /* Crop Agronomy Directory */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Crop List Sidebar */}
          <div className="space-y-2">
            <h2 className="text-sm font-black text-slate-700 uppercase tracking-wider">
              फसल का चयन करें
            </h2>
            <div className="space-y-2">
              {CROP_DIRECTORY.map((c) => {
                const isSelected = c.id === selectedDirectoryCrop.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedDirectoryCrop(c)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-kisan-600 bg-kisan-50 shadow-md font-bold text-kisan-900'
                        : 'border-slate-200 hover:border-kisan-300 bg-white text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-base">{c.hindiName}</div>
                      <div className="text-xs text-slate-500 font-medium">{c.scientificName} • {c.season}</div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-kisan-700 font-bold" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Crop Agronomy Guide */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-kisan-700 bg-kisan-100 px-3 py-1 rounded-full">
                  {selectedDirectoryCrop.category.toUpperCase()} • {selectedDirectoryCrop.season}
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  {selectedDirectoryCrop.hindiName} ({selectedDirectoryCrop.name})
                </h2>
                <p className="text-xs text-slate-500 italic mt-0.5">{selectedDirectoryCrop.scientificName}</p>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-500 font-semibold">अनुमानित पैदावार</div>
                <div className="text-lg font-black text-kisan-800">{selectedDirectoryCrop.yieldPerAcre}</div>
              </div>
            </div>

            {/* Sowing & Soil Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <div className="font-black text-slate-800 text-sm">उपयुक्त मिट्टी व जलवायु</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{selectedDirectoryCrop.suitableSoil}</p>
                <p className="text-xs text-slate-600 mt-1">{selectedDirectoryCrop.suitableClimate}</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <div className="font-black text-slate-800 text-sm">बीज दर एवं कतार दूरी</div>
                <p className="text-xs text-slate-600 mt-1 font-semibold">बीज दर: {selectedDirectoryCrop.seedRatePerAcre}</p>
                <p className="text-xs text-slate-600 mt-1 font-semibold">दूरी: {selectedDirectoryCrop.spacing}</p>
                <p className="text-xs text-slate-600 mt-1">बुवाई का समय: {selectedDirectoryCrop.sowingMonths.join(', ')}</p>
              </div>
            </div>

            {/* Fertilizer Schedule */}
            <div className="space-y-2">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-600" /> उर्वरक एवं खाद प्रबंधन (Fertilizer Schedule)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-black text-slate-700 block mb-1">बुवाई के समय (Basal)</span>
                  <p className="text-slate-600 leading-relaxed">{selectedDirectoryCrop.fertilizerSchedule.basal}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-black text-slate-700 block mb-1">वानस्पतिक चरण (Vegetative)</span>
                  <p className="text-slate-600 leading-relaxed">{selectedDirectoryCrop.fertilizerSchedule.vegetative}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-black text-slate-700 block mb-1">फूल / दाना भराव (Reproductive)</span>
                  <p className="text-slate-600 leading-relaxed">{selectedDirectoryCrop.fertilizerSchedule.flowering}</p>
                </div>
              </div>
            </div>

            {/* Irrigation Advice */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
              <div className="font-black text-sky-950 text-sm flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-600" /> सिंचाई की क्रांतिक अवस्थाएं
              </div>
              <p className="text-xs text-sky-900 leading-relaxed">{selectedDirectoryCrop.irrigationGuidance}</p>
            </div>

            {/* Common Pests & IPM */}
            <div className="space-y-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Bug className="w-5 h-5 text-rose-600" /> प्रमुख कीट, रोग एवं एकीकृत नियंत्रण (IPM)
              </h3>
              <div className="space-y-3">
                {selectedDirectoryCrop.commonPestsAndDiseases.map((pest, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 text-xs space-y-1.5">
                    <div className="font-black text-slate-900 text-sm">{pest.name}</div>
                    <div className="text-slate-600"><span className="font-bold">लक्षण:</span> {pest.symptoms}</div>
                    <div className="text-emerald-800 font-medium"><span className="font-bold text-emerald-900">जैविक / प्राकृतिक नियंत्रण:</span> {pest.ipmControl}</div>
                    <div className="text-rose-900 font-semibold bg-white p-2 rounded-lg border border-rose-200">
                      <span className="font-bold">प्रमाणित रासायनिक उपचार:</span> {pest.verifiedChemical}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Crop Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-kisan-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">नई फसल जोड़ें</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateCrop} className="space-y-3 text-sm">
              <div>
                <label className="font-bold text-slate-700 block mb-1">फसल का नाम</label>
                <select
                  value={newCropName}
                  onChange={(e) => setNewCropName(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 focus:outline-hidden font-bold"
                >
                  <option value="गेहूं (Wheat)">गेहूं (Wheat)</option>
                  <option value="धान (Paddy)">धान (Paddy)</option>
                  <option value="सरसों (Mustard)">सरसों (Mustard)</option>
                  <option value="कपास (Cotton)">कपास (Cotton)</option>
                  <option value="सोयाबीन (Soybean)">सोयाबीन (Soybean)</option>
                  <option value="चना (Gram)">चना (Gram / Chickpea)</option>
                  <option value="टमाटर (Tomato)">टमाटर (Tomato)</option>
                  <option value="मिर्च (Chilli)">मिर्च (Chilli)</option>
                  <option value="प्याज (Onion)">प्याज (Onion)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">किस्म / वेराइटी</label>
                <input
                  type="text"
                  value={newVariety}
                  onChange={(e) => setNewVariety(e.target.value)}
                  placeholder="उदा. HD-2967 या देसी"
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 focus:outline-hidden font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">रकबा (एकड़)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={newAcreage}
                    onChange={(e) => setNewAcreage(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 focus:outline-hidden font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">बुवाई की तिथि</label>
                  <input
                    type="date"
                    value={newSowingDate}
                    onChange={(e) => setNewSowingDate(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 focus:outline-hidden font-medium"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-kisan-700 hover:bg-kisan-800 text-white font-black rounded-2xl shadow-lg transition-all"
                >
                  फसल सहेजें (Save Crop)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Log Activity Modal */}
      {isActivityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-kisan-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">कृषि कार्य / खर्च दर्ज करें</h3>
              <button onClick={() => setIsActivityModalOpen(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateActivity} className="space-y-3 text-sm">
              <div>
                <label className="font-bold text-slate-700 block mb-1">कार्य का प्रकार</label>
                <select
                  value={actType}
                  onChange={(e) => setActType(e.target.value as any)}
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                >
                  <option value="irrigation">सिंचाई (Irrigation)</option>
                  <option value="fertilizer">खाद / उर्वरक (Fertilizer)</option>
                  <option value="pesticide">कीटनाशक छिड़काव (Pesticide)</option>
                  <option value="weeding">निराई-गुड़ाई (Weeding)</option>
                  <option value="harvesting">कटाई व थ्रेसिंग (Harvesting)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">विवरण (Description)</label>
                <input
                  type="text"
                  value={actTitle}
                  onChange={(e) => setActTitle(e.target.value)}
                  placeholder="उदा. प्रथम यूरिया टॉप ड्रेसिंग 25kg"
                  className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">लागत (₹ Cost)</label>
                  <input
                    type="number"
                    value={actCost}
                    onChange={(e) => setActCost(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">तारीख (Date)</label>
                  <input
                    type="date"
                    value={actDate}
                    onChange={(e) => setActDate(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-kisan-600 font-medium"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-kisan-700 hover:bg-kisan-800 text-white font-black rounded-2xl shadow-lg transition-all"
                >
                  दर्ज करें (Record Activity)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
