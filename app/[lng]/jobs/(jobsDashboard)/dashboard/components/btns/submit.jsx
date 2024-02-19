"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const SubmitBtn = () => {
  const state = useFormStatus();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  if (state.data) {
    createQueryString({
      success: true,
    });
  }

  return (
    <Button disabled={state.pending} type="submit">
      {state.pending ? "saving..." : "Submit"}
    </Button>
  );
};

export { SubmitBtn };
