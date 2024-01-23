import { Footer } from '@/components/component/footer'
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'
import SideBar  from '@/components/component/sideBar'

export default async function DashboardLayout({ children , params: { lng }}) {
  
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user?.email) || null

  return (
       <>
      <div className="flex w-full justify-between bg-gray-100 dark:bg-zinc-950">
        <SideBar />
          {children}
          </div>
       </>

  )
}