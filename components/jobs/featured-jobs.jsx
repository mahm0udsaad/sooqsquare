import Link from "next/link";

export default function FeaturedJobs() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 ">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-6 lg:space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Jobs
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Handpicked premium job listings across industries. Your next
            opportunity awaits.
          </p>
        </div>
        <div className="grid w-full gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 border rounded-lg overflow-hidden border-gray-100 shadow dark:border-gray-800 dark:bg-zinc-800"
            >
              <Link
                className="aspect-[16/9] overflow-hidden hover:scale-105 transition-transform"
                href="#"
              >
                <img
                  alt="Job"
                  className="object-cover w-full aspect-[16/9]"
                  height="180"
                  src="/ar/job-post-placeholder.svg"
                  width="320"
                />
              </Link>
              <div className="flex-1 p-4 space-y-2">
                <h3 className="text-xl font-semibold">
                  Senior Product Designer
                </h3>
                <p className="text-sm text-gray-500">Design</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View all Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
