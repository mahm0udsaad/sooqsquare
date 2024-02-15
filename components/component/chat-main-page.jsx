"use client"
import { useEffect, useState } from "react";
import { MdOutlineMarkChatRead } from "react-icons/md";
import socket from "@/lib/chat";

export function ChatMainPage() {
  const [userStatus, setUserStatus] = useState('offline'); // State to store user status

  useEffect(() => {
    // Listen for user status updates
    socket.on('user status', ({ id, status }) => {
      console.log(`User ${id} is now ${status}`);
    });

    // Cleanup: Remove event listener when component unmounts
    return () => {
      socket.off('user status');
    };
  }, []);

  return (
    <div className="flex-1 bg-gray-50 pt-4 rounded-lg dark:bg-zinc-800">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chat</h2>
        <div>
          {/* Display user status */}
          <span className={`inline-block px-2 py-1 rounded ${userStatus === 'online' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {userStatus}
          </span>
        </div>
      </div>
      <div className="flex flex-col h-[80dvh] space-y-4 p-4 h-full overflow-y-auto">
        <main className="flex flex-col items-center justify-center h-screen w-full ">
          <MdOutlineMarkChatRead className="h-16 w-16 main-color mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">Choose a conversation to start</h2>
        </main>
      </div>
    </div>
  );
}
