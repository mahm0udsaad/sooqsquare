"use client";
import React, { useState } from "react";
import { useUIState, useAIState, useActions } from "ai/rsc";
import { User } from "lucide-react";
import { customAlphabet } from "nanoid";

function ChatApp() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useUIState();
  const [aiState] = useAIState();
  const { submitUserMessage } = useActions();

  const handleSubmit = async () => {
    const value = userInput.trim();
    setUserInput("");
    if (!value) return;

    // Optimistically add user message UI
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nanoid(),
        display: <UserMessage>{value}</UserMessage>,
      },
    ]);

    // Submit and get response message
    const responseMessage = await submitUserMessage(value);
    setMessages((currentMessages) => [...currentMessages, responseMessage]);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="chat-app pt-8">
      <div className="message-input">
        <input
          type="text"
          className="text-black"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      <ul className="chat-history">
        {messages.map((message, index) => (
          <div key={message.id}>
            {message.display}
            {index < messages.length - 1 && <br />}
          </div>
        ))}
      </ul>
    </div>
  );
}
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
export function UserMessage({ children }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <User />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  );
}
export default ChatApp;
