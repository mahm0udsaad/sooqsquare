import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const NewCompanyForm = async ({ params: { lng }, searchParams }) => {
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  const DetailsForm = dynamic(() => import("./components/detailsForm"), {
    ssr: false,
  });

  if (user?.company) {
    redirect("/jobs/dashboard");
  } else if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="relative flex flex-col items-center w-11/12 mx-auto pt-6 min-h-screen">
      {user && <DetailsForm searchParams={searchParams} user={user} />}
    </div>
  );
};

export default NewCompanyForm;
