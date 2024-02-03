"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { timeSince } from "@/helper/timeConversion"
import Image from "next/image"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import {FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "../ui/button"
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaSnapchat } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "@/app/i18n/client"
import { useState } from "react"
import { FaCopy } from 'react-icons/fa';
import { toast } from "sonner"

export default function ShopPage({ shop , lng}) {
  const { t } = useTranslation(lng , "view")
  const [copiedState, setCopiedState] = useState({});

  const handleShare = async (adId) => {
    const adLink = `${window.location.origin}/vehicle/${adId}`;

    setCopiedState((prevCopiedState) => ({
      ...prevCopiedState,
      [adId]: { isLoading: true },
    }));

    navigator.clipboard.writeText(adLink)
      .then(() => {
        setCopiedState((prevCopiedState) => ({
          ...prevCopiedState,
          [adId]: { isLoading: false, isCopied: true },
        }));
        toast.success('Link copied to clipboard!');
        setTimeout(() => setCopiedState((prevCopiedState) => ({ ...prevCopiedState, [adId]: { isCopied: false } })), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => {
        setCopiedState((prevCopiedState) => ({
          ...prevCopiedState,
          [adId]: { isLoading: false },
        }));
        console.error('Unable to copy link', error);
        toast.error('Failed to copy link. Please try again.');
      });
  };

  return (
    <>
      <section className="relative w-full h-[50dvh] overflow-hidden">
        <Image
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          height={1080}
          width={1920}
          src={shop?.bgImage}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-end justify-center pb-8 pr-8">
          <Avatar className="w-32 h-32 border-4 border-white">
            <AvatarImage alt="Shop owner" src={shop?.shopImage} />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8 space-y-4">
        <h1 className="text-4xl font-bold">{shop?.shopName}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-800 dark:text-gray-200">
        {shop.description}
        </p>
        <div className="flex  justify-between space-x-4">
          <div className="flex w-5/6 gap-3">
          {shop.facebookLink || shop.twitterLink || shop.instagramLink ||shop.tiktokLink ||shop.snapchatLink
          ? <h3 className="text-lg font-bold">{t('Social Media')} : </h3> : null}
          {shop.twitterLink ? <Link className="text-zinc-800" target="_blank" href={shop.TwitterLink || '#'}>
            <RiTwitterXFill className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>:null}
          {shop.facebookLink ? <Link className="text-blue-600" target="_blank" href={shop.FacebookLink || '#'}>
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>:null}
          {shop.instagramLink ? <Link className="text-pink-600" target="_blank" href={shop.instagramLink || '#'}>
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>:null}
          {shop.tiktokLink ? <Link className="text-zinc-600" target="_blank" href={shop.tiktokLink || '#'}>
            <PiTiktokLogo className="h-6 w-6" />
            <span className="sr-only">Tiktok</span>
          </Link>:null}
          {shop.snapchatLink ? <Link className="text-yellow-600" target="_blank" href={shop.snapchatLink || '#'}>
            <FaSnapchat className="h-6 w-6" />
            <span className="sr-only">SnapChat</span>
          </Link>:null}
          </div>
          <div className="flex gap-4">
          <Link href={{
                pathname: '/chat',
                query: { owner: shop.id },
            }} className=" mx-1 rounded text-white p-2  flex items-center justify-center gap-2 inset-0 z-10 bg-[#fe2635] hover:bg-[#fe26355e]">
               <BsChatLeftDots className='w-4 h-4' />
                {t('Chat')}
              </Link>
              <Button className=" mx-1 flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:text-white">
              <MdOutlineLocalPhone className='h-4 w-4'/>
                {t('Call')}
              </Button>
          </div>
        </div>
        <section className="container mx-auto px-4 py-8 space-y-4">
        {shop?.ads?.length > 0 && <h2 className="text-2xl font-bold">{t("Featured Ads")} :</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shop.ads.map((ad)=>(
         <Card key={ad.id} className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <Image
            alt="Ad image"
            className="rounded-lg object-none aspect-square w-full h-[15rem] group-hover:opacity-50 transition-opacity"
            src={ad.Adimages[0]?.url}
            width={200}
            height={200}
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{ad.name}</h3>
            <p className="text-gray-500 dark:text-gray-200 mb-2">
              <FaMapMarkerAlt className="inline dark:text-gray200 text-gray-800 dark:text-gray-200 mx-1" />
              {ad.location}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">{t("Created at")} : {timeSince(ad.createdAt)}</p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <strong>{t("Brand")} :</strong> {ad.brand}
            </p>  
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <strong>{t("Model")} :</strong> {ad.model}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              <strong>{t("Price")} :</strong> <span className="text-rose-600 font-semibold">{ad.price}</span>
            </p>
            <div className="flex gap-2 mt-2">
              <Link href={`/vehicle/${ad.id}`} className="rounded-md hover:bg-transparent hover:text-rose-600 hover:border hover:border-rose-600 text-center flex-1 py-3 px-4 main-bg text-white dark:bg-white dark:text-black hover:text-black hover:bg-white hover:dark:text-white hover:dark:bg-black">
                View Ad
              </Link>
              {/* Share button */}
              <button
              onClick={() => handleShare(ad.id)}
              className={`rounded-md  text-center border border-blue-500  bg-transparent hover:text-blue-500 flex-1 py-3 px-4 ${copiedState[ad.id]?.isCopied ? 'bg-green-500' : 'hover:bg-blue-500'} text-blue-500  hover:text-white hover:bg-blue-600`}
              disabled={copiedState[ad.id]?.isLoading}
            >
              {copiedState[ad.id]?.isLoading ? 'Copying...' : (copiedState[ad.id]?.isCopied ? <FaCopy className="text-center"/> : 'Share')}
            </button>
            </div>
          </CardContent>
        </Card>
          ))}
        </div>
        </section>
      </main>
    </>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
