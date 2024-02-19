import MainSection from "@/components/jobs/main-section";
import CompoaniesSection from "@/components/jobs/companies-section";
import FeaturedJobs from "@/components/jobs/featured-jobs";

export default async function Home({ params: { lng } }) {
  return (
    <div className="w-11/12 mx-auto pt-8">
      <MainSection lng={lng} />
      <CompoaniesSection lng={lng} />
      <FeaturedJobs />
    </div>
  );
}
