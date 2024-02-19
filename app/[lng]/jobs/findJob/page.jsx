import FilterSideBar from "./components/filter-bar";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import MainSection from "./components/main-section";
import { getAllJobPosts, getUserCompany } from "../action";
import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Jobs({ params: { lng } }) {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  const jobs = await getAllJobPosts();
  return (
    <>
      <MainSection />
      <div className="w-full flex justify-between mx-auto relative">
        <FilterSideBar lng={lng} user={user} />
        <div className="grid gap-4 grid-cols-2 max-w-[73%] max-h-screen chats overflow-y-scroll overflow-x-hidden">
          {jobs.map((job) => (
            <Card key={job.id} className="min-h-[12rem] block">
              <CardContent className="grid gap-2">
                <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
                  {job.jobCategory}
                </p>
                <CardTitle className="text-2xl font-bold text-[#fe2635]">
                  {job.title}
                </CardTitle>
                <CardDescription className="cardDescription">
                  {job.description}
                </CardDescription>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm text-gray-500">{job.city}</p>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm text-gray-500 ">
                    {job.salary?.split("-")[0]} - {job.salary?.split("-")[1]}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Link
                  className="inline-flex items-center underline hover:no-underline"
                  href="#"
                >
                  View Details
                  <ChevronRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
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
