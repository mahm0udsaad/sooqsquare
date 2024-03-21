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
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

export default function AddEducation() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" className="main-bg">
          <PlusCircle size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-zinc-800 ">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        </DrawerHeader>
        <form className="space-y-2 w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="institution-name">Institution Name</Label>
              <Input
                className="w-full"
                id="institution-name"
                placeholder="Harvard University"
                type="text"
              />
            </div>
            <div className="w-[1/2]">
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="outline">
                    Degree
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-1/2" align="start">
                  <DropdownMenuItem>Bachelor's</DropdownMenuItem>
                  <DropdownMenuItem>Master's</DropdownMenuItem>
                  <DropdownMenuItem>Ph.D.</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu className="w-full">
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="outline">
                    Field of Study
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full" align="start">
                  <DropdownMenuItem>Economics</DropdownMenuItem>
                  <DropdownMenuItem>History</DropdownMenuItem>
                  <DropdownMenuItem>Computer Science</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input
                id="start-date"
                placeholder="Select start date"
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input id="end-date" placeholder="Select end date" type="date" />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter a description." />
          </div>
        </form>
        <DrawerFooter
          className={"flex flex-row items-center justify-center gap-4"}
        >
          <DrawerClose asChild className="dark:text-black mx-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
