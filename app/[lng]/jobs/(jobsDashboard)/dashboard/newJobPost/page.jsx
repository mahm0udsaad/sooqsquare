import { useTranslation } from "@/app/i18n";
import { createJobPost, getUserCompany } from "../../../action";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import CitySelection from "../components/city-selection";
import SequentialSelection from "../components/gender_nation";
import EmploymentAndCareerSelection from "../components/employment_carrer";
import ExperienceAndEducationSelection from "../components/min-experince_education";
import ToggleGroups from "../components/toggles";
import { SubmitBtn } from "../components/btns/submit";
import Link from "next/link";
import RequirementsForm from "../components/req-form";
import GenerateAIContent from "@/components/component/buttons/generate-ai-content";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { FaStoreAlt } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";

export default async function JobPostForm({ params: { lng }, searchParams }) {
  const { t } = await useTranslation(lng, "jobs");

  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);
  const company = await getUserCompany(user.id);

  const SalarySelection = dynamic(
    () => import("../components/salary-selection"),
    {
      ssr: false,
      loading: () => <span>loading...</span>,
    }
  );
  const JobCategorySelect = dynamic(
    () => import("../components/job-category-selection"),
    {
      ssr: false,
      loading: () => <span>loading...</span>,
    }
  );
  console.log(searchParams);
  return (
    <div className="w-full">
      <h1 className="text-center py-4 text-3xl">{t("Job_Details")}</h1>
      {!searchParams.success && (
        <form action={createJobPost}>
          <div
            className={`mx-auto w-4/5 items-center space-y-3 ${
              !searchParams.jobCategory || searchParams.title_desc
                ? "hidden"
                : ""
            }`}
          >
            <div className="space-y-2 w-full">
              <Label htmlFor="title">{t("title_label")}</Label>
              <Input
                name="title"
                id="title"
                placeholder={t("title_placeholder")}
              />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="description">{t("description_label")}</Label>
              <Textarea
                id="description"
                name="description"
                className={"h-60"}
                value={searchParams?.description || ""}
                placeholder={t("description_placeholder")}
                required
              />
            </div>
            <div className="flex justify-start gap-4">
              <Link
                className="inline-flex items-center justify-center py-2 px-4 main-bg whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                href={`?jobCategory=${searchParams.jobCategory}&title_desc=true&description=${searchParams.description}`}
              >
                {t("next_button_text")}
              </Link>
              <GenerateAIContent company={company} lng={lng} />
            </div>
          </div>
          {!searchParams.jobCategory && <JobCategorySelect lng={lng} />}
          {searchParams.title_desc && !searchParams.city && (
            <CitySelection currentUserCountry={user.country} lng={lng} />
          )}
          {searchParams.city && !searchParams.nationality && (
            <SequentialSelection lng={lng} />
          )}
          {searchParams.nationality && !searchParams.careerLevel && (
            <EmploymentAndCareerSelection lng={lng} />
          )}
          {searchParams.careerLevel && !searchParams.educationLevel && (
            <ExperienceAndEducationSelection lng={lng} />
          )}
          {searchParams.educationLevel && !searchParams.salary && (
            <SalarySelection lng={lng} />
          )}
          {searchParams.salary && !searchParams.requirements && (
            <RequirementsForm lng={lng} />
          )}
          {searchParams.requirements && !searchParams.benefits && (
            <ToggleGroups lng={lng} />
          )}

          {searchParams.benefits && (
            <div className=" w-full space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(searchParams).map(([key, value]) => (
                  <div
                    className={`${
                      key === "userId" ||
                      key === "title_desc" ||
                      key === "title"
                        ? "hidden"
                        : ""
                    }`}
                    key={key}
                  >
                    <Label htmlFor={key}>{t(`${key}`)}</Label>
                    <Input
                      type="text"
                      id={key}
                      name={key}
                      value={value}
                      readOnly
                    />
                  </div>
                ))}
              </div>
              <SubmitBtn />
            </div>
          )}
          <input type="hidden" name={"companyId"} value={company.id} />
        </form>
      )}
      {searchParams.success && (
        <Dialog open={true}>
          <DialogContent className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <DialogHeader className=" p-6 sm:p-8">
              <DialogTitle className="text-white text-2xl font-semibold">
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-white text-lg mt-2">
                Your Post is created successfully!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-center space-x-4 p-6 sm:p-8">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                href={`/jobs/dashboard`}
              >
                <BsThreads className="h-5 w-5 mr-2" />
                My Posts
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                href="/jobs/findJob"
              >
                <FaStoreAlt className="h-5 w-5 mr-2" />
                Market
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
