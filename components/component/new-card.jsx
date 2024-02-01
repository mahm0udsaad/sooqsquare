"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MarketAdCard({ ad }) {
  return (
    <Card className="w-full max-w-md flex flex-col">
      <Image
        alt="Car Image"
        className="w-full object-cover rounded-t-lg"
        height={200}
        width={300}
        src={ad.Adimages[0].url}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
      />
      <CardHeader>
        <CardTitle>{ad.name}</CardTitle>
        <CardDescription>Electric Sedan</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <LocateIcon className="mr-2 inline-block h-4 w-4" />
            Los Angeles, CA
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="mr-2 inline-block h-4 w-4" />
            Listed on January 24, 2024
          </p>
        </div>
        <div className="grid gap-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <GaugeIcon className="mr-2 inline-block h-4 w-4" />
            Mileage: 15,000 miles
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <BatteryIcon className="mr-2 inline-block h-4 w-4" />
            Battery: 75 kWh
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">
            <TagIcon className="mr-2 inline-block h-6 w-6" />
            $35,000
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm">Call</Button>
        <Button size="sm" variant="outline">
          Chat
        </Button>
      </CardFooter>
    </Card>
  )
}

function BatteryIcon(props) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
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
  )
}


function TagIcon(props) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}
