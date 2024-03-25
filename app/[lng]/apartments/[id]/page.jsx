import { getAllads, getAdById } from "../actions";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { AdPage } from "../pages/ad-page";

export async function generateStaticParams() {
  const ads = await getAllads();
  const adsIds = [];
  for (let i = 0; i < ads.length; i++) {
    adsIds.push({ id: `${i}` });
  }
  return adsIds;
}

export default async function Apartment({ params, searchParams }) {
  const ad = await getAdById(params.id);
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);

  return (
    <>
      <AdPage lng={params.lng} ad={ad} user={user} />
    </>
  );
}
