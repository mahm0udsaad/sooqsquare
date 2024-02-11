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
    const searchParams = useSearchParams()
    const { t } = useTranslation(lng , "translation")
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
    const [pricestate, setPrice] = useState(null)
    const { setErrorMessage } = useDarkMode()
  

    const pathname = usePathname()
    const createQueryString = (params) => {
      const updatedParams = new URLSearchParams(searchParams);

      for (const [name, value] of Object.entries(params)) {
        updatedParams.set(name, value);
      }
    
      router.push(pathname + '?' + updatedParams.toString());
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!pricestate){
        setErrorMessage(t('messages.noValue'))
      }else{
        createQueryString( {
          price: pricestate,
          payment: selectedPaymentMethod,
        });
      }
    };
    return (
     <div className="w-1/2 mx-auto">
        <h1 className=" text-center text-xl pb-4 font-semibold">{t('price')}</h1>
         <form className="grid w-full  items-center gap-8 pt-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <Input
            id="price"
            placeholder="Enter price"
            type="number"
            value={pricestate}
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
              <ToggleGroupItem
              className={`border  transition rounded-full ${selectedPaymentMethod == "cash & Installment" ? 'bg-zinc-800 dark:bg-zinc-600 text-white' : ''}`}
              onClick={()=> setSelectedPaymentMethod("cash & Installment")}
            >
                      {t('cash & Installment')}
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