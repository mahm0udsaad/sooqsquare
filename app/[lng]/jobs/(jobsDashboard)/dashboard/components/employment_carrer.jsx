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

export default function EmploymentAndCareerSelection({ lng }) {
  const { t } = useTranslation(lng, "jobs");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleEmploymentTypeSelection = async (employmentType) => {
    createQueryString({ employmentType });
  };

  const handleCareerLevelSelection = async (careerLevel) => {
    createQueryString({ careerLevel });
  };

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const employmentTypeSelected = searchParams.has("employmentType");
  const careerLevelSelected = searchParams.has("careerLevel");

  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Select
        open={!employmentTypeSelected}
        onValueChange={handleEmploymentTypeSelection}
        name="employmentType"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_employment_type_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">{t("full_time")}</SelectItem>
          <SelectItem value="part-time">{t("part_time")}</SelectItem>
          <SelectItem value="contract">{t("contract")}</SelectItem>
          <SelectItem value="freelance">{t("freelance")}</SelectItem>
        </SelectContent>
      </Select>
      <Select
        open={employmentTypeSelected && !careerLevelSelected}
        onValueChange={handleCareerLevelSelection}
        name="careerLevel"
        className="mb-4"
      >
        <SelectTrigger>
          <SelectValue placeholder={t("select_career_level_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="entry-level">{t("entry_level")}</SelectItem>
          <SelectItem value="mid-level">{t("mid_level")}</SelectItem>
          <SelectItem value="senior-level">{t("senior_level")}</SelectItem>
          <SelectItem value="executive">{t("executive")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
