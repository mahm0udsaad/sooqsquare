import { getServerSession } from "next-auth";
import { BentoGridDemo } from "../../../components/component/pages/following-page";
import { getUserFollowingByEmail } from "../../../prisma/actions";

export default async function Following() {
  const logedUser = await getServerSession();
  const ads = await getUserFollowingByEmail(logedUser?.user.email);
  return (
    <div className="">
      <h1 className="text-4xl text-center py-8 font-semibold  border-b-2">
        Your Following Ads
      </h1>
      <BentoGridDemo items={ads} />
    </div>
  );
}
