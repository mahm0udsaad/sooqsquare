"use client"
import { Badge } from "@/components/ui/badge"
import React, { useState, useRef } from 'react';
import { useTranslation } from "../app/i18n/client";

const MultiImageForm = ({ lng }) => {
  const { t } = useTranslation(lng , "translation")
  const totalSteps = 10;
  const [currentStep, setCurrentStep] = useState(1);
  const stepRefs = Array.from({ length: totalSteps }, () => useRef(null));

  const scrollToStep = (step) => {
    if (stepRefs[step - 1].current) {
      stepRefs[step - 1].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
    scrollToStep(step);
  };

  return (
    <section key="1" className="w-[35%] py-12 md:py-24 lg:py-32">
      {/* ... Your existing code ... */}
      <div className="flex w-full  overflow-x-hidden">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={`step-${index + 1}`}
            ref={stepRefs[index]}
            className="flex items-center  p-4 sm:p-8"
          >
            <Badge
              className={`items-center justify-center w-20 h-8 ${
                currentStep === index + 1 || currentStep > index + 1 ? 'bg-green-500 text-white' : ''
              }`}
              variant="outline"
              onClick={() => handleStepChange(index + 1)}
            >
             {currentStep === index  || currentStep >= index + 1  && <CheckIcon className="h-3.5 w-3.5 -translate-x-1" />}
              Step {index + 1}
            </Badge>
            <div className="flex items-center justify-center p-4 sm:p-8">
            <ArrowRightIcon className="h-3.5 w-3.5 -translate-x-1" />
          </div>
          </div>
        ))}
      </div>
      {/* Button to change step */}
      <div className="text-center mt-4">
        <button
          onClick={() => handleStepChange((currentStep % totalSteps) + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none"
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default MultiImageForm;




  function ArrowRightIcon(props) {
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }
  
  
  function CheckIcon(props) {
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
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }