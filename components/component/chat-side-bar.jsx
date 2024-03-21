"use client";

import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/context/darkModeContext";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Badge } from "@/components/ui/badge";
import { Delete, MoreVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteChat } from "@/app/[lng]/(chat)/chat/action";
import socket from "@/lib/chat";

export default function ChatSideBar({ user, lng }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { shopChats } = useDarkMode();
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
          status: otherUser?.status,
        };
      } else {
        // If the user is not the owner of the shop, return shop info
        return {
          username: chat.shops[0].shopName,
          image: chat.shops[0].shopImage,
          status: chat.shops[0]?.user.status,
        };
      }
    } else {
      // If the chat involves only users

      const otherUser = chat.users.find((u) => u.email !== user.email);

      return {
        username: otherUser?.username,
        image: otherUser?.image,
        status: otherUser?.status,
      };
    }
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const calculateUnreadCount = (chat) => {
    // Check if the chat has messages
    if (chat.messages && chat.messages.length > 0) {
      // Filter unread messages and count them
      const unreadCount = chat.messages.filter(
        (message) => !message.read && message.senderId !== user.id
      ).length;
      return unreadCount;
    }
    return null;
  };

  useEffect(() => {
    socket.emit("login", { userId: user.id });
  }, []);

  return (
    <div
      className={`contact lg:flex hidden bg-white dark:bg-zinc-950 overflow-y-auto overflow-x-hidden  flex-col 
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
                <div
                  key={chat.id}
                  className="flex justify-between w-full items-center"
                >
                  <Link
                    href={`/chat/${chat.id}`}
                    className="flex gap-4 transition  cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4"
                  >
                    <Avatar>
                      <img src={getOtherUserInfo(chat).image} alt="" />
                    </Avatar>
                    <div className=" px-4 flex w-full justify-between">
                      {getOtherUserInfo(chat).username}
                      {/* Display online/offline indicator based on user status */}
                    </div>
                  </Link>
                  {sidebarOpen && (
                    <>
                      {getOtherUserInfo(chat).status === "online" ? (
                        <Badge
                          className={
                            "bg-green-500 dark:bg-green-500 dark:text-white rounded-xl text-sm p-1 text-white inline-block"
                          }
                        >
                          online{" "}
                        </Badge>
                      ) : (
                        <Badge
                          className={
                            "bg-red-500 dark:bg-red-500 dark:text-white rounded-xl text-sm p-1 text-white inline-block"
                          }
                        >
                          offline{" "}
                        </Badge>
                      )}
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="z-20 text-sm bg-transparent hover:bg-transparent hover:text-white text-gray-500">
                            <MoreVertical />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <form action={deleteChat}>
                            <input
                              type="hidden"
                              name="chatId"
                              value={chat.id}
                            />
                            <Button className="flex bg-transparent gap-4 text-red-500">
                              <Delete />
                              Delete Chat
                            </Button>
                          </form>
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </div>
              ))
            : user.chats.map((chat) => (
                <div
                  key={chat.id}
                  className="flex justify-between w-full items-center"
                >
                  <Link
                    href={`/chat/${chat.id}`}
                    className="flex relative gap-4 transition w-4/5 cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4"
                  >
                    <Avatar>
                      <img src={getOtherUserInfo(chat).image} alt="" />
                    </Avatar>
                    {getOtherUserInfo(chat).status === "online" ? (
                      <span className="absolute bottom-5 right-3 shadow-lg inline-flex rounded-full h-3 w-3 bg-green-500 z-20"></span>
                    ) : (
                      <span className="absolute bottom-5 right-3 shadow-lg inline-flex rounded-full h-3 w-3 main-bg"></span>
                    )}
                    <div className=" px-4 flex w-full justify-between">
                      {getOtherUserInfo(chat).username}
                      {/* Display online/offline indicator based on user status */}
                    </div>
                  </Link>
                  {sidebarOpen && (
                    <>
                      {calculateUnreadCount(chat) !== 0 && (
                        <Badge className="bg-zinc-800 main-bg text-[10px] px-2 dark:bg-white">
                          {calculateUnreadCount(chat)}
                        </Badge>
                      )}

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="z-20 text-sm bg-transparent hover:bg-transparent hover:text-white text-gray-500">
                            <MoreVertical />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <form action={deleteChat}>
                            <input
                              type="hidden"
                              name="chatId"
                              value={chat.id}
                            />
                            <Button className="flex bg-transparent gap-4 text-red-500">
                              <Delete />
                              Delete Chat
                            </Button>
                          </form>
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </div>
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
