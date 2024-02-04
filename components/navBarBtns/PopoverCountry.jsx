"use client"
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { TfiWorld } from 'react-icons/tfi';
import { useTranslation } from "@/app/i18n/client";
import { useDarkMode } from '@/context/darkModeContext';
import { getLocation } from '@/helper/location';
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuItem, DropdownMenuSubContent, DropdownMenuSub, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { countriesWithCities } from "@/data/staticData";
import { Button } from '../ui/button';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PopoverCountry = ({ lng }) => {
  const { t } = useTranslation(lng , "view")
    const pathname = usePathname()
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (country, code) => {
      setSelectedCountry({ country: country, code: code });
      createQueryString('country', country);
      // Store selectedCountry in localStorage
      localStorage.setItem('selectedCountry', JSON.stringify({ country, code }));
    };
  
      const router = useRouter();
      const searchParams = useSearchParams();
    
      const createQueryString = (name, value) => {
        if (pathname.split('/')[2] === "vehicle") {
          const params = new URLSearchParams(searchParams);
          params.set(name, value);
            const updatedParams = params.toString();
            router.push(pathname + '?' + updatedParams);
          }
        };
    
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const storedCountry = localStorage.getItem('selectedCountry');
          if (storedCountry) {
            // If there's a selectedCountry in localStorage, use it
            setSelectedCountry(JSON.parse(storedCountry));
          } else {
              const location = await getLocation();
              const countryObj = countriesWithCities.find(country => country.country === location.countryName);

            localStorage.setItem('selectedCountry', JSON.stringify({ country: countryObj?.country, code: countryObj?.countryCode }));
            setSelectedCountry({ country: countryObj?.country, code: countryObj?.countryCode });
          }
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
  
      if (!selectedCountry) {
        fetchLocation();
      }
    }, []);

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="w-48 py-2 px-4 rounded-xl">
          {selectedCountry ? (
            <>
            <span className={`mx-2 fi fi-${selectedCountry.code}`}></span>
            {t(`${selectedCountry?.country}`)}
            </>
            ) : 
            <>
            <TfiWorld className="text-xl mx-3" />
            country
            </>
            }
            <FiChevronDown className="ml-2" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Countries</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {countriesWithCities.map((countryObj, index) => (
        <DropdownMenuItem onClick={()=>handleCountryChange(countryObj.country , countryObj.countryCode)} key={index}>
          {countryObj.countryCode && <span className={`mx-2 fi fi-${countryObj.countryCode}`}></span> }
          {t(`${countryObj.country}`)}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default PopoverCountry;
