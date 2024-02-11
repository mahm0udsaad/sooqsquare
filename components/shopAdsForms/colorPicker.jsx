"use client"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "../../app/i18n/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ColorPicker({ lng }){

    const { t } = useTranslation(lng , "view")
    const [ color , setColor ] = useState(null)

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname= usePathname()

    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };

    return (
       <div className="w-full h-full flex flex-col justify-center items-center gap-8">
         <h1 className="font-semibold text-xl">{t("Choose Car's Color")}</h1>
         <div className="flex items-center gap-4">
          <Toggle onClick={()=>setColor('red')} aria-label="Toggle red" className={`bg-red-500 ${color == "red" ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('white')} aria-label="Toggle white" className={`bg-white ${color == "white" ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('black')} aria-label="Toggle black" className={`bg-black text-white ${color == "black" ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('green')} aria-label="Toggle green" className={`bg-green-500 ${color == 'green' ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('blue')} aria-label="Toggle blue" className={`bg-blue-500 ${color == 'blue' ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('yellow')} aria-label="Toggle yellow" className={`bg-yellow-500 ${color == 'yellow' ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
          <Toggle onClick={()=>setColor('purple')} aria-label="Toggle purple" className={`bg-purple-500 ${color == 'purple' ? "border border-2 border-black":""}`}>
            <CarIcon className="h-4 w-4" />
          </Toggle>
        </div>
        <Button onClick={()=> createQueryString('color',color)} className="main-bg">
            {t("Submit")}
        </Button>
       </div>
      )
} 



function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}
