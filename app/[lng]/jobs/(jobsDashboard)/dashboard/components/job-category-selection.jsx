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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const jobCategories = [
  { label: "Sales / Business Development", value: "sales_business" },
  { label: "Accounting / Finance", value: "accounting_finance" },
  { label: "Secretarial / Front Office", value: "secretarial_front_office" },
  { label: "Manufacturing / Warehouse", value: "manufacturing_warehouse" },
  { label: "Customer Service / Support", value: "customer_service_support" },
  { label: "Human Resources", value: "human_resources" },
  { label: "Information Technology", value: "information_technology" },
];

export default function JobCategorySelect({ lng }) {
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

  const handleJobCategoryChange = (e) => {
    createQueryString({ jobCategory: e });
  };

  return (
    <Select
      open={true}
      onValueChange={handleJobCategoryChange}
      name="jobCategory"
      className={"w-4/5 mx-auto mb-4"}
    >
      <SelectTrigger className="w-4/5 mx-auto">
        <SelectValue placeholder={t("select_job_category_placeholder")} />
      </SelectTrigger>
      <SelectContent>
        {jobCategories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {t(category.value)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
