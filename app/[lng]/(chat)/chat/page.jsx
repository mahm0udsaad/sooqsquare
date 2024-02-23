import { unstable_noStore } from "next/cache";
import { ChatMainPage } from "@/components/component/chat-main-page";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { redirect } from "next/navigation";
import { getOrCreateChat } from "./action";

const ChatPage = async ({ searchParams }) => {
  unstable_noStore();
  const owner = searchParams?.owner;
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  if (!user) {
    redirect("/sign-in");
  }
  if (!owner) {
    return <ChatMainPage />;
  } else {
    const chat = await getOrCreateChat(user.id, owner);
    redirect(`/chat/${chat.id}`);
  }
};

export default ChatPage;
