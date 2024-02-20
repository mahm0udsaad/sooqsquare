import FilterSideBar from "./components/filter-bar";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import MainSection from "./components/main-section";
import { getAllJobPosts } from "../action";
import JobCard from "../findJob/components/job-post-card";

export default async function Jobs({ params: { lng } }) {
  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user.email);
  const jobs = await getAllJobPosts();

  return (
    <>
      <MainSection />
      <div className="w-full flex justify-between mx-auto relative">
        <FilterSideBar lng={lng} user={user} />
        <div className="grid gap-4 grid-cols-2 max-w-[73%] max-h-screen chats overflow-y-scroll overflow-x-hidden">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}
