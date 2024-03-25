import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function AppartmentsList({ items }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center  bg-white p-3 gap-4">
        <div className="flex items-center gap-2">
          <MapIcon className="w-4 h-4" />
          <span className="font-semibold">Near Boston, MA</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0" variant="outline">
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value="featured">
              <DropdownMenuRadioItem value="featured">
                Featured
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Newest">
                Newest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="low">
                Price: Low to High
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">
                Price: High to Low
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4 md:grid-cols-2 container">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <img
              alt="Apartment 1"
              className="rounded-lg shadow-lg overflow-hidden w-1/3 flex-shrink-0 aspect-3/4 object-cover"
              height={150}
              src={item.images[0].url}
              width={200}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <h4 className="font-semibold">{item.price}</h4>
              <div className="flex gap-2">
                <Link
                  href={`/apartments/${item.id}`}
                  className="border-zinc-900 h-10 px-4 py-2 border rounded text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white transition"
                  variant="outline"
                >
                  View
                </Link>
                <Button
                  className="border-green-500 text-green-500 main-outline"
                  variant="outline"
                >
                  Chat
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function MapIcon(props) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}
