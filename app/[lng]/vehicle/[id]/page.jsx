import { checkFollowStatus, getAdById, getAllads } from "../actions";
import { AdPage } from "../../../../components/component/ad-page";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";

export const dynamic = "force-dynamic";
export async function generateStaticParams() {
  const ads = await getAllads();
  const adsIds = [];
  for (let i = 0; i < ads.length; i++) {
    adsIds.push({ id: `${i}` });
  }
  return adsIds;
}

export default async function Vehicle({ params, searchParams }) {
  const ad = await getAdById(params.id);
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);

  const isFollowed = ad.shop
    ? await checkFollowStatus(user.id, null, ad.shop.id)
    : await checkFollowStatus(user.id, ad.user.id);

  return (
    <>
      <AdPage lng={params.lng} ad={ad} user={user} isFollowed={isFollowed} />
    </>
  );
}
