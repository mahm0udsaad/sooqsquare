import { ChatCom } from "@/components/component/chatpage";
import { deleteMessagesWithoutSender, getChatById } from "../action";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import ChatWithShop from "../../components/shop-chat";

const ChatPage = async ({ params, searchParams }) => {
  const chat = await getChatById(params.id);
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  if (chat.shops.length > 0) {
    return <ChatWithShop user={user} chat={chat} />;
  }
  return <ChatCom chat={chat} user={user} />;
};

export default ChatPage;
