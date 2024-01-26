import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { BsThreads } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";

const SideBar = () =>{
    return(
        <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2 mt-5">
        <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/myProfile">
              <CgProfile className="w-6 h-6 " />
              <span className="mx-3">My Profile</span>
          </Link>
          <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/reports">
              <TbReportAnalytics className="w-6 h-6 " />
              <span className="mx-3">Reports</span>
          </Link>
          <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/myAds">
              <BsThreads className="w-6 h-6 " />
              <span className="mx-3">My Ads</span>
          </Link>
          <Link className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/myShop">
              <FaShop className="w-6 h-6" />
              <span className="mx-3">My Shop</span>
          </Link>
        </div>
      </div>
    )
}

export default SideBar ;