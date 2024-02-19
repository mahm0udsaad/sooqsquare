"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useTranslation } from "@/app/i18n/client";
import { ArabCountriesWithCurrancy } from "@/data/staticData"; // Import the array
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SequentialSelection({ lng }) {
  const { t } = useTranslation(lng, "jobs");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleGenderSelection = async (gender) => {
    createQueryString({ gender });
  };

  const handleNationalitySelection = async (nationality) => {
    createQueryString({ nationality });
  };

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const genderSelected = searchParams.has("gender");
  const nationalitySelected = searchParams.has("nationality");

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Select
        open={!genderSelected}
        onValueChange={handleGenderSelection}
        name="gender"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_gender_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">{t("male")}</SelectItem>
          <SelectItem value="female">{t("female")}</SelectItem>
          <SelectItem value="other">{t("other")}</SelectItem>
        </SelectContent>
      </Select>
      <Select
        open={genderSelected}
        onValueChange={handleNationalitySelection}
        name="nationality"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_nationality_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          {ArabCountriesWithCurrancy.map((country, i) => (
            <SelectItem key={i} value={country.name}>
              {t(`${country.name}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
