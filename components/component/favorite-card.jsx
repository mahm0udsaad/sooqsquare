"use client"
import { addToFavorites } from "@/app/[lng]/vehicle/actions"
import { CardTitle, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FavoriteCard({ ad , userId}) {
  return (
    (<Card className="w-full">
      <CardContent className="flex flex-col items-center">
        <img
          alt="Ad Image"
          className="aspect-square  w-full rounded-lg overflow-hidden"
          height={200}
          src={ad.Adimages[0].url}
          width={200} />
        <div className="flex items-center justify-between w-full mt-4">
          <CardTitle className="text-lg font-semibold">{ad.name}</CardTitle>
          <HeartIcon className="h-6 w-6 fill-primary" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <Button variant="outline">View Details</Button>
          <Button onClick={() => addToFavorites(userId , ad.id)} className="bg-red-500 text-white" variant="outline">
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>)
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
