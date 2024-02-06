"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { timeSince } from "@/helper/timeConversion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaSnapchat } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "@/app/i18n/client"
import dynamic from "next/dynamic"
import MarketAdCardSkeleton from "@/components/skeletons/marketSkeleton"

export default function ShopPage({ shop , lng}) {
  const { t } = useTranslation(lng , "view")
  const ShopAdCard = dynamic(()=> import("@/components/component/shop-card") , {
    ssr:false ,
    loading:()=> <MarketAdCardSkeleton />
  })
  console.log(shop.bgColor);
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
      <main style={{ backgroundColor: shop?.bgColor ? shop.bgColor : ''}} className={`${shop?.bgColor ? `bg-[${shop.bgColor}] text-white` : ""} container mx-auto px-4 py-8 space-y-4`}>
        <h1 className="text-4xl font-bold">{shop?.shopName}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-800 dark:text-gray-200">
        {shop.description}
        </p>
       {shop?.country && <div className="flex gap-4  items-center">
        <LocateIcon className="w-4 h-4"/>
        {t(`${shop?.country}`)} , {t(`${shop?.city}`)}
        </div>}
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
         <ShopAdCard key={ad.id} ad={ad}/>
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