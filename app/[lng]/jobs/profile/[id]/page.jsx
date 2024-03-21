import { getAllApplicants, getApplicantById } from "../actions";
import ApplicantProfile from "../../components/applicant-profile";

export async function generateStaticParams() {
  const users = await getAllApplicants();
  const usersIds = [];
  for (let i = 0; i < users.length; i++) {
    usersIds.push({ id: `${i}` });
  }
  return usersIds;
}

export default async function Vehicle({ params }) {
  const applicant = await getApplicantById(params.id);

  return <ApplicantProfile lng={params.lng} user={applicant} />;
}
