"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useToast } from "../../ui/use-toast";

const GenerateAIContent = ({ lng, company }) => {
  const { t } = useTranslation(lng, "translation");
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };
  const generateContentWithAI = () => {
    setLoading(true);
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.companyInformation = company;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        carIformation: updatedParams.toString(),
      }),
    };
    console.log(updatedParams);
    fetch("/api/generate_content", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        createQueryString({
          description: data.generated_content,
        });
        toast({
          title: t("content_generated_by_ai_success"),
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        disabled={isLoading}
        type="button"
        className="w-full bg-zinc-950 border border-zinc-950 hover:bg-sky-700 relative"
        onClick={generateContentWithAI}
      >
        {isLoading && (
          <span className="absolute top-0 right-0 inline-flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        )}
        {t("generate_Content_AI")}
      </Button>
    </div>
  );
};

export default GenerateAIContent;
