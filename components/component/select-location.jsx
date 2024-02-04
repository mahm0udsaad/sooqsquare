"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuItem, DropdownMenuSubContent, DropdownMenuSub, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { countriesWithCities } from "@/data/staticData";
import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export function SelectLocation() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (city , country) => {
    setSelectedCity(city);
    // Log the selected country and city
    console.log('Selected Country:', country);
    console.log('Selected City:', city);
  };

  return (
    (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select a country</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Countries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {countriesWithCities.map((countryObj, index) => (
          <DropdownMenuSub key={index}>
            <DropdownMenuSubTrigger>
            {countryObj.countryCode && <span className={`mx-2 fi fi-${countryObj.countryCode}`}></span> }
              {countryObj.country}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-0">
              {countryObj.cities.map((city, cityIndex) => (
                <DropdownMenuItem key={cityIndex} onClick={() => handleCityChange(city , countryObj.country)}>
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>)
  );
}
