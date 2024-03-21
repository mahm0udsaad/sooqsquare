import JobPage from "../../../../../components/component/job-page1";
import { getAllJobPosts, getJobPostById } from "../../action";

export async function generateStaticParams() {
  const jobs = await getAllJobPosts();
  const jobPosts = [];
  for (let i = 0; i < jobs.length; i++) {
    jobPosts.push({ id: `${i}` });
  }
  return jobPosts;
}

export default async function Vehicle({ params, searchParams }) {
  const job = await getJobPostById(params.id);
  return <JobPage job={job} searchParams={searchParams} lng={params.lng} />;
}
