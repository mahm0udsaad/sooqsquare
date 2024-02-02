import dynamic from 'next/dynamic'
import LoadingSideBar from '@/components/skeletons/sideBarskeleton'
import { getServerSession } from 'next-auth'
import {  getUserShopsByEmail } from '@/prisma/actions'
import { redirect } from 'next/dist/server/api-utils';

export default async function DashboardLayout({ children , params: { lng }}) {
  const ShopSideBar = dynamic(() => import('@/components/component/sideBar'), {
    loading: () => <LoadingSideBar />,
  });

  const logedUser = await getServerSession()
  const user = await getUserShopsByEmail(logedUser?.user.email)
 
  if(!logedUser){
    redirect('sign-in')
  }
  
  return (
       <>
        <div className="flex w-full min-h-screen justify-between bg-gray-100 dark:bg-zinc-950">
          <ShopSideBar user={user} lng={lng}/>
           {children}
          </div>
       </>
  )
}