import { unstable_noStore } from "next/cache"
import { ChatCom } from "@/components/component/chatpage"
import { getChatById } from '../action'
import { getServerSession } from "next-auth"
import { getUserByEmail } from "@/prisma/actions"

const ChatPage = async ({params , searchParams}) =>{
    unstable_noStore()

    const chatId = params.id
    const chat = await getChatById(chatId) 
    const currentUser = await getServerSession()
    const user = await getUserByEmail(currentUser?.user.email)
    
    return(
        <ChatCom chat={chat} user={user}/>
    )
 }
 
 export default ChatPage