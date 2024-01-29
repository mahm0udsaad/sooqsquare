import { getAllShops, getShopById, updateShopCategory } from '../../actions'
import { AdCard } from '@/components/component/dashboard-ad-card';

export const dynamic = "force-dynamic"

export async function generateStaticParamsForShops() {
    const shops = await getAllShops();
    const shopIds = shops.map(shop => shop.id);

    return shopIds;
}

export default async function MyShop({params}) {
    const shop = await getShopById(params.id)
    return (
       <div className='flex lg:w-11/12 mx-auto flex-col gap-3'>
          {
            shop.ads.length > 1  ? shop.ads.map((ad)=>(
              <AdCard key={ad.id} lng={params.lng} ad={ad} />
            )):
             <div className="flex items-center justify-center w-full h-screen">
                <h1 className='text-xl'>
              you haven't created any ads yet
            </h1>
             </div>
          }
       </div>
  )
}

