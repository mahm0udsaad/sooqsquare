import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteWorkExperience } from "../../profile/actions";

export default function ExperienceCard({ exp }) {
  return (
    <Card className="border min-w-xl">
      <CardHeader className="p-4">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <BriefcaseIcon className="w-6 h-6" />
            <span className="font-semibold">{exp.experienceType}</span>
          </div>
          <div className="flex gap-2 items-center">
            <LocateIcon className="w-6 h-6" />
            <span className="font-semibold">{exp.country}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <h1 className="text-2xl font-bold">{exp.jobTitle}</h1>
        <p className="text-sm">
          <span className="font-semibold">Company:</span>
          {exp.company}
          {"\n              "}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Dates:</span>
          {exp.dateRange}
          {"\n              "}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Currently:</span>
          No{"\n              "}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Remote:</span>
          Yes{"\n              "}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Country:</span>
          United States{"\n              "}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex justify-end gap-4">
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <form action={deleteWorkExperience}>
          <input type="hidden" name="workExperienceId" value={exp.id} />
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
