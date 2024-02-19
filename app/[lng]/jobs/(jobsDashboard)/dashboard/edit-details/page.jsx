import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { getUserCompany } from "../../../action";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const CompanyDtails = async ({ params: { lng }, searchParams }) => {
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);
  const company = await getUserCompany(user.id);
  const CompanyForm = dynamic(() => import("../components/companyForm"), {
    ssr: false,
    loading: () => <span>loading...</span>,
  });
  if (searchParams.success) {
    redirect("/jobs/dashboard");
  }
  return (
    <>
      {company && (
        <CompanyForm
          searchParams={searchParams}
          lng={lng}
          currentUserCountry={user.country}
          companyData={company}
        />
      )}
    </>
  );
};

export default CompanyDtails;
