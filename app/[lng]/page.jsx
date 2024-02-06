import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { getUserByEmail } from '@/prisma/actions'
import PageSkeleton from '@/components/skeletons/homeSkeleton'
import HomePage from "@/components/home-page"

export default async function Home({ params : { lng }  }) {
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user?.email)

  return (
    <>
    <HomePage user={user} lng={lng}/>
    </>
  )
} 
