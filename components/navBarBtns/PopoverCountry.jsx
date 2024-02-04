"use client"
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { TfiWorld } from 'react-icons/tfi';
import { useTranslation } from "@/app/i18n/client";
import { ArabCountriesWithCurrancy } from '@/data/staticData';
import { useDarkMode } from '@/context/darkModeContext';
import { getLocation } from '@/helper/location';

const PopoverCountry = () => {
  const [countryName , setCountryName] = useState(null)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        setCountryName(location.countryName);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
  
    if (!countryName) {
      fetchLocation();
    }
  
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border dark:border-zinc-800 dark:bg-zinc-900 px-4 py-2 rounded-xl flex items-center">
          <TfiWorld className="text-xl mx-3" />
          {countryName ? countryName : 'country'}
          <FiChevronDown className="ml-2" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 dark:bg-zinc-950 dark:text-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            {ArabCountriesWithCurrancy.map((country) => (
              <div key={country.name} onClick={() => changeCountry(country.name)} className="hover:bg-gray-100 px-4 py-2">
                {country.name}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCountry;
