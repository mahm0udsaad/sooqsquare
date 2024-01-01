
import { getUserByUserId } from "@/prisma/actions";
import { auth } from "@clerk/nextjs"
import DynamicCard from '../../../components/adCard'

export default async function MyAds() {
    const { userId } = await auth()
    const user = await getUserByUserId(userId)
    console.log(user.ads[1].adImages);
  return (
    <main className=" mx-8 grid grid-cols-2 pt-20">
       {user.ads.map((ad) => (
        <DynamicCard key={ad.id} ad={ad} />
      ))}
    </main>
  )
}
