import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { getUserCompanyByEmail } from "../../../action";

export default async function ApplicantsPage() {
  const currentUser = await getServerSession();
  const post = await getUserCompanyByEmail(currentUser.user.email);

  return (
    <Card className="w-full max-w-11/12 h-fit">
      <CardHeader>
        <CardTitle>Applicants for {post.title}</CardTitle>
        <CardDescription>
          View and manage applicants for the {post.title} position
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Resume</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {post.JobApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <img
                          alt="Avatar"
                          className="rounded-full"
                          height="32"
                          src={app.user.image}
                          style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                          }}
                          width="32"
                        />
                        <div className="font-medium">{app.user.username}</div>
                      </div>
                    </TableCell>
                    <TableCell>{app.user.email}</TableCell>
                    <TableCell>
                      <Link
                        className="underline underline-offset-[4px] font-semibold"
                        href={app.cvUrl}
                        target="_blank"
                      >
                        View resume
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge className="w-[100px]" variant="outline">
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm">Interview</Button>
                        <Link
                          className="underline flex items-center"
                          href={`/jobs/profile/${app.user.id}`}
                        >
                          View Profile
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
