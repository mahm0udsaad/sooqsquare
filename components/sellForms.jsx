"use client"
import {  useRouter, useSearchParams } from 'next/navigation';
import { AdCategroy } from './categoriesCard';
import { categoriesData ,carBrands ,yearsArray ,carTypesArray, carBrandsWithLogos} from "./../data/staticData"
import { useTranslation } from "../app/i18n/client"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuGroup , DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { IoIosArrowDropdown } from "react-icons/io";
import  upload  from '../app/[lng]/sell/action'
import Image from 'next/image';

export const CategoriesForm = ({lng}) =>{
    const { t } = useTranslation(lng , "translation")
   const  category  = useSearchParams().get("category");
   if ( category ) return ; 
   return (
       <>
       <h1 className="text-center text-2xl py-8">
           {t("sellTitle")}
       </h1>
       <div className="grid grid-cols-4 gap-4 w-11/12  py-4">
       {categoriesData.map((item, i) => (
       <AdCategroy lng={lng} key={i} icon={item.icon} text={item.text} />
       ))}
       </div>
       </>
   )
}

export const CarStatusSelection = ({lng}) => {
    const { t } = useTranslation(lng , "translation")
    const router = useRouter();
    const category = useSearchParams().get("category");
    const carStatus = useSearchParams().get("carStatus");
    
    if (carStatus || !category ) return null;
    
    function handleSelectStatus(status) {
       router.push(`?category=${category}&carStatus=${status}`);
    }
    
    return (
       <div key="1" className="w-4/5 mx-auto flex flex-col justify-center items-center">
           <div className="w-full text-2xl font-semibold flex justify-around items-center" >
              { t('carstatus')}
               <IoIosArrowDropdown className="w-4 h-4" />
           </div>
           <div className="w-full flex justify-center items-center gap-4 pt-8">
           <Card onClick={()=>handleSelectStatus("New")} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
               <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">{t('new')}</h2>
               </CardContent>
           </Card>
           <Card onClick={()=>handleSelectStatus("Used")} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
               <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">{t('used')}</h2>
               </CardContent>
           </Card>
           </div>
       </div>
    );
};

