"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from "../app/i18n/client"
import React, { useEffect, useState } from 'react';
import {getLocation} from '../helper/location'
import { updateUserCountry } from '@/prisma/actions';
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuItem, DropdownMenuSubContent, DropdownMenuSub, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { countriesWithCities } from "@/data/staticData";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocationDetails({lng , locationGiven, user}) {
    const { t } = useTranslation(lng,"view");
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname= usePathname()
    const [loading , setLoading] = useState(false)
    const [citiesForCountry, setCitiesForCountry] = useState([]);

      useEffect(() => {
        const fetchLocation = async () => {
            try {
                const location = await getLocation();
                await updateUserCountry(user.id , location.countryName)
                const userCountry = countriesWithCities.find(country => country.country === user.country);
                const cities = userCountry?.cities

                setCitiesForCountry(cities);
            } catch (error) {
                console.error('Error getting location:', error.message);
            }
        };

        if(citiesForCountry.length < 1 && user?.country){
          fetchLocation();
        }
        
        if(user?.country){
          const userCountry = countriesWithCities.find(country => country.country === user.country);
          const cities = userCountry?.cities

          setCitiesForCountry(cities);
        }
    }, []);

    const handleCityChange = (city) => {
        createQueryString({
          city:city
        })
    };
    const createQueryString = (params) => {
      const updatedParams = new URLSearchParams(searchParams);

      for (const [name, value] of Object.entries(params)) {
        updatedParams.set(name, value);
      }
      router.push(pathname + '?' + updatedParams.toString());
    };
    const handleButtonClick = async () => {
      try {
        setLoading(true)
        const userLocation = await getLocation();

        createQueryString({
          city: userLocation.city ,
        })

      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    if (searchParams.has("city")  || !searchParams.has("category") || !searchParams.has("uploadedImages") ) return null;

    return (
      <>
      <h1 className='text-center font-semibold text-xl'>{t('locationDetails.title')}</h1>
      <div key="1" className="flex w-full h-1/2 pt-12 justify-center ">
        <div className="w-1/2  flex max-w-md items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-60 py-2 px-4">{t("Select a country")}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Cities</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {citiesForCountry && citiesForCountry.map((city, index) => (
                <DropdownMenuItem key={city} onClick={() => handleCityChange(city)}>
                  {t(`${city}`)}
                </DropdownMenuItem>
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

  