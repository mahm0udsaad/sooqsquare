import { getUserByEmail } from "@/prisma/actions";
import { getAdsByUserId } from "../../actions";
import { AdCard } from "@/components/component/dashboard-ad-card";
import { getServerSession } from "next-auth";
import { ApartmentAdCard } from "@/components/component/dash-app-card";
export default async function MyAds({ params: { lng } }) {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  const ads = await getAdsByUserId(user.id);

  return (
    <div className="flex flex-col items-center lg:w-4/5 mx-auto gap-3 pt-4">
      {ads ? (
        ads.map((ad) =>
          ad.images ? (
            <ApartmentAdCard key={ad.id} lng={lng} ad={ad} />
          ) : (
            <AdCard key={ad.id} lng={lng} ad={ad} />
          )
        )
      ) : (
        <h1 className="pt-20 text-center">You haven't created any ads</h1>
      )}
    </div>
  );
}
