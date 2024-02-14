import { unstable_noStore } from "next/cache"
import { ChatMainPage } from "../../../components/component/chat-main-page"
import { getOrCreateChat } from './action'
import { getServerSession } from "next-auth"
import { getUserByEmail } from "@/prisma/actions"
import { redirect } from "next/navigation"

 const ChatPage = async ({searchParams}) =>{
    unstable_noStore()
    const user2 = await searchParams['owner']
    const user1 = await getServerSession()
    const user = await getUserByEmail(user1?.user.email)
    const chat = await getOrCreateChat(user?.id,user2)

      
    if (!user){
        redirect('/sign-in')
    }

    if(!chat){
        return <ChatMainPage user={user} chats={user.chats}/>
    }
    
    return(
        <ChatMainPage />
    )
 }
 
 

 export default ChatPage