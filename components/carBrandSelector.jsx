"use client"
import {   useRouter, useSearchParams } from 'next/navigation';
import {carBrands , carBrandsWithLogos} from "./../data/staticData"
import { useTranslation } from "../app/i18n/client"
import Image from 'next/image';
 
const CarBrandSelector = ({lng}) => {
  const { t } = useTranslation(lng,"translation");
  const router = useRouter();
  const category = useSearchParams().get("category");
  const brand = useSearchParams().get("brand");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const carStatus = useSearchParams().get("carStatus");
  const location = useSearchParams().get("location");
  
  
  if (brand || !category || !carStatus ||!location ) return null;
  
  function handleSelectBrand(selectedBrand) {
     router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${selectedBrand}`);
  }
  
  return (
     <div className="w-full">
     <div className={' items-center flex-col'} >
         <h1 className="text-center text-2xl py-6">{t('chooseBrand')}</h1>
         <div className="grid grid-cols-5 gap-4 mx-8" >
         {Object.keys(carBrands).map((brand, index) => (
             <div
             key={index}
             onClick={() => handleSelectBrand(brand)}
             className="border text-center shadow-md  dark:shadow-white rounded p-8 cursor-pointer hover:opacity-70"
             >
             {brand}
             <div className="flex items-center justify-center w-full">
             <Image className='pt-4' src={carBrandsWithLogos[brand]} width={80} height={100} alt="brandLogo"  />
             </div>
             </div>
         ))}
         </div>
     </div>
     </div>
  );
  };
export default CarBrandSelector