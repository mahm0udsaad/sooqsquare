"use client";
import { useState, useEffect } from "react";
import { addRating, getRating } from "@/prisma/actions";

const StarRating = ({ owner, userId }) => {
  const totalStars = 5;
  const [rating, setRating] = useState(0);
  const [hoveredStarIndex, setHoveredStarIndex] = useState(null);

  useEffect(() => {
    // Fetch the rating value when the component mounts
    const fetchRating = async () => {
      try {
        const rate = await getRating(owner?.id, userId);
        setRating(rate || 0); // Set rating to the fetched value or 0 if not found
      } catch (error) {
        console.error("Error fetching rating:", error.message);
      }
    };

    fetchRating();
  }, [owner?.id, userId]); // Depend on owner ID and user ID

  const handleStarClick = async (starIndex) => {
    const newRating = starIndex + 1;
    const rate = await addRating(owner.id, userId, newRating);
    setRating(rate.rating); // Update rating state with the new rating value
  };

  const handleStarHover = (starIndex) => {
    setHoveredStarIndex(starIndex);
  };

  const handleStarLeave = () => {
    setHoveredStarIndex(null);
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${
            index < hoveredStarIndex || index < rating
              ? "text-yellow-500"
              : "text-gray-400"
          }`}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleStarLeave}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
