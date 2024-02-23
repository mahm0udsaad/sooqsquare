"use client";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegUser } from "react-icons/fa6";
import { memberSince, timeSince } from "../../helper/timeConversion";
import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { ArabCountriesWithCurrancy } from "@/data/staticData";
import { Toggle } from "@/components/ui/toggle";
import { PiEngine } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Markdown from "react-markdown";
import "@/app/[lng]/css/markdown.css";

export function AdPage({ ad, lng }) {
  const { t } = useTranslation(lng, "tranlsation");
  const priceCode = ArabCountriesWithCurrancy.find(
    (country) => country.name === ad.country
  ).currencyCode;
  const extraFeatures = ad.extraFeatures ? ad.extraFeatures.split(" ") : null;

  return (
    <div className="flex justify-around lg:gap-12 items-start max-w-5/6 px-4 mx-auto py-6">
      <div className="w-5/6 grid gap-4 md:gap-10 items-start order-1 md:order-1">
        <Carousel
          style={{ direction: "ltr" }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {ad.Adimages.map(
              (image) =>
                image.url.split("/").length > 2 && (
                  <CarouselItem key={image.id} className="h-[15rem] w-full">
                    <div className="relative h-full w-full">
                      <Image
                        alt={`Ad Image ${image.id}`}
                        className="object-cover w-full h-full rounded-lg overflow-hidden"
                        src={image.url}
                        layout="fill" // Use layout="fill" to fill the parent container
                        objectFit="contain" // Use objectFit="contain" to ensure the entire image is visible
                      />
                    </div>
                  </CarouselItem>
                )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold main-color">
              {priceCode} {ad.price}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            <div className="flex gap-4 items-center">{ad.name}</div>
            <div className="flex justify-between items-center text-gray-700 dark:text-gray-400">
              <div className="flex gap-2 items-center text-lg pt-4">
                <IoLocationOutline /> {ad.city}
              </div>
              <p className="text-sm">{timeSince(ad.createdAt)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-8">
            <CardTitle>{t("Car Detials")}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoCarOutline />
                {t("brand")}
              </h4>
              <p> {ad.brand}</p>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoCarOutline />
                {t("model")}
              </h4>
              <p> {ad.model}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoCarOutline />
                {t("carStatus")}
              </h4>
              <p> {ad.carStatus}</p>
            </div>

            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoCarOutline />
                {t("carType")}
              </h4>
              <p> {ad.carType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <LuFuel />
                {t("Fuel")}
              </h4>
              <p> {ad.fuelType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoSettingsOutline />
                {t("RegionalSpecifications")}
              </h4>
              <p> {ad.RegionalSpecifications}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <PiEngine />
                {t("EnginCapacity")}
              </h4>
              <p> {ad.EnginCapacity}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <CiCalendarDate />
                {t("year")}
              </h4>
              <p> {ad.year}</p>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <AiOutlineFormatPainter />
                {t("Paint")}
              </h4>
              <p> {ad.paintType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoSpeedometerOutline />
                {t("Kilometers")}
              </h4>
              <p> {ad.meterRange}</p>
            </div>

            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <IoColorPaletteOutline />
                {t("Color")}
              </h4>
              <Toggle
                aria-label="Toggle red"
                className="text-white my-0"
                style={{ background: `${ad.color}` }}
              >
                <CarIcon className="h-4 w-4" />
              </Toggle>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("Description")}</CardTitle>
          </CardHeader>
          <CardContent className="font-semibold h-content">
            <CardContent className="font-semibold h-content markdown-content">
              {ad.description.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: ad.description }} />
              ) : (
                <Markdown className="markdown-content">
                  {ad.description}
                </Markdown>
              )}
            </CardContent>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("features.title")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {extraFeatures &&
              extraFeatures.map((feature) => (
                <Badge key={feature}>{t(`features.${feature}`)}</Badge>
              ))}
          </CardContent>
        </Card>
      </div>
      <div className="w-[30%] grid gap-6 md:gap-3 items-start">
        <Card>
          <CardHeader>
            <CardTitle>{t("Owner Information")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-start gap-4 items-center">
              <Avatar>
                <AvatarFallback className="dark:text-black">
                  <FaRegUser className="mx-auto my-auto" />
                </AvatarFallback>
                <AvatarImage
                  src={ad.userId ? ad.user?.image : ad.shop.shopImage}
                />
              </Avatar>
              <p className="">
                {ad.userId ? ad.user?.username : ad.shop.shopName}
              </p>
            </div>
            <p>
              {t("Member Since")} :{" "}
              {ad.userId
                ? ad.user?.createdAt && memberSince(ad.user.createdAt)
                : ad.shop?.createdAt && memberSince(ad.shop.createdAt)}
            </p>
            <div className="flex justify-between items-center mt-2">
              <Link
                href={{
                  pathname: "/chat",
                  query: { owner: ad.userId ? ad.user?.id : ad.shop.id },
                }}
                className="w-1/2 mx-1 rounded text-white p-2  flex items-center justify-center gap-2 inset-0 z-10 bg-[#fe2635] hover:bg-[#fe26355e]"
              >
                <BsChatLeftDots className="w-4 h-4" />
                {t("Chat")}
              </Link>
              <Button className="w-1/2 ml-1 flex items-center justify-center gap-2 dark:bg-white dark:text-black dark:hover:text-white">
                <MdOutlineLocalPhone className="h-4 w-4" />
                {t("Call")}
              </Button>
              <Link
                href={`/profile/${
                  ad.userId
                    ? ad.userId
                    : `${ad.shop.userId}?shop=${ad.shop?.id}`
                }`}
                className="w-1/2 py-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black mx-1 flex items-center border border-black dark:border-white dark:text-white justify-center gap-2 transition"
              >
                <UserIcon className="h-4 w-4" />
                {t("profile")}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
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
  );
}
