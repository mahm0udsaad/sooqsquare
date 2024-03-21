"use client";
import { createMessage } from "@/app/[lng]/(chat)/chat/action";
import upload from "@/app/[lng]/(traderDashboard)/dashboard/myShop/action";
import useRecorder from "@/hooks/recorder";
import { ImageDown, Mic, PauseCircle, SaveIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import socket from "@/lib/chat";

function Record({ user, reciver, chatId }) {
  const [message, setMessage] = useState("");
  const sendImageInput = useRef(null);
  const { recorderState, startRecording, cancelRecording, saveRecording } =
    useRecorder();

  const handleStartRecording = () => {
    startRecording();
  };
  const handleCancelRecording = () => {
    cancelRecording();
  };
  const handleSaveRecording = async () => {
    saveRecording();
  };
  const handleSendRecording = async () => {
    if (recorderState.audio) {
      try {
        const newMessage = await createMessage(
          recorderState.audio,
          user.email,
          reciver,
          chatId
        );
        socket.emit("chat message", {
          chatId: chatId,
          message: { ...newMessage },
        });
        cancelRecording();
      } catch (error) {
        console.error("Error fetching or uploading the audio blob:", error);
      }
    }
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      const newMessage = await createMessage(
        message,
        user.email,
        reciver,
        chatId
      );
      socket.emit("chat message", {
        chatId: chatId,
        message: { ...newMessage },
      });
      setMessage("");
      socket.emit("newNotification", {
        content: `New Message From ${newMessage.sender.username}`,
        createdAt: newMessage.createdAt,
        recipientId: newMessage.receiverId,
      });
    }
  };
  // Function to handle message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error("No file uploaded");
      }
      const formData = new FormData();
      formData.append("file", file);

      const uploadResult = await upload(formData);

      if (uploadResult && uploadResult.adImage) {
        const newMessage = await createMessage(
          uploadResult.adImage,
          user.email,
          reciver,
          chatId
        );
        socket.emit("chat message", {
          chatId: chatId,
          message: { ...newMessage },
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form border-t-[1px] border-gray-200 px-4 py-4  sm:mb-0"
      >
        <div className="relative  flex">
          <Input
            onChange={handleMessageChange}
            value={message}
            className="pl-10 pr-20 shadow rounded-full border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 dark:bg-zinc-800"
            placeholder="Write something..."
          />
          {!recorderState.audio && (
            <div className="absolute right-2  items-center inset-y-0 hidden sm:flex">
              <Button
                type="submit"
                className="ml-2 hover:bg-transparent hover:opacity-50"
                size="icon"
                variant="ghost"
              >
                <SendIcon className="h-6 w-6" />
              </Button>
            </div>
          )}
          <div className="absolute left-4 gap-4 justify-end items-center inset-y-0 hidden sm:flex">
            {!recorderState.audio && (
              <>
                <input
                  type="file"
                  onChange={handleSendImage}
                  className="hidden p-0 hover:bg-transparent hover:opacity-50"
                  size="icon"
                  variant="ghost"
                  ref={sendImageInput}
                />
                <Button
                  onClick={() => sendImageInput.current.click()}
                  size="icon"
                  className="p-0 z-20 bg-transparent hover:bg-transparent"
                >
                  <ImageDown
                    size={6}
                    className="h-6 w-6 text-black dark:text-white hover:opacity-50"
                  />
                </Button>
              </>
            )}
            <div className="flex">
              {recorderState.initRecording ? (
                <div className="flex gap-4">
                  <button onClick={handleSaveRecording}>
                    <SaveIcon />
                  </button>
                  <p>Recording...</p>
                  <span>
                    {recorderState.recordingMinutes}:
                    {recorderState.recordingSeconds}
                  </span>
                  <button onClick={handleCancelRecording}>
                    <PauseCircle />
                  </button>
                </div>
              ) : (
                !recorderState.audio && (
                  <div>
                    <button onClick={handleStartRecording}>
                      <Mic />
                    </button>
                  </div>
                )
              )}
              {recorderState.audio && (
                <div className="flex gap-4">
                  <audio
                    controls
                    src={recorderState.audio}
                    className="bg-transparent"
                  />
                  <button onClick={handleSendRecording}>
                    <SendIcon />
                  </button>
                </div>
              )}
            </div>{" "}
          </div>
        </div>
      </form>
    </>
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

export default Record;
