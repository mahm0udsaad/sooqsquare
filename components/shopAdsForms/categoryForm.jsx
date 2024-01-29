"use client"

import { useSearchParams } from "next/navigation";
import { useTranslation } from "../../app/i18n/client";
import { AdCategroy } from "../categoriesCard";
import { categoriesData } from "@/data/staticData";

export default function CategoriesForm ({lng}) {
    const { t } = useTranslation(lng , "translation")
  
   return (
       <>
        <h1 className="text-center text-2xl font-semibold sm:py-8">
            {t("sellTitle")}
        </h1>
        <div className="grid  grid-cols-2  gap-8  py-4">
        {categoriesData.map((item, i) => (
        <AdCategroy lng={lng} key={i} icon={item.icon} text={item.text} />
        ))}
        </div>
       </>
   )
  }