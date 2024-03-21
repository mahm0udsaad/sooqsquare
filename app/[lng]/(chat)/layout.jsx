import dynamic from "next/dynamic";
import LoadingSideBar from "@/components/skeletons/sideBarskeleton";
import { getServerSession } from "next-auth";
import { getUserChatsByEmail } from "@/prisma/actions";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children, params }) {
  const ChatSideBar = dynamic(
    () => import("@/components/component/chat-side-bar"),
    {
      loading: () => <LoadingSideBar />,
    }
  );

  const logedUser = await getServerSession();
  const user = await getUserChatsByEmail(logedUser?.user.email);

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex pb-8 min-h-[80dvh] bg-gray-100 dark:bg-zinc-950">
      <ChatSideBar user={user} lng={params.lng} />
      {children}
    </div>
  );
}
