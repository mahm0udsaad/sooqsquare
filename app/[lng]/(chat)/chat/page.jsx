import { unstable_noStore } from "next/cache";
import { ChatMainPage } from "@/components/component/chat-main-page";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { redirect } from "next/navigation";
import { getOrCreateChat } from "./action";

const ChatPage = async ({ searchParams }) => {
  unstable_noStore();
  const owner = searchParams.owner;
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);
  const chat = await getOrCreateChat(user.id, owner);

  if (chat) {
    redirect(`/chat/${chat.id}`);
  }
  if (!user) {
    redirect("/sign-in");
  }

  return <ChatMainPage />;
};

export default ChatPage;
