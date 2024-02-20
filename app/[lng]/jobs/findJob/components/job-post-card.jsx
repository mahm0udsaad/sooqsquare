import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { timeSince } from "@/helper/timeConversion";
import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <Card className="w-full max-w-3xl p-4">
      <div className="flex items-center gap-4">
        <div className="rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800">
          <img
            alt="Company logo"
            height="48"
            src={job.company?.logoUrl}
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width="48"
          />
        </div>
        <div className="grid gap-0.5">
          <h1 className="text-2xl font-bold py-2 tracking-tighter leading-none">
            {job.jobCategory}
          </h1>
          <p className="text-sm font-medium text-gray-500 leading-none dark:text-gray-400">
            {job.company.name}
          </p>
        </div>
      </div>
      <div className="cardDescription prose prose-gray max-w-none wysiwyg mt-4">
        <p>{job.description} </p>
      </div>
      <div className="grid gap-1.5 mt-4">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {job.company.city}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {job.salary}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {job.educationLevel}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            12 applicants
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {timeSince(job.postedAt)}
          </span>
        </div>
        <Link
          className="main-bg rounded-xl text-center px-4 py-2"
          href={`/jobs/findJob/${job.id}`}
        >
          View
        </Link>
      </div>
    </Card>
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
