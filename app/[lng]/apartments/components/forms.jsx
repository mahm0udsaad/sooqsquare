"use client";
import { useForm } from "react-hook-form";
import ImagesForm from "./imageForm";
import { useEffect, useState } from "react";
import { GenericSelection, withGenericSelection } from "./dynamicSelection";
import {
  bathroomsProps,
  bedroomsProps,
  buildingAge,
  floorProps,
  floorsNumProps,
  interfaceProps,
  propertyTypes,
} from "../static";
import PriceForm from "./priceForm";
import Name_desc from "./name-desc";
import Amenities from "./amenities";
import SizeForm, { LandSizeForm } from "./size";
import FinalForm from "./finalForm";
import LocationDetails from "./locaiton";
import { useSearchParams } from "next/navigation";
import { createAd } from "../actions";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
import { IsOwner } from "./owner";
import { Button } from "@/components/ui/button";
import { StepBack, X } from "lucide-react";

const SelectionComp = withGenericSelection(GenericSelection);
const Forms = ({ lng, user }) => {
  const SuccesDialoag = dynamic(() => import("./successDialog"), {
    ssr: false,
  });
  const { setValue, handleSubmit, watch } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const propertyType = watch("type");

  useEffect(() => {
    setValue("category", searchParams.get("category"));
    setValue("type", searchParams.get("type"));
    setValue("country", user.country);
  }, []);

  useEffect(() => {
    window.scrollTo(0, -1000);
  }, [currentStep]);
  const onSubmit = async (data) => {
    const shopId = searchParams.get("profile").includes("shop")
      ? searchParams.get("profile").split("=")[1]
      : null;
    const ad = await createAd(data, user.id, shopId);
    if (ad) {
      setOpen(true);
      toast({
        title: "ad created succesffuly",
      });
    }
  };
  const nextStep = () => {
    const formData = watch();
    console.log(formData);
    setCurrentStep((prev) => prev + 1);
  };
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 4:
        return (
          <SelectionComp
            {...bedroomsProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <SelectionComp
            {...bathroomsProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 6:
        if (propertyType == "apartment") {
          return (
            <SelectionComp
              {...floorProps}
              setValue={setValue}
              nextStep={nextStep}
            />
          );
        } else if (
          propertyType == "villa" ||
          propertyType == "house" ||
          propertyType == "building"
        ) {
          return (
            <SelectionComp
              {...floorsNumProps}
              setValue={setValue}
              nextStep={nextStep}
            />
          );
        } else {
          nextStep();
        }
      case 7:
        if (
          propertyType == "villa" ||
          propertyType == "house" ||
          propertyType == "land" ||
          propertyType == "farm" ||
          propertyType == "building"
        ) {
          return <LandSizeForm setValue={setValue} nextStep={nextStep} />;
        }
        return <SizeForm setValue={setValue} nextStep={nextStep} />;
      case 8:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 9:
        return (
          <SelectionComp
            {...interfaceProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 10:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 11:
        return (
          <SelectionComp
            {...buildingAge}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 12:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 13:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  const renderComercialFormSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <SelectionComp
            {...propertyTypes}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 4:
        return <SizeForm setValue={setValue} nextStep={nextStep} />;
      case 5:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 6:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 7:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 8:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 9:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  const renderBuildingsFormSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return <LandSizeForm setValue={setValue} nextStep={nextStep} />;
      case 3:
        return (
          <SelectionComp
            {...floorsNumProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 5:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 6:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 7:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 8:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 9:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Button
        size="icon"
        type="button"
        className="self-end"
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        <StepBack />
      </Button>
      {propertyType === "commercial"
        ? renderComercialFormSteps()
        : propertyType === "building"
        ? renderBuildingsFormSteps()
        : renderFormStep()}
      {open && <SuccesDialoag searchParams={searchParams} />}
    </form>
  );
};

export default Forms;
