import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

export default function MainPage({ jobs }) {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 max-w-[73%] max-h-screen chats overflow-y-scroll overflow-x-hidden">
        {jobs.map((job) => (
          <Card className="flex flex-col min-h-[300px]">
            <CardContent className="flex-1 grid gap-2">
              <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
                {job.title}
              </p>
              <CardTitle className="text-2xl font-bold text-[#fe2635]">
                {job.title}
              </CardTitle>
              <CardDescription>{job.description}</CardDescription>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm text-gray-500">$120,000 - $140,000</p>
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
        <Card className="flex flex-col min-h-[300px]">
          <CardContent className="flex-1 grid gap-2">
            <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
              Engineering
            </p>
            <CardTitle className="text-2xl font-bold text-[#fe2635]">
              Senior Frontend Engineer
            </CardTitle>
            <CardDescription>
              We're looking for a passionate frontend engineer to join our team.
              You'll work on exciting projects and help shape the future of our
              platform.
            </CardDescription>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">$120,000 - $140,000</p>
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
        <Card className="flex flex-col min-h-[300px]">
          <CardContent className="flex-1 grid gap-2">
            <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
              Sales
            </p>
            <CardTitle className="text-2xl font-bold text-[#fe2635]">
              Account Executive
            </CardTitle>
            <CardDescription>
              Join our sales team and help drive growth. We're looking for
              talented individuals who are passionate about connecting with
              customers.
            </CardDescription>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">New York, NY</p>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">$100,000 - $120,000</p>
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
        <Card className="flex flex-col min-h-[300px]">
          <CardContent className="flex-1 grid gap-2">
            <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
              Marketing
            </p>
            <CardTitle className="text-2xl font-bold text-[#fe2635]">
              Marketing Manager
            </CardTitle>
            <CardDescription>
              We're seeking a creative marketing manager to lead our marketing
              efforts. You'll develop and execute marketing campaigns to drive
              brand awareness and customer engagement.
            </CardDescription>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">Remote</p>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">$90,000 - $110,000</p>
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
        <Card className="flex flex-col min-h-[300px]">
          <CardContent className="flex-1 grid gap-2">
            <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
              Customer Support
            </p>
            <CardTitle className="text-2xl font-bold text-[#fe2635]">
              Customer Support Specialist
            </CardTitle>
            <CardDescription>
              We're looking for friendly and enthusiastic individuals to join
              our customer support team. As a customer support specialist,
              you'll assist customers with product inquiries, resolve issues,
              and provide exceptional service.
            </CardDescription>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">Austin, TX</p>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">$40,000 - $50,000</p>
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
        <Card className="flex flex-col min-h-[300px]">
          <CardContent className="flex-1 grid gap-2">
            <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
              Finance
            </p>
            <CardTitle className="text-2xl font-bold text-[#fe2635]">
              Financial Analyst
            </CardTitle>
            <CardDescription>
              We're seeking a detail-oriented financial analyst to join our
              finance team. You'll be responsible for analyzing financial data,
              preparing reports, and providing insights to support strategic
              decision-making.
            </CardDescription>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">Chicago, IL</p>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500">$60,000 - $80,000</p>
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
      </div>
      {/* <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="container px-4 py-8 md:py-12 lg:py-16 xl:py-20 grid gap-4 text-center md:gap-6 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Create an account to apply for jobs and unlock additional
              features.
            </p>
          </div>
          <div className="mx-auto grid max-w-[400px] gap-2">
            <Link
              className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Create an Account
            </Link>
            <Link
              className="inline-flex h-10 items-center rounded-md bg-[#fe2635] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#fe2635]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fe2635] disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div> */}
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
