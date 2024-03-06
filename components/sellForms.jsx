"use client";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "../app/i18n/client";
import { Badge } from "@/components/ui/badge";
import React, { useState, useRef, useEffect } from "react";

import { Timer } from "lucide-react";

export const MutliSteps = ({ lng }) => {
  const brand = useSearchParams().get("brand");
  const category = useSearchParams().get("category");
  const model = useSearchParams().get("model");
  const year = useSearchParams().get("year");
  const carType = useSearchParams().get("carType");
  const carStatus = useSearchParams().get("carStatus");
  const transmission = useSearchParams().get("transmission");
  const uploadedImages = useSearchParams().get("uploadedImages");
  const RegionalSpecifications = useSearchParams().get(
    "RegionalSpecifications"
  );
  const fuelType = useSearchParams().get("fuelType");
  const EnginCapacity = useSearchParams().get("EnginCapacity");
  const meterRange = useSearchParams().get("meterRange");
  const paintType = useSearchParams().get("paintType");
  const payment = useSearchParams().get("payment");
  const price = useSearchParams().get("price");
  const name = useSearchParams().get("name");
  const location = useSearchParams().get("location");
  const extraFeatures = useSearchParams().get("extraFeatures");
  const carChassis = useSearchParams().get("carChassis");
  const { t } = useTranslation(lng, "translation");

  const steps = [
    extraFeatures,
    carChassis,
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    location,
    uploadedImages,
    brand,
    category,
    model,
    year,
    carType,
    carStatus,
    transmission,
    fuelType,
    meterRange,
  ];

  let stepses = steps.filter((step) => step !== null);
  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = Array.from({ length: totalSteps }, () => useRef(null));

  useEffect(() => {
    setCurrentStep(stepses.length);
    scrollToStep(stepses.length);
  }, [stepses.length, currentStep]);

  const scrollToStep = (step) => {
    if (stepRefs[step - 1].current) {
      stepRefs[step - 1].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
    scrollToStep(step);
  };

  return (
    <div
      key="1"
      className="w-full border bg-white dark:bg-zinc-800 shadow-lg  rounded-xl"
    >
      <div className="p-3">
        <p className="text-gray-700 dark:text-white">{t("postTitle")}</p>
        <p className="text-gray-700 dark:text-white pt-2">
          {t("remaining")} :{" "}
          <Badge className=" bg-[#21be5b47] border-[#21be5b] dark:bg-zinc-800 text-green-700 dark:text-white mx-3">
            {totalSteps - stepses.length} {t("Step")}
          </Badge>
        </p>
      </div>
      {/* ... Your existing code ... */}
      <div className="flex w-full  overflow-x-hidden">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={`step-${index + 1}`}
            ref={stepRefs[index]}
            className="flex items-center  p-4 sm:p-7"
          >
            <Badge
              className={`items-center border shadow-lg justify-around w-24 h-8 bg-transparent ${
                currentStep === index + 1 || currentStep > index + 1
                  ? "bg-green-500 text-white"
                  : ""
              }`}
              variant="outline"
              onClick={() => handleStepChange(index + 1)}
            >
              {currentStep === index ||
                (currentStep >= index + 1 && (
                  <CheckIcon className="h-3.5 w-3.5 -translate-x-1" />
                ))}
              {index + 1 == steps.length
                ? "Complete"
                : `${t("Step")} ${index + 1}`}
            </Badge>
          </div>
        ))}
      </div>
      {/* Button to change step */}
    </div>
  );
};
export const OverView = ({ lng }) => {
  const category = useSearchParams().get("category");
  const carStatus = useSearchParams().get("carStatus");
  const { t } = useTranslation(lng, "translation");
  if (!category) return;
  return (
    <div className="lg:flex hidden flex-col gap-4  lg:max-w-xs ">
      <MutliSteps lng={lng} />
      <div className="flex py-3 border-b-2">
        <p className="font-semibold">{t("category")}</p>
        <p>/{t(`${category}`)}</p>
        {carStatus && <p>/{t(`${carStatus.toLowerCase()}`)}</p>}
      </div>

      <div className="max-w-xs bg-[#21be5b47] border border-[#21be5b] rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl sm:mb-4 my-4 mb-2 text-green-800 dark:text-white">
            Tip for You
          </div>
          <p className="text-gray-700 dark:text-white text-base">
            This is a sample card with Tailwind CSS. You can add your content
            here.
          </p>
        </div>
      </div>

      <div className="max-w-xs flex justify-center hover:opacity-70 cursor-pointer py-8 rounded-xl bg-gradient-to-r from-green-900 to-green-500 items-start max-md:px-5">
        <Timer className="text-4xl mx-2 text-white" />
        <div className="text-white text-2xl font-bold leading-10 my-auto">
          {t("QuickSell")}
        </div>
      </div>
    </div>
  );
};
function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
