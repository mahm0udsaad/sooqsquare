
import { getUserByUserId } from "@/prisma/actions";
import { auth } from "@clerk/nextjs"
import DynamicCard from '../../../components/adCard'

export default async function MyAds() {
    const { userId } = await auth()
    const user = await getUserByUserId(userId)
  return (
    <main className="container mx-auto space-y-8">
       {user.ads.map((ad) => (
        <DynamicCard key={ad.id} ad={ad} />
      ))}
    </main>
  )
}
