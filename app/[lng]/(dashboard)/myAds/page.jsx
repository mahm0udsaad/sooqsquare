import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import { getAdsByUserId } from '../actions';
import { AdCard } from '@/components/component/dashboard-ad-card';
import { redirect } from 'next/navigation'

export default async function MyAds({params:{lng}}) {

    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser?.user.email) 
    const ads = await getAdsByUserId(user.id)
    if(user.shop.length > 0){
      redirect('/shopAds')
    }
    
    return (
       <div className='flex w-11/12  mx-auto flex-col gap-3'>
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
