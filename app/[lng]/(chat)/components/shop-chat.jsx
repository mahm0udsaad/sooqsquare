"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import {
  createMessage,
  fetchMessagesFromDatabase,
} from "@/app/[lng]/(chat)/chat/action";
import socket from "@/lib/chat";
import StarRating from "@/components/component/rate";
import { createShopMessage } from "../chat/action";
const ChatWithShop = ({ user, chat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const getOtherUserInfo = () => {
    // If the chat involves a shop
    if (user.id === chat.shop.userId) {
      // If the user is the owner of the shop
      const otherUser = chat.users[0];
      return {
        id: otherUser?.id,
        username: otherUser?.username,
        image: otherUser?.image,
      };
    } else {
      // If the user is not the owner of the shop, return shop info
      return {
        id: chat.shop.id,
        username: chat.shop.shopName,
        image: chat.shop.shopImage,
      };
    }
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      if (user.id === chat.shop.userId) {
        const newMessage = await createShopMessage(
          message,
          chat.shop.id,
          chat.users[0].id,
          chat.id,
          true
        );
        socket.emit("chat message", { chatId: chat.id, message: newMessage });
        setMessage("");
        console.log(newMessage);
      } else {
        const newMessage = await createShopMessage(
          message,
          chat.users[0].id,
          chat.shop.id,
          chat.id,
          false
        );
        socket.emit("chat message", { chatId: chat.id, message: newMessage });
        setMessage("");
        console.log(newMessage);
      }
    }
  };
  // Function to handle message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  // Effect to set up push notifications and fetch messages
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMessages = await fetchMessagesFromDatabase(chat);
        if (fetchedMessages.length === 0) {
          setMessages(null);
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

  return (
    <>
      <div className="flex-1 bg-gray-50  h-auto  rounded-lg dark:bg-zinc-800">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Chat with {getOtherUserInfo().username}
          </h2>
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
                  chat.message.senderShop
                    ? "justify-end"
                    : "justify-end flex-row-reverse"
                }`}
              >
                <div>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block bg-gray-600 text-white rounded-br-none`}
                  >
                    {chat.message.content}
                  </span>
                </div>
                <img
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2"
                  src={
                    chat.message.senderShop
                      ? chat.message.senderShop.shopImage
                      : chat.message?.sender.image
                  }
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
    </>
  );
};
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
export default ChatWithShop;
