import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Senior Software Engineer</h2>
            <p className="text-gray-500 dark:text-gray-400">at</p>
            <h3 className="inline-block text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">TechCo</h3>
          </div>
          <div className="grid gap-4 sm:gap-2">
            <div className="space-y-2">
              <h4 className="inline-block text-xl font-semibold tracking-tight">Responsibilities</h4>
              <p className="text-gray-500 dark:text-gray-400">
                Build scalable frontend architecture to support the growth of the platform. Collaborate with
                cross-functional teams to translate business requirements into elegant technical solutions. Implement
                best practices for performance and accessibility.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="inline-block text-xl font-semibold tracking-tight">Requirements</h4>
              <p className="text-gray-500 dark:text-gray-400">
                5+ years of experience in frontend development. Expertise in modern web technologies such as React and
                Next.js. Strong understanding of UI/UX principles. Experience with testing frameworks like Jest and
                React Testing Library is a plus.
              </p>
            </div>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Apply Now
          </Link>
        </div>
        <img
          alt="Image"
          className="aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="450"
          src="/placeholder.svg"
          width="800"
        />
      </div>
    </section>
  )
}

