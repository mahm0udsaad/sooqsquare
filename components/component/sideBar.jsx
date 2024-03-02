import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { BsThreads } from "react-icons/bs";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useTranslation } from "@/app/i18n";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { LuLayoutDashboard } from "react-icons/lu";

const ShopSideBar = async ({ lng }) => {
  const DeleteDialoag = dynamic(
    () => import("@/components/component/buttons/deleteDailoag"),
    {
      ssr: false,
    }
  );
  const CreateShopButton = dynamic(
    () => import("@/components/component/createShopForm"),
    {
      ssr: false,
    }
  );
  const { t } = await useTranslation(lng, "translation");

  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user?.email);

  return (
    <div className="flex shadow-lg dark:shadow-[#5b5b5b3bs] flex-col w-64 bg-white dark:bg-zinc-950">
      <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          {t("Dashboard")}
        </h2>
      </div>
      <div className="flex flex-col min-h-[75dvh] justify-between gap-4  px-4 py-2 mt-5">
        <div className="w-full">
          {user?.shop.length > 0 && (
            <div className="flex w-[85%] py-2 mx-auto justify-between">
              <Link
                className="flex text-sm gap-3 space-y-2  items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                href={`/dashboard`}
              >
                <LuLayoutDashboard className="w-6 h-6 " />
                <span className="mx-3">{t("Dashboard")}</span>
              </Link>
            </div>
          )}

          <div className="flex w-[85%] py-2 mx-auto justify-between">
            <Link
              className="flex text-sm gap-3 space-y-2  items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
              href="/dashboard/myProfile"
            >
              <CgProfile className="w-6 h-6 " />
              <span className="mx-3">{t("My Profile")}</span>
            </Link>
          </div>

          <div className="flex w-[85%] py-2 mx-auto justify-between">
            <Link
              className="flex text-sm gap-3 space-y-2  items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
              href="/dashboard/reports"
            >
              <TbReportAnalytics className="w-6 h-6 text-orange-600" />
              <span className="mx-3">{t("Reports")}</span>
            </Link>
          </div>

          <div className="flex w-[85%] py-2 mx-auto justify-between">
            <Link
              className="flex text-sm gap-3 space-y-2  items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
              href="/dashboard/myAds"
            >
              <BsThreads className="w-6 h-6 text-sky-600" />
              <span className="mx-3"> {t("My Ads")} </span>
            </Link>
          </div>

          <div className="flex w-[85%] py-2 mx-auto justify-between">
            <Link
              className="flex text-sm gap-3 space-y-2  items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
              href="/dashboard/favorites"
            >
              <HeartIcon className="w-6 h-6 text-rose-600" />
              {t("Favorites")}
            </Link>
          </div>

          {user?.shop?.length > 0 ? (
            <>
              <p className="pt-3 border-b-[1px] dark:border-gray-600"></p>
              {user?.shop.map((shop) => (
                <Accordion
                  key={shop.id}
                  className="space-y-2"
                  collapsible
                  type="single"
                >
                  <AccordionItem value="shop-1 flex dark:border-gray-600 justify-between">
                    <AccordionTrigger className="flex w-full justify-between items-center px-4 py-2 ">
                      {shop.shopCategory === "cars" ? (
                        <FaCar className="w-5 h-5" />
                      ) : (
                        <MdOutlineRealEstateAgent className="w-5 h-5" />
                      )}
                      {shop.shopName}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 w-[94%] mx-auto">
                      <Link
                        className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                        href={`/dashboard/myShopView/${shop.id}`}
                      >
                        <AiOutlineShop className="w-6 h-6 text-rose-400	" />
                        <span className="mx-3">{t("Shop")}</span>
                      </Link>
                      <Link
                        className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                        href={`/dashboard/myShop/${shop.id}`}
                      >
                        <CiEdit className="w-6 h-6 w-6 h-6 text-fuchsia-400" />
                        <span className="mx-3">{t("Shop Details")}</span>
                      </Link>
                      <Link
                        className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                        href={`/dashboard/shopReports/${shop.id}`}
                      >
                        <TbReportAnalytics className="w-6 h-6 text-orange-600" />
                        <span className="mx-3">{t("Shop Reports")}</span>
                      </Link>
                      <Link
                        className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                        href={`/dashboard/shopAds/${shop.id}`}
                      >
                        <BsThreads className="w-6 h-6 text-sky-600" />
                        <span className="mx-3">{t("Shop Ads")}</span>
                      </Link>
                      <DeleteDialoag lng={lng} shop={shop} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </>
          ) : null}
        </div>
        <CreateShopButton lng={lng} user={user} />
      </div>
    </div>
  );
};
function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export default ShopSideBar;
