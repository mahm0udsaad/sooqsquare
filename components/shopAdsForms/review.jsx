"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { createAd, createAdForShop, createAdForUser } from "../../prisma/actions";
import { useDarkMode } from "@/context/darkModeContext";
import { useState } from "react";
import {  DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/components/ui/button"
import { useToast } from "../ui/use-toast";

export default function Review({lng ,userId ,  shopId}) {
    const { toast } = useToast()
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
    const profile = useSearchParams().get("profile");
    const location = useSearchParams().get("location");
    const {extraFeature , adImages  , setConfettiActive , userLocation} = useDarkMode()
    const carChassis = useSearchParams().get("carChassis");
    const [loading , setLoading] = useState(false)
    const [PublishIsLoading , setPublishIsLoading] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    const [ad, setAd] = useState(null);
    const { t } = useTranslation(lng , "translation")
    const extraFeatures = extraFeature.join(' ')

    const data = {
      name: name,
      country: userLocation.countryName,
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
      extraFeatures: extraFeatures ,
      RegionalSpecifications: RegionalSpecifications,
      meterRange: meterRange
    };
    console.log(profile);
    const handleSave = async () => {
      setLoading(true);
    
      try {
        const ad =  profile === "mainProfile" ? await createAdForUser(data , userId , "inActive")  : await createAdForShop(data, shopId , "inActive") 
        if (ad) {
          toast("Ad Created Successfuly")
          setShowDialog(true)
          setConfettiActive(true);
          // Reset the confetti after a short delay
          setTimeout(() => {
              setConfettiActive(false);
          }, 4000);
        }
      } catch (error) {
        console.error('Error creating ad:', error);
      } finally {
        setLoading(false);
      }
    };
    const handlePublish = async () => {
      setPublishIsLoading(true);
    
      try {
        const ad =  profile === "mainProfile" ? await createAdForUser(data , userId , "active")  : await createAdForShop(data, shopId , "active") 
        if (ad) {
          setAd(ad)
          toast({
            title:"Ad Published Successfuly"
          })
          setShowDialog(true)
          setConfettiActive(true);
          // Reset the confetti after a short delay
          setTimeout(() => {
              setConfettiActive(false);
          }, 4000);
        }
      } catch (error) {
        console.error('Error creating ad:', error);
      } finally {
        setPublishIsLoading(false);
      }
    };
  
    const steps = [
      { label: 'Category', value: category },
      { label: 'Car Status', value: carStatus },
      { label: 'Name', value: name },
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
      { label : "Extra Features" ,value:extraFeatures},
    ];
   const searchParams = useSearchParams()
    
    return (
      <main className="">
        <div className="grid mx-8 grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2 pb-4">
          {steps.map((step, i) => (
            step.value !== 'null'  && 
            <div key={i}>
              <Label htmlFor={`step-${i}`}>{step.label}</Label>
              <Input id={`step-${i}`} type="text" value={step.value || ''} />
            </div>
             ))}
           
          <Dialog open={showDialog}>
            <DialogContent className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <DialogHeader className=" p-6 sm:p-8">
                <DialogTitle className="text-white text-2xl font-semibold">Congratulations!</DialogTitle>
                <DialogDescription className="text-white text-lg mt-2">Your ad is created successfully!</DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-center space-x-4 p-6 sm:p-8">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                  href={`${searchParams.get('profile')?.split('=')[0] == 'shop' ? `/shopAds/${shopId}` : '/myAds' }`}
                >
                  <BsThreads className="h-5 w-5 mr-2" />
                  My Ads
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="/vehicle"
                >
                  <FaStoreAlt className="h-5 w-5 mr-2" />
                  Market
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex w-[35%] gap-4 mx-8 justify-start items-center">
        <Button onClick={handleSave} disabled={loading} className="flex h-14 w-full rounded-md self-end justify-around rounded-md bg-gray-900  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              {loading ? 'saving...' :  t('saveAd')}
              <HardDriveIcon className="ml-2 h-4 w-4 mx-3" />
            </Button>
            <Button onClick={handlePublish} className="flex h-14 w-full rounded-md self-end rounded-md bg-green-500   text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            {PublishIsLoading ? 'Publishing...' : t('publishAd')}
              <PlaneIcon className="ml-2 h-4 w-4 mx-3" />
            </Button>
        </div>
      </main>
    );
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