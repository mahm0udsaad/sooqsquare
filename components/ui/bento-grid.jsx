import { cn } from "@/utils/cn";
import { Avatar, AvatarImage } from "./avatar";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[23rem] min-h-screen grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full min-h-[10rem] rounded-xl">
        <img
          src={header}
          alt="Ad image"
          className="w-full	h-full object-center object-cover rounded-xl"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Avatar>
          <AvatarImage
            className="rounded-full hover:opacity-50 transition"
            src={icon}
            alt="user"
          />
        </Avatar>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal  text-neutral-600 text-xs dark:text-neutral-300">
          <p className="cardDescription">{description}</p>
        </div>
        <div className="flex justify-end items-center w-full mt-2">
          <Link
            href={`/vehicle/${id}`}
            className="rounded-md py-3 px-4 main-bg text-white flex-1 text-center"
          >
            View Ad
          </Link>
        </div>
      </div>
    </div>
  );
};
