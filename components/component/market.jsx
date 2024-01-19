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
  const levelOneFilters = [
    'Ford',
    'Audi',
    'Nissan',
    'Toyota',
    'Kia',
    'Hyundai'
  ];
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname= usePathname()
  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + '?' + updatedParams);
  };

  return (
    (<main
      key="1"
      className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
      <div className="filters bg-white shadow rounded p-3 flex flex-col gap-4 items-start py-2">
        <h2 className="text-2xl font-bold">Filter Options</h2>
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
            <Input id="price-min" placeholder="Min price" />
            <Input id="price-max" placeholder="Max price" />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Year</h3>
          <div className="flex gap-2">
            <Input id="price-min" placeholder="Min Year" />
            <Input id="price-max" placeholder="Max Year" />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Vehicle Type</h3>
          <div className="flex items-center gap-2">
            <Checkbox id="sport" />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="suv" />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="mpv" />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="sedan" />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="coupe" />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="hatchback" />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
        <div className="grid gap-3">
        <SelectionComp {...transmissionProps} />
        <SelectionComp {...specificationSelectionProps} />
        <SelectionComp {...fuelTypeSelectionProps} />
        <SelectionComp {...engineCapacitySelectorProps} />
        <SelectionComp {...meterRangeSelectionProps} />
        <SelectionComp {...paintTypeSelectorProps} />
        </div>
      </div>
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {levelOneFilters.map((filter , i)=>(
            <Button key={i} onClick={()=> createQueryString('brand' , filter)} className='bg-[#fe26355e] hover:bg-[#fe2635] hover:text-white text-red-800 border border-[#fe2635]'>{filter}</Button>
          ))}
          <Button className="bg-[#fe2635]">View More</Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {ads.map((ad,i)=>(
            <div className="relative group">
            <Link className="absolute inset-0 z-10" href={`vehicle/${ad.id}`}>
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Ad image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src={ad.Adimages[0].url}
              width={200} />
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
              <Button className="w-[40%] ml-1 flex items-center justify-center gap-2">
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
