"use client";

import { Button } from "@/components/ui/button";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
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
          <MdOutlineBookmarkAdded className="h-4 w-4" />
          Unfollow
        </>
      ) : (
        <>
          <MdOutlineAddToPhotos className="h-4 w-4" />
          Follow
        </>
      )}
    </Button>
  );
}
