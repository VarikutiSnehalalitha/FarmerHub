'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, LanguageInfo } from '@/types';
import { INDIAN_LANGUAGES, getLanguageByCode } from '@/lib/languages';
import { TRANSLATIONS, TranslationDictionary, getTranslation } from '@/lib/translations';
import { speakText, stopSpeaking } from '@/lib/speech';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  languageInfo: LanguageInfo;
  setLanguage: (code: LanguageCode) => void;
  t: (key: keyof TranslationDictionary) => string;
  speak: (text: string) => void;
  stopAudio: () => void;
  isRtl: boolean;
  languages: LanguageInfo[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>('hi');

  useEffect(() => {
    const saved = localStorage.getItem('kisan_sahayak_lang') as LanguageCode;
    if (saved && INDIAN_LANGUAGES.some((l) => l.code === saved)) {
      setCurrentLanguageState(saved);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setCurrentLanguageState(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_sahayak_lang', code);
    }
  };

  const languageInfo = getLanguageByCode(currentLanguage);
  const isRtl = Boolean(languageInfo.isRtl);

  const t = (key: keyof TranslationDictionary): string => {
    return getTranslation(currentLanguage, key);
  };

  const speak = (text: string) => {
    speakText(text, languageInfo.speechCode || 'hi-IN');
  };

  const stopAudio = () => {
    stopSpeaking();
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        languageInfo,
        setLanguage,
        t,
        speak,
        stopAudio,
        isRtl,
        languages: INDIAN_LANGUAGES,
      }}
    >
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
