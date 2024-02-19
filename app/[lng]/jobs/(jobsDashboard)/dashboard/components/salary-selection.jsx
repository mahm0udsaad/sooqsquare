"use client";
import React from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useTranslation } from "@/app/i18n/client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const salaryOptions = [
  { label: "2,000 - 4,000", value: "2000-4000" },
  { label: "4,000 - 6,000", value: "4000-6000" },
  { label: "6,000 - 8,000", value: "6000-8000" },
  { label: "8,000 - 10,000", value: "8000-10000" },
  { label: "10,000 - 12,000", value: "10000-12000" },
  { label: "More than 12,000", value: "12000+" },
  { label: "Negotiable", value: "negotiable" }, // Added negotiable option
];

export default function SalarySelection({ lng }) {
  const { t } = useTranslation(lng, "jobs");

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
      salary: e,
    });
  };

  return (
    <Select
      open={true}
      onValueChange={(e) => handleSubmit(e)}
      name="salary"
      className={"w-4/5 mx-auto"}
    >
      <SelectTrigger className="w-4/5 mx-auto">
        <SelectValue placeholder={t("select_salary_range_placeholder")} />
      </SelectTrigger>
      <SelectContent>
        {salaryOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {t(option.label)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
