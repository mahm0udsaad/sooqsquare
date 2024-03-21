import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { SaveFormBtn } from "@/components/component/buttons/formBtns";
import { updateUserInfo } from "../profile/actions";

export default function EditProfileInfo({ user }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" className="main-bg">
          <Edit size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-zinc-800 ">
        <DrawerHeader>
          <DrawerTitle className="text-center">
            Edit Your Main Information
          </DrawerTitle>
        </DrawerHeader>
        <form action={updateUserInfo} className="space-y-2 w-4/5 mx-auto">
          <input type="hidden" name="userId" value={user.id} />
          <div className="space-y-2">
            <Label htmlFor="experience-type">User Name</Label>
            <Input
              defaultValue={user.username}
              id="experience-type"
              name="username"
              placeholder="Enter User Name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-title">Age</Label>
            <Input
              defaultValue={user?.age}
              type="number"
              name="age"
              id="job-title"
              placeholder="Enter Your Age"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input
              defaultValue={user?.jobTitle}
              id="job-title"
              name="jobTitle"
              placeholder="Enter job title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-title">Experince</Label>
            <Input
              type="number"
              defaultValue={user?.yearsOfExperince}
              id="experience"
              name="experience"
              placeholder="Enter Years Of Experince"
            />
          </div>
          <DrawerFooter
            className={"flex flex-row items-center justify-center gap-4"}
          >
            <DrawerClose asChild className="dark:text-black mx-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
            <SaveFormBtn />
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
