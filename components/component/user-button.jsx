"use client";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import DarkModeToggle from "../navBarBtns/darkModeBtn";
import { PiHandshake } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";

export default function UserButton({ user, lng }) {
  const [open, setOpen] = useState(false);
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="border-rose-600 border-2"
    >
      <PopoverTrigger asChild>
        <div
          className="relative inline-block rounded-full flex items-center"
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
              href="/dashboard/myProfile"
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
                <LuLayoutDashboard className="w-6 h-6 text-green-600" />
                <span className="mx-3">Dashboard</span>
              </Link>
            )}
            {user?.company && (
              <Link
                onClick={() => setOpen(false)}
                className="py-3  items-center flex text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900"
                href={`/jobs/dashboard`}
              >
                <PiHandshake className="w-6 h-6 text-green-600" />
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
