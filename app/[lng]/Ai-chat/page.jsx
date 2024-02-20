"use client";
import { useState } from "react";
import { timeSince } from "@/helper/timeConversion";
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ai.sooqsquare.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const newMessage = {
        id: Date.now(),
        content: data.response,
        role: "AI",
        createdAt: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col overflow-scroll overflow-x-hidden h-screen">
      <main className="flex-1 border-t border-gray-100 dark:border-gray-800 relative">
        <div className="container mx-auto flex flex-col justify-center gap-4 p-4">
          <div className="flex items-center justify-center space-x-2">
            <ArrowUpRightIcon className="w-4 h-4" />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              You're chatting with an AI
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col items-end space-y-2">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-center space-x-2 w-full  ${
                    m.role === "user"
                      ? "justify-end text-end"
                      : "justify-start text-start"
                  }`}
                >
                  <div
                    className={`rounded-lg   border p-4 max-w-[75%] ${
                      m.role === "user"
                        ? "dark:bg-gray-800 bg-gray-100"
                        : " bg-blue-500 text-white"
                    } `}
                  >
                    <p
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: m.content }}
                    ></p>
                    <time className="text-xs font-light text-gray-500 dark:text-gray-400">
                      {timeSince(m.createdAt)}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="fixed bottom-8 flex justify-center w-full"
          >
            <input
              className=" w-full max-w-md p-2 mb-8 border border-gray-300 rounded-md shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
            <button>Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}

function ArrowUpRightIcon(props) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
