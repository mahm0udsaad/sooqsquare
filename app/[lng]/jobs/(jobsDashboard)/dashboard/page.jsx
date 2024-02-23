import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { getUserCompany } from "../../action";
import Profile from "../../newCompany/components/company-profile";
import JopPostsPage from "./components/dash-jobposts";

const CompanyPage = async ({ params: { lng }, searchParams }) => {
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);
  const company = await getUserCompany(user.id);

  return (
    <div className="relative flex flex-col items-center w-11/12 mx-auto pt-6 min-h-screen">
      <JopPostsPage company={company} lng={lng} />
    </div>
  );
};

export default CompanyPage;
