"use client"
import {   useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from "../app/i18n/client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import {  SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import {getLocation} from '../helper/location'
import { cities} from "./../data/staticData"


export default function LocationDetails({lng}) {
    const { t } = useTranslation(lng,"translation");
    const [loading , setLoading] = useState(false)
    const router = useRouter();
    const category = useSearchParams().get("category");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const location = useSearchParams().get("location");
  
    const handleButtonClick = async () => {
      try {
        setLoading(true)
        const userLocation = await getLocation();
        // Do something with the userLocation, like sending it to an API, etc.
        router.push(`?category=${category}&uploadedImages=${uploadedImages}&location=${userLocation.city}`);
      } catch (error) {
        console.error('Error getting location:', error);
        // Handle error, show a message to the user, etc.
      }
    };
    if (location  || !category || !uploadedImages ) return null;
    function handleLocationSelection(location) {
      console.log(location);
      router.push(`?category=${category}&uploadedImages=${uploadedImages}&carStatus=${carStatus}&location=${location}`);
    }
    return (
      <>
      <h1 className='text-center text-xl'>{t('locationDetails.title')}</h1>
      <div key="1" className="flex w-full h-1/2 pt-12 justify-center ">
        <div className="w-1/2  flex max-w-md items-center space-x-4">
        <Select className="flex-grow">
          <SelectTrigger>
          {t('locationDetails.selectCity')}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            {cities.map((city) => (
                <SelectItem key={city} onMouseDown={()=>handleLocationSelection(city)}>
                  {t(`cities.${city}`)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button disabled={loading} onClick={handleButtonClick} className="relative">
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

  