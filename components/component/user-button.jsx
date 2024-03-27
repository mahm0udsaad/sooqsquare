"use client";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import DarkModeToggle from "../navBarBtns/darkModeBtn";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LucideHeartHandshake } from "lucide-react";

export default function UserButton({ user, lng }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="border-rose-600 border-2"
    >
      <PopoverTrigger asChild>
        <div
          className="relative shadow-lg inline-block rounded-full flex items-center"
          style={{
            padding: "3px", // Adjust padding as needed
            background: "linear-gradient(to right,rgb(255 0 241) , #fe2635)", // Adjust gradient colors
          }}
        >
          <Avatar>
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <AvatarImage
                className="rounded-full hover:opacity-50 transition"
                src={user?.image}
                alt="user"
              />
            </div>
            <AvatarFallback>
              <UserIcon className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 dark:bg-zinc-950 dark:text-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Link
              onClick={() => setOpen(false)}
              className="flex py-3  items-center "
              href={
                pathname.includes("/jobs")
                  ? "/jobs/profile"
                  : "/dashboard/myProfile"
              }
            >
              <UserIcon className="w-6 h-6 " />
              <span className="mx-3 ">Profile</span>
            </Link>

            <Link
              onClick={() => setOpen(false)}
              className="flex py-3  items-center "
              href="/dashboard/myAds"
            >
              <AtSignIcon className="w-6 h-6 text-sky-600" />
              <span className="mx-3 ">My Ads</span>
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="flex py-3  items-center "
              href="/dashboard/favorites"
            >
              <HeartIcon className="w-6 h-6 text-rose-600" />
              <span className="mx-3">Favorites</span>
            </Link>
            {user?.shop.length > 0 && (
              <Link
                onClick={() => setOpen(false)}
                className="py-3  items-center flex text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                href={`/dashboard`}
              >
                <LayoutDashboard className="w-6 h-6 text-green-600" />
                <span className="mx-3">Dashboard</span>
              </Link>
            )}
            {user?.company && (
              <Link
                onClick={() => setOpen(false)}
                className="py-3  items-center flex text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                href={`/jobs/dashboard`}
              >
                <LucideHeartHandshake className="w-6 h-6 text-green-600" />
                <span className="mx-3">Company</span>
              </Link>
            )}
            <div className="flex justify-between items-center w-full border-t-2">
              <Link
                onClick={() => setOpen(false)}
                className="flex py-3  items-center text-rose-600"
                href="#"
              >
                <LogOutIcon className="w-6 h-6" />
                <span className="mx-3">Logout</span>
              </Link>
              <DarkModeToggle lng={lng} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
function PiHandshake() {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M247.77734,109.07471,223.18457,61.97852a12.05548,12.05548,0,0,0-16.00391-5.1792l-24.125,12.062H164.86377L131.08008,53.5752a12.0181,12.0181,0,0,0-8.30469-.58741L72.59766,67.61615,48.81934,55.72754a12.05752,12.05752,0,0,0-16.00391,5.17871L8.22266,108.00342a12.00088,12.00088,0,0,0,5.2705,16.28711L37.853,136.47046l54.34424,42.49438a11.91724,11.91724,0,0,0,4.48144,2.18946l57.957,14.48925a11.91,11.91,0,0,0,2.88281.35352,12.06751,12.06751,0,0,0,8.5127-3.50977l36.79688-36.79736c.07421-.07373.14453-.15039.21289-.22949l15.47363-18.10211,23.99219-11.996a12.00124,12.00124,0,0,0,5.2705-16.28759Zm-48.415,38.37689-41.00976-29.82514a4.00119,4.00119,0,0,0-4.75293.03467l-12.79981,9.6001a28.14358,28.14358,0,0,1-33.5996,0l-5.4209-4.06543a3.99978,3.99978,0,0,1-.42871-6.02783L140.48535,78.0332a4.02842,4.02842,0,0,1,2.82813-1.17187h20.67529l.00928.001.01367-.001h17.56445l29.627,56.73761ZM15.05469,114.78906a3.96941,3.96941,0,0,1,.25976-3.083L39.90723,64.60889a4.01768,4.01768,0,0,1,3.56152-2.144,3.95148,3.95148,0,0,1,1.77246.418l21.3291,10.66407L38.27344,127.73633,17.07129,117.13525A3.96911,3.96911,0,0,1,15.05469,114.78906Zm145.32031,72.041a4.01527,4.01527,0,0,1-3.7998,1.05176l-57.957-14.48926a3.96913,3.96913,0,0,1-1.49316-.72949l-52.03809-40.691L74.65332,75.35l50.36035-14.68152a4.00066,4.00066,0,0,1,2.76856.19531l17.67431,7.99756h-2.14306A11.91947,11.91947,0,0,0,134.8291,72.376L95.69434,111.51074a11.99951,11.99951,0,0,0,1.28418,18.08545l5.42089,4.06543a36.18887,36.18887,0,0,0,43.20118,0l10.43554-7.82764,37.82569,27.509Zm80.57031-70.96924a3.96914,3.96914,0,0,1-2.0166,2.34619l-21.20215,10.60108L189.42969,74.61865l21.3291-10.66406a4.01661,4.01661,0,0,1,5.334,1.72656l24.59278,47.09619A3.97079,3.97079,0,0,1,240.94531,115.86084ZM115.88086,213.83105a3.99648,3.99648,0,0,1-4.85059,2.91114L80.89063,209.208a12.065,12.065,0,0,1-4.9629-2.58594L53.376,187.01855a3.99964,3.99964,0,1,1,5.248-6.0371L81.17676,200.585a4.03759,4.03759,0,0,0,1.65625.86231l30.13672,7.5332A4.00094,4.00094,0,0,1,115.88086,213.83105Z" />
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
function AtSignIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
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
function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
