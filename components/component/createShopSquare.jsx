"use client"
import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerContent, Drawer, DrawerClose } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/loading-spiner"
import { Textarea } from "@/components/ui/textarea"
import { GiDrippingStar } from "react-icons/gi";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { useRef, useState } from "react";
import upload from "@/app/[lng]/(traderDashboard)/myShop/action";
import { createShop } from "@/app/[lng]/(traderDashboard)/actions";
import { SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { useDarkMode } from "@/context/darkModeContext";
import { useTranslation } from "@/app/i18n/client"
import { RiTimerFlashLine } from "react-icons/ri";
import { redirect } from "next/dist/server/api-utils"

const CreateShopSquare = ({ user , lng}) =>{
  const [shopImage, setShopImage] = useState(null);
  const { t } = useTranslation(lng , "translation")
  const { register, handleSubmit, setValue, control, formState: { errors, isSubmitting , isSubmitted ,isSubmitSuccessful} } = useForm();
  const { setConfettiActive , isConfettiActive } = useDarkMode()
  if(!user){
    redirect('/sign-in')
  }
  const drawerCloseRef = useRef(null);

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
    if(!data.shopName || !data.shopImage){
        return ;
    }
    const newShop = await createShop(user.id, data)
        console.log(newShop);
        drawerCloseRef.current.click();
        setConfettiActive(true)
        toast("Shop Created Successfully")
  };

    return(
        <Drawer>
          <DrawerTrigger  asChild>
          <Button className="bg-transparent hover:bg-transparent mb-3">
          <div className="flex justify-between self-start lg:w-auto w-full px-20 hover:opacity-70 cursor-pointer py-12 rounded-[35px] bg-gradient-to-r from-rose-900 to-purple-500 items-center ">
              <RiTimerFlashLine className='text-4xl text-white'/>
              <div className="text-white text-2xl font-bold leading-10 my-auto">
              {t('Create Shop')}
            </div>
              </div>
          </Button>         
           </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-500">
              {t('Create Shop')}
                  <GiDrippingStar className="w-6 h-6 mx-4 text-green-500"/>
              </DrawerTitle>
              <DrawerDescription>Enter your shop details below to upgrade.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1 w-1/2">
                <Label className="cursor-pointer" htmlFor="avatar-image">
                  <span className="sr-only">Upload an avatar</span>
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage alt="Shop owner" src={shopImage || "/new-placeholder-avatar.jpg"} />
                    <AvatarFallback>SO</AvatarFallback>
                  </Avatar>
                  <Input  placeholder="Enter your shop name" onChange={handleImageChange} accept="image/*" className="hidden" id="avatar-image" name="avatar-image" type="file" />
                    {isSubmitted && !shopImage ? <p className="text-red-500">you have to upload image for the shop</p> : null}
                </Label>
                  </div>
                  <div className="space-y-1">
                      <Label htmlFor="shop-name">Shop Name</Label>
                      <Input  onChange={(e)=> setValue('shopName',e.target.value)} placeholder="Enter your shop name" />
                      {errors.shopName && <span className="text-red-300 text-sm">{errors.shopName.message}</span>}
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
                              <SelectItem key={'cars'} onMouseDown={() => setValue("shopCategory", "Cars")}>Cars</SelectItem>
                              <SelectItem key={'appartment'} onMouseDown={() => setValue("shopCategory", "Appartment")}>Appartment</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-description">Shop Description</Label>
                      <Textarea {...register("shopDescription")} className="min-h-[100px]" placeholder="Describe your shop" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="shop-address">Shop Address</Label>
                      <Input   onChange={(e)=> setValue('location',e.target.value)} placeholder="Enter your shop Address" />
                    </div>
                    <div className="flex gap-4">
                    <Button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105 transition-all duration-200"
                    >
                       {isSubmitting && <LoadingSpinner />}
                       {t('Create')}
                    </Button>
                    <DrawerClose  asChild>
                      <Button ref={drawerCloseRef} variant="outline"> {t('Cancel')}</Button>
                   </DrawerClose>
                    </div>
                  </form>
                </div>
          </DrawerContent>
         </Drawer>
    )
}
export default CreateShopSquare;