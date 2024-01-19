"use client"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export function ChatCom() {
  const [messages, setMessages] = useState([]);
  // State to store the current message
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
      // Create a socket connection
      const socket = io();

      // Listen for incoming messages
      socket.on('message', (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
      });

      // Clean up the socket connection on unmount
      return () => {
          socket.disconnect();
      };
  }, []);

  const sendMessage = () => {
      // Send the message to the server
      socket.emit('message', currentMessage);
      // Clear the currentMessage state
      setCurrentMessage('');
  };
  
  return (
    (<div className="flex pb-8 bg-gray-100 dark:bg-zinc-950">
      <div className="w-1/3 bg-white dark:bg-zinc-950 overflow-y-auto">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Inbox</h2>
          <Button size="icon" variant="ghost">
            <SendToBackIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex items-center p-4 space-x-4">
            <Avatar>
              <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="font-medium">John Doe</div>
          </div>
          <div className="flex items-center p-4 space-x-4">
            <Avatar>
              <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="font-medium">Jane Doe</div>
          </div>
          <div className="flex items-center p-4 space-x-4">
            <Avatar>
              <AvatarImage alt="@alexsmith" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="font-medium">Alex Smith</div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-50  rounded-lg dark:bg-zinc-800">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chat with John Doe</h2>
          <Button size="icon" variant="ghost">
            <SendToBackIcon className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col h-[70dvh] space-y-4 p-4 h-full overflow-y-auto">
          <div className="flex items-end">
            <div
              className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span
                  className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">
                  Hey! How's it going?
                </span>
              </div>
            </div>
            <img
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
              src="/placeholder.svg" />
          </div>
          <div className="flex items-start justify-end">
            <div
              className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span
                  className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600">
                  Not bad, thanks for asking!
                </span>
              </div>
            </div>
            <img
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
              src="/placeholder.svg" />
          </div>
        </div>
          <div className="form border-t-[1px] border-gray-200 px-4 py-4  sm:mb-0">
          <div className="relative flex">
            <Input
              className="pl-10 pr-20 rounded-full border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              placeholder="Write something..." />
            <div className="absolute right-2  items-center  inset-y-0 hidden sm:flex">
              <Button className="ml-2 hover:bg-transparent hover:opacity-50" size="icon" variant="ghost">
                <SendIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
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


function SmileIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
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
