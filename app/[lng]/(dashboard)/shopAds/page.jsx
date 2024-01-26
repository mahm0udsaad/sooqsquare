import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import { getAdsByUserId } from '../actions';
import { AdCard } from '@/components/component/dashboard-ad-card';

export default async function MyAds({params:{lng}}) {

    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser?.user.email) 
    console.log(user.shop.ads);
    return (
       <div className='flex w-11/12 mx-auto flex-col gap-3'>
          {
            user.shop ? user.shop.ads.map((ad)=>(
              <AdCard key={ad.id} lng={lng} ad={ad} />
            )):
             <h1 className='pt-20 text-center'>
              you haven't created any ads
            </h1>
          }
       </div>
  )
}
