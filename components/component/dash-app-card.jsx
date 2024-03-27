"use client";
import { calculateRemainingTime } from "@/helper/remainingTime";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/app/i18n/client";
import {
  updateAdImage,
  updateAdImageURL,
} from "@/app/[lng]/(traderDashboard)/actions";
import upload from "@/app/[lng]/sell/imageUploadAction";
import {
  Edit,
  Eye,
  HeartIcon,
  MousePointerClick,
  Rocket,
  StopCircleIcon,
  Timer,
  TrashIcon,
  UploadCloud,
} from "lucide-react";
import EditBtn from "./edit-btn-appartmentCard";
import { Button } from "../ui/button";
import { deleteAd, changeAdStatus } from "@/app/[lng]/apartments/actions";
import { useFormStatus } from "react-dom";
import Link from "next/link";
export const ApartmentAdCard = ({ lng, ad }) => {
  const remainingTime = calculateRemainingTime(ad.createdAt);
  const { t } = useTranslation(lng, "translation");
  const isArabic = lng === "ar";
  const carouselStyle = isArabic ? { direction: "ltr" } : {};
  const {
    images,
    id,
    title,
    payment,
    category,
    favoritedBy,
    country,
    shopId,
    description,
    adStatus,
    bedrooms,
    bathrooms,
    amenities,
    isOwner,
    buildingAge,
    designedFor,
    floorsNum,
    buildingSize,
    landSize,
    BuildingInterface,
    createdAt,
    views,
    clicks,
  } = ad;
  function extractApartmentAdDataViewMore(ad) {
    const {
      id,
      favoritedBy,
      country,
      shopId,
      userId,
      shop,
      createdAt,
      views,
      user,
      images,
      description,
      title,
      amenities,
      clicks,
      ...adData
    } = ad;
    return adData;
  }

  const updatedAd = extractApartmentAdDataViewMore(ad);
  const fileInputRefs = useRef([]);
  const fileInputRef = useRef(null);
  const carouselRef = useRef(null);

  const handleReplaceImage = async (existingImageId, newImage) => {
    try {
      // Upload the new image
      console.log(existingImageId);
      const formData = new FormData();
      formData.append("file", newImage);
      const result = await upload(formData);

      if (!result || !result.adImage) {
        throw new Error("Failed to upload new image");
      }

      const newImageUrl = result.adImage;

      // Update the ad with the new image URL
      const updatedAd = await updateAdImageURL(existingImageId, newImageUrl);

      if (updatedAd) {
        toast({
          title: "image uploaded Succesfully",
        });
      }
    } catch (error) {
      console.error("Error replacing ad image:", error);
      throw error;
    }
  };
  const handleChangeImage = async (adId, newImage) => {
    try {
      // Upload the new image
      const formData = new FormData();
      formData.append("file", newImage);
      const result = await upload(formData);

      // Update the ad with the new image URL
      if (result && result.adImage) {
        const newImageUrl = result.adImage;
        const updatedAd = await updateAdImage(adId, {
          Adimages: { create: [{ url: newImageUrl }] },
        });

        // Handle the updated ad as needed
        console.log("Updated Ad:", updatedAd);

        toast({
          title: "Image replaced successfully",
        });
      }
    } catch (error) {
      console.error("Error handling image change:", error);
    }
  };
  return (
    <div className="flex relative flex-col md:flex-row items-center justify-between lg:w-11/12 w-full lg:mx-auto mx-3 p-8 rounded-lg shadow-md bg-white dark:bg-zinc-800">
      <Badge className={"absolute top-0 left-0 bg-yellow-700"}>
        Appartments
      </Badge>
      <TooltipProvider>
        <Carousel
          ref={carouselRef}
          style={carouselStyle}
          className="w-full max-w-xs mx-auto "
        >
          <Tooltip className="w-full">
            <TooltipTrigger>
              <UploadCloud
                onClick={() => fileInputRef.current.click()}
                className=" z-20 cursor-pointer hover:bg-red-700 hover:text-white border border-red-700 rounded-md w-8 h-8  w-6 h-6 text-black dark:text-white"
              />
            </TooltipTrigger>
            <TooltipContent className="absolute right-4 w-40">
              <p>{t("Add New Image")}</p>
            </TooltipContent>
          </Tooltip>
          <input
            onChange={(e) => handleChangeImage(ad.id, e.target.files[0])}
            className="hidden"
            ref={fileInputRef}
            type="file"
          />
          <CarouselContent className="dark:bg-zinc-800">
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1 relative">
                  <Edit
                    onClick={() => fileInputRefs.current[index].click()}
                    className="cursor-pointer absolute bottom-0 z-20 hover:bg-red-700 hover:text-white border border-red-700 rounded-md w-6 h-6 w-6 h-6 text-black dark:text-white"
                  />

                  <input
                    onChange={(e) =>
                      handleReplaceImage(image.id, e.target.files[0])
                    }
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
      </TooltipProvider>
      <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2 md:pl-8">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-4 items-center">
            <Timer className="w-4 h-4" />
            <p className="text-gray-500">
              {remainingTime} {t("day")}
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400 cardDescription">
          {description}
        </p>

        <h3 className="text-xl font-semibold">{t("Specifications")}:</h3>
        <ul className="grid grid-cols-2 list-inside space-y-2 text-gray-500 dark:text-gray-400">
          {Object.entries(updatedAd).map(
            ([key, value]) =>
              value !== null && (
                <div key={key} className="flex items-center">
                  <Badge className={"dark:bg-white dark:text-black mx-3 "}>
                    {t(key)}
                  </Badge>
                  <span className="dark:text-gray-300 ml-2">{value}</span>
                </div>
              )
          )}
        </ul>
        <div className="flex gap-2 w-full justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm">{ad.clicks}</span>
            <MousePointerClick className="w-4 h-4 fill-none" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{ad.views}</span>
            <Eye className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{ad.favoritedBy.length}</span>
            <HeartIcon className="w-4 h-4 fill-none" />
          </div>
        </div>
        {/* Show More Dialog */}
        <div className="w-full flex justify-between items-center">
          <div className="p-4 flex gap-3">
            <EditBtn ad={ad} lng={lng} />
            <form className="w-full" action={deleteAd}>
              <input type="hidden" name="adId" value={ad.id} />
              <DeleteBtn />
            </form>
            <form className="w-full" action={changeAdStatus}>
              <input type="hidden" name="adId" value={ad.id} />
              <StatusBtn adStatus={ad.adStatus} />
            </form>
            <Link
              href={`/apartments/${ad.id}`}
              className="bg-transparent border py-2 px-4 rounded-md border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full flex justify-center items-center space-x-2"
            >
              <Eye className="w-4 h-4 mx-2" />
              <span>View</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const DeleteBtn = () => {
  const state = useFormStatus();
  const { toast } = useToast();
  useEffect(() => {
    if (state.data) {
      toast({
        title: "deleted Successfully",
      });
    }
  }, [state.data]);
  return (
    <Button className="w-full bg-transparent border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white flex justify-center items-center space-x-2">
      <TrashIcon className="w-4 h-4 mx-2" />
      {state.pending ? (
        <svg
          className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            className="spinner_z9k8"
          />
        </svg>
      ) : (
        <span>Delete</span>
      )}
    </Button>
  );
};
const StatusBtn = ({ adStatus }) => {
  const state = useFormStatus();
  const { toast } = useToast();

  useEffect(() => {
    if (state.data) {
      toast({
        title: "deleted Successfully",
      });
    }
  }, [state.data]);

  return adStatus === "active" ? (
    <Button className="bg-transparent border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-600  w-full flex justify-center items-center space-x-2">
      {state.pending ? (
        <svg
          className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            className="spinner_z9k8"
          />
        </svg>
      ) : (
        <>
          <StopCircleIcon className="w-4 h-4 mx-2" />
          <span>Stop Ad</span>
        </>
      )}
    </Button>
  ) : (
    <Button className="bg-transparent border border-green-600 hover:bg-green-600 hover:text-white text-green-600  w-full flex justify-center items-center space-x-2">
      {state.pending ? (
        <svg
          className="animate-spin text-rose-800 h-5 w-5 mr-3 spinner_z9k8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            className="spinner_z9k8"
          />
        </svg>
      ) : (
        <>
          <Rocket className="w-4 h-4 mx-2" />
          <span>Publish Ad</span>
        </>
      )}
    </Button>
  );
};
