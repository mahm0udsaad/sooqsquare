
"use client"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaRegUser } from "react-icons/fa6";
import { memberSince, timeSince } from "../../helper/timeConversion";
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Badge } from "@/components/ui/badge"
import { IoLocationOutline } from "react-icons/io5";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function AdPage({ad , lng}) {
  const { t } = useTranslation(lng , "tranlsation")
  const router = useRouter()
  const linkToChat = () => {
    // Assuming ad.user.id is the owner's ID
    const owner = ad.user.id;

    // Make sure 'owner' has a valid value before pushing
    if (owner) {
      router.push({
        pathname: '/chat',
        query: { owner },
      });
    } else {
      console.error('Invalid owner ID');
    }
  };

  const extraFeatures = ad.extraFeatures ? ad.extraFeatures.split(" ") : null
  return (
    (<div
      className="flex justify-around lg:gap-12 items-start max-w-5/6 px-4 mx-auto py-6">
      <div className="w-5/6 grid gap-4 md:gap-10 items-start order-1 md:order-1">
        <Carousel style={{ direction: 'ltr' }} className="w-full max-w-xl mx-auto">
          <CarouselContent>
          {ad.Adimages.map((image) => (
          <CarouselItem key={image.id} className="h-[15rem] w-full">
            <div className="relative h-full w-full">
              <Image
                alt={`Ad Image ${image.id}`}
                className="object-cover w-full h-full rounded-lg overflow-hidden"
                src={image.url}
                layout="fill"  // Use layout="fill" to fill the parent container
                objectFit="contain"  // Use objectFit="contain" to ensure the entire image is visible
              />
            </div>
        </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Card>
          <CardHeader>
          <CardTitle className='text-4xl font-bold main-color'>${ad.price}</CardTitle>
            <CardDescription>{ad.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
          <div className="flex gap-4 items-center">{ad.name}</div>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-400">
          <div className="flex gap-2 items-center text-lg pt-4"><IoLocationOutline /> {ad.location}</div>
          <p className="text-sm">
            {timeSince(ad.createdAt)}
          </p>
          </div>
          </CardContent>
        </Card>
        <Card>
        <CardHeader className='py-8'>
          <CardTitle >Car description</CardTitle>
          </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex justify-between">
          <h4 className="font-bold">Car Make</h4>
          <p>{ad.brand}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Model</h4>
          <p>{ad.model}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Year</h4>
          <p>{ad.year}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Car Types</h4>
          <p>{ad.carType}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Fuel</h4>
          <p>{ad.fuelType}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Regional Specs</h4>
          <p>{ad.RegionalSpecifications}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Color</h4>
          <p>{ad.paintType}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Condition</h4>
          <p>{ad.carStatus}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Paint</h4>
          <p>{ad.paintType}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Kilometers</h4>
          <p>{ad.meterRange}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Engine Size ( cc )</h4>
          <p>{ad.EnginCapacity}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="font-bold">Body Condition</h4>
          <p>{ad.paintType}</p>
        </div>
        </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
          {ad.description}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('features.title')}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
           {extraFeatures && extraFeatures.map((feature)=>(
             <Badge>{t(`features.${feature}`)}</Badge>
           ))}
          </CardContent>
        </Card>
      </div>
      <div className="w-[30%] grid gap-6 md:gap-3 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Owner Information</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <div className="flex justify-start gap-4 items-center">
            <Avatar>
            <AvatarFallback className="dark:text-black">
            <FaRegUser className="mx-auto my-auto" />
            </AvatarFallback>
            <AvatarImage src={ad.user?.image} />
          </Avatar>
            <p className="">{ad.user?.username}</p>
            </div>
            <p>Member Since : {ad.user?.createdAt && memberSince(ad.user.createdAt)}</p>
            <div className="flex justify-between items-center mt-2">
              <Link href={{
                pathname: '/chat',
                query: { owner: ad.user?.id},
            }} className="w-1/2 mx-1 rounded text-white p-2  flex items-center justify-center gap-2 inset-0 z-10 bg-[#fe2635] hover:bg-[#fe26355e]">
               <BsChatLeftDots className='w-4 h-4' />
                Chat
              </Link>
              <Button className="w-1/2 ml-1 flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:text-white">
              <MdOutlineLocalPhone className='h-4 w-4'/>
                Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}
