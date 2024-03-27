"use client";
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
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "@/app/i18n/client";
import {
  GenericSelection,
  withGenericSelection,
} from "@/app/[lng]/apartments/components/dynamicSelection";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/loading-spiner";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Edit } from "lucide-react";
import {
  bathroomsProps,
  bedroomsProps,
  buildingAge,
  floorProps,
  floorsNumProps,
  interfaceProps,
} from "@/app/[lng]/apartments/static";
import { updateAd } from "@/app/[lng]/apartments/actions";
const SelectionComp = withGenericSelection(GenericSelection);

export default function EditBtn({ lng, ad }) {
  const { t } = useTranslation(lng, "view");
  const { handleSubmit, setValue, control, formState } = useForm();
  const { toast } = useToast();
  const cancelRef = useRef(null);

  const onSubmit = async (data) => {
    const updatedAd = await updateAd(ad.id, data);
    if (updatedAd) {
      cancelRef.current.click();
      toast("ad updated Successfully");
    }
  };
  function nextStep() {
    return;
  }
  return (
    <Drawer>
      <DrawerTrigger className="w-1/2" asChild>
        <Button className="bg-transparent border border-black text-black hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:border-black hover:dark:text-black  flex justify-center items-center space-x-2">
          <Edit className="w-4 h-4 mx-2" />
          <span>Edit</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-zinc-800 ">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        </DrawerHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-x-4 w-11/12 mx-auto"
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="title">{t("Name")}:</Label>
              <Controller
                name="title"
                control={control}
                defaultValue={ad.title || ""}
                render={({ field }) => <Input {...field} type="text" />}
              />
            </div>
            <div>
              <Label htmlFor="price">{t("Price")}:</Label>
              <Controller
                name="price"
                control={control}
                defaultValue={ad.price}
                render={({ field }) => <Input {...field} type="number" />}
              />
            </div>
            <SelectionComp
              {...bedroomsProps}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
            <SelectionComp
              {...bathroomsProps}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
            <SelectionComp
              {...floorProps}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
            <SelectionComp
              {...floorsNumProps}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
            <SelectionComp
              {...interfaceProps}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
            <SelectionComp
              {...buildingAge}
              setValue={setValue}
              nextStep={nextStep}
              shouldOpen={false}
            />
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={(e) => setValue("description", e.target.value)}
              defaultValue={ad.description || ""}
              className="min-h-[50px]"
              id="description"
              name="description"
              placeholder="Enter your description"
            />
          </div>
          <DrawerFooter
            className={"flex flex-row items-center justify-center gap-4"}
          >
            <Button className="bg-transparent border border-green-600 hover:bg-green-600 hover:text-white text-green-600">
              {formState.isSubmitting && <LoadingSpinner />}
              Submit
            </Button>
            <DrawerClose className="dark:text-black mx-2">
              <Button ref={cancelRef} type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
