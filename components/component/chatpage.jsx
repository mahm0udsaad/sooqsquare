"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import {
  createMessage,
  fetchMessagesFromDatabase,
} from "@/app/[lng]/(chat)/chat/action";
import socket from "@/lib/chat";
import subscribeToPushNotifications from "../../helper/notfication";
import StarRating from "@/components/component/rate";
import { updateUserStatus } from "@/prisma/actions";
import { debounce } from "lodash"; // Import debounce function from lodash

export function ChatCom({ chat, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const debouncedUpdateUserStatus = debounce((userId, status) => {
    updateUserStatus(userId, status);
  }, 10000);
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      const newMessage = await createMessage(
        message,
        user.email,
        reciver,
        chat.id
      );
      socket.emit("chat message", { chatId: chat.id, message: newMessage });
      setMessage("");
    }
  };
  // Function to handle message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  // Effect to set up push notifications and fetch messages
  useEffect(() => {
    if (user.subscriptions.length < 1) {
      subscribeToPushNotifications(user.id);
    }

    const fetchData = async () => {
      try {
        const fetchedMessages = await fetchMessagesFromDatabase(chat);
        if (fetchedMessages.length === 0) {
          setMessages([]);
        } else {
          setMessages(
            fetchedMessages.map((message) => ({ chatId: chat.id, message }))
          );
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });
    socket.on("chat message", ({ chatId, message }) => {
      setMessages((prev) => [...prev, { chatId, message }]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);
  // Effect to scroll to the bottom of the messages container
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Simulating user status changes every 500ms for demonstration
    socket.on("user status", ({ id, status }) => {
      // Debounce the updateUserStatus function call
      debouncedUpdateUserStatus(user.id, status);
    });
  }, [socket]);

  const owner = chat.users[0];
  const currentUser = chat.users[1];
  const reciver = currentUser.email === user.email ? owner : currentUser;

  return (
    <div className="flex-1 bg-gray-50  h-auto  rounded-lg dark:bg-zinc-800">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Chat with {owner.username}
        </h2>
        <StarRating owner={reciver} userId={currentUser.id} />
      </div>
      <div
        ref={messagesContainerRef}
        className="chats relative flex flex-col space-y-4 p-4 h-[70dvh] overflow-y-scroll overflow-x-hidden"
      >
        {messages &&
          messages.map((chat, index) => (
            <div
              key={chat.message.id}
              className={`flex items-end gap-2 max-w-1/2  ${
                chat.message.sender?.email === user.email
                  ? "justify-end"
                  : "justify-end flex-row-reverse"
              }`}
            >
              <div>
                <span
                  className={`px-4 py-2 rounded-lg inline-block  ${
                    chat.message.sender?.email === user.email
                      ? "bg-blue-600 text-white rounded-bl-none"
                      : "bg-gray-600 text-white rounded-br-none"
                  }`}
                >
                  {chat.message.content}
                </span>
              </div>
              <img
                alt="My profile"
                className="w-6 h-6 rounded-full order-2"
                src={chat.message?.sender.image}
              />
            </div>
          ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="form border-t-[1px] border-gray-200 px-4 py-4  sm:mb-0"
      >
        <div className="relative flex">
          <Input
            onChange={handleMessageChange}
            value={message}
            className="pl-10 pr-20 rounded-full border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:bg-zinc-800"
            placeholder="Write something..."
          />
          <div className="absolute right-2  items-center  inset-y-0 hidden sm:flex">
            <Button
              type="submit"
              className="ml-2  hover:bg-transparent hover:opacity-50"
              size="icon"
              variant="ghost"
            >
              <SendIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
