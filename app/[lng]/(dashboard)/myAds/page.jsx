import { getServerSession } from 'next-auth';
import DynamicCard from '../../../../components/adCard'
import { getUserByEmail } from '@/prisma/actions';
import {getAdsByUserId} from '../actions';
import { AdCard } from '@/components/component/dashboard-ad-card';

export default async function MyAds({params:{lng}}) {

    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser.user.email) 
    const ads = await getAdsByUserId(user.id)

    return (
       <div className='flex w-11/12 mx-auto flex-col gap-3'>
          {
            ads.map((ad)=>(
              <AdCard key={ad.id} lng={lng} ad={ad} />
            ))
          }
       </div>
  )
}
