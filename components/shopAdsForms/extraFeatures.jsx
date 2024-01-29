"use client"

import { useTranslation } from "@/app/i18n/client";
import { useDarkMode } from "@/context/darkModeContext";
import { features } from "@/data/staticData";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"

export const ExtraFeatures = ({ lng }) =>{
    const router = useRouter()
    const brand = useSearchParams().get("brand");
    const category = useSearchParams().get("category");
    const model = useSearchParams().get("model");
    const year = useSearchParams().get("year"); 
    const carType = useSearchParams().get("carType");
    const carStatus = useSearchParams().get("carStatus");
    const transmission = useSearchParams().get("transmission");
    const fuelType = useSearchParams().get("fuelType");
    const paintType = useSearchParams().get("paintType");
    const { t } = useTranslation(lng , "translation")
    const extraFeatures = useSearchParams().get("extraFeatures");
    const {extraFeature , setExtraFeature} = useDarkMode()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleSelect = (value) => {
      setExtraFeature(prev => {
        if (prev.includes(value)) {
          return prev.filter(item => item !== value);
        } else {
          return [...prev, value];
        }
      }); 
    };
    const createQueryString = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        const updatedParams = params.toString();
        router.push(pathname + '?' + updatedParams);
      };
    if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || extraFeatures ) return null;
    const handleSubmit = () => {
        createQueryString('extraFeatures',extraFeature.length)
    };
    return (
      <div className='w-4/5 mx-auto'>
      <h1 className="text-center text-xl font-semibold py-6">
        {t('features.title')}
      </h1>
      <ToggleGroup className="grid grid-cols-4 gap-4 " type="multiple">
        {features.map((key, index) => (
          <ToggleGroupItem
          key={index}
          value={key}
          aria-label={`Toggle ${key}`}
          className={`border border-sky-800 transition rounded-full ${extraFeature?.includes(key) ? 'bg-sky-600 text-white' : 'bg-[#0284c71c] text-[#005795]'}`}
          onClick={() => handleSelect(key)}
        >
            <p className="p-3 px-2 ">
            {t(`features.${key}`)}
              </p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>  
      <div className="flex justify-center pt-5 w-full">
      <Button onClick={handleSubmit} className="w-[240px] justify-center text-center font-normal mt-4">
            <MdOutlineRocketLaunch className="w-4 h-4 mx-3" />
            {t('Submit')}
          </Button>
      </div>
      </div>
    );
  
  }

  export default ExtraFeatures