"use client";
import { useEffect, useOptimistic } from "react";
import { Button } from "../../ui/button";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { useFormStatus } from "react-dom";

const FollowBtn = ({ lng, isFollowed }) => {
  const [optimisticFollowed, updateOptimistically] = useOptimistic(isFollowed);
  const { pending, data } = useFormStatus(); // Assuming submitting state from your form

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
};

export default FollowBtn;
