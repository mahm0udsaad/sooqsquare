"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import upload from "../../../../(traderDashboard)/dashboard/myShop/action";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { getLocation } from "@/helper/location";
import { useEffect } from "react";
import { updateUserCountry } from "@/prisma/actions";

const LogoForm = ({ companyLogo, user }) => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation();
        await updateUserCountry(user?.id, location.countryName);
      } catch (error) {
        console.error("Error getting location:", error.message);
      }
    };
    if (!user?.country) {
      fetchLocation();
    }
  }, [user?.id]);

  const { toast } = useToast();
  const handleCompanyLogoChange = async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) {
        throw new Error("No file uploaded");
      }

      const formData = new FormData();
      formData.append("file", file);

      const uploadResult = await upload(formData);

      if (uploadResult && uploadResult.adImage) {
        createQueryString("logo", uploadResult.adImage);
      }
      toast({ title: "Image Uploaded Successfully " });
    } catch (error) {
      console.error(error.message);
    }
  };
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const logo = searchParams.get("logo");

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + "?" + updatedParams);
  };

  console.log(logo);
  return (
    <div className="relative h-full flex items-centy justify-centy pb-8 pr-8">
      <Label className="cursor-pointer" htmlFor="avatar-image">
        <span className="sr-only">Upload an avatar</span>
        <Input
          onChange={handleCompanyLogoChange}
          accept="image/*"
          className="hidden"
          id="avatar-image"
          name="avatar-image"
          type="file"
        />
        <Avatar className="w-32 h-32 border-4 border-white hover:opacity-50">
          <AvatarImage
            className="aspect-square"
            alt="Shop owner"
            src={companyLogo || logo}
          />
          <AvatarFallback>LOGO</AvatarFallback>
        </Avatar>
      </Label>
    </div>
  );
};
export default LogoForm;
