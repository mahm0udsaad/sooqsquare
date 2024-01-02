"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [adImages, setAdImages] = useState([]);
  const [extraFeature, setExtraFeature] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (errorMessage !== null || successMessage !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [errorMessage , successMessage]);

  return (
    <DarkModeContext.Provider value={{extraFeature ,setExtraFeature,errorMessage , setErrorMessage , successMessage, setSuccessMessage, adImages ,setAdImages }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
