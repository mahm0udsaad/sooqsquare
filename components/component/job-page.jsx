import Link from "next/link";
import { Button } from "@/components/ui/button";
import { timeSince } from "@/helper/timeConversion";

export default function JobPage({ job, user }) {
  return (
    <main className="flex-1 max-w-4/5">
      <div className="container py-8 px-4 md:py-14 md:px-6">
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">
                {job.title}
              </h1>
              <div className="flex items-center space-x-2">
                <img
                  alt="Company logo"
                  className="rounded-full object-cover"
                  height="40"
                  src={job.company.logoUrl}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <span className="text-base font-bold">{job.company.name}</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-sm leading-loose lg:space-y-6 lg:text-base xl:text-lg">
            <p className="text-gray-500 dark:text-gray-400">
              {job.description}
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{job.company.city}</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p>{job.jobCategory}</p>
              </div>
              <div>
                <h3 className="font-semibold">Salary</h3>
                <p>{job.salary}</p>
              </div>
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p>{job.experience}</p>
              </div>
              <div className="col-span-2">
                <h3 className="font-semibold">Posted</h3>
                <p>{timeSince(job.postedAt)}</p>
              </div>
              <div className="col-span-2">
                <h3 className="font-semibold">Career Level</h3>
                <p>{job.educationLevel}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge>UX Design</Badge>
              <Badge>UI Design</Badge>
              <Badge>Interaction Design</Badge>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-4 h-4" />
              <span className="font-semibold">Benefits</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div>
                <h3 className="font-semibold">Skills</h3>
                <ul className="list-disc list-inside">
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Gender</h3>
                <p>{job.gender}</p>
              </div>
              <div>
                <h3 className="font-semibold">Employment Type</h3>
                <p>{job.employmentType}</p>
              </div>
              <div>
                <h3 className="font-semibold">Education</h3>
                <p>{job.educationLevel}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileIcon className="w-4 h-4" />
              <span className="font-semibold">CV Required</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FileIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
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

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
