"use client"
import {   useRouter, useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { useTranslation } from "../app/i18n/client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { useDarkMode } from '@/context/darkModeContext';


 const NameDescriptionSelector = ({ lng }) => {
    const router = useRouter();
    const brand = useSearchParams().get("brand");
    const category = useSearchParams().get("category");
    const model = useSearchParams().get("model");
    const year = useSearchParams().get("year");
    const location = useSearchParams().get("location");
    const carType = useSearchParams().get("carType");
    const carStatus = useSearchParams().get("carStatus");
    const transmission = useSearchParams().get("transmission");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
    const fuelType = useSearchParams().get("fuelType");
    const EnginCapacity = useSearchParams().get("EnginCapacity");
    const meterRange = useSearchParams().get("meterRange");
    const paintType = useSearchParams().get("paintType");
    const { t } = useTranslation(lng , "translation")
    const payment = useSearchParams().get("payment");
    const price = useSearchParams().get("price");
    const name = useSearchParams().get("name");
    const extraFeatures = useSearchParams().get("extraFeatures");
    const carChassis  = useSearchParams().get("chassisNumber");
    const [nameInput, setName] = useState('');
    const [description, setDescription] = useState('');
    const { setErrorMessage } = useDarkMode()
    if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || !price || !payment || name) return null;
  
      const handleSelectNameDescription = (selectedName, selectedDescription) => {
          router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&extraFeatures=${extraFeatures}&carChassis=${carChassis}&price=${price}&payment=${payment}&name=${selectedName}&description=${selectedDescription}`);
      };
  
      const handleSubmit = (e) => {
        e.preventDefault()
        if(!nameInput){
            setErrorMessage(t('messages.noValue'))
        }
        handleSelectNameDescription(nameInput , description)
      };
  
      
      
      return (
          <div key="1" className="w-1/2 mx-auto pt-4">
            <h1 className='text-xl font-semibold text-center pb-8'>{t('adDetails')}</h1>
              <Input
                  className="mb-4"
                  placeholder={t('adNamePlaceHolder')}
                  value={nameInput}
                  onChange={(e) => setName(e.target.value)}
              />
              <Textarea 
              placeholder={t('descriptionPlaceHolder')}
              className="mb-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
              />
              <Button
              className='w-full'
                  onClick={handleSubmit}
              >
                  {t('Submit')}
              </Button>
          </div>
      );
  };

  export default NameDescriptionSelector
