"use client";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const SaveBtn = ({ text }) => {
  const state = useFormStatus();
  const router = useRouter();

  if (state.data) {
    router.push("?success=true");
  }
  return <Button>{state.pending ? "saving..." : text}</Button>;
};

export { SaveBtn };
