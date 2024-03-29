"use client"
import { useDarkMode } from '@/context/darkModeContext';
import React, { useState, useEffect } from 'react';

export function ErrorMessage() {
  const { errorMessage , setErrorMessage} = useDarkMode()
 const [showToast, setShowToast] = useState(false);

 useEffect(() => {
   if (errorMessage) {
     setShowToast(true);

     const timer = setTimeout(() => {
       setShowToast(false);
       setErrorMessage(null)
     }, 5000); // 5 seconds in milliseconds

     return () => {
       clearTimeout(timer);
     };
   }
 }, [errorMessage]);

 return showToast ? (
   <div className="absolute top-5 z-50 w-1/2 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
     <strong className="font-bold">{showToast}</strong>
     <span className="block sm:inline">{errorMessage}</span>
     <span onClick={()=>{
      setShowToast(false)
      setErrorMessage(null)
      }} className="absolute top-0 bottom-0 left-0 px-4 py-3">
       <svg className="fill-current h-6 w-6 text-rose-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
         <title>Close</title>
         <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 1.697L10 11.697l-2.651 2.849a1.2 1.2 0 1 1-1.697-1.697L8.303 10 5.652 7.151a1.2 1.2 0 0 1 1.697-1.697L10 8.303l2.651-2.849a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.849z" />
       </svg>
     </span>
   </div>
 ) : null;
}
