import SideBar from "../newCompany/components/side-bar";

export default async function JobsDashboardLayout({
  children,
  params: { lng },
}) {
  return (
    <>
      <div className="flex w-full min-h-screen justify-between bg-gray-100 dark:bg-zinc-950">
        <SideBar />
        {children}
      </div>
    </>
  );
}
