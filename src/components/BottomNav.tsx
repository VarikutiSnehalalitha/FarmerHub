'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Sprout, Stethoscope, CloudSun, Store, LayoutGrid } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const items = [
    { href: '/', label: t('navHome'), icon: Sprout },
    { href: '/crops', label: t('navMyCrops'), icon: Sprout },
    { href: '/crop-doctor', label: t('navCropDoctor'), icon: Stethoscope },
    { href: '/weather', label: t('navWeather'), icon: CloudSun },
    { href: '/mandi', label: t('navMandi'), icon: Store },
    { href: '/schemes', label: t('navSchemes'), icon: LayoutGrid },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200 shadow-2xl px-2 py-1.5 flex items-center justify-around safe-bottom">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
              isActive
                ? 'text-kisan-800 font-black scale-105'
                : 'text-slate-500 hover:text-slate-800 font-semibold'
            }`}
          >
            <div
              className={`p-1.5 rounded-xl transition-all ${
                isActive ? 'bg-kisan-100 text-kisan-800 ring-2 ring-kisan-600/30' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-[62px]">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
