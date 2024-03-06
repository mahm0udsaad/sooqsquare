import { MessageSquareShare } from "lucide-react";
export function ChatMainPage() {

  return (
    <div className="flex-1 bg-gray-50 pt-4 rounded-lg dark:bg-zinc-800">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chat</h2>
      </div>
      <div className="flex flex-col h-[80dvh] space-y-4 p-4 h-full overflow-y-auto">
        <main className="flex flex-col items-center justify-center h-screen w-full ">
          <MessageSquareShare className="h-16 w-16 main-color mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">Choose a conversation to start</h2>
        </main>
      </div>
    </div>
  );
}
