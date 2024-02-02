import { getUserByEmail } from '@/prisma/actions'
import { getAdsByUserId } from '../actions';
import { AdCard } from '@/components/component/dashboard-ad-card';
import { getServerSession } from 'next-auth'

export default async function MyAds({params:{lng}}) {
    const logedUser = await getServerSession()
    const user = await getUserByEmail(logedUser?.user.email)
    const ads = await getAdsByUserId(user.id)
    
    return (
       <div className='flex flex-col items-center lg:w-4/5 mx-auto gap-3'>
          {
            ads ? ads.map((ad)=>(
              <AdCard key={ad.id} lng={lng} ad={ad} />
            )):
             <h1 className='pt-20 text-center'>
              you haven't created any ads
            </h1>
          }
       </div>
  )
}
