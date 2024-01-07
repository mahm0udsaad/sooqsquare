"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {  BiSearch } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from '@/components/ui/dropdown-menu';
import { TfiWorld } from 'react-icons/tfi';
import { IoLanguageOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { useTranslation } from "../app/i18n/client"
import Logo from './logo'
import { ErrorMessage } from '@/components/messages'
// import {
//   SignedIn,
//   UserButton,
// } from "@clerk/nextjs";

const NavBar = ({lng })=> { 
  
  const { t } = useTranslation(lng , "translation")
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };
    
    const router = useRouter();
    
    const changeToArabic = () => {
      const currentPath = router.asPath || '/en'; // Set a default path if asPath is undefined
      const arabicPath = currentPath.replace('/en', '/ar');
      router.push(arabicPath);
    };
    const changeToEnglish = () => {
      const currentPath = router.asPath || '/ar'; // Set a default path if asPath is undefined
      const arabicPath = currentPath.replace('/ar', '/en');
      router.push(arabicPath);
    };
    
  return (
    <nav className="z-50 fixed  shadow-lg w-full flex items-center justify-between px-6 bg-white dark:bg-zinc-950">
      <Link className="flex items-center" href="#">
        <Logo lng={lng} darkMode={darkMode}/>
      </Link>
      <div className="flex items-center ">
        <form className="flex items-center dark:bg-zinc-900 mx-6 border rounded-full px-4">
          <BiSearch className="w-4 h-4 text-gray-700 dark:text-gray-200" />
          <input
            className="ml-2 p-2 bg-transparent rounded-full focus:outline-none text-gray-700 dark:text-gray-200"
            placeholder="Search"
            type="text"
          />
        </form>
        <div className="flex gap-3">
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <button className="border dark:bg-zinc-900 px-4 py-2 rounded-full flex items-center">
            <TfiWorld className="text-xl mx-3" />
            {t("country")} <FiChevronDown className="ml-2" />
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-zinc-900 bg-white border dark:bg-zinc-900 mt-2 py-2 rounded-md shadow-md">
            <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">USA</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">UK</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">Germany</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <button className="border dark:bg-zinc-900 px-4 py-2 rounded-full flex items-center">
            <IoLanguageOutline className="text-xl mx-3" />
            {t("languages")}  <FiChevronDown className="ml-2" />
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent  className="dark:bg-zinc-900 bg-white border border-gray-300 mt-2 py-2 rounded-md shadow-md">
            <DropdownMenuItem onClick={changeToEnglish} className="hover:bg-gray-100  px-4 py-2">English</DropdownMenuItem>
            <DropdownMenuItem onClick={changeToArabic} className="hover:bg-gray-100  px-4 py-2">Arabic</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        </div>
        {/* {!userId ? <button className="mx-4 border rounded-full px-8 py-2">{t('signIn')}</button>
        :
        <div className="px-4">
          <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      } */}
        <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="darkModeToggle"
            className="sr-only form-checkbox w-0 h-0"
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className={`w-10 h-5 bg-gray-400 dark:bg-gray-600 rounded-full shadow-inner`}></div>
          <div className={`toggle-dot absolute w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md inset-y-0 left-0 ${darkMode ? 'transform translate-x-full' : ''}`}></div>
        </div>
        <span className="ml-2 text-gray-700 dark:text-gray-200">{t('darkMode')}</span>
      </label>
      </div>
    </nav>
  )
}
export default  NavBar