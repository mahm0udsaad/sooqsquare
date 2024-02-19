import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function MainSection({ lng }) {
  const { t } = await useTranslation(lng, "jobs");
  return (
    <div className="relative h-[70vh] shadow-xl rounded-lg">
      <Image
        src="/ar/job-header.jpg"
        className="opacity-30  rounded-lg"
        layout="fill"
        objectFit="cover"
        alt="Job Header"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container grid items-center justify-center gap-4 min-h-[600px] px-4 text-center py-12 md:py-24 lg:py-32 md:gap-6 lg:gap-12 xl:px-6">
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wide text-gray-500 sm:text-base md:text-xs lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-200">
                {t("introducing")}
              </p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {t("sooqsquare_jobs")}
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t("platform_description")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="/jobs/findJob"
                className="inline-flex h-10 items-center justify-center rounded-md main-bg px-8 text-sm font-medium transition-colors hover:bg-[#ff3e58] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                <SearchIcon className="h-5 w-5 mx-2" />
                {t("explore_jobs")}
              </Link>
              <Link
                href="/jobs/newCompany"
                className="inline-flex h-10 items-center justify-center rounded-md main-bg px-8 text-sm font-medium transition-colors hover:bg-[#ff3e58] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                <BriefcaseIcon className="h-5 w-5 mx-2" />
                {t("virtual_office")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
