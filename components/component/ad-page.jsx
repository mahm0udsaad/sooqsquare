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
import { memberSince, timeSince } from "../../helper/timeConversion";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { ArabCountriesWithCurrancy } from "@/data/staticData";
import { Toggle } from "@/components/ui/toggle";
import Markdown from "react-markdown";
import "@/app/[lng]/css/markdown.css";
import RateCard from "./rate-card";
import {
  User,
  MessageSquareMore,
  Phone,
  MapPinned,
  Gauge,
  BatteryCharging,
  Palette,
  Calendar,
  Car,
  Fuel,
  Settings,
  SprayCan,
} from "lucide-react";
export function AdPage({ ad, lng, user, isFollowed }) {
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
                        className="object-cover w-full h-full rounded-md-lg overflow-hidden"
                        src={image.url}
                        layout="fill" // Use layout="fill" to fill the parent container
                        objectFit="contain" // Use objectFit="contain" to ensure the entire image is visible
                      />
                    </div>
                  </CarouselItem>
                )
            )}
          </CarouselContent>
          <CarouselPrevious className="shadow-lg" />
          <CarouselNext className="shadow-lg" />
        </Carousel>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl font-bold main-color">
              {priceCode} {ad.price}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            <div className="flex gap-4 items-center">{ad.name}</div>
            <div className="flex justify-between items-center text-gray-700 dark:text-gray-400">
              <div className="flex gap-2 items-center text-lg pt-4">
                <MapPinned /> {ad.city}
              </div>
              <p className="text-sm">{timeSince(ad.createdAt)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="py-8">
            <CardTitle>{t("Car Detials")}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Car />
                {t("brand")}
              </h4>
              <p> {ad.brand}</p>
            </div>
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Car />
                {t("model")}
              </h4>
              <p> {ad.model}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Car />
                {t("carStatus")}
              </h4>
              <p> {ad.carStatus}</p>
            </div>

            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Car />
                {t("carType")}
              </h4>
              <p> {ad.carType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Fuel />
                {t("Fuel")}
              </h4>
              <p> {ad.fuelType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Settings />
                {t("RegionalSpecifications")}
              </h4>
              <p> {ad.RegionalSpecifications}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <BatteryCharging />

                {t("EnginCapacity")}
              </h4>
              <p> {ad.EnginCapacity}</p>
            </div>
            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Calendar /> {t("year")}
              </h4>
              <p> {ad.year}</p>
            </div>
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <SprayCan /> {t("Paint")}
              </h4>
              <p> {ad.paintType}</p>
            </div>
            <div className="flex justify-between bg-gray-200 dark:bg-zinc-700 rounded rounded-md-md p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Gauge /> {t("Kilometers")}
              </h4>
              <p> {ad.meterRange}</p>
            </div>

            <div className="flex justify-between p-2">
              <h4 className="flex gap-2 items-center font-bold">
                <Palette />
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
        <Card className="shadow-lg">
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
        <Card className="shadow-lg">
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
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t("Owner Information")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-start gap-4 items-center">
              <Avatar>
                <AvatarFallback className="dark:text-black">
                  <User className="mx-auto my-auto" />
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
            <div className="flex justify-between gap-2 items-center mt-2">
              <Button className="w-28 px-2 py-4 flex items-center justify-center gap-2 text-sky-600 bg-trasparent hover:bg-sky-600 border border-sky-600 hover:text-white ">
                <Phone className="h-4 w-4" />
                {t("Call")}
              </Button>
              {ad.userId ? (
                <Link
                  href={{
                    pathname: "/chat",
                    query: { owner: ad.user?.id },
                  }}
                  className="w-28 rounded-md p-2 flex items-center justify-center gap-2 inset-0 z-10 border text-[#fe2635] border-[#fe2635] hover:text-white hover:bg-[#fe2635]"
                >
                  <MessageSquareMore className="w-4 h-4" />
                  {t("Chat")}
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: "/chat",
                    query: { shop: ad.shop.id },
                  }}
                  className="w-28 rounded-md p-2 flex items-center justify-center gap-2 inset-0 z-10 border text-[#fe2635] border-[#fe2635] hover:text-white hover:bg-[#fe2635]"
                >
                  <MessageSquareMore className="w-4 h-4" />
                  {t("Chat")}
                </Link>
              )}
              <Link
                href={`/profile/${
                  ad.userId
                    ? ad.userId
                    : `${ad.shop.userId}?shop=${ad.shop?.id}`
                }`}
                className="w-28 py-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center border border-black dark:border-white dark:text-white justify-center gap-2 transition"
              >
                <User className="h-4 w-4" />
                {t("profile")}
              </Link>
            </div>
          </CardContent>
        </Card>
        <RateCard
          user={user}
          owner={ad.shop ? ad.shop : ad.user}
          isFollowed={isFollowed}
        />
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
