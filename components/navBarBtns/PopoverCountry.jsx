"use client";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { useTranslation } from "@/app/i18n/client";
import { useDarkMode } from "@/context/darkModeContext";
import { getLocation } from "@/helper/location";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { countriesWithCities } from "@/data/staticData";
import { Button } from "../ui/button";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PopoverCountry = ({ lng }) => {
  const { t } = useTranslation(lng, "view");
  const pathname = usePathname();
  const { selectedCountry, setSelectedCountry } = useDarkMode();

  const handleCountryChange = (country, code) => {
    setSelectedCountry({ country: country, code: code });
    createQueryString("country", country);
    // Store selectedCountry in localStorage
    localStorage.setItem("selectedCountry", JSON.stringify({ country, code }));
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (name, value) => {
    if (pathname.split("/")[2] === "vehicle") {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + "?" + updatedParams);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="py-2 px-2 rounded-xl dark:bg-zinc-800 dark:border-zinc-800"
        >
          {selectedCountry?.country ? (
            <>
              <span className={`mx-2 fi fi-${selectedCountry?.code}`}></span>
            </>
          ) : (
            <>
              <TfiWorld className="text-xl" />
              <FiChevronDown className="mx-2" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Countries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {countriesWithCities.map((countryObj, index) => (
          <DropdownMenuItem
            onClick={() =>
              handleCountryChange(countryObj?.country, countryObj?.countryCode)
            }
            key={index}
          >
            {countryObj?.countryCode && (
              <span className={`mx-2 fi fi-${countryObj?.countryCode}`}></span>
            )}
            {t(`${countryObj?.country}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PopoverCountry;
