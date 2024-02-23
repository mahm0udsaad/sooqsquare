"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";

export default function ChatWithAI({ user }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 bg-gray-50  h-auto  rounded-lg dark:bg-zinc-800">
      <div className="p-4 flex gap-4 items-center justify-end">
        <img className="h-8 w-8" src="/icons/bard.svg" alt="ai" srcset="" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Chat with SooqSquare AI
        </h2>
      </div>
      <div
        ref={messagesContainerRef}
        className="chats relative flex flex-col space-y-4 p-4 h-[70dvh] overflow-y-scroll overflow-x-hidden"
      >
        {messages &&
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-end gap-2 max-w-1/2  ${
                (m.role === "user") === "user"
                  ? "justify-end"
                  : "justify-end flex-row-reverse message-char"
              }`}
            >
              <div>
                <span
                  className={`px-4 py-2 rounded-lg inline-block  ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-bl-none"
                      : "bg-gray-600 text-white rounded-br-none"
                  }`}
                >
                  {m.role !== "user" ? (
                    <Markdown>{m.content}</Markdown>
                  ) : (
                    m.content
                  )}
                </span>
              </div>
              {m.role === "user" ? (
                <img
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-2"
                  src={m.role === "user" ? user.image : ""}
                />
              ) : (
                <img
                  className="h-8 w-8"
                  src="/icons/bard.svg"
                  alt="ai"
                  srcset=""
                />
              )}
            </div>
          ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="form border-t-[1px] border-gray-200 px-4 py-4  sm:mb-0"
      >
        <div className="relative flex">
          <input type="hidden" name="user" value={user} />
          <Input
            value={input}
            onChange={handleInputChange}
            className="pl-10 pr-20 rounded-full border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
            placeholder="Write something..."
          />
          <div className="absolute right-2  items-center  inset-y-0 hidden sm:flex">
            <Button
              type="submit"
              className="ml-2 dark:text-white hover:bg-transparent hover:opacity-50"
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
