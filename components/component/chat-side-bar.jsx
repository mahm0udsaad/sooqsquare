"use client";

import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/context/darkModeContext";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function ChatSideBar({ user, lng }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { userStatuses, updateUserStatus } = useDarkMode();
  const { shopChats } = useDarkMode();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Function to get the other user's information
  const getOtherUserInfo = (chat) => {
    if (chat.shops?.length > 0) {
      // If the chat involves a shop
      if (user.id === chat.shops[0].userId) {
        // If the user is the owner of the shop
        const otherUser = chat.users[0];
        return {
          username: otherUser?.username,
          image: otherUser?.image,
        };
      } else {
        // If the user is not the owner of the shop, return shop info
        return {
          username: chat.shops[0].shopName,
          image: chat.shops[0].shopImage,
        };
      }
    } else {
      // If the chat involves only users
      const otherUser = chat.users.find((u) => u.email !== user.email);
      return {
        username: otherUser?.username,
        image: otherUser?.image,
      };
    }
  };

  useEffect(() => {
    // Example usage of updateUserStatus
    updateUserStatus(user.id, "online");
  }, []);

  return (
    <div
      className={`contact bg-white dark:bg-zinc-950 overflow-y-auto overflow-x-hidden flex flex-col 
      justify-between ${
        sidebarOpen ? "transition-width w-1/3 " : "transition-width w-[5%] "
      }`}
    >
      <div>
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`${
              sidebarOpen ? "text-lg" : "hidden"
            } font-semibold text-gray-900 dark:text-gray-100`}
          >
            Inbox
          </h2>
          <Button size="icon" variant="ghost" onClick={toggleSidebar}>
            <SendToBackIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className={`divide-y divide-zinc-200 dark:divide-zinc-700 `}>
          {shopChats
            ? shopChats.map((chat) => (
                <Link
                  key={chat.id}
                  href={`/chat/${chat.id}`}
                  className="flex  cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4"
                >
                  <Avatar>
                    <img src={getOtherUserInfo(chat).image} alt="" />
                  </Avatar>
                  {sidebarOpen && (
                    <div className="font-medium px-4 flex w-full justify-between">
                      {getOtherUserInfo(chat).username}
                      {/* Display online/offline indicator based on user status */}
                      {userStatuses[user.id] === "online" ? (
                        <span className="ml-2 bg-green-500 rounded-full w-3 h-3 inline-block"></span>
                      ) : (
                        <span className="ml-2 bg-red-500 rounded-full w-3 h-3 inline-block"></span>
                      )}
                    </div>
                  )}
                </Link>
              ))
            : user.chats.map((chat) => (
                <Link
                  key={chat.id}
                  href={`/chat/${chat.id}`}
                  className="flex  cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4"
                >
                  <Avatar>
                    <img src={getOtherUserInfo(chat).image} alt="" />
                  </Avatar>
                  {sidebarOpen && (
                    <div className="font-medium px-4 flex w-full justify-between">
                      {getOtherUserInfo(chat).username}
                      {/* Display online/offline indicator based on user status */}
                      {userStatuses[user.id] === "online" ? (
                        <span className="ml-2 bg-green-500 rounded-full w-3 h-3 inline-block"></span>
                      ) : (
                        <span className="ml-2 bg-red-500 rounded-full w-3 h-3 inline-block"></span>
                      )}
                    </div>
                  )}
                </Link>
              ))}
        </div>
      </div>
      {user.shop?.length > 0 && (
        <div className="w-11/12 flex justify-end pb-8">
          <AnimatedTooltip items={user.shop} lng={lng} />
        </div>
      )}
    </div>
  );
}

function SendToBackIcon(props) {
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
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
