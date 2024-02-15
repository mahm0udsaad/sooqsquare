import dynamic from 'next/dynamic'
import LoadingSideBar from '@/components/skeletons/sideBarskeleton'
import { getServerSession } from "next-auth"
import { getUserByEmail } from "@/prisma/actions"
import { redirect } from "next/navigation"


export default async function DashboardLayout({ children , params: { lng } , searchParams}) {
  const ChatSideBar = dynamic(() => import('@/components/component/chat-side-bar'), {
    loading: () => <LoadingSideBar />,
  });

    const user1 = await getServerSession()
    const user = await getUserByEmail(user1?.user.email)

    if(!user) {
        redirect('/sign-in')
    }
  return (
        <div className="flex pb-8 bg-gray-100 dark:bg-zinc-950">
             <ChatSideBar  user={user}/>
                 {children}
        </div>
  )
}