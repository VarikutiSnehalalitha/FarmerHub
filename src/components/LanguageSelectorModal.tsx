'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageCode } from '@/types';
import { X, Check, Globe } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageSelectorModal({ isOpen, onClose }: Props) {
  const { currentLanguage, setLanguage, languages } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border-2 border-kisan-100 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-kisan-800 to-kisan-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-yellow-300" />
            <div>
              <h3 className="text-xl font-bold">अपनी भाषा चुनें / Select Language</h3>
              <p className="text-xs text-kisan-200">22 भारतीय भाषाएं एवं अंग्रेजी (All 22 Scheduled Indian Languages + English)</p>
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

        {/* Language Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => {
            const isSelected = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as LanguageCode);
                  onClose();
                }}
                className={`flex flex-col items-start p-3.5 rounded-xl border-2 text-left transition-all relative ${
                  isSelected
                    ? 'border-kisan-600 bg-kisan-50 shadow-md ring-2 ring-kisan-500/20'
                    : 'border-slate-200 hover:border-kisan-300 hover:bg-cream-50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-base font-bold text-slate-900">{lang.name}</span>
                  {isSelected && <Check className="w-5 h-5 text-kisan-700 font-bold" />}
                </div>
                <span className="text-xs font-medium text-slate-500 mt-0.5">{lang.englishName}</span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{lang.script}</span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-cream-100 border-t border-cream-200 text-center text-xs text-slate-600">
          💡 आप किसी भी समय ऊपर दिए गए भाषा बटन से अपनी भाषा बदल सकते हैं।
        </div>
      </div>
    </div>
  );
}
