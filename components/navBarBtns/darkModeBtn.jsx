"use client"
import React from 'react';
import { useTranslation } from "@/app/i18n/client";
import { useDarkMode } from '@/context/darkModeContext';

const DarkModeToggle = ({ lng }) => {
  const { t } = useTranslation(lng , "translation");
  const { darkMode  , setDarkMode} = useDarkMode()

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="darkModeToggle"
          className={`sr-only form-checkbox w-0 h-0 `}
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className={`w-10 h-5 bg-gray-400 dark:bg-gray-600 rounded-xl shadow-inner ${darkMode ? "bg-rose-800" : ""}`}></div>
        <div className={`toggle-dot absolute w-5 h-5 bg-white dark:bg-gray-800 rounded-xl shadow-md inset-y-0 left-0 ${darkMode ? 'transform translate-x-full bg-rose-800' : ''}`}></div>
      </div>
      <span className="ml-2 text-gray-700 dark:text-gray-200">{t('darkMode')}</span>
    </label>
  );
};

export default DarkModeToggle;
