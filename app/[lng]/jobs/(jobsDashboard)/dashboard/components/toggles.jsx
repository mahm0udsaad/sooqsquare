"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ToggleGroups({ lng }) {
  const { t } = useTranslation(lng, "jobs");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const handleLanguageToggle = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleBenefitsToggle = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>{t("language")}</Label>
        <ToggleGroup type="multiple">
          {["english", "spanish", "french", "mandarin"].map((language) => (
            <ToggleGroupItem
              className={`${
                selectedLanguages.includes(language) ? "opacity-50 border" : ""
              }`}
              onClick={() => handleLanguageToggle(language)}
              key={language}
              value={language}
            >
              <span>{t(language)}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <Label>{t("benefits")}</Label>
        <ToggleGroup type="multiple">
          {[
            "health-insurance",
            "retirement-plan",
            "flexible-schedule",
            "remote-work",
          ].map((benefit) => (
            <ToggleGroupItem
              onClick={() => handleBenefitsToggle(benefit)}
              className={`${
                selectedBenefits.includes(benefit) ? "opacity-50 border " : ""
              }`}
              key={benefit}
              value={benefit}
            >
              <span>{t(benefit)}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button
        type="button"
        className="my-8"
        onClick={() =>
          createQueryString({
            languages: selectedLanguages.join(","),
            benefits: selectedBenefits.join(","),
          })
        }
      >
        {t("next_button_text")}
      </Button>
    </div>
  );
}
