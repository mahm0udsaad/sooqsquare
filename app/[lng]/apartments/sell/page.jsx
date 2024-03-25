import { OverView } from "@/components/sellForms";
import SelectProfile from "@/components/shopAdsForms/profileSelector";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import Forms from "../components/forms";
import AccordionCategory from "../components/accordions";

const SellForm = async ({ params: { lng }, searchParams }) => {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);

  return (
    <div className="relative w-11/12 mx-auto pt-6 min-h-screen flex">
      {searchParams.category && <OverView lng={lng} />}
      <div className="flex flex-col w-11/12 mx-8">
        {!searchParams.profile && <SelectProfile user={user} lng={lng} />}
        {searchParams.profile && !searchParams.category && (
          <AccordionCategory profile={searchParams.profile} />
        )}
        {searchParams.category && <Forms user={user} lng={lng} />}
      </div>
    </div>
  );
};

export default SellForm;
