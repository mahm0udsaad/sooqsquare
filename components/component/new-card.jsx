"use client"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { timeSince } from "@/helper/timeConversion"
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { addToFavorites, incrementAdClicks, incrementAdViews } from "@/app/[lng]/vehicle/actions"
import { ArabCountriesWithCurrancy } from "@/data/staticData";
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function MarketAdCard({ ad , user }) {
  let priceCode = ArabCountriesWithCurrancy.find(country => country.name === ad.country)?.currencyCode;

  const [hasViewed, setHasViewed] = useState(() => {
    if (window) {
      const storedValue = localStorage.getItem(`adViewed_${ad.id}`);
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return null;
  });

  const adCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the ad card is in the viewport
        if (entry.isIntersecting) {
          // Log "hasViewed" when the ad card is first viewed
          if (!hasViewed) {
            setHasViewed(true);
            incrementAdViews(ad.id)
              localStorage.setItem(`adViewed_${ad.id}`, JSON.stringify(true));
          }
        }
      },
      { threshold: 0.5 } 
    );

    if (adCardRef.current) {
      observer.observe(adCardRef.current);
    }

    return () => {
      if (adCardRef.current) {
        observer.unobserve(adCardRef.current);
      }
    };
  }, [hasViewed, user]);

  return (
    <Card onClick={()=> incrementAdClicks(ad.id)} ref={adCardRef} className="w-full max-w-md flex flex-col">
       <div className="relative">
       <Link className="hover:opacity-50 relative" href={`/vehicle/${ad.id}`}>
        <Image
          alt="Car Image"
          className="w-full object-none aspect-square w-full h-[15rem]  rounded-t-lg"
          height={200}
          width={300}
          src={ad.Adimages[0]?.url}
        />  
        </Link>
        <HeartIcon
        onClick={()=> addToFavorites(user?.id , ad.id)}
        className={`cursor-pointer z-10 text-gray-300 absolute top-2 right-2 h-6 w-6 ${ user?.favoriteAds.some(favorite => favorite.adId === ad.id) ? 'text-transparent': ''}`}
        style={{ fill: user?.favoriteAds.some(favorite => favorite.adId === ad.id) ? 'red' : '' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{ad.name}</CardTitle>
        <div className="my-4 flex items-center">
          <p className="main-color text-lg font-semibold">
            <TagIcon className="mx-2 inline-block h-6 w-6" />
            {ad.price} {priceCode}
          </p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <LocateIcon className="mx-2 inline-block h-4 w-4" />
            {ad.city}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="mx-2 inline-block h-4 w-4" />
            {timeSince(ad.createdAt)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <CarIcon className="mx-2 inline-block h-4 w-4" />
            Brand: {ad.brand}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <CarIcon className="mx-2 inline-block h-4 w-4" />
            Model: {ad.model}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Button className="w-[40%] mr-1 flex items-center justify-center gap-2 inset-0 z-10  dark:hover:text-white hover:text-black bg-[#fe2635] hover:bg-transparent border border-[#fe2635]">
        <BsChatLeftDots className='w-4 h-4' />
        Chat
        </Button>
        <Button className="w-[40%] ml-1 flex items-center justify-center gap-2 border dark:hover:text-white hover:text-black  hover:bg-transparent  dark:border-white dark:bg-white dark:text-black">
        <MdOutlineLocalPhone className='h-4 w-4'/>
        Call
        </Button>
      </CardFooter>
    </Card>
  )
}

function CarIcon(props) {
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
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    )
}
function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
function BatteryIcon(props) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}
function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}
function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function TagIcon(props) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}
