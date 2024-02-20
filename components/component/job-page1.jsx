import { timeSince } from "@/helper/timeConversion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function JobPage({ job }) {
  return (
    <div className="grid gap-4 px-4 lg:gap-6 xl:gap-8 bg-white pt-4">
      <div className="p-4 rounded-xl shadow-lg space-y-4  bg-gray-100 dark:bg-gray-800">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {job.employmentType} . {timeSince(job.postedAt)}
          </p>
        </div>
        <div className="flex items-start gap-4">
          <img
            alt="Company logo"
            className="rounded-lg object-cover"
            height="80"
            src={job.company.logoUrl}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {job.company.city}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {job.salary}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BriefcaseIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {job.educationLevel}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                12 applicants
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {timeSince(job.postedAt)}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <Badge className={"main-bg shadow"}>UX Design</Badge>
            <Badge className={"main-bg"}>UI Design</Badge>
            <Badge className={"main-bg"}>Interaction Design</Badge>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md main-bg px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid gap-1.5">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-sm text-gray-500 leading-relaxed md:text-base/relaxed dark:text-gray-400 md:leading-relaxed">
            {job.description}
          </p>
        </div>
        <div className="grid gap-1.5">
          <h3 className="text-lg font-semibold">Details</h3>
          <div className="grid gap-1.5 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <LocateIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CurrencyIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Competitive</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Posted 2 days ago</span>
            </div>
          </div>
        </div>
        <div className="grid gap-1.5">
          <h3 className="text-lg font-semibold">Requirements</h3>
          <ul className="list-disc list-inside space-y-1.5">
            <li className="text-sm">
              3+ years of software engineering experience
            </li>
            <li className="text-sm">
              Proficiency in one or more programming languages (e.g., Java,
              Python, JavaScript)
            </li>
            <li className="text-sm">
              Experience with cloud platforms (e.g., AWS, Azure, GCP)
            </li>
            <li className="text-sm">
              Strong communication and collaboration skills
            </li>
            <li className="text-sm">
              Bachelor’s or Master’s degree in Computer Science or a related
              field
            </li>
          </ul>
        </div>
        <div className="grid  gap-1.5">
          <h3 className="text-lg font-semibold">Additional Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Languages:</span>
              <div className="flex gap-1.5">
                {job.languages.split(",").map((lang) => (
                  <Badge
                    key={lang}
                    className="inline-block rounded-full  px-3 py-1 text-sm "
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Benefits:</span>
              <div className="flex gap-1.5">
                {job.benefits.split(",").map((benefit) => (
                  <Badge
                    key={benefit}
                    className="inline-block rounded-full  px-3 py-1 text-sm "
                  >
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Nationality:</span>
              <FlagIcon className="w-4 h-4" />
              {job.nationality}
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 px-4 py-2 text-sm lg:gap-6 lg:grid-cols-3 lg:py-4">
        <div className="space-y-1.5">
          <h3 className="text-base font-medium">About the company</h3>
          <p className="text-sm text-gray-500 leading-relaxed md:text-base/relaxed dark:text-gray-400 md:leading-relaxed">
            {job.company.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
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

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
