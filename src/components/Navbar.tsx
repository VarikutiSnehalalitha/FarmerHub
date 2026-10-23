'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useFarmer } from '@/context/FarmerContext';
import {
  Sprout,
  Mic,
  Globe,
  MapPin,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
  Stethoscope,
  CloudSun,
  Store,
  Landmark,
  Headset,
  Newspaper,
  BookOpenCheck,
  UserCheck
} from 'lucide-react';
import LanguageSelectorModal from './LanguageSelectorModal';
import LocationSelectorModal from './LocationSelectorModal';
import VoiceAssistantModal from './VoiceAssistantModal';

export default function Navbar() {
  const pathname = usePathname();
  const { currentLanguage, languageInfo, t } = useLanguage();
  const { currentLocation } = useFarmer();

  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isLocModalOpen, setIsLocModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('navHome'), icon: Sprout },
    { href: '/crops', label: t('navMyCrops'), icon: Sprout },
    { href: '/crop-doctor', label: t('navCropDoctor'), icon: Stethoscope },
    { href: '/weather', label: t('navWeather'), icon: CloudSun },
    { href: '/mandi', label: t('navMandi'), icon: Store },
    { href: '/schemes', label: t('navSchemes'), icon: Landmark },
    { href: '/expert', label: t('navExpert'), icon: Headset },
    { href: '/updates', label: t('navUpdates'), icon: Newspaper },
    { href: '/my-farm', label: t('navMyFarm'), icon: BookOpenCheck },
    { href: '/profile', label: t('navProfile'), icon: UserCheck },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-gradient-to-r from-kisan-900 via-kisan-800 to-kisan-950 text-white shadow-xl border-b border-kisan-700/60">
        {/* Top Emergency & Info Banner */}
        <div className="bg-earth-900/90 px-4 py-1.5 text-xs flex items-center justify-between border-b border-earth-700/40 text-cream-100">
          <div className="flex items-center gap-2">
            <span className="font-medium hidden sm:inline">{t('helplineLabel')}</span>
            <a
              href="tel:18001801551"
              className="font-bold text-yellow-300 hover:text-yellow-200 flex items-center gap-1 underline underline-offset-2"
            >
              <PhoneCall className="w-3.5 h-3.5" /> 1800-180-1551
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLocModalOpen(true)}
              className="flex items-center gap-1 hover:text-yellow-200 transition-colors bg-earth-800 px-2 py-0.5 rounded-md border border-earth-700"
            >
              <MapPin className="w-3.5 h-3.5 text-yellow-300" />
              <span className="font-semibold">{currentLocation.district}, {currentLocation.state}</span>
            </button>

            <button
              onClick={() => setIsLangModalOpen(true)}
              className="flex items-center gap-1 font-bold text-yellow-300 hover:text-yellow-200 bg-kisan-800/80 px-2.5 py-0.5 rounded-md border border-yellow-400/40"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{languageInfo.name}</span>
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-kisan-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform font-black">
              🌾
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1.5 text-white">
                <span>{t('appName')}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 font-bold border border-yellow-400/30 hidden md:inline">
                  {currentLanguage === 'te' ? 'భారత్' : currentLanguage === 'hi' ? 'भारत' : 'India'}
                </span>
              </div>
              <div className="text-[11px] text-kisan-200 font-medium tracking-wide hidden sm:block">
                {t('tagline')}
              </div>
            </div>
          </Link>

          {/* Desktop Voice Assistant Button (High Priority Feature) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsVoiceModalOpen(true)}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-kisan-950 font-black text-sm shadow-xl hover:from-yellow-300 hover:to-amber-400 hover:scale-105 active:scale-95 transition-all ring-2 ring-yellow-300/40"
            >
              <Mic className="w-5 h-5 text-kisan-950 animate-bounce" />
              <span>{t('actionAskVoice')} (AI Voice)</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsVoiceModalOpen(true)}
              className="p-2.5 rounded-full bg-yellow-400 text-kisan-950 shadow-md font-bold"
              aria-label="Voice Assistant"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-kisan-800 text-white hover:bg-kisan-700"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links Strip */}
        <nav className="hidden lg:block bg-kisan-950/80 border-t border-kisan-800/80 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 py-3 px-3 text-sm font-bold whitespace-nowrap transition-colors border-b-2 ${
                    isActive
                      ? 'border-yellow-400 text-yellow-300 bg-kisan-900/60'
                      : 'border-transparent text-kisan-100 hover:text-white hover:border-kisan-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Fullscreen Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-kisan-950 border-t border-kisan-800 px-4 py-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold ${
                    isActive ? 'bg-kisan-800 text-yellow-300' : 'text-kisan-100 hover:bg-kisan-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Modals */}
      <LanguageSelectorModal isOpen={isLangModalOpen} onClose={() => setIsLangModalOpen(false)} />
      <LocationSelectorModal isOpen={isLocModalOpen} onClose={() => setIsLocModalOpen(false)} />
      <VoiceAssistantModal isOpen={isVoiceModalOpen} onClose={() => setIsVoiceModalOpen(false)} />
    </>
  );
}
