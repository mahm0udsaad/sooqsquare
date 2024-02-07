"use client"
import {   usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { useTranslation } from "../app/i18n/client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { useDarkMode } from '@/context/darkModeContext';


 const NameDescriptionSelector = ({ lng }) => {
    const { t } = useTranslation(lng , "translation")
    const router = useRouter();
    const [nameInput, setName] = useState('');
    const [description, setDescription] = useState('');
    const { setErrorMessage } = useDarkMode()
    const searchParams = useSearchParams()
    const pathname = usePathname()

      const createQueryString = (params) => {
        const updatedParams = new URLSearchParams(searchParams);
  
        for (const [name, value] of Object.entries(params)) {
          updatedParams.set(name, value);
        }
        router.push(pathname + '?' + updatedParams.toString());
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!nameInput){
          setErrorMessage(t('messages.noValue'))
        }else{
          createQueryString( {
            name: nameInput,
            description: description,
          });
        }
      };

      return (
          <div key="1" className="w-1/2 mx-auto pt-4">
            <h1 className='text-xl font-semibold text-center pb-8'>{t('adDetails')}</h1>
              <Input
                  className="mb-4"
                  placeholder={t('adNamePlaceHolder')}
                  value={nameInput}
                  onChange={(e) => setName(e.target.value)}
              />
              <Textarea 
              placeholder={t('descriptionPlaceHolder')}
              className="mb-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
              />
              <Button
              className='w-full'
                  onClick={handleSubmit}
              >
                  {t('Submit')}
              </Button>
          </div>
      );
  };

  export default NameDescriptionSelector
