import { unstable_noStore } from "next/cache"
import { ChatMainPage } from "@/components/component/chat-main-page"
import { getServerSession } from "next-auth"
import { getUserByEmail } from "@/prisma/actions"
import { redirect } from "next/navigation"

 const ChatPage = async () =>{
    unstable_noStore()
    const currentUser = await getServerSession()
    const user = await getUserByEmail(currentUser?.user.email)
      
    if (!user){
        redirect('/sign-in')
    }

        return <ChatMainPage />
 }
 
 

 export default ChatPage