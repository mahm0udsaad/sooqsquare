import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import ShopPage from '@/components/component/shop-page'

export default async function MyShop({params:{lng}}) {

    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser?.user.email) 
    
    return (
       <div className='flex w-11/12 mx-auto flex-col gap-3'>
          <ShopPage shop={user.shop[0]} />
       </div>
  )
}
