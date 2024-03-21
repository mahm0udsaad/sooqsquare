import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { timeSince } from "@/helper/timeConversion";
import { X } from "lucide-react";
import AddSkillDailoag from "./add-skills-dialoag";
import AddWorkExp from "./work-experince";
import AddEducation from "./education-dialoag";
import { deleteUserSkill } from "../profile/actions";
import EditProfileInfo from "./edit-main-info";
import ExperienceCard from "./cards/workExperince";
import PDFUpload from "../findJob/components/pdfInput";
import Link from "next/link";

export default function JobProfile({ user, searchParams }) {
  console.log(user.cvUrl);
  return (
    <div className="flex gap-6 ">
      <div className="w-[30%] lg:block hidden">
        <Card className="shadow p-4 flex flex-col gap-4 sticky top-20">
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium">Profile</div>
            <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
              60%
            </div>
          </div>
          <Progress className="h-1 rounded-lg bg-red-200 " value={60} />
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>Update profile picture</div>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>Add email address</div>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>Add phone number</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full space-y-4">
        <div className="space-y-2 flex w-11/12 justify-between items-center gap-4">
          <div className="">
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <p className="main-bg text-white text-sm font-semibold px-2 text-center rounded-full">
              {user.jobTitle}
            </p>
          </div>
          <EditProfileInfo user={user} />
        </div>
        <div className="space-y-6 lg:min-h-[30dvh] lg:col-span-2">
          <div className="grid gap-1.5 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <MapIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>{user.country}</div>
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>{user?.age} years old</div>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>Joined on {timeSince(user.createdAt)}</div>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4 mx-2 flex-shrink-0" />
              <div>{user.yearsOfExperince} years of experience</div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="shadow w-full max-w-md p-4 space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-bold">Contact Information</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This information is private.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4 mx-2 flex-shrink-0" />
                <div>{user.email}</div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 mx-2 flex-shrink-0" />
                <div>{user.phoneNumber}</div>
              </div>
              {user.website && (
                <div className="flex items-center space-x-2">
                  <LinkIcon className="w-4 h-4 mx-2 flex-shrink-0" />
                  <div>{user.website}</div>
                </div>
              )}
            </div>
          </Card>
          <Card className="shadow flex max-w-md flex-col items-center justify-center p-6 gap-2 text-center">
            {user.cvUrl ? (
              <Link target="_blank" href={user.cvUrl}>
                <FileIcon className="w-12 h-12 text-red-500" />
                <h3 className="text-lg font-bold">Resume</h3>
              </Link>
            ) : (
              <>
                <FileIcon className="w-12 h-12" />
                <h3 className="text-lg font-bold">Resume</h3>
              </>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated 2 days ago
            </p>
            <PDFUpload userId={user.id} />
          </Card>
        </div>
        <Card className="shadow p-4 w-full space-y-4">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-lg font-bold">Skills</h2>
            <AddSkillDailoag userId={user.id} />
          </div>
          <div className="flex flex-wrap gap-4">
            {user.skills?.split(",").length > 0 ? (
              user.skills.split(",").map((skill) => (
                <Badge key={skill} variant="secondary" className="relative">
                  <form action={deleteUserSkill}>
                    <input type="hidden" name="userId" value={user.id} />
                    <input type="hidden" name="skill" value={skill} />
                    <Button
                      size="icon"
                      className="absolute -top-2 left-0 px-0 h-4 w-4 rounded-full "
                    >
                      <X size={14} />
                    </Button>
                  </form>
                  {skill}
                </Badge>
              ))
            ) : user.skills?.split("").length > 0 ? (
              <Badge variant="secondary">
                <form action={deleteUserSkill}>
                  <input type="hidden" name="userId" value={user.id} />
                  <input type="hidden" name="skill" value={user.skill} />
                  <Button
                    size="icon"
                    className="absolute -top-2 left-0 px-0 h-4 w-4 rounded-full "
                  >
                    <X size={14} />
                  </Button>
                </form>
                {user.skill}
              </Badge>
            ) : null}
          </div>
        </Card>
        <Card className="shadow p-4 w-full space-y-4">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-lg font-bold">Work Experience</h2>
            <AddWorkExp userId={user.id} searchParams={searchParams} />
          </div>
          <div className="grid grid-cols-3 gap-2 w-full">
            {user.workExperiences?.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Details about work experience.
          </p>
        </Card>
        <Card className="shadow p-4 w-full space-y-4">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-lg font-bold">Education and Certifications</h2>
            <AddEducation />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Details about education, courses, and certifications.
          </p>
        </Card>
        <Card className="shadow p-4 w-full space-y-4">
          <div>
            <h2 className="text-lg font-bold">Activities</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Details about activities.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapIcon(props) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
