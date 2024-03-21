import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addUserSkill } from "../profile/actions";
import { SaveFormBtn } from "@/components/component/buttons/formBtns";

const AddSkillDialoag = ({ userId }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="main-bg">
          <PlusCircle size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark:bg-zinc-800 dark:text-white ">
        <DialogHeader className="dark:bg-zinc-800 dark:text-white">
          <DialogTitle>Add A Skill</DialogTitle>
        </DialogHeader>
        <form action={addUserSkill} className="space-y-4">
          <Label>Skill</Label>
          <Input placeholder="Write your Skill" name="skill" id="skill" />
          <Input type="hidden" value={userId} name="userId" id="userId" />
          <SaveFormBtn />
        </form>
      </DialogContent>
      <DialogClose asChild>
        <Button className="hidden" type="button" variant="secondary">
          Close
        </Button>
      </DialogClose>
    </Dialog>
  );
};

export default AddSkillDialoag;
