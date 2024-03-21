"use client";

import { useSearchParams } from "next/navigation";
import { useTranslation } from "../../app/i18n/client";
import { AdCategroy } from "../categoriesCard";
import { categoriesData } from "@/data/staticData";
import Link from "next/link";

export default function CategoriesForm({ lng }) {
  const { t } = useTranslation(lng, "translation");
  const searchParams = useSearchParams();
  if (!searchParams.has("profile")) return;

  return (
    <>
      <h1 className="text-center text-2xl font-semibold sm:py-8">
        {t("sellTitle")}
      </h1>
      <div className="grid  grid-cols-2  gap-8  py-4">
        {categoriesData.map((item, i) => (
          <Link
            key={i}
            href={`/newSell/${item.link}?profile=${searchParams.get(
              "profile"
            )}`}
            className={`bg-transparent flex border border-[#fe2635] text-zinc-800 hover:text-white items-center justify-center border rounded-xl px-4 py-8 dark:text-white  hover:bg-[#fe2635]  cursor-pointer transition`}
          >
            <div className="text-2xl mx-3">{item.icon}</div>
            <span className={`ml-2`}>{t(`categories.${item.text}`)}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
