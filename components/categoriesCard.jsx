
"use client"
import Link from "next/link";
import { useTranslation } from "../app/i18n/client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export const CategroyLink = ({ icon, text ,link}) => {
    return (
        <Link href={`${link}`} className={`flex items-center hover:text-white justify-center dark:text-white border border-[#F34A62] rounded-xl lg:px-2 py-5 hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500 cursor-pointer transition`}>
        <div className="text-2xl mx-3">
            {icon}
        </div>
        <span className={`ml-2`}>{text}</span>
        </Link>
     );
    };

export const AdCategroy = ({ lng ,icon, text }) => {
    const { t } = useTranslation(lng , "translation")
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname= usePathname()
    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };

    return (
        <Button onClick={()=>createQueryString('category',text)} className={`bg-transparent flex border border-rose-500 text-zinc-800 hover:text-white items-center justify-center border rounded-xl px-4 py-8 dark:text-white  hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500  cursor-pointer transition`}>
        <div className="text-2xl mx-3">
            {icon}
        </div>
        <span className={`ml-2`}>{t(`categories.${text}`)}</span>
        </Button>
        );
    };