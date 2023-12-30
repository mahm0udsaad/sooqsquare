"use client"
import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [adImages, setAdImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <DarkModeContext.Provider value={{successMessage, setSuccessMessage, adImages ,setAdImages }}>
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
