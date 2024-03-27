import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import FiltersSideBar from "./components/filters";
import AppartmentsList from "./components/appartmentList";
import BackgroundBoxes from "./components/hero";
import { getAllads } from "./actions";

const VehicleMarket = async ({ params: { lng }, searchParams }) => {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  const ads = await getAllads(searchParams, user);

  return (
    <>
      <BackgroundBoxes />
      <div className="flex min-h-screen sticky top-20">
        <FiltersSideBar lng={lng} />
        <AppartmentsList items={ads} user={user} />
      </div>
    </>
  );
};
export default VehicleMarket;
