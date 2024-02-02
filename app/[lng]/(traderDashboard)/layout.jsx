import dynamic from 'next/dynamic'
import LoadingSideBar from '@/components/skeletons/sideBarskeleton'
import { redirect } from 'next/dist/server/api-utils';

export default async function DashboardLayout({ children , params: { lng }}) {
  const ShopSideBar = dynamic(() => import('@/components/component/sideBar'), {
    loading: () => <LoadingSideBar />,
  });

  
  return (
       <>
        <div className="flex w-full min-h-screen justify-between bg-gray-100 dark:bg-zinc-950">
          <ShopSideBar lng={lng}/>
           {children}
          </div>
       </>
  )
}