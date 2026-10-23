'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useFarmer } from '@/context/FarmerContext';
import { getWeatherForLocation } from '@/lib/weatherService';
import { MANDI_SAMPLE_DATA } from '@/lib/mandiData';
import {
  Mic,
  Stethoscope,
  Store,
  CloudSun,
  Landmark,
  PhoneCall,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Volume2,
  VolumeX,
  ArrowRight,
  TrendingUp,
  Wind,
  Droplets,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import VoiceAssistantModal from '@/components/VoiceAssistantModal';

export default function HomePage() {
  const { currentLanguage, t, speak, stopAudio } = useLanguage();
  const { profile, crops, currentLocation } = useFarmer();
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const weather = getWeatherForLocation(currentLocation.displayString);
  const localMandis = MANDI_SAMPLE_DATA.filter((m) => m.state === currentLocation.state).slice(0, 3);
  const displayMandis = localMandis.length > 0 ? localMandis : MANDI_SAMPLE_DATA.slice(0, 3);

  const handleListenAdvisory = (text: string) => {
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
      {/* Top Welcome Banner with Audio and Voice Trigger */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-kisan-800 via-kisan-900 to-earth-900 text-white p-6 sm:p-8 shadow-xl border-2 border-kisan-700/50">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold border border-yellow-300/30">
              <span>🌾 {currentLocation.displayString}</span>
              <span>•</span>
              <span>{profile.farmSizeAcres} {t('acresField')}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {t('welcomeGreeting')}, {profile.name}!
            </h1>
            <p className="text-sm sm:text-base text-cream-100 font-medium">
              {t('todayAdvisoryAvailable')}
            </p>
          </div>

          {/* Voice Prompt Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsVoiceOpen(true)}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-kisan-950 font-black text-base shadow-xl hover:from-yellow-300 hover:to-amber-400 hover:scale-105 active:scale-95 transition-all ring-4 ring-yellow-400/30"
            >
              <Mic className="w-6 h-6 animate-pulse" />
              <span>{t('actionAskVoice')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Weather & Agricultural Spray Advisory Banner */}
      <section className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border-2 border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-kisan-100 text-kisan-800 flex items-center justify-center font-bold">
              <CloudSun className="w-7 h-7 text-kisan-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900">{t('headingWeatherAdvisory')}</h2>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                  {weather.city} ({weather.temperature}°C)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{weather.condition} • {weather.officialSource}</p>
            </div>
          </div>

          {/* Spraying Suitability Badge */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black shadow-xs ${
                weather.agriculturalAdvisories.spraying.isSuitable
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-rose-100 text-rose-900 border border-rose-300'
              }`}
            >
              {weather.agriculturalAdvisories.spraying.isSuitable ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{t('spraySuitable')}</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  <span>{t('sprayUnsuitable')}</span>
                </>
              )}
            </div>

            <button
              onClick={() => handleListenAdvisory(weather.agriculturalAdvisories.spraying.advisory)}
              className="p-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-earth-800 transition-colors border border-earth-300"
              title={t('actionListenAudio')}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Advisory Content & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <Wind className="w-5 h-5 text-sky-600" />
            <div>
              <div className="text-xs text-slate-500 font-bold">{t('windSpeed')}</div>
              <div className="text-sm font-black text-slate-800">{weather.windSpeedKmH} km/h</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <Droplets className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs text-slate-500 font-bold">{t('rainProbability')}</div>
              <div className="text-sm font-black text-slate-800">{weather.rainProbabilityPercent}%</div>
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-kisan-50/70 border border-kisan-100 flex items-center justify-between">
            <div className="text-xs text-kisan-900 font-medium">
              {weather.agriculturalAdvisories.spraying.advisory}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Quick Action Grid (Large Touch Buttons) */}
      <section className="space-y-3">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <span>{t('headingQuickActions')}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {/* Action 1: Crop Doctor */}
          <Link
            href="/crop-doctor"
            className="flex flex-col items-center justify-center p-5 rounded-3xl bg-gradient-to-b from-rose-50 to-rose-100/60 border-2 border-rose-200 hover:border-rose-400 hover:shadow-lg transition-all text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
              <Stethoscope className="w-7 h-7" />
            </div>
            <span className="font-black text-slate-900 text-base">{t('cropDoctorAction')}</span>
            <span className="text-xs text-slate-600 font-medium mt-1">{t('cropDoctorSub')}</span>
          </Link>

          {/* Action 2: Mandi Prices */}
          <Link
            href="/mandi"
            className="flex flex-col items-center justify-center p-5 rounded-3xl bg-gradient-to-b from-amber-50 to-amber-100/60 border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
              <Store className="w-7 h-7" />
            </div>
            <span className="font-black text-slate-900 text-base">{t('navMandi')}</span>
            <span className="text-xs text-slate-600 font-medium mt-1">{t('mandiActionSub')}</span>
          </Link>

          {/* Action 3: Govt Schemes */}
          <Link
            href="/schemes"
            className="flex flex-col items-center justify-center p-5 rounded-3xl bg-gradient-to-b from-emerald-50 to-emerald-100/60 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
              <Landmark className="w-7 h-7" />
            </div>
            <span className="font-black text-slate-900 text-base">{t('navSchemes')}</span>
            <span className="text-xs text-slate-600 font-medium mt-1">{t('schemesActionSub')}</span>
          </Link>

          {/* Action 4: Weather & Advisory */}
          <Link
            href="/weather"
            className="flex flex-col items-center justify-center p-5 rounded-3xl bg-gradient-to-b from-sky-50 to-sky-100/60 border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
              <CloudSun className="w-7 h-7" />
            </div>
            <span className="font-black text-slate-900 text-base">{t('navWeather')}</span>
            <span className="text-xs text-slate-600 font-medium mt-1">{t('weatherActionSub')}</span>
          </Link>

          {/* Action 5: Kisan Helpline Call */}
          <a
            href="tel:18001801551"
            className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-5 rounded-3xl bg-gradient-to-b from-yellow-50 to-yellow-100/80 border-2 border-yellow-300 hover:border-yellow-500 hover:shadow-lg transition-all text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-kisan-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
              <PhoneCall className="w-7 h-7" />
            </div>
            <span className="font-black text-slate-900 text-base">{t('actionCallKisanHelp').split(' ')[0]}</span>
            <span className="text-xs text-kisan-900 font-bold mt-1">1800-180-1551</span>
          </a>
        </div>
      </section>

      {/* Active Enrolled Crops Section */}
      <section className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-slate-900">{t('headingMyActiveCrops')}</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-kisan-100 text-kisan-800 font-bold">
              {crops.length} {currentLanguage === 'te' ? 'పంటలు' : 'Crops'}
            </span>
          </div>
          <Link
            href="/crops"
            className="text-xs font-bold text-kisan-700 hover:text-kisan-900 flex items-center gap-1 underline underline-offset-4"
          >
            {t('allCropsView')} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className="p-5 rounded-2xl border-2 border-kisan-100 bg-cream-50/50 hover:border-kisan-300 transition-all space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">{crop.cropName}</h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {t('varietyLabel')}: {crop.variety} • {t('acreageLabel')}: {crop.acreage} {t('acresField')}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {crop.currentStage}
                </span>
              </div>

              {/* Stage Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                  <span>{t('sowingDateLabel')}: {crop.sowingDate}</span>
                  <span>{t('harvestDateLabel')}: {crop.expectedHarvestDate}</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-kisan-500 to-kisan-600 h-full w-[45%] rounded-full"></div>
                </div>
              </div>

              {/* Next upcoming task */}
              {crop.activities.find((a) => !a.completed) && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-kisan-700 flex-shrink-0" />
                    <span className="font-bold text-slate-800">
                      {t('upcomingTask')}: {crop.activities.find((a) => !a.completed)?.title}
                    </span>
                  </div>
                  <span className="text-slate-500 font-semibold">
                    {crop.activities.find((a) => !a.completed)?.date}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Live Mandi Market Ticker */}
      <section className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              <span>{t('headingLiveMandiRates')}</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {t('sourceLabel')}: AGMARKNET & e-NAM • {currentLocation.state}
            </p>
          </div>
          <Link
            href="/mandi"
            className="text-xs font-bold text-kisan-700 hover:text-kisan-900 flex items-center gap-1 underline underline-offset-4"
          >
            {t('allMandisCompare')} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {displayMandis.map((mandi) => (
            <div
              key={mandi.id}
              className="p-4 rounded-2xl bg-earth-50/60 border-2 border-earth-100 hover:border-earth-300 transition-all"
            >
              <div className="text-xs font-bold text-slate-500">{mandi.market}</div>
              <div className="text-base font-black text-slate-900 mt-0.5">{mandi.commodity}</div>
              <div className="text-xs text-slate-500">{mandi.variety}</div>

              <div className="mt-3 pt-3 border-t border-earth-200 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold">{t('modalRate')}:</span>
                  <div className="text-xl font-black text-kisan-800">₹{mandi.modalPrice.toLocaleString('en-IN')}</div>
                  <span className="text-[10px] text-slate-400">{t('perQuintal')}</span>
                </div>
                <div className="text-right text-[11px] text-slate-500 font-medium">
                  <div>{t('minRate')}: ₹{mandi.minPrice}</div>
                  <div>{t('maxRate')}: ₹{mandi.maxPrice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Assistant Modal */}
      <VoiceAssistantModal isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}
