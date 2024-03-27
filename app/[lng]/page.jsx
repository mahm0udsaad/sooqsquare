import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import HomePage from "@/components/home-page";
import MainSection from "@/components/component/main-section";

export default async function Home({ params: { lng }, searchParams }) {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user?.email);

  return (
    <>
      <MainSection />
      <HomePage user={user} lng={lng} />
    </>
  );
}
