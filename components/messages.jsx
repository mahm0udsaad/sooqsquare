"use client"
import { useDarkMode } from '@/context/darkModeContext';
import React, { useState, useEffect } from 'react';

export function SonnerDemo() {
   const { successMessage } = useDarkMode()
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // 5 seconds in milliseconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage]);

  return showToast ? (
    <div className="absolute top-5 z-50 w-1/2 right-0 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline">Your action was successful.</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 1.697L10 11.697l-2.651 2.849a1.2 1.2 0 1 1-1.697-1.697L8.303 10 5.652 7.151a1.2 1.2 0 0 1 1.697-1.697L10 8.303l2.651-2.849a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.849z"/>
        </svg>
      </span>
    </div>
  ) : null;
}
