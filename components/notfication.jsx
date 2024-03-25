"use client";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Bell } from "lucide-react";
import { markNotificationsAsRead } from "@/prisma/actions";
import { timeSince } from "@/helper/timeConversion";
import socket from "@/lib/chat";
import { useEffect, useState } from "react";

export default function NotificationsBell({ Notifications, userId }) {
  const [hasUnreadNotification, setHasUnreadNotification] = useState(false);
  const [notifications, setNotifications] = useState(Notifications);

  useEffect(() => {
    // Listen for "notificationReceived" event from the server
    socket.on("notificationReceived", handleNotificationReceived);
    // Clean up the event listener when component unmounts
    return () => {
      socket.off("notificationReceived", handleNotificationReceived);
    };
  }, []);

  // Handler function for "notificationReceived" event
  const handleNotificationReceived = (notification) => {
    // Add the new notification to the list of notifications
    if (notification.recipientId == userId) {
      const hasUnread = notifications.some(
        (notification) => !notification.read
      );
      setHasUnreadNotification(hasUnread);
      setNotifications((prevNotifications) => [
        notification,
        ...prevNotifications,
      ]);
    }
  };

  const handleMarkAll = () => {
    setNotifications([]);
    setHasUnreadNotification(false);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="rounded-xl ml-2 relative shadow hover:shadow-inner hover:bg-transparent dark:bg-zinc-800 dark:border-none"
          size="icon"
          variant="outline"
        >
          {hasUnreadNotification && (
            <span className="absolute top-0 right-0 shadow inline-flex rounded-full h-3 w-3 main-bg"></span>
          )}{" "}
          <Bell size={20} />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-80">
        <Card className="border-none shadow-none">
          <CardHeader className="p-4 border-b">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              You have {notifications.length} unread messages.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 max-h-[50dvh] overflow-y-scroll notfs">
            <div className="grid gap-4 p-4">
              {notifications?.map((notf) => (
                <div key={timeSince(notf?.createdAt)} className="grid gap-1.5">
                  <h3 className="text-sm font-bold leading-none">
                    {notf.content}
                  </h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {timeSince(notf?.createdAt)}
                  </time>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 justify-center">
            <form action={markNotificationsAsRead}>
              <input type="hidden" name="userId" value={userId} />
              <Button onClick={handleMarkAll} size="sm" className="shadow">
                Mark all as read
              </Button>
            </form>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
