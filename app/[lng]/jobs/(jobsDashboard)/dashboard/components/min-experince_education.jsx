"use client";

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useTranslation } from "@/app/i18n/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ExperienceAndEducationSelection({ lng }) {
  const { t } = useTranslation(lng, "jobs");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleExperienceSelection = async (experience) => {
    createQueryString({ experience });
  };

  const handleEducationLevelSelection = async (educationLevel) => {
    createQueryString({ educationLevel });
  };

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const experienceSelected = searchParams.has("experience");
  const educationLevelSelected = searchParams.has("educationLevel");

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Select
        open={!experienceSelected}
        onValueChange={handleExperienceSelection}
        name="experience"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_experience_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1">{t("0_1_years")}</SelectItem>
          <SelectItem value="1-3">{t("1_3_years")}</SelectItem>
          <SelectItem value="3-5">{t("3_5_years")}</SelectItem>
          <SelectItem value="5+">{t("5_plus_years")}</SelectItem>
        </SelectContent>
      </Select>
      <Select
        open={experienceSelected && !educationLevelSelected}
        onValueChange={handleEducationLevelSelection}
        name="educationLevel"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_education_level_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high-school">{t("high_school")}</SelectItem>
          <SelectItem value="bachelor">{t("bachelor")}</SelectItem>
          <SelectItem value="master">{t("master")}</SelectItem>
          <SelectItem value="phd">{t("phd")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
