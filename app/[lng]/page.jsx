import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { getUserByEmail } from '@/prisma/actions'
import PageSkeleton from '@/components/skeletons/homeSkeleton'

export default async function Home({ params : { lng }  }) {
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user?.email)
  
  const HomePage = dynamic(() => import(`../../components/home-page`),{
    ssr:false,
    loading:()=> <PageSkeleton />
  });
return (
    <>
    <HomePage user={user} lng={lng}/>
    </>
  )
} 
