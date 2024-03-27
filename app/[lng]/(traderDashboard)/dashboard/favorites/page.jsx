import { getFavoriteAdsByUserId } from "../../actions";
import {
  FavoriteCard,
  FavoriteAppCard,
} from "@/components/component/favorite-cards";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";

export default async function MyfavoriteAds({ params: { lng } }) {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  const favoriteAds = await getFavoriteAdsByUserId(user.id);
  if (!user) {
    redirect("/sign-in");
  }
  console.log(favoriteAds.map((ad) => ad));
  return (
    <div className="flex flex-col items-center lg:w-4/5 mx-auto gap-3">
      {favoriteAds.length > 0 ? (
        favoriteAds.map((ad) =>
          ad?.images ? (
            <FavoriteAppCard key={ad?.id} userId={user.id} lng={lng} ad={ad} />
          ) : (
            <FavoriteCard key={ad?.id} userId={user.id} lng={lng} ad={ad} />
          )
        )
      ) : (
        <h1 className="pt-20 text-center">You haven't Liked any ads</h1>
      )}
    </div>
  );
}
