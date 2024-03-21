import JobProfile from "../components/job-profile";
import { getServerSession } from "next-auth";
import { getUserJobDataByEmail } from "./actions";

export default async function MyProfile({ params, searchParams }) {
  const currentUser = await getServerSession();
  const user = await getUserJobDataByEmail(currentUser?.user.email);
  return (
    <div className="container min-h-screen mx-auto pt-8">
      <JobProfile lng={params.lng} user={user} searchParams={searchParams} />
    </div>
  );
}
