import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import StarRating from "@/components/component/rate";
import { addUserFollow } from "../../app/[lng]/vehicle/actions";
import dynamic from "next/dynamic";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "@/components/ui/button";

export default function RateCard({ owner, user, isFollowed }) {
  const FollowdAdBtn = dynamic(() => import("./buttons/follow-ad-btn"), {
    ssr: false,
    loading: () => (
      <>
        <Button
          className="bg-transparent text-white w-38"
          size="lg"
          variant="outline"
          disabled={true}
        >
          <span
            className={`absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 inline-block`}
          >
            <ImSpinner2 className="animate-spin text-white w-24 h-24" />
          </span>
        </Button>
      </>
    ),
  });
  return (
    <Card
      key="1"
      className="w-full bg-gradient-to-br from-red-500 to-pink-500 rounded-lg shadow-lg"
    >
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl text-white">
          {owner.username} Rating
        </CardTitle>
        <CardDescription className="text-white">
          A brief explanation of the rating system and its significance.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <div className="font-semibold text-white">{owner.username}.</div>
            <div className="text-sm text-gray-200 dark:text-gray-400">
              Business
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-1.5">
              <StarRating owner={owner} userId={user.id} />
            </div>
            <div className="font-semibold text-white">3.5</div>
            <div className="text-sm text-gray-200 dark:text-gray-400">
              Average
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1.5">
          <PhoneCallIcon className="w-4 h-4 text-white" />
          <MailIcon className="w-4 h-4 text-white" />
          <ExternalLinkIcon className="w-4 h-4 text-white" />
        </div>
      </CardContent>
      <CardFooter className=" pt-4">
        <form action={addUserFollow} className="w-full flex justify-between">
          <input type="hidden" name="userId" value={user.id} />
          <input type="hidden" name="followedUserId" value={owner.id} />

          <div className="text-sm text-white">Follow {owner.username}.</div>
          <FollowdAdBtn isFollowed={isFollowed} />
        </form>
      </CardFooter>
    </Card>
  );
}

function ExternalLinkIcon(props) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneCallIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
