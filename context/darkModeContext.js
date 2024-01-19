"use client"
import { getLocation } from '@/helper/location';
import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();
const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

export const DarkModeProvider = ({ children }) => {
  const [adImages, setAdImages] = useState([]);
  const [phoneNum , setPhoneNum] =useState('')
  const [extraFeature, setExtraFeature] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [countryName , setCountryName] = useState(null)
  const [darkMode, setDarkMode] = useState(() => {
    return isLocalStorageAvailable
      ? JSON.parse(localStorage.getItem('darkMode')) || false
      : false;
  });

  const [lng, setLng] = useState(() => {
    return isLocalStorageAvailable
      ? JSON.parse(localStorage.getItem('lng')) || false
      : false;
  });

  const router = useRouter()
  const pathname = usePathname()
  
  useEffect(() => {
    // Update the HTML class and save darkMode to local storage
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save darkMode to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Update the HTML class and save darkMode to local storage
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save darkMode to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        setCountryName(location.countryName)
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (errorMessage !== null || successMessage !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [errorMessage , successMessage]);

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode ,countryName,phoneNum , setPhoneNum , extraFeature ,setExtraFeature,errorMessage , setErrorMessage , successMessage, setSuccessMessage, adImages ,setAdImages }}>
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
