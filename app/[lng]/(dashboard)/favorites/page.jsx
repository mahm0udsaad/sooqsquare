import { getServerSession } from 'next-auth';
import {  getUserIdByEmail } from '@/prisma/actions'
import { AdCard } from '@/components/component/dashboard-ad-card';
import { getFavoriteAdsByUserId } from '../actions';
import { FavoriteCard } from '@/components/component/favorite-cards'

export default async function MyfavoriteAds({params:{lng}}) {

    const logedUser = await getServerSession() 
    const userId = await getUserIdByEmail(logedUser?.user.email) 
    const favoriteAds = await getFavoriteAdsByUserId(userId)

    return (
       <div className='flex flex-col items-center lg:w-4/5 mx-auto gap-3'>
          {
            favoriteAds.length > 0 ? favoriteAds.map((ad)=>(
              <FavoriteCard key={ad.id} userId={userId} ad={ad} />
            )):
             <h1 className='pt-20 text-center'>
              you haven't liked any ads yet
            </h1>
          }
       </div>
  )
}
