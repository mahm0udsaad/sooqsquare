"use client"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef  } from 'react';
import { createMessage, fetchMessagesFromDatabase } from '../../app/[lng]/chat/action'
import socket from "../../lib/chat";
import Link from "next/link";

export function ChatCom({chat , user}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const owner = chat.users[0]
  const currentUser = chat.users[1]
  const reciver = currentUser.email === user.email ? owner.email : currentUser.email;


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(message){
     const newMessage = await createMessage(message, user.email, reciver, chat.id)
     socket.emit('chat message', { chatId: chat.id, message: newMessage });
      setMessage("");
    }
  };
  
  const lastMessageRef = useRef(null)
  const messagesContainerRef = useRef(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch messages from the database on component mount
        const fetchedMessages = await fetchMessagesFromDatabase(chat);
        // Check if there are no messages
        if (fetchedMessages.length == 0) {
          setMessages(null);
        } else {
          setMessages(fetchedMessages.map((message) => ({ chatId: chat.id, message })));

        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchData();
  
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });
  
    socket.on('chat message', ({ chatId, message }) => {
      // Check if the message is already present in the state
      const isMessageAlreadyExists = messages.some(msg => msg.chatId === chatId && msg.message.id === message.id);
      if (!isMessageAlreadyExists) {
        setMessages(prev => [...prev, { chatId, message }]);
   
      }
    });
    
    return () => {
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the messages container when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    (<div className="flex pb-8 bg-gray-100 dark:bg-zinc-950">
       <div  className={`contact bg-white dark:bg-zinc-950 overflow-y-auto  ${sidebarOpen ? "transition-width w-1/3 ":"transition-width w-[5%] "}`}>
        <div className="p-4 flex items-center justify-between">
          <h2 className={`${sidebarOpen ? 'text-lg':"hidden"} font-semibold text-gray-900 dark:text-gray-100`}>Inbox</h2>
          <Button size="icon" variant="ghost" onClick={toggleSidebar}>
            <SendToBackIcon className="h-6 w-6" />
          </Button>
        </div>
      <div className={`divide-y divide-zinc-200 dark:divide-zinc-700 `}>
          {user.chats.map((chat)=>(
          <Link href={`/chat/${chat.id}?chat=${chat.id}`} className="flex cursor-pointer hover:bg-[#fe2635] hover:text-white items-center p-4 space-x-4">
            <Avatar>
            <img src={user.email === chat.users[0].email ? chat.users[1].image : chat.users[0].image} alt="" />
            </Avatar>
            {sidebarOpen && 
              <div className="font-medium px-4">{currentUser.email === chat.users[0].email ? chat.users[1].username : chat.users[0].username}</div>
            }
          </Link>
          ))}
      </div>
    </div>
      <div className="flex-1 bg-gray-50  h-auto  rounded-lg dark:bg-zinc-800">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chat with {owner.username}</h2>
          <Button size="icon" variant="ghost">
            <SendToBackIcon className="h-6 w-6" />
          </Button>
        </div>

        <div ref={messagesContainerRef} className="relative flex flex-col space-y-4 p-4 h-[70dvh] overflow-y-scroll">
          {messages && messages.map((chat , index) => (
          <div  ref={index === messages.length - 1 ? lastMessageRef : null}  key={chat.message.id} className={`flex items-end gap-2 max-w-1/2  ${chat.message.sender.email === user.email ? 'justify-end' : 'justify-end flex-row-reverse'}`}>
            <div>
              <span
                className={`px-4 py-2 rounded-lg inline-block  ${
                  chat.message.sender.email === user.email ? 'bg-blue-600 text-white rounded-bl-none' : 'bg-gray-600 text-white rounded-br-none'
                }`}
              >
                {chat.message.content}
              </span>
            </div>
            <img alt="My profile" className="w-6 h-6 rounded-full order-2" src={chat.message?.sender.image} />
          </div>
        ))}
        </div>

          <form onSubmit={handleSubmit} className="form border-t-[1px] border-gray-200 px-4 py-4  sm:mb-0">
          <div className="relative flex">
            <Input
              onChange={handleMessageChange}
              value={message}
              className="pl-10 pr-20 rounded-full border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
              placeholder="Write something..." />
            <div className="absolute right-2  items-center  inset-y-0 hidden sm:flex">
              <Button type="submit" className="ml-2 dark:text-black hover:bg-transparent hover:opacity-50" size="icon" variant="ghost">
                <SendIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </form>
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
