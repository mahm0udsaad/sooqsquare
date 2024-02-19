"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useTranslation } from "@/app/i18n/client";
import { countriesWithCities } from "@/data/staticData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CitySelection({ lng, currentUserCountry }) {
  const { t } = useTranslation(lng, "jobs");

  const userCountry = countriesWithCities.find(
    (country) => country.country === currentUserCountry
  );
  const cities = userCountry?.cities;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleSubmit = async (e) => {
    createQueryString({
      city: e,
    });
  };

  return (
    <Select
      open={true}
      onValueChange={(e) => handleSubmit(e)}
      name="city"
      className={"w-4/5 mx-auto"}
    >
      <SelectTrigger className="w-4/5 mx-auto">
        <SelectValue placeholder={t("select_city_placeholder")} />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city, i) => (
          <SelectItem key={i} value={city}>
            {t(`${city}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
