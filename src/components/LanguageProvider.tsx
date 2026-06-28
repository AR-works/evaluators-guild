'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, TranslationDict } from '../data/translations';
import { getStoredLanguage, setStoredLanguage } from '../utils/storage';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (path: string) => string;
  dict: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = getStoredLanguage();
    setTimeout(() => {
      setLanguageState(stored);
    }, 0);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let currentVal: unknown = translations[language];
    
    for (const key of keys) {
      if (currentVal && typeof currentVal === 'object' && key in (currentVal as Record<string, unknown>)) {
        currentVal = (currentVal as Record<string, unknown>)[key];
      } else {
        // Fallback to English
        let fallbackVal: unknown = translations['en'];
        for (const fallbackKey of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fallbackKey in (fallbackVal as Record<string, unknown>)) {
            fallbackVal = (fallbackVal as Record<string, unknown>)[fallbackKey];
          } else {
            return path; // Key path completely missing
          }
        }
        return typeof fallbackVal === 'string' ? fallbackVal : path;
      }
    }
    
    return typeof currentVal === 'string' ? currentVal : path;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, dict: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
