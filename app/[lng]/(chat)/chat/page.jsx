import { unstable_noStore } from "next/cache"
import { ChatMainPage } from "@/components/component/chat-main-page"
import { getOrCreateChat } from './action'
import { getServerSession } from "next-auth"
import { getUserByEmail } from "@/prisma/actions"
import { redirect } from "next/navigation"

 const ChatPage = async ({ lng }) =>{
    unstable_noStore()
    const user1 = await getServerSession()
    const user = await getUserByEmail(user1?.user.email)
      
    if (!user){
        redirect('/sign-in')
    }

        return <ChatMainPage />
 }
 
 

 export default ChatPage