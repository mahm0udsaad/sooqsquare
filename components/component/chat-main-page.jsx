"use client"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { MdOutlineMarkChatRead } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
export function ChatMainPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  return (
    (<div className="flex pb-8 bg-gray-100 dark:bg-zinc-950">
         <div className={`contact bg-white dark:bg-zinc-950 overflow-y-auto  ${sidebarOpen ? "transition-width w-1/3 ":"transition-width w-[5%] "}`}>
      <div className="p-4 flex items-center justify-between">
        <h2 className={`${sidebarOpen ? 'text-lg':"hidden"} font-semibold text-gray-900 dark:text-gray-100`}>Inbox</h2>
        <Button size="icon" variant="ghost" onClick={toggleSidebar}>
          <SendToBackIcon className="h-6 w-6" />
        </Button>
      </div>
      <div className={`divide-y divide-zinc-200 dark:divide-zinc-700 `}>
          <Link href={`/chat/`} className="flex cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4">
            <Avatar>
            <FaRegUser className="mx-auto my-auto" />
            </Avatar>
            {sidebarOpen && <div className="font-medium px-4">John Doe</div>}
          </Link>
      </div>
    </div>
      <div className="flex-1 bg-gray-50 pt-4 rounded-lg dark:bg-zinc-800">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chat</h2>
        </div>
        <div className="flex flex-col h-[80dvh] space-y-4 p-4 h-full overflow-y-auto">
        <main className="flex flex-col items-center justify-center h-screen w-full ">
        <MdOutlineMarkChatRead className="h-16 w-16 main-color  mb-4" />
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">Choose a conversation to start</h2>
      </main>
        </div>
      </div>
    </div>)
  );
}


function SendToBackIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </svg>)
  );
}



function SendIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>)
  );
}
