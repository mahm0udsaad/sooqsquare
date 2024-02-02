"use client"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react";
import {  deleteShop } from "@/app/[lng]/(traderDashboard)/actions";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoadingSpinner } from "@/components/loading-spiner";
import { useTranslation } from "@/app/i18n/client";

 const DeleteDialoag = ({ shop , lng}) =>{
  
const { t } = useTranslation(lng , "view")
const closeDialoagRef = useRef()
const [deleteLoading , setDeleteLoading ] = useState(false)

const handleDeleteShop = async (shopId) => {
  try {
    setDeleteLoading(true);
     await deleteShop(shopId);
     toast('Shop deleted successfully');
  } catch (error) {
    console.error('Error deleting shop:', error);
  } finally {
    setDeleteLoading(false);
    closeDialoagRef.current.click();
  }
};

    return(
    <Dialog >
    <DialogTrigger>
    <Button className="p-0 bg-transparent hover:bg-transparent flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900">
    <TrashIcon className="w-6 h-6 text-red-600" />
        <span className="mx-3">{t("Delete Shop")}</span>
    </Button>         
    </DialogTrigger>
    <DialogContent className="dark:bg-zinc-800 dark:text-white ">
    <DialogHeader className="dark:bg-zinc-800 dark:text-white">
        <DialogTitle>Delete {shop.shopName}</DialogTitle>
        <DialogDescription className="dark:zinc-800 dark:text-white">
        This action cannot be undone. This will permanently delete your shop
        and remove shop data from our servers.
        </DialogDescription>
    </DialogHeader>
    <Button onClick={()=> handleDeleteShop(shop.id)} className="bg-transparent hover:bg-rose-600 hover:text-white border border-rose-600 flex gap-3 items-center text-rose-700 dark:text-gray-200  hover:text-zinc-900" href={`/shopAds/${shop.id}`}>
        {deleteLoading && <LoadingSpinner />}
        <TrashIcon className="w-6 h-6" />
        <span className="mx-3">Delete Shop</span>
    </Button>

    </DialogContent>
    <DialogClose asChild>
    <Button ref={closeDialoagRef} className="hidden" type="button" variant="secondary">
        Close
    </Button>
    </DialogClose>
    </Dialog>
    )
}
function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
export default  DeleteDialoag ;