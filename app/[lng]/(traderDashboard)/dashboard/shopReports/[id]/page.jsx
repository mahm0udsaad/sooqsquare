import { getAllShops, getShopById, updateShopCategory } from '../../../actions'
import { AdCard } from '@/components/component/dashboard-ad-card';
import ReportPage from '@/components/component/reports'
export const dynamic = "force-dynamic"

export async function generateStaticParams() {
    const shops = await getAllShops();
    const shopIds = shops.map(shop => shop.id);
    return shopIds;
}

export default async function MyShop({params}) {
    const shop = await getShopById(params.id)
    return (
       <>
              <ReportPage shop={shop}/>
       </>
  )
}

