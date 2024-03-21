"use client";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/app/i18n/client";
import { useFormStatus } from "react-dom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDarkMode } from "@/context/darkModeContext";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export const SaveBtn = ({ lng }) => {
  const { t } = useTranslation(lng, "view");
  const searchParams = useSearchParams();
  const { setConfettiActive } = useDarkMode();
  const status = useFormStatus();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + "?" + updatedParams);
  };

  if (status.data) {
    createQueryString("sucess", true);
    setConfettiActive(true);
  }

  return (
    <>
      <Button
        disabled={status.pending}
        className="flex h-14 w-full rounded-md self-end justify-around rounded-md bg-gray-900  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      >
        {status.pending ? "loading..." : t("saveAd")}
        <HardDriveIcon className="ml-2 h-4 w-4 mx-3" />
      </Button>
    </>
  );
};
export const SaveFormBtn = () => {
  const status = useFormStatus();
  const { toast } = useToast();

  useEffect(() => {
    if (status.data) {
      toast({
        title: "form Submited Succesfully",
      });
    }
  }, []);

  return (
    <>
      <Button disabled={status.pending} className="main-bg">
        {status.pending ? "loading..." : "save"}
        <HardDriveIcon className="ml-2 h-4 w-4 mx-3" />
      </Button>
    </>
  );
};
export const PublishBtn = ({ lng }) => {
  const { t } = useTranslation(lng, "view");
  const searchParams = useSearchParams();
  const { setConfettiActive } = useDarkMode();
  const status = useFormStatus();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  if (status.data) {
    createQueryString({ sucess: true });
    setConfettiActive(true);
    // Reset the confetti after a short delay
    setTimeout(() => {
      setConfettiActive(false);
    }, 4000);
  }
  return (
    <Button
      disabled={status.pending}
      className="flex h-14 w-full hover:text-black rounded-md self-end rounded-md bg-green-500   text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
    >
      {status.pending ? "loading..." : t("publishAd")}
      <PlaneIcon className="ml-2 h-4 w-4 mx-3" />
    </Button>
  );
};
function PlaneIcon(props) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
function HardDriveIcon(props) {
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
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  );
}
