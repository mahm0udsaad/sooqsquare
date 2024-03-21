import ShopPage from "@/components/component/shop-page";
import UserProfile from "../../../../components/component/profile";
import { getAllUsers, getUserById } from "../action";
import { getShopById } from "../../(traderDashboard)/actions";
import { getUserByEmail } from "@/prisma/actions";
import { getServerSession } from "next-auth";
import { checkFollowStatus } from "../../vehicle/actions";

export async function generateStaticParams() {
  const users = await getAllUsers();
  const usersIds = [];
  for (let i = 0; i < users.length; i++) {
    usersIds.push({ id: `${i}` });
  }
  return usersIds;
}

export default async function Vehicle({ params, searchParams }) {
  if (searchParams.shop) {
    const shopId = parseInt(searchParams.shop);
    const shop = await getShopById(shopId);
    const logedUser = await getServerSession();
    const currentUser = await getUserByEmail(logedUser?.user.email);
    const isFollowed = await checkFollowStatus(currentUser.id, null, shop.id);

    return (
      <ShopPage
        lng={params.lng}
        user={currentUser}
        shop={shop}
        isFollowed={isFollowed}
      />
    );
  }

  const user = await getUserById(params.id);
  const logedUser = await getServerSession();
  const currentUser = await getUserByEmail(logedUser?.user.email);
  const isFollowed = await checkFollowStatus(currentUser.id, user.id);
  return (
    <>
      <UserProfile
        lng={params.lng}
        user={user}
        userId={currentUser.id}
        isFollowed={isFollowed}
      />
    </>
  );
}
