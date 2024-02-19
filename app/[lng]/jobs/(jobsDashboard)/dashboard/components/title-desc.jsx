"use client";

import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TitleAndDescriptionForm({ lng }) {
  const { t } = useTranslation(lng, "jobs");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleSubmit = async () => {
    createQueryString({
      title_desc: "done",
    });
  };

  return (
    <Button onClick={handleSubmit} type="button" className="my-2">
      {t("next_button_text")}
    </Button>
  );
}
