import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
    <div className="bg-gray-100 dark:border-zinc-800 dark:bg-zinc-950 py-10 lg:pt-16">
      <div className="container px-4 grid items-center gap-4 text-center md:px-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Jobs at SooqSquare
          </h1>
          <div className="inline-block rounded-lg border">
            <Button size="lg" variant="outline">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default MainSection;
