'use client';

import React, { useState } from 'react';
import { useFarmer } from '@/context/FarmerContext';
import { useLanguage } from '@/context/LanguageContext';
import { getWeatherForLocation } from '@/lib/weatherService';
import {
  CloudSun,
  Wind,
  Droplets,
  AlertTriangle,
  Calendar,
  Volume2,
  VolumeX,
  MapPin,
  ThermometerSun,
  Clock
} from 'lucide-react';
import LocationSelectorModal from '@/components/LocationSelectorModal';

export default function WeatherPage() {
  const { currentLocation } = useFarmer();
  const { currentLanguage, speak, stopAudio } = useLanguage();
  const isTe = currentLanguage === 'te';

  const [isLocModalOpen, setIsLocModalOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const weather = getWeatherForLocation(currentLocation.displayString);

  const handleAudioListen = (text: string) => {
    if (isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
    } else {
      speak(text);
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header with Location Changer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <CloudSun className="w-8 h-8 text-sky-600" />
            <span>
              {isTe ? 'వాతావరణం & వ్యవసాయ సూచనలు (Agromet Advisory)' : 'मौसम एवं कृषि सलाह (Agromet Advisory)'}
            </span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {isTe
              ? 'భారత వాతావరణ శాఖ (IMD) ద్వారా ధృవీకరించబడిన ప్రత్యక్ష వాతావరణ సమాచారం'
              : 'भारत मौसम विज्ञान विभाग (IMD) द्वारा सत्यापित वास्तविक मौसम पूर्वानुमान'}
          </p>
        </div>

        <button
          onClick={() => setIsLocModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-kisan-500 text-slate-800 font-bold text-xs shadow-sm transition-all"
        >
          <MapPin className="w-4 h-4 text-kisan-700" />
          <span>{isTe ? 'ప్రాంతం మార్చండి' : 'स्थान बदलें'} ({currentLocation.displayString})</span>
        </button>
      </div>

      {/* Active Official Weather Warning / Alert Banner */}
      {weather.activeAlert && (
        <div className="p-5 rounded-3xl bg-amber-500/10 border-2 border-amber-400 text-amber-950 flex items-start gap-4 shadow-sm animate-fadeIn">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider bg-amber-200 px-2.5 py-0.5 rounded-full text-amber-900">
                {isTe ? 'వాతావరణ హెచ్చరిక / Weather Alert' : 'मौसम चेतावनी / Warning'}
              </span>
              <span className="text-xs text-amber-800 font-semibold">{weather.lastUpdated}</span>
            </div>
            <h3 className="text-base font-black">{weather.activeAlert.title}</h3>
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              {weather.activeAlert.description}
            </p>
          </div>
        </div>
      )}

      {/* Main Current Conditions Hero Card */}
      <div className="bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 rounded-3xl text-white p-6 sm:p-8 shadow-xl border-2 border-sky-700/60 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-sky-200 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{isTe ? 'చివరి అప్‌డేట్:' : 'अंतिम अपडेट:'} {weather.lastUpdated}</span>
              <span>•</span>
              <span>{weather.officialSource}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              {weather.city}, {weather.state}
            </h2>
            <p className="text-sm text-sky-100">{weather.condition}</p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-6xl sm:text-7xl font-black tracking-tight">{weather.temperature}°</span>
            <div className="text-xs text-sky-200 font-bold">
              <div>C</div>
              <div className="text-[11px] text-sky-300">
                {isTe ? 'అనుభూతి:' : 'महसूस:'} {weather.feelsLike}°C
              </div>
            </div>
          </div>
        </div>

        {/* 4 Parameter Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-sky-700/60">
          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-xs text-sky-200 font-bold">
              <Wind className="w-4 h-4 text-sky-300" /> {isTe ? 'గాలి వేగం' : 'हवा की गति'}
            </div>
            <div className="text-lg font-black mt-1">{weather.windSpeedKmH} km/h</div>
            <div className="text-[10px] text-sky-300">
              {weather.windSpeedKmH < 15
                ? (isTe ? 'పిచికారీకి అనుకూలం' : 'छिड़काव के लिए शांत')
                : (isTe ? 'వేగవంతమైన గాలి - జాగ్రత్త' : 'तेज हवा सावधान')}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-xs text-sky-200 font-bold">
              <Droplets className="w-4 h-4 text-sky-300" /> {isTe ? 'తేమ (Humidity)' : 'नमी (Humidity)'}
            </div>
            <div className="text-lg font-black mt-1">{weather.humidity}%</div>
            <div className="text-[10px] text-sky-300">{isTe ? 'పంటకు సాధారణం' : 'फसल के लिए सामान्य'}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-xs text-sky-200 font-bold">
              <Droplets className="w-4 h-4 text-sky-300" /> {isTe ? 'వర్షం సంభావ్యత' : 'बारिश की संभावना'}
            </div>
            <div className="text-lg font-black mt-1">{weather.rainProbabilityPercent}%</div>
            <div className="text-[10px] text-sky-300">
              {weather.rainProbabilityPercent > 50
                ? (isTe ? 'నీటిపారుదల ఆపండి' : 'सिंचाई स्थगित करें')
                : (isTe ? 'పొడి వాతావరణం' : 'शुष्क मौसम')}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-xs text-sky-200 font-bold">
              <ThermometerSun className="w-4 h-4 text-yellow-300" /> {isTe ? 'అతినీలలోహిత (UV)' : 'पराबैंगनी (UV)'}
            </div>
            <div className="text-lg font-black mt-1">{weather.uvIndex} ({isTe ? 'మధ్యస్థం' : 'मध्यम'})</div>
            <div className="text-[10px] text-sky-300">{isTe ? 'మధ్యాహ్నం 12-2 ఎండ నుండి రక్షణ' : 'दोपहर 12-2 छाया रखें'}</div>
          </div>
        </div>
      </div>

      {/* Practical Agricultural Advisories Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">
            {isTe ? 'రైతులకు ఆచరణాత్మక సలహాలు' : 'खेत के लिए व्यावहारिक सलाह'}
          </h2>
          <button
            onClick={() => handleAudioListen(weather.agriculturalAdvisories.spraying.advisory)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-kisan-100 text-kisan-800 text-xs font-bold hover:bg-kisan-200 transition-colors"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4" />}
            <span>{isTe ? 'సలహాను వినండి' : 'सलाह बोलकर सुनें'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Advisory 1: Spraying */}
          <div
            className={`p-5 rounded-3xl border-2 space-y-3 shadow-xs ${
              weather.agriculturalAdvisories.spraying.isSuitable
                ? 'bg-emerald-50/70 border-emerald-200'
                : 'bg-rose-50/70 border-rose-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600">
                {isTe ? 'మందుల పిచికారీ సలహా' : 'दवा छिड़काव सलाह'}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                  weather.agriculturalAdvisories.spraying.isSuitable
                    ? 'bg-emerald-200 text-emerald-900'
                    : 'bg-rose-200 text-rose-900'
                }`}
              >
                {weather.agriculturalAdvisories.spraying.isSuitable
                  ? (isTe ? 'అనుకూలం (Safe)' : 'अनुकूल (Safe)')
                  : (isTe ? 'పిచికారీ చేయవద్దు' : 'छिड़काव न करें')}
              </span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              {weather.agriculturalAdvisories.spraying.advisory}
            </p>
          </div>

          {/* Advisory 2: Irrigation */}
          <div className="p-5 rounded-3xl bg-sky-50/70 border-2 border-sky-200 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600">
                {isTe ? 'నీటి పారుదల నిర్వహణ' : 'सिंचाई प्रबंधन (Irrigation)'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-sky-200 text-sky-900">
                {weather.agriculturalAdvisories.irrigation.needed
                  ? (isTe ? 'నీరు పెట్టడం అవసరం' : 'सिंचाई आवश्यक')
                  : (isTe ? 'నీరు పెట్టవద్దు' : 'सिंचाई न करें')}
              </span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              {weather.agriculturalAdvisories.irrigation.advisory}
            </p>
          </div>

          {/* Advisory 3: Harvesting */}
          <div className="p-5 rounded-3xl bg-amber-50/70 border-2 border-amber-200 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600">
                {isTe ? 'కోత & నూర్పిడి (Harvesting)' : 'कटाई व थ्रेसिंग (Harvesting)'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-200 text-amber-900">
                {weather.agriculturalAdvisories.harvesting.status === 'favorable'
                  ? (isTe ? 'మంచి సమయం' : 'उत्तम अवसर')
                  : (isTe ? 'జాగ్రత్త వహించండి' : 'सावधानी रखें')}
              </span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              {weather.agriculturalAdvisories.harvesting.advisory}
            </p>
          </div>
        </div>
      </div>

      {/* 7-Day Agricultural Forecast Table */}
      <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-kisan-700" />
          <span>{isTe ? '7 రోజుల వ్యవసాయ వాతావరణ అంచనా' : '7 दिवसीय कृषि मौसम पूर्वानुमान'}</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">{isTe ? 'రోజు & తేదీ' : 'दिन व तारीख'}</th>
                <th className="py-3 px-4">{isTe ? 'వాతావరణ స్థితి' : 'मौसम की स्थिति'}</th>
                <th className="py-3 px-4">{isTe ? 'కనిష్ట / గరిష్ట ఉష్ణోగ్రత' : 'न्यूनतम / अधिकतम तापमान'}</th>
                <th className="py-3 px-4">{isTe ? 'వర్షం సంభావ్యత' : 'बारिश की संभावना'}</th>
                <th className="py-3 px-4">{isTe ? 'వ్యవసాయ పనుల సలహా' : 'कृषि कार्य स्थिति'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold">
              {weather.forecast.map((f, i) => (
                <tr key={i} className="hover:bg-cream-50 transition-colors">
                  <td className="py-3 px-4 font-black text-slate-900">
                    {f.day} <span className="text-slate-400 font-normal">({f.date})</span>
                  </td>
                  <td className="py-3 px-4 text-slate-700">{f.condition}</td>
                  <td className="py-3 px-4 text-slate-800 font-bold">
                    {f.tempMin}°C - {f.tempMax}°C
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-0.5 rounded-md font-bold ${
                        f.rainProbability > 50
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {f.rainProbability}%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {f.rainProbability > 40 ? (
                      <span className="text-amber-700 font-bold">
                        {isTe ? '⚠️ పిచికారీ వాయిదా వేయండి' : '⚠️ छिड़काव स्थगित करें'}
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-bold">
                        {isTe ? '✅ సాధారణ వ్యవసాయ పనులు చేయవచ్చు' : '✅ सामान्य कृषि कार्य'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <LocationSelectorModal isOpen={isLocModalOpen} onClose={() => setIsLocModalOpen(false)} />
    </div>
  );
}
