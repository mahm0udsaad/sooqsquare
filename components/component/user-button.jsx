
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Avatar , AvatarImage } from '@/components/ui/avatar';
import Link from "next/link"

export function UserButton({ userImage }) {
  return (
    (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full" size="icon" variant="outline">
           <Avatar>
              <AvatarImage src={userImage} alt="user"/>
            </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 dark:bg-zinc-950 dark:text-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Link className="py-3 flex items-center gap-2" href="/myProfile">
              <UserIcon className="w-4 h-4" />
              Profile
            </Link>
            <Link className="py-3 flex items-center gap-2" href="/myAds">
              <AtSignIcon className="w-4 h-4" />
              My Ads
            </Link>
            <Link className="py-3 flex items-center gap-2" href="#">
              <HeartIcon className="w-4 h-4" />
              Favorites
            </Link>
            <Link className="py-3 flex items-center gap-2 text-rose-600" href="#">
              <LogOutIcon className="w-4 h-4" />
              Logout
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    )
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function AtSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>)
  );
}


function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}


function LogOutIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>)
  );
}
