import { unstable_noStore } from "next/cache";
import ChatWithAI from "./chatComp";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";

const ChatWithAIPage = async () => {
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  return <ChatWithAI user={user} />;
};

export default ChatWithAIPage;
