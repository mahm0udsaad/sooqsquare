"use client"
import { CiEdit } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Controller, useForm } from "react-hook-form";
import { useRef } from "react";
import { useTranslation } from "../../../app/i18n/client";
import  { deleteImage, updateAd, updateAdImage } from "../../../app/[lng]/(traderDashboard)/actions";
import upload, { deleteCloudImage } from "../../../app/[lng]/sell/imageUploadAction";
import { carBrands, carTypesArray, yearsArray } from "@/data/staticData"
import {  SelectTrigger, SelectItem, SelectGroup, SelectContent, Select , SelectValue} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { LoadingSpinner } from "@/components/loading-spiner"
import { toast } from "sonner";

export default function EditBtn({ lng , ad}){
    const isArabic = lng === 'ar';
    const carouselStyle = isArabic ? { direction: 'ltr' } : {};
    const models = carBrands[`${ad.brand}`]
    const { t } = useTranslation(lng , 'view')
    const transmissionProps = {
      title: t('transmission'),
      itemsArray: [
        'Automatic',
        'Manual',
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
    };
    const paintTypeSelectorProps = {
      title: t('paintType'), // Replace with your specific translation key
      itemsArray: [
        t('Original paint'),
        t('Partial paint'),
        t('Complete paint'),
        t('Another'),
      ], // Adjust based on your specific translations or labels
    };
    const carStatusSlectorProps = {
      title: t('carstatus'), // Replace with your specific translation key
      itemsArray: [
          t('used'),
          t('new'),
      ], 
    };
    const modelSelectionProps = {
     title: t('carModel'),
     itemsArray: models,
   };
   const yearSelectionProps = {
     title: t('carYear'),
     itemsArray: yearsArray,
   };
   const carTypeSelectionProps = {
     title: t('cartype'),
     itemsArray: carTypesArray,
   };

   const { register, handleSubmit, setValue , control , formState} = useForm();
   const fileInputRef = useRef(null)
   const handleChangeImage = async (adId, existingImageUrl, newImage) => {
    try {
      // Delete the existing image
      await deleteImage(existingImageUrl);
      deleteCloudImage(existingImageUrl.url)
      // Upload the new image
      const formData = new FormData();
      formData.append('file', newImage);
      const result = await upload(formData);
        
      // Update the ad with the new image URL
      if (result && result.adImage) {
        const newImageUrl = result.adImage;
        const updatedAd = await updateAdImage(adId, { Adimages: { create: [{ url: newImageUrl }] } });
  
        // Handle the updated ad as needed
        console.log('Updated Ad:', updatedAd);
      }
  
      // Handle the result as needed
      console.log('Upload Result:', result);
    } catch (error) {
      console.error('Error handling image change:', error);
    }
  }
   const onSubmit = async (data) => {
      const updatedAd = await updateAd(ad.id , data)
      if(updatedAd){
        toast('ad updated Successfully')
      }
    };
    return(
        <>
        <Drawer>
          <DrawerTrigger className="w-1/2">
          <Button className="bg-transparent border border-black text-black hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:border-black hover:dark:text-black  flex justify-center items-center space-x-2">
            <CiEdit className="w-4 h-4 mx-2" />
            <span>Edit</span>
          </Button>
          </DrawerTrigger>
          <DrawerContent className="dark:bg-zinc-800 ">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            </DrawerHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-x-4 w-11/12 mx-auto">
            <Carousel style={carouselStyle} className="w-lg mx-auto flex ">
              <CarouselContent className="dark:bg-zinc-800 ">
                {ad.Adimages.map((image, index) => (
                  <>
                  <CarouselItem className="relative" key={index}>
                  <div className="absolute top-0 right-0">
                  <CiEdit onClick={()=> fileInputRef.current.click()} className="cursor-pointer hover:bg-red-700 hover:text-white border border-red-700 rounded-md w-6 h-6 w-6 h-6 text-black" />
                  <input onChange={(e)=> handleChangeImage(ad.id, image , e.target.files[0])} className="hidden" ref={fileInputRef} type="file"  />
                  </div>
                    <div className="p-1">
                      <Card> 
                        <CardContent className="flex dark:bg-zinc-800 aspect-square items-center justify-center p-6">
                          <img className="w-32" src={image.url} alt="adImage"  />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  </>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="grid grid-cols-3 gap-4">
                
            <div>
            <Label htmlFor="name">{t("Name")}:</Label>
            <Controller
                name="name"
                control={control}
                defaultValue={ad.name || ''}
                render={({ field }) => <Input {...field} type="text" />}
            />
            </div>

            <div>
            <Label htmlFor="price">{t("Price")}:</Label>
            <Controller
                name="price"
                control={control}
                defaultValue={ad.price}
                render={({ field }) => <Input {...field} type="number" />}
            />
            </div>

            <div>
            <Label htmlFor="CarChassis">{t('CarChassisTitle')}:</Label>
            <Controller
                name="CarChassis"
                control={control}
                defaultValue={ad.CarChassis || '0'}
                render={({ field }) => <Input {...field} type="text" />}
            />
            </div>
            <Select onValueChange={(e)=> setValue('model' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue   placeholder={`${t('model')} : ${ad.model}`} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {modelSelectionProps.itemsArray && modelSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('year' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.year} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {yearSelectionProps.itemsArray && yearSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('carType' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.carType} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {carTypeSelectionProps.itemsArray && carTypeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('transmission' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.transmission} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {transmissionProps.itemsArray && transmissionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('carStatus' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.carStatus} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {carStatusSlectorProps.itemsArray && carStatusSlectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('fuelType' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.fuelType} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {fuelTypeSelectionProps.itemsArray && fuelTypeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('EnginCapacity' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.EnginCapacity} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {engineCapacitySelectorProps.itemsArray && engineCapacitySelectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('meterRange' , e)}  className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.meterRange} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {meterRangeSelectionProps.itemsArray && meterRangeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('RegionalSpecifications' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.RegionalSpecifications} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {specificationSelectionProps.itemsArray && specificationSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(e)=> setValue('paintType' , e)} className="">
                <SelectTrigger>
                  <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue  placeholder={ad.paintType} />
                  </div>  
                  </SelectTrigger>
                <SelectContent className="max-h-[12rem] overflow-y-scroll">
                  <SelectGroup>
                    {paintTypeSelectorProps.itemsArray && paintTypeSelectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3" >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="description">Description</Label>
                 <Textarea onChange={(e)=> setValue('description',e.target.value)} defaultValue={ad.description || ''} className="min-h-[50px]" id="description" name="description" placeholder="Enter your description" />
            </div>
            <DrawerFooter className={'flex flex-row items-center justify-center gap-4'}>
              <Button className="bg-transparent border border-green-600 hover:bg-green-600 hover:text-white text-green-600">
              {formState.isSubmitting && <LoadingSpinner />}
              Submit
              </Button>
              <DrawerClose className="dark:text-black mx-2">
                <Button type="button" variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
        </>
    )
}