import Dashboard from "../../../../components/component/shops-dashboard";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import { redirect } from "next/navigation";

const MainDashboard = async () => {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  if (!user) {
    redirect("/sign-in");
  }
  return <Dashboard shops={user?.shop} />;
};

export default MainDashboard;
