"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { useDarkMode } from "@/context/darkModeContext";
import { getLocation } from "@/helper/location";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { countriesWithCities } from "@/data/staticData";
import { Button } from "../ui/button";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateUserCountry } from "@/prisma/actions";
import { Glob } from "lucide-react";
import subscribeToPushNotifications from "@/helper/notfication";

const PopoverCountry = ({ lng, user }) => {
  const { t } = useTranslation(lng, "view");
  const pathname = usePathname();
  const { selectedCountry, setSelectedCountry } = useDarkMode();

  const handleCountryChange = (country, code) => {
    setSelectedCountry({ country: country, code: code });
    createQueryString("country", country);
    // Store selectedCountry in localStorage
    localStorage.setItem("selectedCountry", JSON.stringify({ country, code }));
  };

  useEffect(() => {
    if ("serviceWorker" in navigator && user) {
      subscribeToPushNotifications(user?.id);
    }

    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        await updateUserCountry(user?.id, location.countryName);
      } catch (error) {
        console.error("Error getting location:", error?.message);
      }
    };

    if (!user?.country) {
      fetchLocation();
    }
  }, []);

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
          className="py-2 px-2 shadow hover:shadow-inner  rounded-xl dark:bg-zinc-800 dark:border-zinc-800"
        >
          {selectedCountry?.country ? (
            <>
              <span className={`mx-2 fi fi-${selectedCountry?.code}`}></span>
            </>
          ) : (
            <>
              <Glob className="text-xl" />
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
