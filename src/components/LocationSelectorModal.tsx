'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { ALL_DISTRICTS, DistrictInfo } from '@/lib/indianStatesData';
import { MapPin, X, Check, Search } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationSelectorModal({ isOpen, onClose }: Props) {
  const { currentLocation, setLocation } = useFarmer();
  const { currentLanguage, t } = useLanguage();

  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('Andhra Pradesh');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleSelect = (state: string, district: string) => {
    setLocation(state, district);
    onClose();
  };

  const filteredDistricts = ALL_DISTRICTS.filter((item) => {
    const matchesState =
      selectedStateFilter === 'All' ? true : item.state === selectedStateFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.district.toLowerCase().includes(q) ||
      (item.teluguName && item.teluguName.includes(searchQuery)) ||
      (item.hindiName && item.hindiName.includes(searchQuery)) ||
      item.majorCrops.toLowerCase().includes(q);
    return matchesState && matchesSearch;
  });

  const stateTabs = [
    { id: 'Andhra Pradesh', label: currentLanguage === 'te' ? 'ఆంధ్రప్రదేశ్ (26 జిల్లాలు)' : 'Andhra Pradesh (26 Dist)' },
    { id: 'Telangana', label: currentLanguage === 'te' ? 'తెలంగాణ (33 జిల్లాలు)' : 'Telangana (33 Dist)' },
    { id: 'All', label: currentLanguage === 'te' ? 'అన్ని రాష్ట్రాలు (All India)' : 'All States' },
    { id: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { id: 'Punjab', label: 'Punjab' },
    { id: 'Maharashtra', label: 'Maharashtra' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-kisan-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-earth-700 via-kisan-800 to-kisan-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 text-kisan-950 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t('locationSelectorTitle')}</h3>
              <p className="text-xs text-cream-200">{t('locationSelectorSub')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Current Location Badge & Search */}
        <div className="p-4 bg-earth-50 border-b border-earth-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-earth-900">
            <span className="font-semibold">
              {currentLanguage === 'te' ? 'ప్రస్తుత ప్రాంతం:' : 'Current Location:'}
            </span>
            <span className="px-3 py-1 bg-white font-black rounded-lg border border-earth-300 text-earth-800 shadow-xs">
              📍 {currentLocation.displayString}
            </span>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLanguage === 'te'
                  ? 'జిల్లా లేదా పంట పేరు శోధించండి (ఉదా. గుంటూరు, వరంగల్, మిర్చి, పత్తి)...'
                  : 'Search district or crop (e.g. Guntur, Warangal, Chilli, Cotton)...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:border-kisan-600 focus:outline-hidden text-xs font-semibold text-slate-900"
            />
          </div>

          {/* State Tabs */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pt-1">
            {stateTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStateFilter(tab.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedStateFilter === tab.id
                    ? 'bg-kisan-700 text-white shadow-xs'
                    : 'bg-white border border-slate-300 text-slate-600 hover:border-kisan-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Districts List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1 max-h-[50vh]">
          {filteredDistricts.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs font-medium">
              ఏ జిల్లా కనుగొనబడలేదు. దయచేసి వేరే పేరుతో శోధించండి.
            </div>
          ) : (
            filteredDistricts.map((item) => {
              const isCurrent =
                item.district === currentLocation.district && item.state === currentLocation.state;
              return (
                <button
                  key={`${item.state}-${item.district}`}
                  onClick={() => handleSelect(item.state, item.district)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border-2 text-left transition-all ${
                    isCurrent
                      ? 'border-kisan-600 bg-kisan-50 font-bold text-kisan-900 shadow-sm'
                      : 'border-slate-200 hover:border-kisan-300 hover:bg-cream-50 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-black text-sm flex items-center gap-2">
                      <span>{item.district}</span>
                      {item.teluguName && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold">
                          {item.teluguName}
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 font-normal">({item.state})</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      🌾 ప్రధాన పంటలు: <span className="text-slate-700">{item.majorCrops}</span>
                    </div>
                  </div>
                  {isCurrent && <Check className="w-5 h-5 text-kisan-700 font-bold" />}
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          💡 ఆంధ్రప్రదేశ్ (26 జిల్లాలు) మరియు తెలంగాణ (33 జిల్లాలు) సమగ్ర వివరాలు అందుబాటులో ఉన్నాయి.
        </div>
      </div>
    </div>
  );
}
