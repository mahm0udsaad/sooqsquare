"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  GenericSelection,
  withGenericSelection,
} from "@/components/dynamicSelection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { countriesWithCities } from "../../../../../data/staticData";
import { useDarkMode } from "@/context/darkModeContext";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const PopoverCountry = dynamic(
  () => import("@/components/navBarBtns/PopoverCountry"),
  {
    loading: () => <BtnSkeleton />,
    ssr: false,
  }
);
const SelectionComp = withGenericSelection(GenericSelection);
const FilterSideBar = ({ lng, user }) => {
  const { t } = useTranslation(lng, "jobs");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { selectedCountry, setSelectedCountry } = useDarkMode();
  const cities = countriesWithCities.find(
    (country) => country.country === selectedCountry?.country
  )?.cities;

  const resetFileters = () => {
    router.push(`${pathname}?country=${selectedCountry.country}`);
  };
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      (!selectedCountry?.country &&
        !user?.country &&
        !searchParams.has("country")) ||
      searchParams.get("country") == "undefined"
    ) {
      setOpen(true);
    } else if (searchParams.get("country") !== "undefined") {
      setOpen(false);
      createQueryString("country", selectedCountry?.country);
    }
  }, [selectedCountry, searchParams.has("country")]);

  const jobCategoryProps = {
    title: "Job Category",
    itemsArray: [
      "Software Engineer",
      "Data Scientist",
      "Product Manager",
      "UX/UI Designer",
      "Marketing Specialist",
    ],
    paramNameToSet: "category",
    paramsToCheck: [],
  };

  const jobLocationProps = {
    title: "Location",
    itemsArray: ["New York", "San Francisco", "London", "Berlin", "Tokyo"],
    paramNameToSet: "location",
    paramsToCheck: [],
  };

  const jobTypeProps = {
    title: "Job Type",
    itemsArray: [
      "Full-time",
      "Part-time",
      "Contract",
      "Freelance",
      "Internship",
    ],
    paramNameToSet: "type",
    paramsToCheck: [],
  };

  const jobSalaryProps = {
    title: "Salary Range",
    itemsArray: [
      "$0 - $50k",
      "$50k - $100k",
      "$100k - $150k",
      "$150k - $200k",
      "Above $200k",
    ],
    paramNameToSet: "salary",
    paramsToCheck: [],
  };
  const citiesSelectorProps = {
    title: t("city"),
    itemsArray: cities?.map((city) => t(`${city}`)),
    paramNameToSet: "location",
    paramsToCheck: [],
  };

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + "?" + updatedParams);
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button className="absolute hidden" size="lg" variant="solid">
            country
          </Button>
        </DialogTrigger>
        <DialogContent className="dark:bg-zinc-800 dark:text-white ">
          <DialogHeader className="dark:bg-zinc-800 dark:text-white">
            <DialogTitle>
              you have to choose a country to display it's ads{" "}
            </DialogTitle>
          </DialogHeader>
          <div className="flex w-full justify-center items-center">
            <PopoverCountry lng={lng} />
          </div>
        </DialogContent>
      </Dialog>
      <div className="max-w-[25%] sticky top-0 filters bg-white dark:bg-zinc-950 shadow rounded p-3 flex flex-col gap-4 items-start py-2">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-bold">Filter Options</h2>
          <Button
            className={"dark:bg-white dark:text-black dark:hover:text-white"}
            onClick={resetFileters}
          >
            Reset
          </Button>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Category</h3>
        </div>
        <div className="grid gap-3 w-full">
          <SelectionComp {...citiesSelectorProps} />
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Price Range</h3>
          <div className="flex gap-2">
            <Input
              onBlur={(e) => handleMaxMinFilters("priceMin", e.target.value)}
              className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
              id="price-min"
              placeholder="Min price"
            />
            <Input
              onBlur={(e) => handleMaxMinFilters("priceMax", e.target.value)}
              className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
              id="price-max"
              placeholder="Max price"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Year</h3>
          <div className="flex gap-2">
            <Input
              onBlur={(e) => handleMaxMinFilters("yearMin", e.target.value)}
              className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
              id="price-min"
              placeholder="Min Year"
            />
            <Input
              onBlur={(e) => handleMaxMinFilters("yearMax", e.target.value)}
              className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
              id="price-max"
              placeholder="Max Year"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Vehicle Type</h3>
          <div className="flex items-center gap-2">
            <Checkbox
              ischecked="true"
              onCheckedChange={(e) => handleCheckBoxChange(e, "sport")}
              id="sport"
              value="sport"
            />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              onCheckedChange={(e) => handleCheckBoxChange(e, "suv")}
              id="suv"
              value="suv"
            />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              onCheckedChange={(e) => handleCheckBoxChange(e, "mpv")}
              id="mpv"
              value="mpv"
            />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              onCheckedChange={(e) => handleCheckBoxChange(e, "sedan")}
              id="sedan"
              value="sedan"
            />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              onCheckedChange={(e) => handleCheckBoxChange(e, "coupe")}
              id="coupe"
              value="coupe"
            />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              onCheckedChange={(e) => handleCheckBoxChange(e, "hatchback")}
              id="hatchback"
              value="hatchback"
            />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
        <div className="grid gap-3">
          <SelectionComp {...jobCategoryProps} />
          <SelectionComp {...jobLocationProps} />
          <SelectionComp {...jobTypeProps} />
          <SelectionComp {...jobSalaryProps} />
        </div>
      </div>
    </>
  );
};
export default FilterSideBar;
