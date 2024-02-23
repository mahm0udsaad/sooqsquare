"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useTranslation } from "../app/i18n/client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useDarkMode } from "@/context/darkModeContext";
import { useToast } from "./ui/use-toast";

const NameDescriptionSelector = ({ lng }) => {
  const { t } = useTranslation(lng, "translation");
  const router = useRouter();
  const [nameInput, setName] = useState("");
  const { toast } = useToast();
  const [description, setDescription] = useState("");
  const { setErrorMessage } = useDarkMode();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isLoading, setLoading] = useState(false);
  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput) {
      setErrorMessage(t("messages.noValue"));
    } else {
      createQueryString({
        name: nameInput,
        description: description,
      });
    }
  };
  const generateContentWithAI = () => {
    setLoading(true);
    const updatedParams = new URLSearchParams(searchParams);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        carIformation: updatedParams.toString(),
        lng: lng,
      }),
    };

    fetch("/api/generate_content", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDescription(data.generated_content);
        setLoading(false);
        toast({
          title: t("content_generated_by_ai_success"),
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div key="1" className="w-4/5 mx-auto pt-4">
      <h1 className="text-xl font-semibold text-center pb-8">
        {t("adDetails")}
      </h1>
      <Input
        className="mb-4"
        placeholder={t("adNamePlaceHolder")}
        value={nameInput}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder={t("descriptionPlaceHolder")}
        className="mb-4 h-[12rem]"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
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
        <Button className="w-full main-bg" onClick={handleSubmit}>
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
};

export default NameDescriptionSelector;
