
"use client"
import Link from "next/link";
import { useTranslation } from "../app/i18n/client"

export const CategroyLink = ({ icon, text }) => {
    return (
        <div className={`flex items-center justify-center border rounded-full px-2 py-4 hover:dark:bg-zinc-800 hover:bg-gray-200 cursor-pointer transition`}>
        <div className="text-2xl">
            {icon}
        </div>
        <span className={`ml-2`}>{text}</span>
        </div>
     );
    };

export const AdCategroy = ({ lng ,icon, text }) => {
    const { t } = useTranslation(lng , "translation")

    return (
        <Link href={`?category=${text}`} className={`flex border border-zinc-800 text-zinc-800 items-center justify-center border rounded-full px-4 py-8 hover:dark:bg-zinc-800 hover:bg-zinc-600 hover:text-white cursor-pointer transition`}>
        <div className="text-2xl mx-3">
            {icon}
        </div>
        <span className={`ml-2`}>{t(`categories.${text}`)}</span>
        </Link>
        );
    };