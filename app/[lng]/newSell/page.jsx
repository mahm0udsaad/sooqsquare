import dynamic from "next/dynamic";
import { getUserByEmail } from "@/prisma/actions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SelectProfile from "@/components/shopAdsForms/profileSelector";

const SellForm = async ({ params: { lng }, searchParams }) => {
  const CategoriesForm = dynamic(
    () => import(`@/components/shopAdsForms/categoryForm`),
    {
      ssr: false,
      loading: () => <p>CategoriesForm...</p>,
    }
  );

  const LogedInUser = await getServerSession();
  const user = await getUserByEmail(LogedInUser?.user.email);

  if (!user?.phoneNumber || !user) redirect("/sign-in");

  return (
    <div className="relative w-11/12 mx-auto pt-6 min-h-screen flex flex-col">
      {!searchParams.profile ? <SelectProfile lng={lng} user={user} /> : null}
      {!searchParams.category && searchParams.profile && (
        <CategoriesForm lng={lng} />
      )}
    </div>
  );
};

export default SellForm;
