import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import dynamic from "next/dynamic";
import MarketAdCardSkeleton from "@/components/skeletons/marketSkeleton";
import { addUserFollow } from "@/app/[lng]/vehicle/actions";

export default function UserProfile({ user, userId, isFollowed, lng }) {
  const ShopAdCard = dynamic(() => import("@/components/component/shop-card"), {
    ssr: false,
    loading: () => <MarketAdCardSkeleton />,
  });
  const FollowBtn = dynamic(() => import("./buttons/followBtn"), {
    ssr: false,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 md:p-10">
      <div className="relative bg-[#fe2635] inline-block p-1 rounded-full flex items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage alt="@shadcn" src={user?.image} />
          <AvatarFallback>
            <UserIcon className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold">{user.username}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {user.country} {user.city}
        </p>
      </div>
      <form action={addUserFollow}>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="followedUserId" value={user.id} />

        <FollowBtn lng={lng} isFollowed={isFollowed} />
      </form>
      <div className="flex items-center gap-0.5">
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
      </div>

      <section className="container mx-auto px-4 py-8 space-y-4">
        {user?.ads?.length > 0 && (
          <h2 className="text-2xl font-bold">Featured Ads :</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.ads.map((ad) => (
            <ShopAdCard key={ad.id} ad={ad} />
          ))}
        </div>
      </section>
    </div>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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
