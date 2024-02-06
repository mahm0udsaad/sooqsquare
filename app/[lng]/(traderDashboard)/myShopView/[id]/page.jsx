
import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import ShopPage from '@/components/component/shop-page'
import { getAllShops, getShopById } from '../../actions'
import { redirect } from 'next/navigation';

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
       <div className='flex w-11/12 mx-auto flex-col '>
          <ShopPage shop={shop} lng={params.lng} />
       </div>
  )
}

