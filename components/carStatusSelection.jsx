
"use client"
import {   useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from "../app/i18n/client"
import { CardContent, Card } from "@/components/ui/card"


const CarStatusSelection = ({lng}) => {
    const { t } = useTranslation(lng , "translation")
    const router = useRouter();
    const category = useSearchParams().get("category");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const carStatus = useSearchParams().get("carStatus");
    const location = useSearchParams().get("location");
    
    if (carStatus || !category || !uploadedImages || !location) return null;
    
    function handleSelectStatus(status) {
       router.push(`?category=${category}&uploadedImages=${uploadedImages}&location=${location}&carStatus=${status}`);
    }
    
    return (
       <div key="1" className="w-4/5 mx-auto flex flex-col justify-center items-center">
           <div className="w-full  text-2xl font-semibold flex justify-center items-center" >
              { t('carstatus')}
           </div>
           <div className="w-full flex justify-center items-center gap-4 pt-8">
           <Card onClick={()=>handleSelectStatus("New")} className="w-64 mb-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition dark:shadow-gray-500 cursor-pointer shadow-lg">
               <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">{t('new')}</h2>
               </CardContent>
           </Card>
           <Card onClick={()=>handleSelectStatus("Used")} className="w-64 mb-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition dark:shadow-gray-500 cursor-pointer shadow-lg">
               <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">{t('used')}</h2>
               </CardContent>
           </Card>
           </div>
       </div>
    );
};
export default CarStatusSelection