import { ApartmentAdCard } from "@/components/component/dash-app-card";
import { getAllShops, getShopById, updateShopCategory } from "../../../actions";
import { AdCard } from "@/components/component/dashboard-ad-card";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const shops = await getAllShops();
  const shopIds = shops.map((shop) => shop.id);
  return shopIds;
}

export default async function MyShop({ params }) {
  const allAds = await getShopById(params.id);

  return (
    <div className="flex flex-col items-center lg:w-4/5 mx-auto gap-3">
      {allAds?.length > 0 ? (
        allAds.map((ad) =>
          ad.images ? (
            <ApartmentAdCard key={ad.id} lng={params.lng} ad={ad} />
          ) : (
            <AdCard key={ad.id} lng={params.lng} ad={ad} />
          )
        )
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="text-xl">you haven't created any ads yet</h1>
        </div>
      )}
    </div>
  );
}
