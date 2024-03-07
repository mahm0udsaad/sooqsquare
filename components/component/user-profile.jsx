import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AtSign, Eye, Heart } from "lucide-react";

export default function UserProfile({ user }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 md:p-10">
      <Avatar className="w-24 h-24 border">
        <AvatarImage alt="@shadcn" src={user?.image} />
        <AvatarFallback>
          <UserIcon className="w-6 h-6" />
        </AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{user.username}</h1>
        <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
      </div>
      <div className="flex items-center gap-0.5">
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-primary" />
        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
        <Card className="shadow dark:bg-zinc-800 dark:text-white flex flex-col items-center justify-center p-6">
          <CardHeader className="flex  gap-4 items-center justify-center text-xl font-bold">
            <Heart className="h-6 w-6 text-rose-800" />
            My Favorites
          </CardHeader>
          <h1 className="text-xl font-bold p-4">0</h1>
          <CardContent className="text-gray-500 text-sm text-center dark:text-gray-400">
            Your favorite items will appear here.
          </CardContent>
        </Card>

        <Card className="shadow dark:bg-zinc-800 dark:text-white flex flex-col items-center justify-center p-6">
          <CardHeader className="flex  gap-4 items-center justify-center text-xl font-bold">
            <AtSign className="h-6 w-6  text-sky-800" />
            My Ads
          </CardHeader>
          <h1 className="text-xl font-bold p-4">{user.ads.length}</h1>
          <CardContent className="text-gray-500 text-sm text-center dark:text-gray-400">
            Your posted ads will appear here.
          </CardContent>
        </Card>

        <Card className="shadow dark:bg-zinc-800 dark:text-white flex flex-col items-center justify-center p-6">
          <CardHeader className="flex  gap-4 items-center justify-center text-xl font-bold">
            <Eye className="h-6 w-6 text-yellow-800" />
            Profile Views
          </CardHeader>
          <h1 className="text-xl font-bold p-4">0</h1>
          <CardContent className="text-gray-500 text-sm text-center dark:text-gray-400">
            Your Profile Views number will appear here.
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col w-full mt-6">
        <label className="text-gray-700 dark:text-gray-300">Gender</label>
        <select className="border rounded p-2">
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col w-full mt-6">
        <label className="text-gray-700 dark:text-gray-300">Nationality</label>
        <select className="border rounded p-2">
          <option>Select Nationality</option>
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col w-full mt-6">
        <label className="text-gray-700 dark:text-gray-300">
          Date of Birth
        </label>
        <input className="border rounded p-2" type="date" />
      </div>
      <div className="flex flex-col w-full mt-6">
        <label className="flex items-center">
          <input className="mx-2" type="checkbox" />
          <span className="text-gray-700 dark:text-gray-300">
            Please send me the weekly sooqsquare newsletter of the most popular
            steals across the sooqsquare site.
          </span>
        </label>
        <label className="flex items-center mt-4">
          <input className="mx-2" type="checkbox" />
          <span className="text-gray-700 dark:text-gray-300">
            Amazing offers and bargains from our advertising partners.
          </span>
        </label>
      </div>
      <div className="flex w-full mt-6">
        <Button className="main-bg text-white px-6 py-2 rounded">Update</Button>
      </div>
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
