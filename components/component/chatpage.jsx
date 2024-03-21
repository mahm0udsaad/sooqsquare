"use client";

import { useState, useEffect, useRef } from "react";
import {
  fetchMessagesFromDatabase,
  updateMessageReadStatus,
} from "@/app/[lng]/(chat)/chat/action";
import socket from "@/lib/chat";
import subscribeToPushNotifications from "../../helper/notfication";
import StarRating from "@/components/component/rate";
import { Check, CheckCheck, ImageDown } from "lucide-react";
import { timeSince } from "@/helper/timeConversion";
import Record from "./record";

export function ChatCom({ chat, user }) {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  // Effect to set up push notifications and fetch messages
  useEffect(() => {
    if (!user.subscriptions) {
      subscribeToPushNotifications(user.id);
    }

    const fetchData = async () => {
      try {
        const fetchedMessages = await fetchMessagesFromDatabase(chat);
        if (fetchedMessages?.length === 0) {
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

    socket.on("messageReadConfirmation", ({ messageId }) => {
      if (!messageId) return;
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.message.id === messageId
            ? { ...msg, message: { ...msg.message, read: true } }
            : msg
        )
      );
    });

    return () => {
      socket.off("chat message");
      socket.off("messageReadConfirmation");
    };
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }

    const observer = new IntersectionObserver(async (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const messageId = entry.target.getAttribute("data-message-id");
          if (messageId) {
            // Find the message with the given messageId in the messages state
            const message = messages.find((msg) => msg.message.id == messageId);
            if (message && !message.message.read) {
              try {
                // Update the message read status in the database
                const newMessageId = await updateMessageReadStatus(
                  message.message,
                  user.id
                );
                // Emit socket event to notify other users about message read
                socket.emit("messageRead", { messageId: newMessageId });
              } catch (error) {
                console.error("Error updating message read status:", error);
              }
            }
          }
        }
      });
    });

    const messageElements = document.querySelectorAll(".message");
    messageElements.forEach((messageElement) => {
      observer.observe(messageElement);
    });

    return () => {
      observer.disconnect();
    };
  }, [messages]);

  const owner = chat.users[0];
  const currentUser = chat.users[1];
  const reciver = currentUser.email === user.email ? owner : currentUser;

  return (
    <div className="flex-1 bg-gray-50 h-auto rounded-lg dark:bg-zinc-800">
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
          messages.map((chat) => (
            <div
              key={chat.message.id}
              className={`message flex items-end gap-2 max-w-1/2  ${
                chat.message.sender?.email === user.email
                  ? "justify-end"
                  : "justify-end flex-row-reverse"
              }`}
              data-message-id={chat.message.id}
            >
              <div
                className={`px-4 py-2 rounded-lg inline-block ${
                  chat.message.sender?.email === user.email
                    ? "bg-blue-600 text-white rounded-bl-none"
                    : "bg-gray-200 text-black border rounded-br-none"
                }`}
              >
                {chat.message.content.startsWith("https://") ? (
                  <div className="flex flex-col items-center space-y-2">
                    {chat.message.content.split("/")[6] === "records" ? (
                      <audio
                        className="w-64 p-2 bg-transparent rounded-lg  outline-none"
                        controls
                      >
                        <source src={chat.message.content} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    ) : (
                      <img
                        alt="Image"
                        className="aspect-[1/1] overflow-hidden rounded-lg object-cover"
                        height={200}
                        src={chat.message.content}
                        width={400}
                      />
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {" "}
                    </p>
                  </div>
                ) : (
                  <span>{chat.message.content}</span>
                )}
                <div className="flex gap-2 items-center">
                  <span style={{ direction: "ltr" }} className="text-[10px]">
                    {timeSince(chat.message.createdAt)}
                  </span>
                  {chat.message.read ? (
                    <CheckCheck color={"blue"} size={12} />
                  ) : (
                    <Check size={12} />
                  )}
                </div>
              </div>
              <img
                alt="My profile"
                className="w-6 h-6 rounded-full order-2"
                src={chat.message?.sender.image}
              />
            </div>
          ))}
      </div>

      <Record user={user} reciver={reciver} chatId={chat.id} />
    </div>
  );
}
