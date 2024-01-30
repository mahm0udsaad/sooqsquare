"use client"
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { BsThreads } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/loading-spiner"
import { Textarea } from "@/components/ui/textarea"
import { GiDrippingStar } from "react-icons/gi";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { useState } from "react";
import upload from "@/app/[lng]/(traderDashboard)/myShop/action";
import { createShop, deleteShop } from "@/app/[lng]/(dashboard)/actions";
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { toast } from "sonner";
import { useDarkMode } from "@/context/darkModeContext";
import { AiOutlineShop } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const UserSideBar = ({ user }) =>{
  const [shopImage, setShopImage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      const formData = new FormData();
      formData.append('file', file);

      const uploadResult = await upload(formData);
      
      if (uploadResult && uploadResult.adImage) {
        setShopImage(uploadResult.adImage);
        setValue('shopImage' , uploadResult.adImage);
      }
      toast("Image Uploaded Successfully " )
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true)
    const newShop = await createShop(user.id, data.shopName, data.shopLocation, data.shopImage , data.description)
    if(newShop){
      toast("Shop Created Successfully")
      setLoading(false)
    }
  };

    return(
        <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2 mt-5">
        <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/myProfile">
              <CgProfile className="w-6 h-6 " />
              <span className="mx-3">My Profile</span>
          </Link>
          <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/reports">
              <TbReportAnalytics className="w-6 h-6 text-orange-600" />
              <span className="mx-3">Reports</span>
          </Link>
          <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/myAds">
              <BsThreads className="w-6 h-6 text-sky-600" />
              <span className="mx-3">My Ads</span>
          </Link>
          <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/favorites">
              <HeartIcon className="w-6 h-6 text-rose-600" />
              Favorites
            </Link>
            <Drawer>
          <DrawerTrigger asChild>
          <Button className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-200">
           Create a Shop
          </Button>         
           </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-500">
                  Create a Shop
                  <GiDrippingStar className="w-6 h-6 mx-4 text-green-500"/>
              </DrawerTitle>
              <DrawerDescription>Enter your shop details below to upgrade.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1 w-1/2">
                <Label className="cursor-pointer" htmlFor="avatar-image">
                  <span className="sr-only">Upload an avatar</span>
                  <Input onChange={handleImageChange} accept="image/*" className="hidden" id="avatar-image" name="avatar-image" type="file" />
                  <Input onChange={handleImageChange}  className="hidden" id="shopImage" name="shopImage" value={shopImage} type="text" />
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage alt="Shop owner" src={shopImage || "/new-placeholder-avatar.jpg"} />
                    <AvatarFallback>SO</AvatarFallback>
                  </Avatar>
                </Label>
                  </div>
                  <div className="space-y-1">
                      <Label htmlFor="shop-category">Shop Category</Label>
                      <Controller
                        name="shopCategory"
                        control={control}
                        render={({ field }) => (
                          <Select>
                            <SelectTrigger>
                              {field.value || "Select Category"}
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem onMouseDown={() => setValue("shopCategory", "Cars")}>Cars</SelectItem>
                              <SelectItem onMouseDown={() => setValue("shopCategory", "Appartment")}>Appartment</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-name">Shop Name</Label>
                      <Input {...register("shopName", { required: "Shop Name is required" })} placeholder="Enter your shop name" />
                      {errors.shopName && <span>{errors.shopName.message}</span>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-description">Shop Description</Label>
                      <Textarea {...register("shopDescription")} className="min-h-[100px]" placeholder="Describe your shop" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-address">Shop Address</Label>
                      <Input {...register("shopLocation")} placeholder="Enter your shop Address" />
                    </div>
                    <Button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-200"
                    >
                      Upgrade
                    </Button>
                  </form>
                </div>
          </DrawerContent>
        </Drawer>
        </div>
      </div>
    )
}

const ShopSideBar = ({ user }) =>{
  const [shopImage, setShopImage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const { setConfettiActive , isConfettiActive } = useDarkMode()
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      const formData = new FormData();
      formData.append('file', file);

      const uploadResult = await upload(formData);
      
      if (uploadResult && uploadResult.adImage) {
        setShopImage(uploadResult.adImage);
        setValue('shopImage' , uploadResult.adImage);
      }
      toast("Image Uploaded Successfully " )
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true)
    const newShop = await createShop(user.id, data.shopName, data.shopLocation, data.shopImage , data.description)
    if(newShop){
      toast("Shop Created Successfully")
      setConfettiActive(true)
      setLoading(false)
    }
  };

  const handleDeleteShop = async (shopId) =>{
    const deletedShop = await deleteShop(shopId , user.id)
    if(deletedShop){
      console.log(deletedShop);
      toast('shop deleted successfully')
    }
  }
    return(
      <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
        <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
          <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
        <div className="flex flex-col min-h-[75dvh] justify-between gap-4  px-4 py-2 mt-5">
         <div className="w-full">
          {user.shop.map((shop)=>(
            <Accordion className="space-y-2" collapsible type="single">
            <AccordionItem value="shop-1 flex justify-between  ">
              <AccordionTrigger className="flex w-full  justify-between items-center px-4 py-2  font-semibold">
              {shop.shopCategory === "cars" ? <FaCar className="w-6 h-6"/> :<MdOutlineRealEstateAgent className="w-6 h-6"/>}
                {shop.shopName}
              </AccordionTrigger>
              <AccordionContent className="space-y-2 w-[90%] mx-auto">
              <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href={`/createAd/${shop.id}`}>
                <MdOutlineAddBox  className="w-6 h-6" />
                <span className="mx-3">Create Ad</span>
              </Link>
              <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href={`/myShopView/${shop.id}`}>
                <AiOutlineShop className="w-6 h-6 text-rose-400	" />
                <span className="mx-3">My Shop</span>
              </Link>
              <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href={`/myShop/${shop.id}`}>
                  <CiEdit className="w-6 h-6 w-6 h-6 text-fuchsia-400" />
                  <span className="mx-3">Shop Details</span>
              </Link>
              <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href="/reports">
                  <TbReportAnalytics className="w-6 h-6 text-orange-600" />
                  <span className="mx-3">Shop Reports</span>
              </Link>
              <Link className="flex text-sm gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href={`/shopAds/${shop.id}`}>
                  <BsThreads className="w-6 h-6 text-sky-600" />
                  <span className="mx-3">Shop Ads</span>
              </Link>
              <Drawer>
                <DrawerTrigger  asChild>
                <Button className="p-0 bg-transparent hover:bg-transparent flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900">
                <TrashIcon className="w-6 h-6 text-red-600" />
                  <span className="mx-3">Delete Shop</span>
                </Button>         
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="flex tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-500">
                        Are you sure you will delete this shop ?
                        <TrashIcon className="w-6 h-6 mx-4 text-rose-500"/>
                    </DrawerTitle>
                    <DrawerDescription>we can't undo this action</DrawerDescription>
                  </DrawerHeader>
                  
              <Button onClick={()=> handleDeleteShop(shop.id)} className="flex gap-3 items-center text-gray-700 dark:text-gray-200 hover:dark:text-white hover:text-zinc-900" href={`/shopAds/${shop.id}`}>
                  <TrashIcon className="w-6 h-6 text-red-600" />
                  <span className="mx-3">Delete Shop</span>
              </Button>
                </DrawerContent>
              </Drawer>
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          ))}
         </div>
        <Drawer isOpen={!isConfettiActive}>
          <DrawerTrigger  asChild>
          <Button className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-full text-white bg-gradient-to-r from-rose-400 to-blue-500  hover:scale-105 transition-all duration-200">
           Create a Shop
          </Button>         
           </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-500">
                  Create a Shop
                  <GiDrippingStar className="w-6 h-6 mx-4 text-green-500"/>
              </DrawerTitle>
              <DrawerDescription>Enter your shop details below to upgrade.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1 w-1/2">
                <Label className="cursor-pointer" htmlFor="avatar-image">
                  <span className="sr-only">Upload an avatar</span>
                  <Input onChange={handleImageChange} accept="image/*" className="hidden" id="avatar-image" name="avatar-image" type="file" />
                  <Input onChange={handleImageChange}  className="hidden" id="shopImage" name="shopImage" value={shopImage} type="text" />
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage alt="Shop owner" src={shopImage || "/new-placeholder-avatar.jpg"} />
                    <AvatarFallback>SO</AvatarFallback>
                  </Avatar>
                </Label>
                  </div>
                  <div className="space-y-1">
                      <Label htmlFor="shop-category">Shop Category</Label>
                      <Controller
                        name="shopCategory"
                        control={control}
                        render={({ field }) => (
                          <Select>
                            <SelectTrigger>
                              {field.value || "Select Category"}
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem onMouseDown={() => setValue("shopCategory", "Cars")}>Cars</SelectItem>
                              <SelectItem onMouseDown={() => setValue("shopCategory", "Appartment")}>Appartment</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-name">Shop Name</Label>
                      <Input {...register("shopName", { required: "Shop Name is required" })} placeholder="Enter your shop name" />
                      {errors.shopName && <span>{errors.shopName.message}</span>}
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-description">Shop Description</Label>
                      <Textarea {...register("shopDescription")} className="min-h-[100px]" placeholder="Describe your shop" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-address">Shop Address</Label>
                      <Input {...register("shopLocation")} placeholder="Enter your shop Address" />
                    </div>
                    <Button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-200"
                    >
                      {Loading && <LoadingSpinner />}
                      Upgrade
                    </Button>
                  </form>
                </div>
          </DrawerContent>
         </Drawer>
        </div>
      </div>
    )
}
function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
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
export { UserSideBar , ShopSideBar} ;