"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, BookmarkCheck } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useEffect, useOptimistic } from "react";

export default function FollowdAdBtn({ isFollowed }) {
  const [optimisticFollowed, updateOptimistically] = useOptimistic(isFollowed);
  const { pending } = useFormStatus(); // Assuming submitting state from your form

  useEffect(() => {
    updateOptimistically(!optimisticFollowed); // Update on submission start (assumption)
    console.log(optimisticFollowed);
  }, [pending]);

  return (
    <Button
      className="bg-transparent text-white hover:text-black"
      size="lg"
      variant="outline"
      disable={pending}
    >
      {optimisticFollowed ? (
        <>
          <BookmarkCheck className="mx-2" size={20} />
          Unfollow
        </>
      ) : (
        <>
          <UserPlus className="mx-2" size={20} /> Follow
        </>
      )}
    </Button>
  );
}
