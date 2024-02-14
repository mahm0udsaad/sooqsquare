import Link from 'next/link';
import {  BiSearch } from 'react-icons/bi';
import { BsChatLeftDots } from "react-icons/bs";
import { useTranslation } from '@/app/i18n';
import { getUserByEmail } from '@/prisma/actions';
import { getServerSession } from 'next-auth';
import UserButton from '@/components/component/user-button';
import PopoverLanguage from '@/components/navBarBtns/PopoverLanguage';
import dynamic from 'next/dynamic';
import BtnSkeleton from '@/components/skeletons/btnSkeleton'
import UserAvatarSkeleton from '@/components/skeletons/userAvatarSkeleton'

const NavBar = async  ({ lng })=> { 

  const { t } = await useTranslation(lng , "translation")
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user.email)
  const PopoverCountry = dynamic(()=> import('@/components/navBarBtns/PopoverCountry'),{ ssr:false , loading:()=> <BtnSkeleton />})
  const UserButton = dynamic(()=> import('@/components/component/user-button'),{ ssr:false , loading:()=> <UserAvatarSkeleton />})
  const Logo = dynamic(()=> import('./logo'),{ ssr:false , loading:()=> <UserAvatarSkeleton />})

  return (
    <>
    <nav className="hidden z-50 lg:flex fixed py-2 shadow-lg w-full  items-center justify-between px-6  bg-white dark:text-white dark:bg-zinc-950">
      <Link className="flex items-center" href="#">
        <Logo lng={lng} />
      </Link>

        <form className="flex items-center  dark:bg-zinc-900 border dark:border-zinc-800 rounded-xl px-4 w-[30%]">
          <BiSearch className="w-4 h-4 text-gray-700 dark:text-gray-200" />
          <input
            className="ml-2 p-2 bg-transparent rounded-xl focus:outline-none text-gray-700 dark:text-gray-200"
            placeholder="Search"
            type="text"
            id="search"
            name="search"
          />
        </form>
        
        <div className="flex items-center gap-3 ">
          <Link href={'/newSell'} className="border  px-8 main-bg py-2 rounded-xl flex items-center">
            {t("Sell")}
            </Link>

          <PopoverLanguage lng={lng} />
          <PopoverCountry lng={lng} />
         
          {user ?
              <>
                <Link href={'/chat'} className="chat dark:bg-zinc-800 hover:bg-gray-100 hover:dark:text-black hover:dark:bg-white bg-white border dark:border-none p-2 rounded-md">
                  <BsChatLeftDots className="text-xl"/>
                </Link>
            <div className="userAvatar">
                <UserButton lng={lng} user={user}/>
              </div>
              </>
               :
               <Link className='py-2 px-4 primary-bg rounded-md' href={'/sign-in'}>
                Sign In
               </Link>
            }
         
        </div>
    </nav>
    {/* Mobile NavBar */}
    {/* <nav className="flex flex-col lg:hidden z-50 fixed py-2 shadow-lg w-full  px-6  bg-white dark:bg-zinc-950">
      <div className="flex  items-center justify-between">
      <Link className="flex items-center" href="#">
        <Logo lng={lng} darkMode={darkMode}/>
      </Link>
      <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
        <CiMenuBurger  className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>
      </div>
        <div className={`${menuOpen? 'transition-h h-auto' : 'transition-h h-0 hidden'} flex flex-col py-4 gap-4`}>
        <form className="flex items-center dark:bg-zinc-900 border dark:border-zinc-800 rounded-xl px-4">
          <BiSearch className="w-4 h-4 text-gray-700 dark:text-gray-200" />
          <input
            className="ml-2 p-2 bg-transparent rounded-xl focus:outline-none text-gray-700 dark:text-gray-200"
            placeholder="Search"
            type="text"
          />
        </form>
        <div className="flex flex-col w-full gap-3 ">
          <Link href={'/sell'} className="border dark:border-zinc-800 px-8 main-bg py-2 rounded-xl flex items-center">
              {t("Sell")}
              </Link>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="border dark:border-zinc-800 dark:bg-zinc-900 px-4 py-2 rounded-xl flex items-center">
              <TfiWorld className="text-xl mx-3" />
              {!countryName ? t("country"): countryName }
              <FiChevronDown className="ml-2" />
              </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-zinc-900  bg-white border dark:border-zinc-800 dark:bg-zinc-900 mt-2 py-2 rounded-md shadow-md">
              <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">USA</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">UK</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100  px-4 py-2">Germany</DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="border dark:border-zinc-800 dark:bg-zinc-900 px-4 py-2 rounded-xl flex items-center">
              <IoLanguageOutline className="text-xl mx-3" />
              {t("languages")}  <FiChevronDown className="ml-2" />
              </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent  className="dark:bg-zinc-900 bg-white border dark:border-zinc-800 border dark:border-zinc-800-gray-300 mt-2 py-2 rounded-md shadow-md">
              <DropdownMenuItem onClick={changeToEnglish} className="hover:bg-gray-100  px-4 py-2">English</DropdownMenuItem>
              <DropdownMenuItem onClick={changeToArabic} className="hover:bg-gray-100  px-4 py-2">Arabic</DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
              
          <div className="flex items-center justify-around">
          
          <Link href={'/chat'} className="chat dark:bg-zinc-900 hover:opacity-50 bg-white border dark:border-zinc-800 p-2 rounded-md">
          <BsChatLeftDots className="text-xl"/>
          </Link>
          <div className="userAvatar">
            {user &&
               <UserButton  user={user}/>
            }
          </div>
          <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer ">
          <div className="relative">
            <input
              id="darkModeToggle"
              className="sr-only form-checkbox w-0 h-0"
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className={`w-10 h-5 bg-gray-400 dark:bg-gray-600 rounded-xl shadow-inner`}></div>
            <div className={`toggle-dot absolute w-5 h-5 bg-white dark:bg-gray-800 rounded-xl shadow-md inset-y-0 left-0 ${darkMode ? 'transform translate-x-full' : ''}`}></div>
          </div>
          <span className="ml-2 text-gray-700 dark:text-gray-200">{t('darkMode')}</span>
        </label>
          </div>
        </div>
        </div>
    </nav> */}
    </>
  )
}
export default  NavBar