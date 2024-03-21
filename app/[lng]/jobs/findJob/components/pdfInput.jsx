"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Input } from "@/components/ui/input";
import upload from "@/app/[lng]/(traderDashboard)/dashboard/myShop/action";
import { updateCVUrl } from "../../profile/actions";

export default function PDFUpload({ userId }) {
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const handleFileChange = async (e) => {
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
        updateCVUrl(userId, uploadedImage.adImage);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleButtonClick = () => {
    // Trigger click event on file input when button is clicked
    fileInputRef.current.click();
  };

  return (
    <div className="grid w-full gap-1.5">
      <Input
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf"
        id="cv"
        type="file"
        style={{ display: "none" }} // Hide the file input
      />
      <Button
        className="w-full max-w-xs bg-transparent dark:text-white"
        variant="outline"
        onClick={handleButtonClick} // Handle button click event
      >
        Update CV
      </Button>
    </div>
  );
}
