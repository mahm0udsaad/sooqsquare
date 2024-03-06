"use client";
import { useEffect, useOptimistic } from "react";
import { Button } from "../../ui/button";
import { UserPlus, BookmarkCheck } from "lucide-react";
import { useFormStatus } from "react-dom";

const FollowBtn = ({ lng, isFollowed }) => {
  const [optimisticFollowed, updateOptimistically] = useOptimistic(isFollowed);
  const { pending } = useFormStatus(); // Assuming submitting state from your form

  useEffect(() => {
    updateOptimistically(!optimisticFollowed); // Update on submission start (assumption)
    console.log(optimisticFollowed);
  }, [pending]);

  return (
    <Button
      className={`w-28 px-2 py-4 flex items-center justify-center gap-2 text-sky-600 main-bg`}
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
};

export default FollowBtn;
