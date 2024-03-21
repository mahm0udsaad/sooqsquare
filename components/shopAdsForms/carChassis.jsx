"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDarkMode } from "@/context/darkModeContext";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

const CarChassis = ({ lng }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { setErrorMessage } = useDarkMode();
  const { t } = useTranslation(lng, "translation");
  const [chassisNum, setChassisNum] = useState(null);

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + "?" + updatedParams);
  };
  const handleSubmit = (chassisNumber) => {
    if (!chassisNum) {
      setErrorMessage(t("messages.noValue"));
    } else {
      createQueryString("carChassis", chassisNumber);
    }
  };

  const handleSkip = () => {
    createQueryString("carChassis", 0);
  };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-xl text-center font-semibold">
        {t("CarChassisTitle")}
      </h1>
      <div className="flex items-center gap-2 pt-4">
        <Input
          id="chassis"
          placeholder="Enter Chassis Number"
          type="number"
          className="py-6"
          value={chassisNum}
          onChange={(e) => setChassisNum(e.target.value)}
        />
      </div>
      <div className="flex  gap-2 py-4">
        <Button
          className="bg-transparent border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-800 dark:border-white dark:text-white"
          onClick={handleSkip}
        >
          {t("Skip")}
        </Button>
        <Button className="" onClick={handleSubmit}>
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
};

export default CarChassis;
