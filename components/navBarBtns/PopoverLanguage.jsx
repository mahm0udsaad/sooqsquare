"use client"
// PopoverLanguage.js
"use client"
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { IoLanguageOutline } from 'react-icons/io5';
import { useTranslation } from "@/app/i18n/client";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const PopoverLanguage = ({ lng }) => {
  const { t } = useTranslation(lng , "translation");
  
  const path = usePathname()
  const router = useRouter()
   const changeToArabic = () => {
      const arabicPath = path.replace('/en', '/ar');
      router.push(arabicPath);
    };
    const changeToEnglish = () => {
      const englishPath = path.replace('/ar', '/en');
      router.push(englishPath);
    };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border dark:border-zinc-800 dark:bg-zinc-900 px-4 py-2 rounded-xl flex items-center">
          <IoLanguageOutline className="text-xl mx-3" />
          {t("languages")} <FiChevronDown className="ml-2" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 dark:bg-zinc-950 dark:text-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <div onClick={changeToEnglish("en")} className="hover:bg-gray-100 px-4 py-2">
              English
            </div>
            <div onClick={changeToArabic("ar")} className="hover:bg-gray-100 px-4 py-2">
              Arabic
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverLanguage;
