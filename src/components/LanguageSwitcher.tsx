'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import clsx from 'clsx';

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export default function LanguageSwitcher({
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language Switcher"
      className={clsx(
        'inline-flex items-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md p-1 transition-all',
        className
      )}
    >
      <div className="flex items-center pl-2 pr-1 text-slate-400">
        <Globe size={compact ? 13 : 15} className="text-slate-400" />
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-label="Switch to English"
          aria-pressed={language === 'en'}
          className={clsx(
            'px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
            language === 'en'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          )}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLanguage('id')}
          aria-label="Ganti ke Bahasa Indonesia"
          aria-pressed={language === 'id'}
          className={clsx(
            'px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
            language === 'id'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          )}
        >
          ID
        </button>
      </div>
    </div>
  );
}
