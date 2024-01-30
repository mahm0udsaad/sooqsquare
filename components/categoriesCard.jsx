
"use client"
import Link from "next/link";
import { useTranslation } from "../app/i18n/client"

export const CategroyLink = ({ icon, text ,link}) => {
    return (
        <Link href={`${link}`} className={`flex items-center justify-center dark:text-white border border-[#F34A62] rounded-full lg:px-2 py-5 hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500 cursor-pointer transition`}>
        <div className="text-2xl mx-3">
            {icon}
        </div>
        <span className={`ml-2`}>{text}</span>
        </Link>
     );
    };

export const AdCategroy = ({ lng ,icon, text }) => {
    const { t } = useTranslation(lng , "translation")

    return (
        <Link href={`?category=${text}`} className={`flex border border-rose-500 text-zinc-800 hover:text-white items-center justify-center border rounded-full px-4 py-8 dark:text-white  hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500  cursor-pointer transition`}>
        <div className="text-2xl mx-3">
            {icon}
        </div>
        <span className={`ml-2`}>{t(`categories.${text}`)}</span>
        </Link>
        );
    };