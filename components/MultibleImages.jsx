"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import React, { useEffect, useState } from 'react';
import { useDarkMode } from '@/context/darkModeContext';
import  upload  from '../app/[lng]/sell/imageUploadAction'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useTranslation } from '../app/i18n/client';
import { Progress } from "@/components/ui/progress"

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
    const { setAdImages , adImages ,setErrorMessage } = useDarkMode()
    const [images, setImages] = useState([]);
    const [uploadingStates, setUploadingStates] = useState(Array.from({ length: 20 }, () => false));
    const { t } = useTranslation(lng , "translation")
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        // Increase progress up to 70
        if (progress < 80) {
          setProgress((prevProgress) => prevProgress + 1)
        }
        // If the upload is complete, set progress to 100
        else {
          clearInterval(timer)
          setProgress(100)
        }
      }, 500)
  
      return () => clearInterval(timer)
    }, [progress])

    const handleImageChange = async (e, index) => {
      const files = e.target.files;
    
      try {
        if (!files) {
          throw new Error('No files uploaded');
        }
    
        setUploadingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = true;
          return updatedStates;
        });

        const uploadPromises = [];
    
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append('file', files[i]);
    
          const uploadPromise = await upload(formData, lng );
          uploadPromises.push(uploadPromise);
        }
    
        const uploadedImages = await Promise.all(uploadPromises);
    
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          uploadedImages.forEach((uploadedImage, i) => {
            updatedImages[index + i] = uploadedImage.adImage;
          });
          return updatedImages;
        });
        setUploadingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
      } catch (error) {
        console.error(error.message);
        setUploadingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
      }
    };

    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname= usePathname()
    
    if(!searchParams.has('category')) return ;

    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };
    const handleImageRemove = (indexToRemove) => {
      setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setAdImages(images)
      createQueryString('uploadedImages',images.length)
    };
  
    return (
      <div className="bg-white border rounded p-8 shadow-md  dark:bg-zinc-950">
       <div className="title relative">
        <div className="absolute  w-8 h-8 border dark:bg-[#0a0a0a] dark:border-white rounded-full flex items-center justify-center">
        <span className="font-semibold text-rose-500 text-lg">{images.length}</span>
        </div>
        <h1 className="text-3xl font-bold pb-6 text-center">{t('uploadImages')}</h1>
        </div>
        <form  className="space-y-4">
            <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="border flex flex-col gap-4 p-3 rounded">
              <Label htmlFor={`image${index}`} className="block mb-1 font-semibold text-center">
                {index == 0 ? <Badge>Cover</Badge> :`Slide ${index + 1}`}
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
                {images[index] && (
                    <div className="flex flex-col items-center justify-center gap-6">
                    <div className='flex items-center justify-center h-[6rem]'>
                        <img
                        alt={`Uploaded image ${index + 1}`}
                        className='aspect-auto'
                        src={`${images[index]}`}
                        height="120"
                        width="120"
                        />
                    </div>
                    <Button
                        onClick={() => handleImageRemove(index)}
                        type="button"
                        className="w-full text-black justify-around text-center font-normal"
                        variant="outline"
                    >
                        <TrashIcon className="w-4 h-4" />
                    </Button>   
                    </div>
                )}
               {uploadingStates[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white">
                    <Progress value={progress} className="w-[60%]" />
                  </div>
                )}
                {!images[index] && !uploadingStates[index] && (
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