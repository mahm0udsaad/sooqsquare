import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function MainSection({ lng }) {
  const { t } = await useTranslation(lng, "jobs");
  return (
    <section key="1" className="w-full py-6">
      <h1 className="text-3xl font-bold text-center pb-8">
        SooqSquare Business Hub
      </h1>
      <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:gap-10">
          <Link href="/jobs">
            <div className="relative shadow-xl h-[10rem] flex flex-col items-center justify-center rounded-lg hover:from-blue-400 hover:to-blue-600/90 transition-colors overflow-hidden">
              <img
                src="/ar/jobs-square.jpg"
                alt="Jobs"
                className="w-full h-full object-cover"
              />
              <div className="shadow absolute inset-0 flex items-center justify-center hover:bg-transparent text-white hover:text-black w-full h-full bg-black  transition-opacity opacity-30">
                <div className=" font-semibold">{t("jobs_title")}</div>
              </div>
            </div>
          </Link>
          <Link href="#vehicles">
            <div className="relative shadow-xl h-[10rem] flex flex-col items-center justify-center rounded-lg hover:from-blue-400 hover:to-blue-600/90 transition-colors overflow-hidden">
              <img
                src="/ar/cars-header.jpg"
                alt="Cars"
                className="w-full h-full object-cover"
              />
              <div className="shadow absolute inset-0 flex items-center justify-center hover:bg-transparent text-white hover:text-black w-full h-full bg-red-900  transition-opacity opacity-30">
                <div className=" font-semibold">{t("cars_title")}</div>
              </div>
            </div>
          </Link>
          <Link href="/apartments">
            <div className="relative shadow-xl h-[10rem] flex flex-col items-center justify-center rounded-lg hover:from-blue-400 hover:to-blue-600/90 transition-colors overflow-hidden">
              <img
                src="/ar/appartments-square.jpg"
                alt="Apartments"
                className="w-full h-full object-cover"
              />
              <div className="shadow absolute inset-0 flex items-center justify-center hover:bg-transparent text-white hover:text-black w-full h-full bg-yellow-500  transition-opacity opacity-30">
                <div className=" font-semibold">{t("apartments_title")}</div>
              </div>
            </div>
          </Link>
          <Link href="/electronics">
            <div className="relative shadow-xl h-[10rem] flex flex-col items-center justify-center rounded-lg hover:from-blue-400 hover:to-blue-600/90 transition-colors overflow-hidden">
              <img
                src="/ar/electronic-square.jpg"
                alt="Electronics"
                className="w-full h-full object-cover"
              />
              <div className="shadow absolute inset-0 flex items-center justify-center hover:bg-transparent text-white hover:text-black w-full h-full bg-white  transition-opacity opacity-30">
                <div className="text-black z-30 font-semibold">
                  {t("electronics_title")}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto max-w-[700px] space-y-4 lg:space-y-6">
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("business_hub_description")}
          </p>
          <p id="vehicles" className="text-sm font-medium tracking-wide/0.05">
            {t("maximize_potential_text")}
          </p>
        </div>
      </div>
    </section>
  );
}
