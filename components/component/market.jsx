"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FilterSelection, withGenericSelection } from "../dynamicSelection"
import { useTranslation } from "@/app/i18n/client"
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { timeSince } from "../../helper/timeConversion"
import { carBrands } from '../../data/staticData'
import { useEffect, useState } from "react"

const SelectionComp = withGenericSelection(FilterSelection);

export function Market({lng , ads}) {
  const { t } = useTranslation(lng , "translation")
  const transmissionProps = {
    title: t('transmission'),
    itemsArray: [
      'Automatic',
      'Manual',
    ],
    shouldOpen: true,
    paramNameToSet:'transmission',
    paramsToCheck: [
    ],
  };
  const specificationSelectionProps = {
    title: t('RegionalSpecifications'), 
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
    ],
  };
  const conditionSelectorProps = {
    title: t('carStatus'), // Replace with your specific translation key
    itemsArray: [
      t('New'),
      t('Used'),
    ], // Adjust based on your specific translations or labels
    shouldOpen: true, // Adjust as per your logic
    paramNameToSet: 'carStatus', // Adjust parameter name
    paramsToCheck: [
    ],
  };
  const levelOneFilters = [
    'Ford',
    'Audi',
    'Nissan',
    'Toyota',
    'Kia',
    'Hyundai'
  ];

