"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import upload from "@/app/[lng]/(traderDashboard)/dashboard/myShop/action";

export default function PDFUpload() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleFileChange = async (e, index) => {
    const files = e.target.files;

    try {
      if (!files) {
        throw new Error("No files uploaded");
      }

      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("file", files[i]);

        const uploadPromise = await upload(formData);
        uploadPromises.push(uploadPromise);
      }

      const uploadedImages = await Promise.all(uploadPromises);

      uploadedImages.forEach((uploadedImage, i) => {
        createQueryString({
          cv: uploadedImage.adImage,
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="cv">Upload your CV</Label>
      <Input onChange={handleFileChange} accept=".pdf" id="cv" type="file" />
    </div>
  );
}
