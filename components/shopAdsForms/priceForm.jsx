"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDarkMode } from "@/context/darkModeContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
export default function PriceSelection({lng}) {
    const router = useRouter();
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
    const payment = useSearchParams().get("payment");
    const price = useSearchParams().get("price");
    const extraFeatures = useSearchParams().get("extraFeatures");
    const carChassis = useSearchParams().get("carChassis");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
    const [pricestate, setPrice] = useState(null)
    const { setErrorMessage } = useDarkMode()
  
    if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || price && payment || !extraFeatures ||  !carChassis) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!pricestate){
        setErrorMessage(t('messages.noValue'))
      }else{
        router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&extraFeatures=${extraFeatures}&carChassis=${carChassis}&price=${pricestate}&payment=${selectedPaymentMethod}`);
      }
    };
    return (
     <div className="w-1/2 mx-auto">
        <h1 className=" text-center text-xl pb-4 font-semibold">{t('price')}</h1>
         <form className="grid w-full  items-center gap-8 pt-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <span className="text-lg w-[20%]">{category == "CarsForRent"  ? `${t('day')}/` : '$'}</span>
          <Input
            id="price"
            placeholder="Enter price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
              <div className="w-full text-xl font-semibold flex justify-around items-center">
              {t('paymentMethod')} :
            <ToggleGroup className="flex gap-4 " type="single">
              <ToggleGroupItem
              className={`border  transition rounded-full ${selectedPaymentMethod ==="cash"? 'bg-zinc-800 dark:bg-zinc-600 text-white' : ''}`}
              onClick={()=> setSelectedPaymentMethod("cash")}
            >
                {t('Cash')}
              </ToggleGroupItem>
              <ToggleGroupItem
              className={`border  transition rounded-full ${selectedPaymentMethod == "Installment" ? 'bg-zinc-800 dark:bg-zinc-600 text-white' : ''}`}
              onClick={()=> setSelectedPaymentMethod("Installment")}
            >
                      {t('installment')}
  
              </ToggleGroupItem>
          </ToggleGroup> 
              </div>
        <Button type="submit">
          {t('Submit')}
        </Button>
      </form>
     </div>
    );
  }