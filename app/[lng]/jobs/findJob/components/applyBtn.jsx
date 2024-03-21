import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/app/i18n/";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/prisma/actions";
import PDFUpload from "./pdfInput";
import { addJobApplication } from "../../action";
import { FileCheck } from "lucide-react";

export default async function ApplyBtn({ lng, searchParams, jobId }) {
  const { t } = await useTranslation(lng, "jobs");
  const currentUser = await getServerSession();
  const user = await getUserByEmail(currentUser?.user.email);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="inline-flex h-10 items-center justify-center rounded-md main-bg px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          variant="outline"
        >
          {t("apply_now")}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Apply for a job</SheetTitle>
          <SheetDescription>
            Please submit your CV to apply for a job.
          </SheetDescription>
        </SheetHeader>
        <form action={addJobApplication} className="grid gap-4 py-4">
          <div className="grid w-full gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                name="name"
                defaultValue={user.username}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">Cover Letter</Label>
              <Textarea
                className="min-h-[100px] max-h-[200px] resize"
                id="message"
                placeholder="Message"
              />
            </div>
            {user.cvUrl && (
              <div className="flex gap-4 items-center">
                <FileCheck color="green" />
                {user.cvUrl.split("/")[7]}
              </div>
            )}
            <PDFUpload />
          </div>
          <input type="hidden" name="cvUrl" id="cvUrl" value={user.cvUrl} />
          <input type="hidden" name="userId" id="userId" value={user.id} />
          <input type="hidden" name="jobId" id="jobId" value={jobId} />
          <Button
            className="inline-flex h-10 items-center justify-center rounded-md main-bg px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            type="submit"
          >
            apply
          </Button>
        </form>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
