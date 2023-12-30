"use client"
import {   useRouter, useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { AdCategroy } from './categoriesCard';
import { categoriesData ,carBrands ,yearsArray ,carTypesArray, carBrandsWithLogos , cities} from "./../data/staticData"
import { useTranslation } from "../app/i18n/client"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import  upload  from '../app/[lng]/sell/imageUploadAction'
import Image from 'next/image';
import { Label } from "@/components/ui/label"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CiImageOn } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Badge } from "@/components/ui/badge"
import React, { useState, useRef, useEffect } from 'react';
import {  SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import {getLocation} from '../helper/location'
import { useDarkMode } from '@/context/darkModeContext';
import { createAd } from '../prisma/actions';

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
// First Step Images 
export const MultiImageForm = () => {
  const { setAdImages } = useDarkMode()
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [num, setNum] = useState(1);
  const uploadedImages = useSearchParams().get('uploadedImages')
  const category = useSearchParams().get('category')
  const router = useRouter();

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];

    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      const adImage = await upload(formData);

      setImages((prevImages) => [...prevImages, adImage.adImage]);
      setNum((prevNum) => prevNum + 1);

      setUploading(false);
    } catch (error) {
      console.error(error.message);
      setUploading(false);
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setNum((prevNum) => prevNum - 1);
    setImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdImages(images)
    router.push(`?category=${category}&uploadedImages=${images.length}`);
  };


  if (uploadedImages || !category ) return null;

  return (
    <div className="max-w-md mx-auto bg-white border rounded p-8 shadow-md  dark:bg-[#0a0a0a]">

      <div className="title relative">
      <div className="absolute  w-8 h-8 border dark:bg-[#0a0a0a] dark:border-white rounded-full flex items-center justify-center">
      <span className="font-semibold text-rose-500 text-lg">{images.length}</span>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Upload Ad Images</h1>

      </div>
      <form onSubmit={handleSubmit} className="space-y-4 dark:bg-[#0a0a0a]">
          <div className="grid grid-cols-3 gap-3 dark:bg-[#0a0a0a]">
        {Array.from({ length: num }).map((_, index) => (
          <div key={index} className="border flex flex-col gap-4 p-3 rounded">
            <Label htmlFor={`image${index}`} className="block mb-1 font-semibold text-center">
              Image {index + 1}
            </Label>
            <div className="relative">
              <input
                  type="file"
                  id={`image${index}`}
                  name={`image${index}`}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, index)}
              />
              {images[index] && (
                  <div className="flex flex-col items-center gap-6">
                  <Avatar>
                      <AvatarImage
                      alt={`Uploaded image ${index}`}
                      src={`${images[index]}`}
                      height={120}
                      width={120}
                      />
                      <AvatarFallback>Uploaded Image {index}</AvatarFallback>
                  </Avatar>
                  <Button
                      onClick={() => handleImageRemove(index)}
                      className="w-full justify-around text-center font-normal"
                      variant="outline"
                  >
                      <TrashIcon className="w-4 h-4" />
                  </Button>   
                  </div>
              )}
              {uploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white">
                  <span>Loading...</span>
                  </div>
              )}
              {!images[index] && !uploading && (
                  <Label htmlFor={`image${index}`} className="cursor-pointer flex items-center justify-center">
                  <CiImageOn className="w-8 h-8 mt-3" />
                  </Label>
              )}
              </div>
          </div>
        ))}
          </div>
        <div className="flex justify-center">
        <Button className="w-[240px] justify-center text-center font-normal mt-4">
          <MdOutlineRocketLaunch className="w-4 h-4 mr-3" />
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
};
// city selection
export const CarStatusSelection = ({lng}) => {
    const { t } = useTranslation(lng , "translation")
    const router = useRouter();
    const category = useSearchParams().get("category");
    const uploadedImages = useSearchParams().get("uploadedImages");
    const carStatus = useSearchParams().get("carStatus");
    
    if (carStatus || !category || !uploadedImages ) return null;
    
    function handleSelectStatus(status) {
       router.push(`?category=${category}&uploadedImages=${uploadedImages}&carStatus=${status}`);
    }
    
    return (
       <div key="1" className="w-4/5 mx-auto flex flex-col justify-center items-center">
           <div className="w-full  text-2xl font-semibold flex justify-center items-center" >
              { t('carstatus')}
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
// Third step location
export  function LocationDetails({lng}) {
  const { t } = useTranslation(lng,"translation");
  const [loading , setLoading] = useState(false)
  const router = useRouter();
  const category = useSearchParams().get("category");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const carStatus = useSearchParams().get("carStatus");
  const location = useSearchParams().get("location");

  const handleButtonClick = async () => {
    try {
      setLoading(true)
      const userLocation = await getLocation();
      // Do something with the userLocation, like sending it to an API, etc.
      router.push(`?category=${category}&uploadedImages=${uploadedImages}&carStatus=${carStatus}&location=${userLocation.city}`);
    } catch (error) {
      console.error('Error getting location:', error);
      // Handle error, show a message to the user, etc.
    }
  };
  if (location || !carStatus || !category || !uploadedImages) return null;
  function handleLocationSelection(location) {
    console.log(location);
    router.push(`?category=${category}&uploadedImages=${uploadedImages}&carStatus=${carStatus}&location=${location}`);
  }
  return (
    <>
    <h1 className='text-center text-xl'>{t('locationDetails.title')}</h1>
    <div key="1" className="flex w-full h-1/2 pt-12 justify-center ">
      <div className="w-1/2  flex max-w-md items-center space-x-2">
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
export const CarBrandSelector = ({lng}) => {
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
   const  uploadedImages  = useSearchParams().get("uploadedImages");
   const  location  = useSearchParams().get("location");
   const  year  = useSearchParams().get("year");
   const  model  = useSearchParams().get("model");
   const { t } = useTranslation(lng , "translation")

   if ( model || !brand || !category || !uploadedImages || !location ) return ; 
   
   const models = carBrands[`${brand}`]
   function handleSelectModel(model) {
     router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}`);
   
     }
   return (
       <div key="1" className="">
          <Select className="flex-grow" open={!model && carType && year}>
          <SelectTrigger>
          {t('carModel')}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            {models.map((model) => (
                <SelectItem key={model} onMouseDown={()=>handleSelectModel(model)}>
                  {model}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
       </div>
   )
}
export const ModelYearSelection = ({lng}) => {
   const router = useRouter();
   const  brand  = useSearchParams().get("brand");
   const  uploadedImages  = useSearchParams().get("uploadedImages");
   const  location  = useSearchParams().get("location");
   const  category  = useSearchParams().get("category");
   const  model  = useSearchParams().get("model");
   const  status  = useSearchParams().get("carStatus");
   const  carType  = useSearchParams().get("carType");
   const  year  = useSearchParams().get("year");
   const { t } = useTranslation(lng , "translation")

   if (model || !brand || !category || !uploadedImages || !location) return null;

   function handleYearSelection(year) {
       router.push(`?category=${category}&carStatus=${status}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}`);
     }
   return (
       <div key="1" className="  ">
         <Select className="flex-grow" open={carType && !year}>
        <SelectTrigger>
        {t('carYear')}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {yearsArray.map((year) => (
              <SelectItem key={year} onMouseDown={()=>handleYearSelection(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
       </div>
   )
}
export const CarTypeSelection = ({lng}) => {
    const router = useRouter();
    const  uploadedImages  = useSearchParams().get("uploadedImages");
    const  location  = useSearchParams().get("location");
    const  brand  = useSearchParams().get("brand");
    const  category  = useSearchParams().get("category");
    const  status  = useSearchParams().get("carStatus");
    const  carType  = useSearchParams().get("carType");
    const  model  = useSearchParams().get("model");
    const  year  = useSearchParams().get("year");
   const { t } = useTranslation(lng , "translation")
    
   if (model || !brand || !category || !uploadedImages || !location) return null;
    
    function handleCarTypeSelection(type) {
       router.push(`?category=${category}&carStatus=${status}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${type}`);
       }

    return (
       <div key="1" className=" ">
        <Select className="flex-grow" open={!carType}>
        <SelectTrigger>
        {t('cartype')}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {carTypesArray.map((type) => (
              <SelectItem key={type} onMouseDown={()=>handleCarTypeSelection(type)}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
       </div>
    )
}
export const TransmissionSelection = ({lng}) => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const location = useSearchParams().get("location");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");
const uploadedImages = useSearchParams().get("uploadedImages");
const { t } = useTranslation(lng , "translation")
if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| transmission) return null;

function handleSelectTransmission(selectedTransmission) {
   router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${selectedTransmission}`);
}

return (
   <div key="1" className="w-1/2 mx-auto">
    <Select className="flex-grow" open={true}>
        <SelectTrigger className="py-3">
          <div className="w-full  text-2xl font-semibold flex justify-around items-center">
            {t('transmission')}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className='py-3' onMouseDown={() => handleSelectTransmission('Automatic')}>
                Automatic
            </SelectItem>
            <SelectItem className='py-3' onMouseDown={() => handleSelectTransmission('Manual')}>
                Manual
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  </div>
);
};
export const RegionalSpecifications = ({ lng }) => {
  const router = useRouter();
  const brand = useSearchParams().get("brand");
  const category = useSearchParams().get("category");
const location = useSearchParams().get("location");
  const model = useSearchParams().get("model");
  const year = useSearchParams().get("year");
  const carType = useSearchParams().get("carType");
  const carStatus = useSearchParams().get("carStatus");
  const transmission = useSearchParams().get("transmission");
  const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const { t } = useTranslation(lng , "translation")
  
  if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| !transmission || RegionalSpecifications) return null;
  
  const handleSelectSpecification = (selectedSpecification) => {
    router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${selectedSpecification}`);
  };

  return (
    <div className="w-1/2 mx-auto">
      <Select className="flex-grow" open={true}>
      <SelectTrigger >
        <div className="w-full py-3 text-2xl font-semibold flex justify-around items-center">
          {t('DropdownText')}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="py-3" onMouseDown={() => handleSelectSpecification('Gulf')}>
            {t('RegionalSpecifications.Gulf')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectSpecification('Japanese')}>
            {t('RegionalSpecifications.Japanese')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectSpecification('LosAngeles')}>
            {t('RegionalSpecifications.LosAngeles')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectSpecification('European')}>
            {t('RegionalSpecifications.European')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectSpecification('Other')}>
            {t('RegionalSpecifications.Other')}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
};
export const FuelTypeSelection = ({lng}) => {
  const router = useRouter();
  const brand = useSearchParams().get("brand");
  const location = useSearchParams().get("location");
  const category = useSearchParams().get("category");
  const model = useSearchParams().get("model");
  const year = useSearchParams().get("year");
  const carType = useSearchParams().get("carType");
  const carStatus = useSearchParams().get("carStatus");
  const transmission = useSearchParams().get("transmission");
  const fuelType = useSearchParams().get("fuelType");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
  const { t } = useTranslation(lng , "translation")

  if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| !transmission || !RegionalSpecifications || fuelType) return null;
  
  function handleSelectFuelType(selectedFuelType) {
    router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${selectedFuelType}`);
  }
  
  return (
    <div className="w-1/2 mx-auto">
     <Select className="flex-grow" open={true}>
      <SelectTrigger>
        <div className="w-full text-2xl font-semibold flex justify-around items-center">
          {t('fuelType')}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="py-3" onMouseDown={() => handleSelectFuelType('Petrol')}>
          {t('fuelTypes.Petrol')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectFuelType('Diesel')}>
          {t('fuelTypes.Diesel')}
          </SelectItem>
          <SelectItem onClick={() => handleSelectFuelType('Electric')}>
          {t('fuelTypes.Electric')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectFuelType('Hybrid')}>
          {t('fuelTypes.Hybrid')}
          </SelectItem>
          <SelectItem className="py-3" onMouseDown={() => handleSelectFuelType('Other')}>
          {t('fuelTypes.Other')}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  );

};
export const EngineCapacitySelector = ({lng}) => {
  const router = useRouter();
  const brand = useSearchParams().get("brand");
  const category = useSearchParams().get("category");
const location = useSearchParams().get("location");
  const model = useSearchParams().get("model");
  const year = useSearchParams().get("year");
  const carType = useSearchParams().get("carType");
  const carStatus = useSearchParams().get("carStatus");
  const transmission = useSearchParams().get("transmission");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
  const fuelType = useSearchParams().get("fuelType");
  const EnginCapacity = useSearchParams().get("EnginCapacity");
  const { t } = useTranslation(lng , "translation")

  if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| !transmission || !RegionalSpecifications || !fuelType || EnginCapacity) return null;

  const handleSelectEngineCapacity = (selectedCapacity) => {
    // Handle the selected engine capacity
  router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${selectedCapacity}`);
  };

  return (
    <div key="1" className="w-1/2 mx-auto">
      <Select className="flex-grow" open={true}>
      <SelectTrigger>
        <div className="w-full text-2xl font-semibold flex justify-around items-center">
          {t("engineCapacity")}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem onMouseDown={() => handleSelectEngineCapacity('1000')}>
            Up to 1000
          </SelectItem>
          <SelectItem onMouseDown={() => handleSelectEngineCapacity('1500')}>
            1001 - 1500
          </SelectItem>
          <SelectItem onMouseDown={() => handleSelectEngineCapacity('2000')}>
            1501 - 2000
          </SelectItem>
          <SelectItem onMouseDown={() => handleSelectEngineCapacity('2500')}>
            2001 - 2500
          </SelectItem>
          <SelectItem onMouseDown={() => handleSelectEngineCapacity('3000')}>
            {t('above')} 2500
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
};
export const MeterRangeSelection = ({ lng }) => {
    const router = useRouter();
    const brand = useSearchParams().get("brand");
    const category = useSearchParams().get("category");
    const location = useSearchParams().get("location");
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
    const { t } = useTranslation(lng , "translation")

    if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| !transmission || !RegionalSpecifications || !fuelType || !EnginCapacity || meterRange) return null;

    const handleSelectMeterRange = (selectedRange) => {
        router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${selectedRange}`);
    };

    const meterRanges = [
        { label: '0 - 1000 km', value: '0-1000' },
        { label: '1000 - 5000 km', value: '1000-5000' },
        { label: '5000 - 10000 km', value: '5000-10000' },
        { label: '10000 - 15000 km', value: '10000-15000' },
        { label: '15000 - 20000 km', value: '15000-20000' },
    ];

    return (
        <div key="1" className="w-1/2 mx-auto">
            <Select className="flex-grow" open={true}>
                <SelectTrigger>
                    <div className="w-full text-2xl font-semibold flex justify-around items-center">
                        {t('meterRange')}
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {meterRanges.map((range, index) => (
                            <SelectItem
                                onMouseDown={() => handleSelectMeterRange(range.value)}
                                key={index}
                            >
                                {range.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
export const PaintTypeSelector = ({ lng }) => {
  const router = useRouter();
  const brand = useSearchParams().get("brand");
  const category = useSearchParams().get("category");
  const location = useSearchParams().get("location");
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
  const { t } = useTranslation(lng , "translation")

  if (!brand || !category  || !model || !year || !carType || !carStatus || !uploadedImages|| !transmission || !RegionalSpecifications || !fuelType || !EnginCapacity || !meterRange || paintType) return null;

  const handleSelectPaintType = (selectedType) => {
      router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${selectedType}`);
  };

  const paintTypes = [
      { label: 'Original paint', value: 'Original' },
      { label: 'Partial paint', value: 'Partial' },
      { label: 'Complete paint', value: 'Complete' },
      { label: 'Another', value: 'Another' },
  ];

  return (
      <div key="1" className="w-1/2 mx-auto">
          <Select className="flex-grow" open={true}>
              <SelectTrigger>
                  <div className="w-full text-2xl font-semibold flex justify-around items-center">
                      {t('paintType')}
                  </div>
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup>
                      {paintTypes.map((type, index) => (
                          <SelectItem
                              onMouseDown={() => handleSelectPaintType(type.value)}
                              key={index}
                          >
                              {t(`${type.label}`)}
                          </SelectItem>
                      ))}
                  </SelectGroup>
              </SelectContent>
          </Select>
      </div>
  );
};
export function PriceSelection({lng}) {
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [pricestate, setPrice] = useState("")

  if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || price && payment ) return null;


  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&price=${pricestate}&payment=${selectedPaymentMethod}`);
  };
  return (
   <div className="w-1/2 mx-auto">
       <form className="grid w-full  items-center gap-4" onSubmit={handleSubmit}>
      <Label htmlFor="price">Price</Label>
      <div className="flex items-center gap-2">
        <span className="text-lg">$</span>
        <Input
          id="price"
          placeholder="Enter price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
          <Select className="flex-grow">
              <SelectTrigger>
                  <div className="w-full text-xl font-semibold flex justify-around items-center">
                  Payment Method
                  </div>
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup 
                  >
                      <SelectItem
                      onMouseDown={()=> setSelectedPaymentMethod("cash")}
                      >
                          Cash
                      </SelectItem>
                      <SelectItem
                      onMouseDown={()=> setSelectedPaymentMethod("Installment")}
                      >
                          Installment
                      </SelectItem>
                  </SelectGroup>
              </SelectContent>
          </Select>
      <Button   type="submit">
        Submit
      </Button>
    </form>
   </div>
  );
}
export const NameDescriptionSelector = ({ lng }) => {
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
  const [nameInput, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || !price || !payment || name) return null;

    const handleSelectNameDescription = (selectedName, selectedDescription) => {
        router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&price=${price}&payment=${payment}&name=${selectedName}&description=${selectedDescription}`);
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      handleSelectNameDescription(nameInput , description)
        // Handle name input change
        // You might want to use state or other management here
    };


    return (
        <div key="1" className="w-1/2 mx-auto pt-4">
          <h1 className='text-xl text-center py-4'>Ad Details</h1>
            <Input
                className="mb-4"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                className="mb-4"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button
            className='w-full'
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
};
export function Review({lng , userId}) {
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
  const payment = useSearchParams().get("payment");
  const price = useSearchParams().get("price");
  const name = useSearchParams().get("name");
  const location = useSearchParams().get("location");
  const {   adImages  ,setSuccessMessage} = useDarkMode()
  const [loading , setLoading] = useState(false)
  const { t } = useTranslation(lng , "translation")
  const router = useRouter()
  const data = {
    EnginCapacity: EnginCapacity,
    paintType:paintType,
    payment: payment,
    price: price,
    name: name,
    RegionalSpecifications: RegionalSpecifications,
    location: location,
    adImages: adImages,
    brand: brand,
    category: category,
    model: model,
    year: year,
    carType: carType,
    carStatus: carStatus,
    transmission: transmission,
    fuelType: fuelType,
    meterRange: meterRange
  };
  const handleSave = () =>{
    setLoading(true)
    createAd(data , userId).then((res)=>{
      router.push('/myAds')
      setSuccessMessage(true)
    })
  }
  console.log(adImages);
  const steps = [
    { label: 'Engine Capacity', value: EnginCapacity },
    { label: 'Paint Type', value: paintType },
    { label: 'Payment', value: payment },
    { label: 'Price', value: price },
    { label: 'Name', value: name },
    { label: 'Regional Specifications', value: RegionalSpecifications },
    { label: 'Location', value: location },
    { label: 'Uploaded Images', value: uploadedImages },
    { label: 'Brand', value: brand },
    { label: 'Category', value: category },
    { label: 'Model', value: model },
    { label: 'Year', value: year },
    { label: 'Car Type', value: carType },
    { label: 'Car Status', value: carStatus },
    { label: 'Transmission', value: transmission },
    { label: 'Fuel Type', value: fuelType },
    { label: 'Meter Range', value: meterRange },
  ];
  if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || !price || !payment || !name) return null;
 
  return (
    <main className="">
      <div className="grid mx-8 grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2 p-4 md:p-6">
      {steps.map((step, i) => (
        <div key={i}>
          <Label htmlFor={`step-${i}`}>{step.label}</Label>
          <Input id={`step-${i}`} type="text" value={step.value || ''} />
        </div>
      ))}
      </div>
      <div className="w-full grid gap-4 px-8">
        <div className="flex gap-2 justify-end">
          <Button onClick={handleSave} disabled={loading} className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {loading ? 'saving...' :  t('saveAd')}
            <HardDriveIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {t('publishAd')}
            <PlaneIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        </div>
    </main>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
// steps component
export const MutliSteps = () => {
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
  const payment = useSearchParams().get("payment");
  const price = useSearchParams().get("price");
  const name = useSearchParams().get("name");
  const location = useSearchParams().get("location");


  const steps = [
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    location,
    uploadedImages,
    brand,
    category,
    model,
    year,
    carType,
    carStatus,
    transmission,
    fuelType,
    meterRange
  ]
  
  let stepses = steps.filter(step => step !== null)
  const totalSteps = steps.length;
  console.log(stepses);
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = Array.from({ length: totalSteps }, () => useRef(null));

  useEffect(() => {
    // Check if a new step has been added
    if (stepses.length > currentStep) {
      setCurrentStep(stepses.length);
      scrollToStep(stepses.length);
    }
  }, [stepses, currentStep]);

  const scrollToStep = (step) => {
    if (stepRefs[step - 1].current) {
      stepRefs[step - 1].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
    scrollToStep(step);
  };

  return (
    <section key="1" className="w-11/12 mx-auto absolute top-0 ">
      {/* ... Your existing code ... */}
      <div className="flex w-full  overflow-x-hidden">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={`step-${index + 1}`}
            ref={stepRefs[index]}
            className="flex items-center  p-4 sm:p-8"
          >
            <Badge
              className={`items-center justify-center w-20 h-8 ${
                currentStep === index + 1 || currentStep > index + 1 ? 'bg-green-500 text-white' : ''
              }`}
              variant="outline"
              onClick={() => handleStepChange(index + 1)}
            >
             {currentStep === index  || currentStep >= index + 1  && <CheckIcon className="h-3.5 w-3.5 -translate-x-1" />}
             {index + 1 ==  steps.length   ? 'Complete' : `Step ${index + 1}`}
            </Badge>
          </div>
        ))}
      </div>
      {/* Button to change step */}
    </section>
  );
};
function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function HardDriveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  )
}
function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}