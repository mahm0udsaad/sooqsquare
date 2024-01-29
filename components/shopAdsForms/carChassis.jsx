"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {  useRouter, useSearchParams } from "next/navigation";
import { useDarkMode } from "@/context/darkModeContext";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

 const CarChassis = ({ lng }) =>{
    const router = useRouter()
    const {setErrorMessage} = useDarkMode()
    const brand = useSearchParams().get("brand");
    const category = useSearchParams().get("category");
    const model = useSearchParams().get("model");
    const year = useSearchParams().get("year"); 
    const carType = useSearchParams().get("carType");
    const carStatus = useSearchParams().get("carStatus");
    const transmission = useSearchParams().get("transmission");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
    const fuelType = useSearchParams().get("fuelType");
    const EnginCapacity = useSearchParams().get("EnginCapacity");
    const meterRange = useSearchParams().get("meterRange");
    const paintType = useSearchParams().get("paintType");
    const location = useSearchParams().get("location");
    const { t } = useTranslation(lng , "translation")
    const extraFeatures = useSearchParams().get("extraFeatures");
    const carChassis = useSearchParams().get("carChassis");
    const [chassisNum , setChassisNum] = useState(null)
    if (
      !brand ||
      !category ||
      !model ||
      !year ||
      !carType ||
      !carStatus ||
      !transmission ||
      !fuelType ||
      !paintType ||
      !extraFeatures ||
      carChassis
    ) {
      return null; 
    }

    const handleSubmit = (chassisNumber) => {
      if(!chassisNum){
        setErrorMessage(t('messages.noValue'))
      }else{
        const queryParams = `?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&extraFeatures=${extraFeatures}&carChassis=${chassisNumber}`;
        // Handle submission logic here (e.g., API calls, state updates)
        router.push(queryParams)
      }
    };
  
    const handleSkip = () => {
      const queryParams = `?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&extraFeatures=${extraFeatures}&carChassis=0`;
      router.push(queryParams)
      // Handle skip logic here
      console.log('Skipped chassis number input.');
    };
  
    return (
      <div className="w-1/2 mx-auto">
        <h1 className='text-xl text-center font-semibold'>{t('CarChassisTitle')}</h1>
        <div className="flex items-center gap-2 pt-4">
          <Input
            id="chassis"
            placeholder="Enter Chassis Number"
            type="number"
            className="py-6"
            value={chassisNum}
            onChange={(e) => setChassisNum(e.target.value)}
          />
        </div>
        <div className="flex  gap-2 py-4">
        <Button className="bg-transparent border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-800 dark:border-white dark:text-white" onClick={handleSkip}>{t('Skip')}</Button>
        <Button className="" onClick={handleSubmit}>{t('Submit')}</Button>
        </div>
      </div>
    );
  }

  export default CarChassis