
import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import MyShopPage from '@/components/component/shop-profile'
import { getAllShops, getShopById } from '../../../actions'

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
    const shops = await getAllShops();
    const shopIds = shops.map(shop => shop.id);

    return shopIds;
}

export default async function MyShop({params}) {

    const shop = await getShopById(params.id)
    if(!shop){
        redirect('/dashboard')
    }
    return (
       <div className='flex w-11/12 mx-auto flex-col gap-3'>
          {shop ? <MyShopPage shop={shop} lng={params.lng}/> : <h1 className='text-center text-xl'>you have no shop</h1>}
       </div>
  )
}

