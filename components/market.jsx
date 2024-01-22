/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EUX8zQQwXYH
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main key="1" className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
      <div className="flex flex-col gap-4 items-start py-2">
        <h2 className="text-2xl font-bold">Filter Options</h2>
        <div className="grid gap-1">
          <h3 className="font-semibold">Category</h3>
          <div className="flex flex-col gap-2">
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              All categories
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Vehicles
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Cars for Sale
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Cars for Rent
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Tyres, Batteries, Oils, & Accessories
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Car Spare Parts
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Motorcycles & Accessories
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Boats - Watercraft
            </Link>
            <Link className="text-blue-500 hover:text-blue-700" href="#">
              Heavy Trucks, Buses & Other Vehicles
            </Link>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Location</h3>
          <Input id="location" placeholder="Enter location" />
          <h3 className="font-semibold mt-2">
            City
            <Select className="mt-2" id="city">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                  <SelectItem value="phoenix">Phoenix</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </h3>
          <Select id="city" options={["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]} />
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Price Range</h3>
          <div className="flex gap-2">
            <Input id="price-min" placeholder="Min price" />
            <Input id="price-max" placeholder="Max price" />
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Vehicle Type</h3>
          <div className="flex items-center gap-2">
            <Checkbox id="sport" />
            <Label htmlFor="sport">Sport (10)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="suv" />
            <Label htmlFor="suv">SUV (12)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="mpv" />
            <Label htmlFor="mpv">MPV (16)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="sedan" />
            <Label htmlFor="sedan">Sedan (20)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="coupe" />
            <Label htmlFor="coupe">Coupe (14)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="hatchback" />
            <Label htmlFor="hatchback">Hatchback (14)</Label>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Button className="dark:text-white">View More</Button>
          <Button className="dark:text-white">Skoda</Button>
          <Button className="dark:text-white">Fiat</Button>
          <Button className="dark:text-white">Nissan</Button>
          <Button className="dark:text-white">Toyota</Button>
          <Button className="dark:text-white">Kia</Button>
          <Button className="dark:text-white">Hyundai</Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Ad image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <Button className="absolute top-2 right-2 bg-transparent rounded-full p-1">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Button>
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">Ad Title</h3>
              <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Ad Description</p>
              <h4 className="font-semibold">$19.99</h4>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Button className="w-1/2 mr-1 flex items-center justify-center gap-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
                Chat
              </Button>
              <Button className="w-1/2 ml-1 flex items-center justify-center gap-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    d="M21 12c0-4.418-3.582-9-8-9-1.795 0-3.417.721-4.669 1.879A18.018 18.018 0 003 12a18.018 18.018 0 005.331 7.121C8.583 20.279 10.205 21 12 21c4.418 0 8-4.582 8-9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

