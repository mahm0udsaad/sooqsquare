"use client"
import { getLocation } from '@/helper/location';
import socket from '@/lib/chat';
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const DarkModeContext = createContext();
const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

const SHAPES = ['square', 'triangle'];
const COLOR_DIGIT = "ABCDEF1234567890";

export const DarkModeProvider = ({ children }) => {
  const [adImages, setAdImages] = useState([]);
  const [phoneNum , setPhoneNum] =useState('')
  const [extraFeature, setExtraFeature] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userStatuses, setUserStatuses] = useState({});

  useEffect(() => {
    const handleUserStatus = ({ id, status }) => {
      setUserStatuses(prev => ({ ...prev, [id]: status }));
    };

    socket.on('user status', handleUserStatus);

    return () => {
      socket.off('user status', handleUserStatus);
    };
  }, []);

  const updateUserStatus = (userId, status) => {
    setUserStatuses(prev => ({ ...prev, [userId]: status }));
  };
    
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return isLocalStorageAvailable
      ? JSON.parse(localStorage.getItem('selectedCountry'))
      : null;
  });
  const [userLocation , setUserLocation] = useState(null)

  
   const [isConfettiActive, setConfettiActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return isLocalStorageAvailable
      ? JSON.parse(localStorage.getItem('darkMode'))
      : false;
  });
  const [lng, setLngState] = useState(() => {
    return isLocalStorageAvailable 
    ? localStorage.getItem('lng') : 'ar';
  });
  const setLng = (newLng) => {
    setLngState(newLng);
    localStorage.setItem('lng', newLng);
  };
  const containerRef = useRef(null);
  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
  };
  const generateConfetti = () => {
    const container = containerRef.current;    
    if (container) {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            const positionX = Math.random() * window.innerWidth;
            const positionY = Math.random() * window.innerHeight;
            const rotation = Math.random() * 360;
            const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;   
            confetti.style.left = `${positionX}px`;
            confetti.style.top = `${positionY}px`;
            confetti.style.transform = `rotate(${rotation}deg)`;
            confetti.className = 'confetti ' + SHAPES[Math.floor(Math.random() * 60)];
            confetti.style.width = `${size}px`
            confetti.style.height = `${size}px`
            confetti.style.backgroundColor = generateRandomColor();  
            container.appendChild(confetti);            
            // Remove confetti element after animation duration (4 seconds)
            setTimeout(() => {
                container.removeChild(confetti);
            }, 4000);
        }
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const storedCountry = localStorage.getItem('selectedCountry');
        if (storedCountry.country) {
          // If there's a selectedCountry in localStorage, use it
          setSelectedCountry(JSON.parse(storedCountry));
        } else {
            const location = await getLocation();
            const countryObj = countriesWithCities.find(country => country.country === location.countryName);

          localStorage.setItem('selectedCountry', JSON.stringify({ country: countryObj?.country, code: countryObj?.countryCode }));
          setSelectedCountry({ country: countryObj?.country, code: countryObj?.countryCode });
        }
      } catch (error) {
        console.error('Error fetching location in popoverCountry:', error);
      }
    };
    
    if (!selectedCountry?.country) {
      fetchLocation();
    }
  }, []);

  useEffect(() => {

    if (isConfettiActive) {
      generateConfetti();
      const timeoutId = setTimeout(() => {
        console.log('inactive');
        setConfettiActive(false);
      }, 2000);
  
      return () => clearTimeout(timeoutId);
    }
  }, [isConfettiActive]);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        setSelectedCountry(location.countryName);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
  
    if (!selectedCountry) {
      fetchLocation();
    }
  
  }, [selectedCountry]);


  return (
    <DarkModeContext.Provider value={{userStatuses,updateUserStatus, userLocation , setUserLocation , lng, setLng , isConfettiActive, setConfettiActive , darkMode, setDarkMode ,selectedCountry, setSelectedCountry,phoneNum , setPhoneNum , extraFeature ,setExtraFeature,errorMessage , setErrorMessage , successMessage, setSuccessMessage, adImages ,setAdImages }}>
    {isConfettiActive ? <div className='fixed z-50 top-0 left-0 w-full h-full pointer-events-none' ref={containerRef} id="confetti-container"></div> : null}
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