console.log(ads);
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname= usePathname()
  
  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + '?' + updatedParams);
  };

  const resetFileters = () =>{
    router.push(pathname)
  }
  const handleCheckBoxChange = (e ,value) =>{
    // const isChecked = e.target.checked;
    if(e){
      console.log('Checkbox Checked:', value);
      const searchParams = new URLSearchParams(window.location.search);

  // Check if the parameter already exists
    if (searchParams.has('carType')) {
      // If it exists, append the new value to the existing values
      const existingValues = searchParams.getAll('carType');
      existingValues.push(value);
      searchParams.delete('carType');
      existingValues.forEach((val) => searchParams.append('carType', val));
    } else{
      searchParams.set("carType", value);
    }
    const updatedParams = searchParams.toString();
    const newUrl = pathname + (updatedParams ? '?' + updatedParams : '');
    router.push(newUrl);
    }
  }
  const [visibleBrands, setVisibleBrands] = useState(8);
  const [displayedContent, setDisplayedContent] = useState(null);
  const [currentBrand , setCurrentBrand] = useState('')

  useEffect(() => {
    // Check if 'brand' parameter is present in the URL's search parameters
    if (searchParams.has('brand')) {
      setDisplayedContent('models');
      const brand = searchParams.get('brand')
      setCurrentBrand(`${brand}`)
    } else {
      setDisplayedContent('brands');
    }
  }, [searchParams]);
  const handleModleSelect = (modle)=>{
    createQueryString('model', modle);
  }
  const handleBrandClick = (brand) => {
    // Set the brand parameter in the URL and change the displayed content to 'models'
    createQueryString('brand', brand);
    setDisplayedContent('models');
  };

  const handleViewMore = () => {
    // Set visibleBrands to the total number of brands when "View More" is clicked
    setVisibleBrands(Object.keys(carBrands).length);
  };

  return (
    (<main
      key="1"
      className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
      <div className="filters bg-white dark:bg-zinc-950 shadow rounded p-3 flex flex-col gap-4 items-start py-2">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filter Options</h2>
        <Button className={'dark:bg-white dark:text-black dark:hover:text-white'} onClick={resetFileters}>Reset</Button>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Category</h3>
          <div className="flex flex-col gap-2">
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              All categories
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Vehicles
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Cars for Sale
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Cars for Rent
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Tyres, Batteries, Oils, & Accessories
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Car Spare Parts
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Boats - Watercraft
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Heavy Trucks, Buses & Other Vehicles
            </Link>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Location</h3>
          <Input id="location" placeholder="Enter location" />
          <h3 className="font-semibold mt-2">
            City
            <Select className="mt-2" id="city">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                  <SelectItem value="phoenix">Phoenix</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </h3>
          <Select
            id="city"
            options={["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]} />
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Price Range</h3>
          <div className="flex gap-2">
            <Input className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white" id="price-min" placeholder="Min price" />
            <Input className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white" id="price-max" placeholder="Max price" />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Year</h3>
          <div className="flex gap-2">
            <Input className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white" id="price-min" placeholder="Min Year" />
            <Input className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white" id="price-max" placeholder="Max Year" />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Vehicle Type</h3>
          <div className="flex items-center gap-2">
            <Checkbox isChecked={true} onCheckedChange={(e)=>handleCheckBoxChange(e , 'sport')} id="sport" value="sport" />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={(e)=>handleCheckBoxChange(e , 'suv')} id="suv" value="suv" />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={(e)=>handleCheckBoxChange(e , 'mpv')} id="mpv" value="mpv" />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={(e)=>handleCheckBoxChange(e , 'sedan')} id="sedan" value="sedan" />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={(e)=>handleCheckBoxChange(e , 'coupe')} id="coupe" value="coupe" />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={(e)=>handleCheckBoxChange(e , 'hatchback')} id="hatchback" value="hatchback" />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
        <div className="grid gap-3">
        <SelectionComp {...transmissionProps} />
        <SelectionComp {...conditionSelectorProps} />
        <SelectionComp {...specificationSelectionProps} />
        <SelectionComp {...fuelTypeSelectionProps} />
        <SelectionComp {...engineCapacitySelectorProps} />
        <SelectionComp {...meterRangeSelectionProps} />
        <SelectionComp {...paintTypeSelectorProps} />
        </div>
      </div>
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-wrap gap-2 mb-4">
        {displayedContent === 'brands' || !searchParams.has("brand") ? (
            Object.keys(carBrands).slice(0, visibleBrands).map((brand, i) => (
              <Button key={brand} onClick={() => handleBrandClick(brand)} className='bg-[#fe26355e] hover:bg-[#fe2635] hover:text-white text-red-800 border border-[#fe2635] dark:text-white'>
                {brand}
              </Button>
            ))
          ) : (
            carBrands[currentBrand] ? (
              carBrands[currentBrand].map((model, i) => (
                <Button key={model} onClick={() => handleModleSelect(model)} className='bg-[#fe26355e] hover:bg-[#fe2635] hover:text-white text-red-800 border border-[#fe2635] dark:text-white'>
                {model}
              </Button>
              ))
            ) : (
              <p>No models found for {currentBrand}</p>
            )
          )}
        {visibleBrands < Object.keys(carBrands).length && (
          <Button onClick={handleViewMore} className="bg-[#fe2635]">
            View More
          </Button>
        )}
      </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {ads.map((ad,i)=>(
            <div key={ad.id} className="relative group">
            <Link className="absolute inset-0 z-10" href={`vehicle/${ad.id}`}>
              <span className="sr-only">View</span>
            </Link>

              <img
              alt="Ad image"
              className="rounded-lg object-none aspect-square w-full h-[15rem] group-hover:opacity-50 transition-opacity"
              src={ad.Adimages[0].url}
            />



            <Button className="absolute top-2 right-2 bg-transparent rounded-full p-1">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2} />
              </svg>
            </Button>
            <div className="grid grid-cols-2">
              <h3 className="font-semibold tracking-tight">{ad.name}</h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">{ad.location}</p>
              <span>{timeSince(ad.createdAt)}</span>
                  <span className="ml-2">{ad.brand}</span>
              <h4 className="font-semibold">${ad.price}</h4>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Button className="w-[40%] mr-1 flex items-center justify-center gap-2 inset-0 z-10 bg-[#fe2635] hover:bg-[#fe26355e]">
               <BsChatLeftDots className='w-4 h-4' />
                Chat
              </Button>
              <Button className="w-[40%] ml-1 flex items-center justify-center gap-2 dark:bg-white dark:text-black">
              <MdOutlineLocalPhone className='h-4 w-4'/>
                Call
              </Button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </main>)
  );
}
