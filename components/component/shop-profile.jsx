'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BsCloudUpload } from "react-icons/bs";
import upload from '../../app/[lng]/(traderDashboard)/myShop/action'
import { useState } from "react"
import { toast } from "sonner"
import { addBgImageToShop, addImageToShop, updateShopInfo } from "@/app/[lng]/(traderDashboard)/actions"
import { LoadingSpinner } from "@/components/loading-spiner"
import { useForm, Controller } from 'react-hook-form';

export default function MyShopPage({shop , lng}) {
  const [bgImage, setBgImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { handleSubmit, control , formState } = useForm();

  const handleBgImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      const uploadResult = await upload(formData);
      
      if (uploadResult && uploadResult.adImage) {
        addBgImageToShop(shop.id , uploadResult.adImage)
      }
      toast("Image Uploaded Successfully " )
      setUploading(false);
    } catch (error) {
      console.error(error.message);
      setUploading(false);
    }
  };
  const handleShopImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      const uploadResult = await upload(formData);
      
      if (uploadResult && uploadResult.adImage) {
        addImageToShop(shop.id , uploadResult.adImage)
      }
      toast("Image Uploaded Successfully " )
      setUploading(false);
    } catch (error) {
      console.error(error.message);
      setUploading(false);
    }
  };
  const handleUpdateShop = async (event) => {
    event.preventDefault(); 
    const newShop = await updateShopInfo(shop.id, shopName, shopDescription)
    if(newShop){
      toast("Shop informaiton updated Successfully")
    }
  };
  const onSubmit = async (data) => {
    const newShop = await updateShopInfo(shop.id, data)
    if(newShop){
      toast("Shop informaiton updated Successfully")
    }
    handleUpdateShop(data);
  };
  return (
    <>
      <section className="relative w-full h-[50dvh] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Label className="cursor-pointer w-full h-full relative" htmlFor="background-image">
            <span className="sr-only">Upload a background image</span>
            <Image
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              height="1080"
              src={shop.bgImage}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width="1920"
            />
          <div className="z-40 absolute bottom-0 main-bg p-3 rounded">
            {uploading ? <LoadingSpinner />
          :  
            <BsCloudUpload className="text-lg"/>
          }
              <Input onChange={handleBgImageChange} accept="image/*" className="hidden"  id="background-image" name="background-image" type="file" />
            </div>
          </Label>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-end justify-end pb-8 pr-8">
          <Label className="cursor-pointer" htmlFor="avatar-image">
            <span className="sr-only">Upload an avatar</span>
            <Input onChange={handleShopImageChange} accept="image/*" className="hidden" id="avatar-image" name="avatar-image" type="file" />
            <Avatar className="w-32 h-32 border-4 border-white hover:opacity-50">
              <AvatarImage className='aspect-square' alt="Shop owner" src={shop.shopImage} />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
          </Label>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8 space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="shop-name">Shop Name</Label>
            <Controller
              name="shopName"
              control={control}
              defaultValue={shop.shopName || ''}
              render={({ field }) => <Input {...field} id="shop-name" placeholder="Enter your shop name" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Controller
              name="location"
              control={control}
              defaultValue={shop.location || ''}
              render={({ field }) => <Input {...field} id="location" placeholder="Enter your location" />}
            />
          </div>


          <div className="space-y-2">
            <Label htmlFor="facebook-link">Facebook Link</Label>
            <Controller
              name="facebookLink"
              control={control}
              defaultValue={shop.facebookLink || ''}
              render={({ field }) => <Input {...field} id="facebook-link" placeholder="Enter your Facebook link" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter-link">Twitter Link</Label>
            <Controller
              name="twitterLink"
              control={control}
              defaultValue={shop.twitterLink || ''}
              render={({ field }) => <Input {...field} id="twitter-link" placeholder="Enter your Twitter link" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instagram-link">Instagram Link</Label>
            <Controller
              name="instagramLink"
              control={control}
              defaultValue={shop.instagramLink || ''}
              render={({ field }) => <Input {...field} id="instagram-link" placeholder="Enter your Instagram link" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tiktok-link">TikTok Link</Label>
            <Controller
              name="tiktokLink"
              control={control}
              defaultValue={shop.tiktokLink || ''}
              render={({ field }) => <Input {...field} id="tiktok-link" placeholder="Enter your TikTok link" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="snapchat-link">Snapchat Link</Label>
            <Controller
              name="snapchatLink"
              control={control}
              defaultValue={shop.snapchatLink || ''}
              render={({ field }) => <Input {...field} id="snapchat-link" placeholder="Enter your Snapchat link" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone-number-1">Phone Number 1</Label>
            <Controller
              name="phoneNumber1"
              control={control}
              defaultValue={shop.phoneNumber1 || ''}
              render={({ field }) => <Input {...field} id="phone-number-1" placeholder="Enter your phone number" type="tel" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone-number-2">Phone Number 2</Label>
            <Controller
              name="phoneNumber2"
              control={control}
              defaultValue={shop.phoneNumber2 || ''}
              render={({ field }) => <Input {...field} id="phone-number-2" placeholder="Enter your phone number" type="tel" />}
            />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="space-y-2 w-full">
            <Label htmlFor="description">Description</Label>
            <Controller
              name="description"
              control={control}
              defaultValue={shop.description || ''}
              render={({ field }) => (
                <Textarea {...field} className="min-h-[100px]" id="description" placeholder="Enter your description" />
              )}
            />
          </div>
        </div>

        <Button
          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white main-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
         {formState.isSubmitting && <LoadingSpinner />}
          Save Changes
        </Button>
        </form>
      </main>
    </>
  )
}

