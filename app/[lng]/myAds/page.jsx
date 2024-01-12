
import { getServerSession } from 'next-auth';
import DynamicCard from '../../../components/adCard'
import prisma from "../../../prisma/client";
import { getUserByEmail } from '@/prisma/actions';
import {getAdsByUserId} from './actions'

export default async function MyAds({params:{lng}}) {
    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser.user.email) 
    const ads = await getAdsByUserId(user.id)
  return (
    <main className=" mx-8 grid grid-cols-2 gap-4 pt-20">
       {ads && ads.map((ad) => (
        <DynamicCard lng={lng} key={ad.id} ad={ad} />
      ))}
    </main>
  )
}
