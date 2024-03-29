"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTranslation } from "@/app/i18n/client";
import { Languages } from "lucide-react";

const PopoverLanguage = ({ lng }) => {
  const { t } = useTranslation(lng, "translation");
  const path = usePathname();
  const router = useRouter();

  const changeToArabic = () => {
    const arabicPath = path.replace("/en", "/ar");
    router.push(arabicPath);
  };
  const changeToEnglish = () => {
    const englishPath = path.replace("/ar", "/en");
    router.push(englishPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="py-2 px-2 shadow hover:shadow-inner hover:bg-transparent dark:hover:bg-white rounded-xl dark:bg-zinc-800 dark:border-zinc-800"
        >
          <Languages size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 dark:bg-zinc-950 dark:text-white">
        <div className="grid gap-4">
          <DropdownMenuItem
            onClick={changeToEnglish}
            className="hover:bg-gray-100 px-4 py-2"
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={changeToArabic}
            className="hover:bg-gray-100 px-4 py-2"
          >
            Arabic
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PopoverLanguage;
