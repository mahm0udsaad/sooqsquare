"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "../../../app/i18n/client";
import { updateAd } from "../../../app/[lng]/(traderDashboard)/actions";
import { carBrands, carTypesArray, yearsArray } from "@/data/staticData";
import {
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/loading-spiner";
import { useRef } from "react";
import { useToast } from "../../ui/use-toast";
import { Edit } from "lucide-react";

export default function EditBtn({ lng, ad }) {
  const isArabic = lng === "ar";
  const models = carBrands[`${ad.brand}`];
  const { t } = useTranslation(lng, "view");
  const { toast } = useToast();

  const transmissionProps = {
    title: t("transmission"),
    itemsArray: ["Automatic", "Manual"],
  };
  const specificationSelectionProps = {
    title: t("DropdownText"), // Replace with your specific translation key
    itemsArray: [
      t("Gulf"),
      t("Japanese"),
      t("LosAngeles"),
      t("European"),
      t("Other"),
    ],
  };
  const fuelTypeSelectionProps = {
    title: t("fuelType"),
    itemsArray: [
      t("fuelTypes.Petrol"),
      t("fuelTypes.Diesel"),
      t("fuelTypes.Electric"),
      t("fuelTypes.Hybrid"),
      t("fuelTypes.Other"),
    ],
  };
  const engineCapacitySelectorProps = {
    title: t("engineCapacity"), // Replace with your specific translation key
    itemsArray: [
      "Up to 1000",
      "1001 - 1500",
      "1501 - 2000",
      "2001 - 2500",
      "Above 2500",
    ],
  };
  const meterRangeSelectionProps = {
    title: t("meterRange"), // Replace with your specific translation key
    itemsArray: [
      "0 - 1000 km",
      "1000 - 5000 km",
      "5000 - 10000 km",
      "10000 - 15000 km",
      "15000 - 20000 km",
    ], // Adjust based on your specific translations or labels
  };
  const paintTypeSelectorProps = {
    title: t("paintType"), // Replace with your specific translation key
    itemsArray: [
      t("Original paint"),
      t("Partial paint"),
      t("Complete paint"),
      t("Another"),
    ], // Adjust based on your specific translations or labels
  };
  const carStatusSlectorProps = {
    title: t("carstatus"), // Replace with your specific translation key
    itemsArray: [t("used"), t("new")],
  };
  const modelSelectionProps = {
    title: t("carModel"),
    itemsArray: models,
  };
  const yearSelectionProps = {
    title: t("carYear"),
    itemsArray: yearsArray,
  };
  const carTypeSelectionProps = {
    title: t("cartype"),
    itemsArray: carTypesArray,
  };

  const cancelRef = useRef(null);
  const { handleSubmit, setValue, control, formState } = useForm();

  const onSubmit = async (data) => {
    const updatedAd = await updateAd(ad.id, data);
    if (updatedAd) {
      cancelRef.current.click();
      toast("ad updated Successfully");
    }
  };

  return (
    <Drawer>
      <DrawerTrigger className="w-1/2" asChild>
        <Button className="bg-transparent border border-black text-black hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:border-black hover:dark:text-black  flex justify-center items-center space-x-2">
          <Edit className="w-4 h-4 mx-2" />
          <span>Edit</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-zinc-800 ">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        </DrawerHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-x-4 w-11/12 mx-auto"
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name">{t("Name")}:</Label>
              <Controller
                name="name"
                control={control}
                defaultValue={ad.name || ""}
                render={({ field }) => <Input {...field} type="text" />}
              />
            </div>
            <div>
              <Label htmlFor="price">{t("Price")}:</Label>
              <Controller
                name="price"
                control={control}
                defaultValue={ad.price}
                render={({ field }) => <Input {...field} type="number" />}
              />
            </div>
            <div>
              <Label htmlFor="CarChassis">{t("CarChassisTitle")}:</Label>
              <Controller
                name="CarChassis"
                control={control}
                defaultValue={ad.CarChassis || "0"}
                render={({ field }) => <Input {...field} type="text" />}
              />
            </div>
            <Select onValueChange={(e) => setValue("model", e)} className="">
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={`${ad.model}`} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {modelSelectionProps.itemsArray &&
                    modelSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(e) => setValue("year", e)} className="">
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.year} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {yearSelectionProps.itemsArray &&
                    yearSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(e) => setValue("carType", e)} className="">
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.carType} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {carTypeSelectionProps.itemsArray &&
                    carTypeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("transmission", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.transmission} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {transmissionProps.itemsArray &&
                    transmissionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("carStatus", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.carStatus} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {carStatusSlectorProps.itemsArray &&
                    carStatusSlectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(e) => setValue("fuelType", e)} className="">
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.fuelType} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {fuelTypeSelectionProps.itemsArray &&
                    fuelTypeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("EnginCapacity", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.EnginCapacity} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {engineCapacitySelectorProps.itemsArray &&
                    engineCapacitySelectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("meterRange", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.meterRange} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {meterRangeSelectionProps.itemsArray &&
                    meterRangeSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("RegionalSpecifications", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.RegionalSpecifications} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {specificationSelectionProps.itemsArray &&
                    specificationSelectionProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(e) => setValue("paintType", e)}
              className=""
            >
              <SelectTrigger>
                <div className="w-full py-3 text-xl font-semibold flex justify-around items-center">
                  <SelectValue placeholder={ad.paintType} />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-[12rem] overflow-y-scroll">
                <SelectGroup>
                  {paintTypeSelectorProps.itemsArray &&
                    paintTypeSelectorProps.itemsArray.map((item) => (
                      <SelectItem value={item} key={item} className="py-3">
                        {item}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={(e) => setValue("description", e.target.value)}
              defaultValue={ad.description || ""}
              className="min-h-[50px]"
              id="description"
              name="description"
              placeholder="Enter your description"
            />
          </div>
          <DrawerFooter
            className={"flex flex-row items-center justify-center gap-4"}
          >
            <Button className="bg-transparent border border-green-600 hover:bg-green-600 hover:text-white text-green-600">
              {formState.isSubmitting && <LoadingSpinner />}
              Submit
            </Button>
            <DrawerClose className="dark:text-black mx-2">
              <Button ref={cancelRef} type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
