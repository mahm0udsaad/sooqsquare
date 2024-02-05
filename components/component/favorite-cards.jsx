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
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client"
import { toast } from "sonner"
import { addToFavorites } from "@/app/[lng]/vehicle/actions"
import { FaRegUser } from "react-icons/fa6";
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from "next/link"

export const FavoriteCard = ({lng, ad , userId}) => {
    const { t } = useTranslation(lng ,"translation")
    const [deleteLoading , setDeleteLoading ] = useState(false)
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

    const handleDelete = async () =>{
        setDeleteLoading(true)
         await addToFavorites(userId , ad.id)
         setDeleteLoading(false)
         toast("Ad Deleted Successfuly")
    }

  return (
      <div className="flex  items-center justify-between lg:w-11/12 w-full lg:mx-auto mx-3 p-8 rounded-lg shadow-md bg-white dark:bg-zinc-800">
      <Carousel style={carouselStyle} className="w-full max-w-xs mx-auto ">
      <CarouselContent className="dark:bg-zinc-800">
        {Adimages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card> 
                <CardContent className="flex dark:bg-zinc-800 aspect-square items-center justify-center p-6">
                  <img className="w-48" src={image.url} alt="adImage"  />
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
          <div className="flex justify-between items-center mt-2">
          <Button onClick={handleDelete} className="bg-transparent border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white w-1/2 flex justify-center items-center space-x-2">
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
          <Link href={`/profile/${ad.shop ? `${ad.shop?.userId}?shop=${ad.shop?.id}` : `${ad.user?.id}`}`} className="w-1/2 py-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black mx-1 flex items-center border border-black dark:border-white dark:text-white justify-center gap-2 transition">
              <UserIcon className='h-4 w-4'/>
                profile
              </Link>
            <Link href={{
                pathname: '/chat',
                query: { owner: ad.user ? ad.user?.id : ad.shop?.id },
            }} className="w-1/2 mx-1 rounded text-white p-2  flex items-center justify-center gap-2 inset-0 z-10 bg-[#fe2635] hover:bg-[#fe26355e]">
               <BsChatLeftDots className='w-4 h-4' />
                Chat
              </Link>
              <Button className="w-1/2 ml-1 flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:text-white">
              <MdOutlineLocalPhone className='h-4 w-4'/>
                Call
              </Button>
             
            </div>
        </div>
        <div className="flex flex-col h-full items-start justify-start">
        <HeartIcon className="w-6 h-6" />
        </div>
      </div>
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
function UserIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>)
    );
  }
  function HeartIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="red"
        stroke="red"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>)
    );
  }