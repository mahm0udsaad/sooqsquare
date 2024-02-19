"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import React from 'react';
import  upload  from '../app/[lng]/sell/imageUploadAction'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useTranslation } from '../app/i18n/client';
import { Progress } from "@/components/ui/progress"
import dynamic from 'next/dynamic';

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

 const MultiImageForm = ({lng}) => {
    const { t } = useTranslation(lng , "translation")
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname= usePathname()

    const UploadedImage = dynamic(()=> import('./component/loadedImage'),{
      ssr:false,
      loading:()=><div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent h-auto bg-opacity-50 text-white">
                    <Progress value={40} className="w-[60%]" />
                  </div>
    })
    const handleImageChange = async (e, index) => {
      const files = e.target.files;
    
      try {
        if (!files) {
          throw new Error('No files uploaded');
        }
  
        const uploadPromises = [];
    
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append('file', files[i]);
    
          const uploadPromise = await upload(formData, lng );
          uploadPromises.push(uploadPromise);
        }
    
        const uploadedImages = await Promise.all(uploadPromises);
    
        uploadedImages.forEach((uploadedImage, i) => {
          createQueryString(`uploadedImage${index + i}`, uploadedImage.adImage);
        });

      } catch (error) {
        console.error(error.message);
      }
    };
    
    if(!searchParams.has('category')) return ;

    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };
    
    const handleImageRemove = (indexToRemove) => {
      // Remove the corresponding image URL from the URL query parameters
      const updatedSearchParams = new URLSearchParams();
      for (const [key, value] of searchParams.entries()) {
        if (key.startsWith('uploadedImage')) {
          const imageIndex = parseInt(key.replace('uploadedImage', ''), 10);
          if (imageIndex !== indexToRemove) {
            const updatedIndex = imageIndex > indexToRemove ? imageIndex - 1 : imageIndex;
            updatedSearchParams.set(`uploadedImage${updatedIndex}`, value);
          }
        } else {
          updatedSearchParams.set(key, value);
        }
      }
      const updatedParams = updatedSearchParams.toString();
      router.push(pathname + '?' + updatedParams);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const extractUploadedImages = () => {
        // Iterate through searchParams to find parameters related to uploaded images
        for (const [key, value] of searchParams.entries()) {
          // Check if the parameter key starts with the pattern for uploaded images
          if (key.startsWith("uploadedImage") && key !== "uploadedImages") {
            uploadedImages.push(value); // Push the value (image URL) into the uploadedImages array
          }
        }
      };
      
      const uploadedImages = [];
      extractUploadedImages();
      
      createQueryString('uploadedImages',uploadedImages.length)
    };
  
    return (
      <div className="bg-white border rounded p-8 shadow-md  dark:bg-zinc-950">
       <div className="title relative">
        <h1 className="text-3xl font-bold pb-6 text-center">{t('uploadImages')}</h1>
        </div>
        <form  className="space-y-4">
            <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="border flex flex-col gap-4 p-3 rounded">
              <Label htmlFor={`image${index}`} className="z-30 block mb-1 font-semibold text-center">
                {index == 0 ? <Badge className="z-30">Cover</Badge> :`Slide ${index + 1}`}
              </Label>
              <div className="relative">
              <input
                type="file"
                id={`image${index}`}
                name={`image${index}`}
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
                multiple={true}
              />
              {searchParams.has(`uploadedImage${index}`) && (
                  <div className="flex flex-col items-center justify-center gap-6">
                      <UploadedImage index={index} />
                      <Button
                          onClick={() => handleImageRemove(index)}
                          type="button"
                          className="w-full text-black text-black justify-around text-center font-normal"
                          variant="outline"
                      >
                          <TrashIcon className="w-4 h-4" />
                      </Button>
                  </div>
              )}

                {!searchParams.has(`uploadedImage${index}`) && (
                    <Label htmlFor={`image${index}`} className="cursor-pointer flex items-center justify-center">
                    <CiImageOn className="w-8 h-8 mt-3" />
                    </Label>
                )}
                </div>
            </div>
          ))}
            </div>
          <div className="flex justify-center">
          <Button type="submit" onClick={handleSubmit} className="w-[240px] justify-center text-center font-normal mt-4">
            <MdOutlineRocketLaunch className="w-4 h-4 mr-3" />
            Submit
          </Button>
          </div>
        </form>
      </div>
    );
  };

  export default MultiImageForm 