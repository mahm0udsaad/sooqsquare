"use client"
import dynamic from 'next/dynamic'
import {  useRouter, useSearchParams } from 'next/navigation';
import {withGenericSelection , GenericSelection} from './dynamicSelection'
import { Input } from "@/components/ui/input";
import { AdCategroy } from './categoriesCard';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { categoriesData ,carBrands ,yearsArray ,carTypesArray, features} from "./../data/staticData"
import { useTranslation } from "../app/i18n/client"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import React, { useState, useRef, useEffect } from 'react';
import { useDarkMode } from '@/context/darkModeContext';
import { createAd } from '../prisma/actions';
import { RiTimerFlashLine } from "react-icons/ri";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
const NameDescriptionSelector = dynamic(() => import(`./NameDescriptionSelector`));
const CarBrandSelector = dynamic(() => import(`./carBrandSelection`));
const CarStatusSelection = dynamic(() => import(`./carStatusSelection`));
const MultiImageForm = dynamic(() => import(`./MultibleImages`));
const LocationDetails = dynamic(() => import(`./LocationSelector`));


const SelectionComp = withGenericSelection(GenericSelection);

export const CarForSellAd = ({lng , userId}) =>{
  const { t } = useTranslation(lng , "translation")
  const transmission = useSearchParams().get("transmission");
  const RegionalSpecifications = useSearchParams().get("RegionalSpecifications");
  const fuelType = useSearchParams().get("fuelType");
  const EnginCapacity = useSearchParams().get("EnginCapacity");
  const meterRange = useSearchParams().get("meterRange");
  const paintType = useSearchParams().get("paintType");

  const transmissionProps = {
    title: t('transmission'),
    itemsArray: [
      'Automatic',
      'Manual',
    ],
    shouldOpen: true,
    paramNameToSet:'transmission',
    paramsToCheck: [
      'category',
      'uploadedImages',
      'brand',
      'year',
      'carType',
      'model',
      'carStatus',
    ],
  };
  const specificationSelectionProps = {
    title: t('DropdownText'), // Replace with your specific translation key
    itemsArray: [
      t('Gulf'),
      t('Japanese'),
      t('LosAngeles'),
      t('European'),
      t('Other'),
    ], 
    shouldOpen: true,
    paramNameToSet: 'RegionalSpecifications',
    paramsToCheck: [
      'model',
      'brand',
      'category',
      'uploadedImages',
      'location',
      'carType',
      'year',
      'carStatus',
      'transmission',
    ], // Adjust as per your required parameters
  };
  const fuelTypeSelectionProps = {
    title: t('fuelType'),
    itemsArray: [
      t('fuelTypes.Petrol'),
      t('fuelTypes.Diesel'),
      t('fuelTypes.Electric'),
      t('fuelTypes.Hybrid'),
      t('fuelTypes.Other'),
    ],
    shouldOpen: true,
    paramNameToSet: 'fuelType',
    paramsToCheck: [
      'brand',
      'location',
      'category',
      'model',
      'year',
      'carType',
      'carStatus',
      'transmission',
      'RegionalSpecifications',
      'uploadedImages',
    ],
  };
  const engineCapacitySelectorProps = {
    title: t('engineCapacity'), // Replace with your specific translation key
    itemsArray: [
      'Up to 1000',
      '1001 - 1500',
      '1501 - 2000',
      '2001 - 2500',
      'Above 2500', 
    ],
    shouldOpen: true, // Adjust as per your logic
    paramNameToSet: 'EnginCapacity', // Adjust parameter name
    paramsToCheck: [
      'brand',
      'category',
      'model',
      'year',
      'carType',
      'carStatus',
      'uploadedImages',
      'transmission',
      'RegionalSpecifications',
      'fuelType',
    ],
  };
  const meterRangeSelectionProps = {
    title: t('meterRange'), // Replace with your specific translation key
    itemsArray: [
      '0 - 1000 km',
      '1000 - 5000 km',
      '5000 - 10000 km',
      '10000 - 15000 km',
      '15000 - 20000 km',
    ], // Adjust based on your specific translations or labels
    shouldOpen: true, // Adjust as per your logic
    paramNameToSet: 'meterRange', // Adjust parameter name
    paramsToCheck: [
      'brand',
      'category',
      'model',
      'year',
      'carType',
      'carStatus',
      'uploadedImages',
      'transmission',
      'RegionalSpecifications',
      'fuelType',
      'EnginCapacity',
    ],
  };
  const paintTypeSelectorProps = {
    title: t('paintType'), // Replace with your specific translation key
    itemsArray: [
      t('Original paint'),
      t('Partial paint'),
      t('Complete paint'),
      t('Another'),
    ], // Adjust based on your specific translations or labels
    shouldOpen: true, // Adjust as per your logic
    paramNameToSet: 'paintType', // Adjust parameter name
    paramsToCheck: [
      'brand',
      'category',
      'model',
      'year',
      'carType',
      'carStatus',
      'uploadedImages',
      'transmission',
      'RegionalSpecifications',
      'fuelType',
      'EnginCapacity',
      'meterRange',
    ],
  };

return (
  <>
        <Review userId={userId} lng={lng} />
        <CategoriesForm lng={lng} />
        <CarStatusSelection lng={lng} />
        <MultiImageForm lng={lng} />
        <NameDescriptionSelector lng={lng} />
        <LocationDetails lng={lng} />
        <CarBrandSelector lng={lng} />

        {!transmission && <SelectionComp {...transmissionProps} />}
        {!RegionalSpecifications && <SelectionComp {...specificationSelectionProps} />}
        {!fuelType && <SelectionComp {...fuelTypeSelectionProps} />}
        {!EnginCapacity && <SelectionComp {...engineCapacitySelectorProps} />}
        {!meterRange && <SelectionComp {...meterRangeSelectionProps} />}
        {!paintType && <SelectionComp {...paintTypeSelectorProps} />}

        <PriceSelection lng={lng} />
        <ExtraFeatures lng={lng} />
        <CarChassis lng={lng} />
        <ModelSelection lng={lng} />
  </>
)
}
export const ModelSelection = ({lng}) => {
   const  model  = useSearchParams().get("model");
   const  brand  = useSearchParams().get("brand");
   const  carStatus  = useSearchParams().get("carStatus");
   const  carType  = useSearchParams().get("carType");
   const  year  = useSearchParams().get("year");
   const { t } = useTranslation(lng , "translation")

   const models = carBrands[`${brand}`]
     const modelSelectionProps = {
      title: t('carModel'),
      itemsArray: models,
      shouldOpen: !model && carType && year,
      paramNameToSet:'model',
      paramsToCheck: [
        'category',
        'uploadedImages',
        'location',
      ],
    };
    const yearSelectionProps = {
      title: t('carYear'),
      itemsArray: yearsArray,
      shouldOpen: carType && !year,
      paramNameToSet: 'year',
      paramsToCheck: [
        'category',
        'uploadedImages',
        'location',
      ],
    };
    const carTypeSelectionProps = {
      title: t('cartype'),
      itemsArray: carTypesArray,
      shouldOpen: !carType,
      paramNameToSet: 'carType',
      paramsToCheck: [
        'category',
        'uploadedImages',
        'location',
      ],
    };
    if (year && model && year || !carStatus || !brand) return ;
   return (
   <div className='grid grid-cols-3 gap-4 mx-8 pt-8'>
   <SelectionComp {...modelSelectionProps} />
   <SelectionComp {...yearSelectionProps} />
   <SelectionComp {...carTypeSelectionProps} />
   </div>
   )
}
const CategoriesForm = ({lng}) =>{
  const { t } = useTranslation(lng , "translation")
 const  category  = useSearchParams().get("category");

 if ( category ) return ; 
 return (
     <div className=' '>
     <h1 className="text-center text-2xl font-semibold sm:py-8">
         {t("sellTitle")}
     </h1>
     <div className="grid  grid-cols-2  gap-8  py-4">
     {categoriesData.map((item, i) => (
     <AdCategroy lng={lng} key={i} icon={item.icon} text={item.text} />
     ))}
     </div>
     </div>
 )
}
export const ExtraFeatures = ({ lng }) =>{
  const router = useRouter()
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
  const {extraFeature , setExtraFeature} = useDarkMode()

  const handleSelect = (value) => {
    setExtraFeature(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || extraFeatures ) return null;
  const handleSubmit = () => {
    router.push(`?category=${category}&carStatus=${carStatus}&uploadedImages=${uploadedImages}&location=${location}&brand=${brand}&carType=${carType}&year=${year}&model=${model}&transmission=${transmission}&RegionalSpecifications=${RegionalSpecifications}&fuelType=${fuelType}&EnginCapacity=${EnginCapacity}&meterRange=${meterRange}&paintType=${paintType}&extraFeatures=${extraFeature.length}`);
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
export const CarChassis = ({ lng }) =>{
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
        <span className="text-lg w-[20%]">{category == "CarsForRent"  ? `${t('/day')}/` : '$'}</span>
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
  const extraFeatures = useSearchParams().get("extraFeatures");
  const carChassis = useSearchParams().get("carChassis");
  const {   adImages  ,setSuccessMessage} = useDarkMode()
  const [loading , setLoading] = useState(false)
  const { t } = useTranslation(lng , "translation")
  const router = useRouter()
  const data = {
    name: name,
    carStatus: carStatus,
    price: price,
    payment: payment,
    brand: brand,
    model: model,
    year: year,
    carType: carType,
    paintType:paintType,
    location: location,
    adImages: adImages,
    category: category,
    transmission: transmission,
    fuelType: fuelType,
    CarChassis: carChassis ,
    EnginCapacity: EnginCapacity,
    ExtraFeatures: extraFeatures ,
    RegionalSpecifications: RegionalSpecifications,
    meterRange: meterRange
  };

  const handleSave = async () => {
    setLoading(true);
  
    try {
      const ad = await createAd(data, userId);
  
      if (ad) {
        setSuccessMessage(true);
      }
    } catch (error) {
      console.error('Error creating ad:', error);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { label: 'Category', value: category },
    { label: 'Car Status', value: carStatus },
    { label: 'Name', value: name },
    { label: 'Uploaded Images', value: uploadedImages },
    { label: 'Brand', value: brand },
    { label: 'Model', value: model },
    { label: 'Year', value: year },
    { label: 'Car Type', value: carType },
    { label: 'Price', value: price },
    { label: "Car Chassis", value: carChassis },
    { label: 'Engine Capacity', value: EnginCapacity },
    { label: 'Paint Type', value: paintType },
    { label: 'Payment', value: payment },
    { label: 'Regional Specifications', value: RegionalSpecifications },
    { label: 'Location', value: location },
    { label: 'Transmission', value: transmission },
    { label: 'Fuel Type', value: fuelType },
    { label: 'Meter Range', value: meterRange },
    { label : "Extra Features" ,value:extraFeatures },
  ];
  if (!brand || !category || !model || !year || !carType || !carStatus || !transmission || !fuelType || !paintType || !price || !payment || !name || !extraFeatures) return null;
 
  return (
    <main className="">
      <div className="grid mx-8 grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2 pb-4">
      {steps.map((step, i) => (
        step.value !== 'null' && 
        <div key={i}>
          <Label htmlFor={`step-${i}`}>{step.label}</Label>
          <Input id={`step-${i}`} type="text" value={step.value || ''} />
        </div>

      ))}
          <Button onClick={handleSave} disabled={loading} className="flex h-14 w-full rounded-md self-end justify-around rounded-md bg-gray-900  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {loading ? 'saving...' :  t('saveAd')}
            <HardDriveIcon className="ml-2 h-4 w-4 mx-3" />
          </Button>
          <Button className="flex h-14 w-full rounded-md self-end rounded-md bg-green-500   text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {t('publishAd')}
            <PlaneIcon className="ml-2 h-4 w-4 mx-3" />
          </Button>
      </div>
      <div className="w-full grid gap-4 px-8">
     
        </div>
    </main>
  );
}
// steps component
export const MutliSteps = ({ lng }) => {
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
  const extraFeatures = useSearchParams().get("extraFeatures");
  const carChassis = useSearchParams().get("carChassis");
  const { t } = useTranslation(lng , "translation")

  const steps = [
    extraFeatures,
      carChassis,
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
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = Array.from({ length: totalSteps }, () => useRef(null));

  useEffect(() => {
      setCurrentStep(stepses.length);
      scrollToStep(stepses.length);
  }, [stepses.length, currentStep]);

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
    <div key="1" className="w-full border bg-white dark:bg-zinc-800 shadow-lg  rounded-xl">
      <div className="p-3">
      <p className='text-gray-700 dark:text-white'>{t("postTitle")}</p>
      <p className='text-gray-700 dark:text-white pt-2'>{t("remaining")} :  <Badge className=" bg-[#21be5b47] border-[#21be5b] text-green-700 dark:text-white mx-3">{ totalSteps - stepses.length  } {t("Step")}</Badge></p>
      </div>
      {/* ... Your existing code ... */}
      <div className="flex w-full  overflow-x-hidden">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={`step-${index + 1}`}
            ref={stepRefs[index]}
            className="flex items-center  p-4 sm:p-7"
          >
            <Badge
              className={`items-center border shadow-lg justify-around w-24 h-8 ${
                currentStep === index + 1 || currentStep > index + 1 ? 'bg-green-500 text-white' : ''
              }`}
              variant="outline"
              onClick={() => handleStepChange(index + 1)}
            >
             {currentStep === index  || currentStep >= index + 1  && <CheckIcon className="h-3.5 w-3.5 -translate-x-1" />}
             {index + 1 ==  steps.length   ? 'Complete' : `${t('Step')} ${index + 1}`}
            </Badge>
          </div>
        ))}
      </div>
      {/* Button to change step */}
    </div>
  );
};
export const OverView = ({ lng }) =>{
  const category = useSearchParams().get("category");
  const carStatus = useSearchParams().get("carStatus");
  const { t } = useTranslation(lng , "translation")
  if(!category)return ;
  return (
  <div className="flex flex-col gap-4  lg:max-w-xs">
     <MutliSteps lng={lng}/>
    <div className="flex py-3 border-b-2">
    <p className="font-semibold">{t('category')}</p>
    <p>/{t(`${category}`)}</p>
    {carStatus &&<p>/{t(`${carStatus.toLowerCase()}`)}</p>}
    </div>
      
    <div className="max-w-xs bg-[#21be5b47] border border-[#21be5b] rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl sm:mb-4 my-4 mb-2 text-green-800 dark:text-white">Tip for You</div>
          <p className="text-gray-700 dark:text-white text-base">
            This is a sample card with Tailwind CSS. You can add your content here.
          </p>
        </div>
      </div>

      <div className="max-w-xs flex justify-center hover:opacity-70 cursor-pointer py-8 rounded-xl bg-gradient-to-r from-green-900 to-green-500 items-start max-md:px-5">
      <RiTimerFlashLine className='text-4xl mx-2 text-white'/>
      <div className="text-white text-2xl font-bold leading-10 my-auto">
      {t('QuickSell')}
      </div>
      </div>
        </div>
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