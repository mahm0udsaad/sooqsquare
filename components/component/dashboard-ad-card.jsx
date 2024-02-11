"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { FaRegStopCircle } from "react-icons/fa";
import { changeAdStatus, deleteAd, updateAd } from "@/app/[lng]/(traderDashboard)/actions";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useTranslation } from "@/app/i18n/client"
import EditBtn from "./buttons/editDailoag"
import { updateAdImage, updateAdImageURL } from "../../app/[lng]/(traderDashboard)/actions"
import upload from "../../app/[lng]/sell/imageUploadAction"
import { CiEdit } from "react-icons/ci"
import { BsCloudUpload } from "react-icons/bs"
import { replaceAdImage } from "../../prisma/actions"
import { useCarousel } from "../ui/carousel"

export const AdCard = ({lng, ad }) => {
    const { t } = useTranslation(lng ,"translation")
    const { toast } = useToast()
    const [deleteLoading , setDeleteLoading ] = useState(false)
    const [adStatusLoading , setAdStatusLoading ] = useState(false)
    const isArabic = lng === 'ar';
    const carouselStyle = isArabic ? { direction: 'ltr' } : {};
    const {
      id,
      EnginCapacity,
      description,
      paintType,
      payment,
      price,
      name,
      RegionalSpecifications,
      location,
      Adimages,
      brand,
      category,
      model,
      year,
      carType,
      carStatus,
      transmission,
      fuelType,
      meterRange,
    } = ad;

    function extractAdDataViewMore(ad) {
      const {RegionalSpecifications ,payment ,category , country,shopId ,description , carStatus , fuelType , meterRange, Adimages, user, userId,createdAt,id, ...adData } = ad;
      return adData;
    }
    const updatedAd = extractAdDataViewMore(ad)
    const fileInputRefs = useRef([]);
    const fileInputRef = useRef(null);
    const carouselRef = useRef(null)

    const handleDelete = async (adId) =>{
        setDeleteLoading(true)
        adId = parseInt(adId)
        const deletedAd = await deleteAd(adId)
        if(deletedAd){
            setDeleteLoading(false)
            toast("Ad Deleted Successfuly")
        }
    }
    const handleChanginAdStatus = async (adId , adStatus)=>{
      setAdStatusLoading(true)
      const newStatus = await changeAdStatus(adId , adStatus)
      if(newStatus){
        setAdStatusLoading(false)
        toast("Ad Status Changing Successfully")
      }
    }
    const handleReplaceImage = async (existingImageId, newImage) => {
      try {
        // Upload the new image
        console.log(existingImageId);
        const formData = new FormData();
        formData.append('file', newImage);
        const result = await upload(formData);
    
        if (!result || !result.adImage) {
          throw new Error('Failed to upload new image');
        }
    
        const newImageUrl = result.adImage;
    
        // Update the ad with the new image URL
        const updatedAd = await updateAdImageURL(existingImageId, newImageUrl);
    
        if(updatedAd){
          toast({
            title:'image uploaded Succesfully'
          })
        }
    
      } catch (error) {
        console.error('Error replacing ad image:', error);
        throw error;
      }
    }

    const handleChangeImage = async (adId, newImage) => {
      try {
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
    
         
          toast({
            title: 'Image replaced successfully'
          });
        }
      } catch (error) {
        console.error('Error handling image change:', error);
      }
    };


  return (
      <div className="flex flex-col md:flex-row items-center justify-between lg:w-11/12 w-full lg:mx-auto mx-3 p-8 rounded-lg shadow-md bg-white dark:bg-zinc-800">
      <Carousel ref={carouselRef} style={carouselStyle} className="w-full max-w-xs mx-auto ">
      <BsCloudUpload onClick={()=> fileInputRef.current.click()} className="absolute right-0 z-20 cursor-pointer hover:bg-red-700 hover:text-white border border-red-700 rounded-md w-8 h-8  w-6 h-6 text-black" />
      <input onChange={(e)=> handleChangeImage(ad.id ,e.target.files[0])} className="hidden" ref={fileInputRef} type="file"  />
      <CarouselContent className="dark:bg-zinc-800">
        {Adimages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 relative">
              <CiEdit
                onClick={() => fileInputRefs.current[index].click()}
                className="cursor-pointer absolute bottom-0 z-20 hover:bg-red-700 hover:text-white border border-red-700 rounded-md w-6 h-6 w-6 h-6 text-black"
              />
              <input
                onChange={(e) => handleReplaceImage(image.id, e.target.files[0])}
                className="hidden"
                ref={(element) => (fileInputRefs.current[index] = element)}
                type="file"
              />
              <Card>
                <CardContent className="flex dark:bg-zinc-800 aspect-square items-center justify-center p-6">
                  <img className="w-48" src={image.url} alt="adImage" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
                {description}
          </p>
          <h3 className="text-xl font-semibold">Specifications:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
          <div className="grid grid-cols-2  w-full gap-2">

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>price</Badge>
                  <span className="dark:text-gray-300 ml-2">{price}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>brand</Badge>
                  <span className="dark:text-gray-300 ml-2">{brand}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>category</Badge>
                  <span className="dark:text-gray-300 ml-2">{category}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>model</Badge>
                  <span className="dark:text-gray-300 ml-2">{model}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>year</Badge>
                  <span className="dark:text-gray-300 ml-2">{year}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>carType</Badge>
                  <span className="dark:text-gray-300 ml-2">{carType}</span>
                </div>

                <div>
                  <Badge className={'dark:bg-white dark:text-black mx-3 '}>carStatus</Badge>
                  <span className="dark:text-gray-300 ml-2">{carStatus}</span>
                </div>
            </div>
          </ul>
          {/* Show More Dialoag */}
            <Dialog >
          <DialogTrigger asChild>
          <Button className="mt-4" size="lg" variant="solid">
            Show More
          </Button>
          </DialogTrigger>
          <DialogContent className="dark:bg-zinc-800 dark:text-white ">
            <DialogHeader className="dark:bg-zinc-800 dark:text-white">
              <DialogTitle>Details for {name}</DialogTitle>
            </DialogHeader>
            <Card>
            <CardContent className="grid  gap-2">
              {Object.entries(updatedAd).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </CardContent>
            </Card>
          </DialogContent>
             </Dialog>
          <div className="p-4 flex gap-3">
          <EditBtn ad={ad} lng={lng} />
          <Button onClick={()=> handleDelete(ad.id)} className="bg-transparent border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white w-1/2 flex justify-center items-center space-x-2">
            <TrashIcon className="w-4 h-4 mx-2" />
            {deleteLoading ?
                <svg
                className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
                <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
                <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" className="spinner_z9k8" />
              </svg>
            :
            <span>Delete</span>
            }
          </Button>
          {ad.adStatus === "active" ?
          <Button onClick={()=>handleChanginAdStatus(ad.id , "inActive")}  className="bg-transparent border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-600  w-1/2 flex justify-center items-center space-x-2">
            {adStatusLoading ?
                      <svg
                      className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
                      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
                      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" className="spinner_z9k8" />
                    </svg>
                  :
                  <>
                  <FaRegStopCircle className="w-4 h-4 mx-2" />
                    <span>Stop Ad</span>
                  </>
              }
              </Button> 
              :
              <Button onClick={()=>handleChanginAdStatus(ad.id , "active")} className="bg-transparent border border-green-600 hover:bg-green-600 hover:text-white text-green-600  w-1/2 flex justify-center items-center space-x-2">
                {adStatusLoading ?
                        <svg
                        className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
                        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
                        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" className="spinner_z9k8" />
                      </svg>
                    :
                    <>
                    <FaRegStopCircle className="w-4 h-4 mx-2" />
                      <span>Publish Ad</span>
                    </>
              }
         </Button> 
        }
        </div>
        </div>
      </div>
  )
}

function PencilIcon(props) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
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