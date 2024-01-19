import { unstable_noStore } from "next/cache"
import { ChatMainPage } from "../../../components/component/chat-main-page"

 const ChatPage = async () =>{
    unstable_noStore()
    return(
        <ChatMainPage />
    )
 }
 
 

 export default ChatPage