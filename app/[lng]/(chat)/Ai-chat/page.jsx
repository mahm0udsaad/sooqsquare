import { unstable_noStore } from "next/cache";
import ChatWithAI from "./chatComp";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import ChatApp from "./comp";
import { AI } from "./action";

const ChatWithAIPage = async () => {
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  return (
    <AI>
      <ChatApp />
    </AI>
  );
};

export default ChatWithAIPage;
