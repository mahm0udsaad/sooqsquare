"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { timeSince } from "@/helper/timeConversion"
import Image from "next/image"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaEye, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

export default function ShopPage({ shop }) {
  return (
    <>
      <section className="relative w-full h-[50dvh] overflow-hidden">
        <Image
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          height={1080}
          width={1920}
          src={shop.bgImage || '/placeholder.com'}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-end justify-end pb-8 pr-8">
          <Avatar className="w-32 h-32 border-4 border-white">
            <AvatarImage alt="Shop owner" src={shop.shopImage} />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8 space-y-4">
        <h1 className="text-4xl font-bold">{shop.shopName}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
        {shop.description}
        </p>
        <div className="flex gap-4">
          <Link className="text-blue-500" href="#">
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="text-pink-500" href="#">
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-blue-600" href="#">
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
        <section className="container mx-auto px-4 py-8 space-y-4">
        <h2 className="text-2xl font-bold">Featured Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shop.ads.map((ad)=>(
          <Card key={ad.id} className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <Image
              alt="Ad image"
              className="rounded-lg object-cover aspect-[200/200] aspect-square w-full h-[15rem] group-hover:opacity-50 transition-opacity"
              src={ad.Adimages[0].url}
              width={250}
              height={250}
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{ad.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                <FaMapMarkerAlt className="inline text-gray-400 mx-1" />
                {ad.location}
              </p>
              <p className="text-sm text-gray-400">Created at: {timeSince(ad.createdAt)}</p>
              <p className="text-sm text-gray-400">
                <FaEye className="inline text-gray-400 mx-1" />
                Views: {ad.views}
              </p>
              <p className="text-sm text-gray-400">
                <FaHeart className="inline text-gray-400 mx-1" />
                Favorites: {ad.FavoriteAd?.length || 0}
              </p>
              <Button className="mt-2">View Ad</Button>
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


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