export const CarBrandSelector = ({lng}) => {
const router = useRouter();
const category = useSearchParams().get("category");
const brand = useSearchParams().get("brand");
const carStatus = useSearchParams().get("carStatus");


if (brand || !category || !carStatus ) return null;

function handleSelectBrand(selectedBrand) {
   router.push(`?category=${category}&carStatus=${carStatus}&brand=${selectedBrand}`);
}

return (
   <div className="w-full">
   <div className={' items-center flex-col'} >
       <h1 className="text-center text-2xl py-4">Choose your brand</h1>
       <div className="grid grid-cols-5 gap-4" >
       {Object.keys(carBrands).map((brand, index) => (
           <div
           key={index}
           onClick={() => handleSelectBrand(brand)}
           className="border text-center rounded p-8 cursor-pointer hover:opacity-70"
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

export const ModelSelection = ({lng}) => {
   const router = useRouter();
   const  brand  = useSearchParams().get("brand");
   const  category  = useSearchParams().get("category");
   const  carStatus  = useSearchParams().get("carStatus");
   const  carType  = useSearchParams().get("carType");
   const  year  = useSearchParams().get("year");
   const  model  = useSearchParams().get("model");
   const { t } = useTranslation(lng , "translation")

   if ( model || !brand || !category  ) return ; 
   
   const models = carBrands[`${brand}`]

   function handleSelectModel(model) {
       router.push(`?category=${category}&carStatus=${carStatus}&brand=${brand}&model=${model}`);
   
     }
   return (
       <div key="1" className="">
       <DropdownMenu className="py-3" open={year}>
           <DropdownMenuTrigger asChild>
           <Button className="w-full flex justify-between items-center" variant="outline">
               {t('carModel')}
               <IoIosArrowDropdown className="w-4 h-4" />
           </Button>
           </DropdownMenuTrigger>
           <div className=" w-full">
          {<DropdownMenuContent  className="w-full">
           <DropdownMenuLabel>Models</DropdownMenuLabel>
           <DropdownMenuGroup  className="w-full">
                 {models && models.length > 0 ? (
                   models.map((model, index) => (
                   <DropdownMenuItem className='w-80 text-lg border-b-[1px] pb-4' onClick={()=> handleSelectModel(model)} key={index}>{model}</DropdownMenuItem>
                   ))
               ) : (
                   <DropdownMenuItem>No models available</DropdownMenuItem>
               )}
           </DropdownMenuGroup>
           </DropdownMenuContent>}
           </div>
       </DropdownMenu>
       </div>
   )
}
export const ModelYearSelection = ({lng}) => {
   const router = useRouter();
   const  brand  = useSearchParams().get("brand");
   const  category  = useSearchParams().get("category");
   const  model  = useSearchParams().get("model");
   const  status  = useSearchParams().get("carStatus");
   const  carType  = useSearchParams().get("carType");
   const  year  = useSearchParams().get("year");
   if (model || !brand || !category || !status) return null;
   
   if(status === "New" ){
    router.push(`?category=${category}&brand=${brand}&model=${model}&carStatus=${status}&year=2024`);
   }
   function handleSelectModel(year) {
       router.push(`?category=${category}&brand=${brand}&carStatus=${status}&carType=${carType}&year=${year}`);
     }
   return (
       <div key="1" className="  ">
       <DropdownMenu className="py-3" open={carType && !year}>
           <DropdownMenuTrigger asChild>
           <Button className="w-full flex justify-between items-center" variant="outline">
               Car year
               <IoIosArrowDropdown className="w-4 h-4" />
           </Button>
           </DropdownMenuTrigger>
          { <DropdownMenuContent  className="w-full">
           <DropdownMenuLabel>year</DropdownMenuLabel>
           <DropdownMenuGroup  className="w-full h-[60vh] overflow-y-scroll">
            {   
              yearsArray.map((year, index) => (
                   <DropdownMenuItem className='w-72 p-4' onClick={()=> handleSelectModel(year)} key={index}>{year}</DropdownMenuItem>
                   ))}
      
           </DropdownMenuGroup>
           </DropdownMenuContent>}
       </DropdownMenu>
       </div>
   )
}
export const CarTypeSelection = ({lng}) => {
    const router = useRouter();
    const  brand  = useSearchParams().get("brand");
    const  category  = useSearchParams().get("category");
    const  status  = useSearchParams().get("carStatus");
    const  carType  = useSearchParams().get("carType");
    const  model  = useSearchParams().get("model");
    const  year  = useSearchParams().get("year");
    
   if (model || !brand || !category || !status) return null;
    
    function handleSelectModel(type) {
       router.push(`?category=${category}&brand=${brand}&carStatus=${status}&carType=${type}`);
       }
    return (
       <div key="1" className=" ">
       <DropdownMenu className="py-3" open>
           <DropdownMenuTrigger asChild>
           <Button className="w-full flex justify-between items-center" variant="outline">
               Car type
               <IoIosArrowDropdown className="w-4 h-4" />
           </Button>
           </DropdownMenuTrigger>
       {!carType && !year && <DropdownMenuContent  className="w-full">
           <DropdownMenuGroup  className="w-full h-[60vh] overflow-y-scroll">
               {    
               carTypesArray.map((type, index) => (
                   <DropdownMenuItem className='w-72 p-4' onClick={()=> handleSelectModel(type)} key={index}>{type}</DropdownMenuItem>
                   ))}
       
           </DropdownMenuGroup>
           </DropdownMenuContent>}
       </DropdownMenu>
       </div>
    )
}
export const TransmissionSelection = ({lng}) => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");

if (!brand || !category  || !model || !year || !carType || !carStatus || transmission) return null;

function handleSelectTransmission(selectedTransmission) {
   router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${selectedTransmission}`);
}

return (
   <div key="1" className="">
   <div className="w-full text-2xl font-semibold flex justify-around items-center">
       Transmission
       <IoIosArrowDropdown className="w-4 h-4" />
   </div>
   <div className="w-full  gap-4 pt-8">
       <Card onClick={() => handleSelectTransmission('Automatic')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Automatic</h2>
           </CardContent>
       </Card>
       <Card onClick={() => handleSelectTransmission('Manual')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Manual</h2>
           </CardContent>
       </Card>
   </div>
</div>
);
};
export const FuelTypeSelection = ({lng}) => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");
const fuelType = useSearchParams().get("fuelType");

if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || fuelType) return null;

function handleSelectFuelType(selectedFuelType) {
   router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${transmission}&fuelType=${selectedFuelType}`);
}

return (
   <div key="1" className="">
   <div className="w-full text-2xl font-semibold flex justify-around items-center">
       Fuel Type
       <IoIosArrowDropdown className="w-4 h-4" />
   </div>
   <div className="w-full grid grid-cols-3 justify-center items-center gap-4 pt-8">
       <Card onClick={() => handleSelectFuelType('Petrol')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Petrol</h2>
           </CardContent>
       </Card>
       <Card onClick={() => handleSelectFuelType('Diesel')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Diesel</h2>
           </CardContent>
       </Card>
       <Card onClick={() => handleSelectFuelType('Electric')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Electric</h2>
           </CardContent>
       </Card>
       <Card onClick={() => handleSelectFuelType('Hybrid')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Hybrid</h2>
           </CardContent>
       </Card>
       <Card onClick={() => handleSelectFuelType('Other')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
           <CardContent className="p-4">
               <h2 className="font-bold text-lg mb-2">Other</h2>
           </CardContent>
       </Card>
   </div>
</div>
);
};

export const MeterRangeSelection = ({lng}) => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");
const fuelType = useSearchParams().get("fuelType");
const meterRange = useSearchParams().get("meterRange");

if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || !fuelType || meterRange) return null;
if(carStatus === "New" ){
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${transmission}&fuelType=${fuelType}&meterRange=0`);
   }
const meterRanges = [
   { label: '0 - 1000 km', value: '0-1000' },
   { label: '1000 - 5000 km', value: '1000-5000' },
   { label: '5000 - 10000 km', value: '5000-10000' },
   { label: '5000 - 10000 km', value: '10000-15000' },
   { label: '5000 - 10000 km', value: '15000-20000' },
];

function handleSelectMeterRange(selectedRange) {
   router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${transmission}&fuelType=${fuelType}&meterRange=${selectedRange}`);
}

return (
   <div key="1" className=" ">
   <DropdownMenu className="py-3" open>
       <DropdownMenuTrigger asChild>
       <Button className="w-full flex justify-between items-center" variant="outline">
           Meter Range
           <IoIosArrowDropdown className="w-4 h-4" />
       </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-full">
       <DropdownMenuGroup className="w-full h-[60vh] overflow-y-scroll">
           {meterRanges.map((range, index) => (
           <DropdownMenuItem className='w-72 p-4' onClick={() => handleSelectMeterRange(range.value)} key={index}>
               {range.label}
           </DropdownMenuItem>
           ))}
       </DropdownMenuGroup>
       </DropdownMenuContent>
   </DropdownMenu>
   </div>
);
};
  
export function ImageAdAndDescription({userId}) {
    const brand = useSearchParams().get("brand");
    const category = useSearchParams().get("category");
    const model = useSearchParams().get("model");
    const year = useSearchParams().get("year");
    const carType = useSearchParams().get("carType");
    const carStatus = useSearchParams().get("carStatus");
    const transmission = useSearchParams().get("transmission");
    const fuelType = useSearchParams().get("fuelType");
    const meterRange = useSearchParams().get("meterRange");
  
    if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || !fuelType || !meterRange ) return null;
    
    return (
      <main className="flex flex-col items-center justify-center pt-10">
      <div className="grid w-full max-w-md items-center gap-4 p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold ">Upload the Ad Image</h1>
        <form  action={upload}> 
         <div className="relative flex items-center justify-center rounded p-4">
          <input
            className="pl-12 w-full text-sm text-gray-600 dark:text-white"
            type="file"
            name="file"
          />
        </div>
        <div className="relative flex items-center justify-center  rounded p-4">
          <input
            className="pl-12 w-full text-sm text-gray-600 dark:text-white"
            id="description"
            name="description"
            placeholder="Enter a description..."
            type="text"
          />
        </div>
      <input type="hidden" name="brand" value={brand} />
      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="model" value={model} />
      <input type="hidden" name="year" value={year} />
      <input type="hidden" name="carType" value={carType} />
      <input type="hidden" name="carStatus" value={carStatus} />
      <input type="hidden" name="transmission" value={transmission} />
      <input type="hidden" name="fuelType" value={fuelType} />
      <input type="hidden" name="meterRange" value={meterRange} />
      <input type="hidden" name="userId" value={userId} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4">
          Submit
        </button>
        </form>
      </div>
       </main>
    );
  }
