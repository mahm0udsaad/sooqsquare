import { Footer } from '@/components/component/footer'
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'
import  { UserSideBar , ShopSideBar}  from '@/components/component/sideBar'
import { redirect } from 'next/navigation'
import { transferUserAdsToShop } from './actions'

export default async function DashboardLayout({ children , params: { lng }}) {
  
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user.email)
 
  if (!user){
    redirect('/sign-in')
  }
  return (
       <>
      <div className="flex w-full min-h-screen justify-between bg-gray-100 dark:bg-zinc-950">
       {user.shop.length > 0 ?  <ShopSideBar user={user} /> :  <UserSideBar user={user}/>}
          {children}
          </div>
       </>

  )
}