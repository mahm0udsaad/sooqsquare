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
import { PlusCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { SaveFormBtn } from "@/components/component/buttons/formBtns";
import DatePickerWithRange from "./date-picker";
import { addWorkExperience } from "../profile/actions";

export default function AddWorkExp({ searchParams, userId }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" className="main-bg">
          <PlusCircle size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-zinc-800 ">
        <DrawerHeader>
          <DrawerTitle className="text-center">Add Work Experince</DrawerTitle>
        </DrawerHeader>
        <form action={addWorkExperience} className="space-y-2 w-4/5 mx-auto">
          <Input
            type="hidden"
            name="dateRange"
            value={searchParams?.dateRange}
          />
          <Input type="hidden" name="userId" value={userId} />
          <Label htmlFor="experience-type">Experience Type</Label>
          <Input
            id="experience-type"
            name="experienceType"
            placeholder="Enter experience type"
          />
          <div className="flex w-full gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="job-title">Job Title</Label>
              <Input
                id="job-title"
                name="jobTitle"
                placeholder="Enter job title"
              />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                defaultValue=" "
                id="company-name"
                name="company"
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <DatePickerWithRange />
            <div className="flex items-center space-x-2">
              <Checkbox id="currently-working" name="currentlyWorking" />
              <Label
                className="text-sm font-medium leading-none"
                htmlFor="currently-working"
              >
                Currently Working
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="description"
              name="description"
              placeholder="Enter description"
            />
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="space-y-2 w-4/5">
              <Label htmlFor="country">Country</Label>
              <Input
                defaultValue=" "
                name="country"
                id="country"
                placeholder="Enter country"
              />
            </div>
            <div className="flex items-center space-x-2 pt-8">
              <Checkbox id="remote" name="remote" />
              <Label
                className="text-sm font-medium leading-none"
                htmlFor="remote"
              >
                Remote
              </Label>
            </div>
          </div>
          <DrawerFooter
            className={"flex flex-row items-center justify-center gap-4"}
          >
            <SaveFormBtn />
            <DrawerClose asChild className="dark:text-black mx-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
