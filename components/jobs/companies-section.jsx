
import { useTranslation } from "@/app/i18n"
import Image from "next/image"

export default async function CompoaniesSection({ lng }) {
  const { t } = await useTranslation(lng , 'jobs')
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
         <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('future_of_work')}</h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t('virtual_office_description')} 
          </p>
        </div>
        <div className="grid gap-4 md:gap-2">
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-xl text-green-500" />
            <p className="text-base font-semibold tracking-wide">{t('connect_with_team')}</p>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-xl text-green-500" />
            <p className="text-base font-semibold tracking-wide">{t('access_files_tools')}</p>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-xl text-green-500" />
            <p className="text-base font-semibold tracking-wide">{t('host_virtual_meetings')}</p>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-xl text-green-500" />
            <p className="text-base font-semibold tracking-wide">{t('collaborate_real_time')}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <Image
          alt="Team Collaboration"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          height={310}
          src="/ar/job-companies-section.jpg"
          width={550}
        />
      </div>
    </div>
      </section>
    )
  }
  
  function CheckCircleIcon(props) {
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
  