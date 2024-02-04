"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from "../app/i18n/client"
import React, { useState } from 'react';
import {getLocation} from '../helper/location'
import { updateUserCountry } from '@/prisma/actions';
import { useDarkMode } from '@/context/darkModeContext';
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuItem, DropdownMenuSubContent, DropdownMenuSub, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { countriesWithCities } from "@/data/staticData";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocationDetails({lng , locationGiven, user}) {
    const { t } = useTranslation(lng,"translation");
    const [loading , setLoading] = useState(false)
    const router = useRouter();
    const category = useSearchParams().get("category");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const location = useSearchParams().get("location");
    const searchParams = useSearchParams();
    const pathname= usePathname()
    const [selectedCity, setSelectedCity] = useState(null);
    const { setUserLocation } = useDarkMode()

    const handleCityChange = (city , country) => {
      setSelectedCity(city);
      // Log the selected country and city
        setUserLocation({countryName:country ,city: city})
        updateUserCountry(user.id , country)
        createQueryString('location' , city)
    };

    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };
    if(locationGiven && !location){
      createQueryString('location' , locationGiven)
    }

    const handleButtonClick = async () => {
      try {
        setLoading(true)
        const userLocation = await getLocation();
        // Do something with the userLocation, like sending it to an API, etc.
        setUserLocation(userLocation)
        updateUserCountry(user.id , userLocation.countryName)
        createQueryString('location' , userLocation.city)
      } catch (error) {
        console.error('Error getting location:', error);
        // Handle error, show a message to the user, etc.
      }
    };
    if ( location  || !category || !uploadedImages ) return null;
    const handleLocationSelection = (city) => {
      createQueryString('location' , city)
    }
    return (
      <>
      <h1 className='text-center font-semibold text-xl'>{t('locationDetails.title')}</h1>
      <div key="1" className="flex w-full h-1/2 pt-12 justify-center ">
        <div className="w-1/2  flex max-w-md items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-60 py-2 px-4">Select a country</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Countries</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {countriesWithCities.map((countryObj, index) => (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger>
                {countryObj.countryCode && <span className={`mx-2 fi fi-${countryObj.countryCode}`}></span> }
                  {t(`${countryObj.country}`)}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="p-0">
                  {countryObj.cities.map((city, cityIndex) => (
                    <DropdownMenuItem key={cityIndex} onClick={() => handleCityChange(city , countryObj.country)}>
                      {t(`${city}`)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="main-bg relative" disabled={loading} onClick={handleButtonClick}>
          <span className="absolute top-0 right-0 inline-flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          {loading ? `loading...` : t('locationDetails.useCurrentLocation')}
        </Button>
        </div>
      </div>
      </>
    )
  }

  