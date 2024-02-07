"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import {carBrands , carBrandsWithLogos} from "../data/staticData"
import { useTranslation } from "../app/i18n/client"
import Image from 'next/image';
 
const CarBrandSelector = ({lng}) => {
  
  const { t } = useTranslation(lng,"translation");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + '?' + updatedParams);
  };
  
  function handleSelectBrand(selectedBrand) {
    createQueryString('brand' , selectedBrand)
  }
  
  return (
     <div className="w-full">
     <h1 className="text-center text-2xl py-6 font-semibold">{t('chooseBrand')}</h1>
     <div className={' items-center flex-col'} >
         <div className="grid lg:grid-cols-5 grid-cols-3  gap-4 mx-8" >
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