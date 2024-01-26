'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BsCloudUpload } from "react-icons/bs";
import upload from '../../app/[lng]/(dashboard)/myShop/action'
import { useState } from "react"
import { toast } from "sonner"

export default function MyShopPage() {
  const [bgImage, setBgImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  console.log(bgImage);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    try {
      if (!file) {
        throw new Error('No file uploaded');
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      const uploadResult = await upload(formData);
      
      if (uploadResult && uploadResult.adImage) {
        setBgImage(uploadResult.adImage);
      }
      toast("Image Uploaded Successfully " )
      setUploading(false);
    } catch (error) {
      console.error(error.message);
      setUploading(false);
    }
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
              src={bgImage ? bgImage : 'https://cloud.elsewedy-automation.com/nextcloud/apps/sharingpath/mahm0ud/upload/Hero%20(1).png'}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width="1920"
            />
          <div className="z-40 absolute bottom-0 main-bg p-3 rounded">
           <BsCloudUpload className="text-lg"/>
              <Input onChange={handleImageChange} accept="image/*" className="hidden"  id="background-image" name="background-image" type="file" />
            </div>
          </Label>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-end justify-end pb-8 pr-8">
          <Label className="cursor-pointer" htmlFor="avatar-image">
            <span className="sr-only">Upload an avatar</span>
            <Input accept="image/*" className="hidden" id="avatar-image" name="avatar-image" type="file" />
            <Avatar className="w-32 h-32 border-4 border-white">
              <AvatarImage alt="Shop owner" src="/new-placeholder-avatar.jpg" />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
          </Label>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8 space-y-4">
        <form>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="shop-name">
            Shop Name
          </Label>
          <Input
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue="The Cozy Corner"
            id="shop-name"
            name="shop-name"
            type="text"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="shop-description">
            Shop Description
          </label>
          <Textarea
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue="A quaint little shop nestled in the heart of the city, offering a collection of handcrafted goods and vintage finds."
            id="shop-description"
            name="shop-description"
            rows="3"
          />
          <div className="flex space-x-4 mt-4">
            <Label className="block text-sm font-medium text-gray-700" htmlFor="twitter-link">
              Twitter Link
            </Label>
            <Input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="https://twitter.com/cozycorner"
              id="twitter-link"
              name="twitter-link"
              type="text"
            />
            <Label className="block text-sm font-medium text-gray-700" htmlFor="instagram-link">
              Instagram Link
            </Label>
            <Input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="https://instagram.com/cozycorner"
              id="instagram-link"
              name="instagram-link"
              type="text"
            />
            <Label className="block text-sm font-medium text-gray-700" htmlFor="facebook-link">
              Facebook Link
            </Label>
            <Input
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="https://facebook.com/cozycorner"
              id="facebook-link"
              name="facebook-link"
              type="text"
            />
          </div>
          <Button
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white main-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Save Changes
          </Button>
        </form>
      </main>
    </>
  )
}

