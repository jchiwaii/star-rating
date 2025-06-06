import React from "react";
import { useState } from "react";
import Star from "./Star";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (starIndex, isLeftHalf) => {
    if (isLeftHalf) {
      setRating(starIndex + 0.5);
    } else {
      setRating(starIndex + 1);
    }
    setRating(newRating);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50">
      <div className="bg-[#f5ffbe] rounded-xl shadow-xl text-center p-6 sm:p-10 md:p-14 lg:p-18">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 mb-4 sm:mb-6">
          Rate your Experience
        </h2>
        <div className="flex justify-center mb-4 gap-1 sm:gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              index={index}
              rating={rating}
              onRatingChange={handleRating}
            />
          ))}
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6">
          {rating} out of 5
        </p>
      </div>
    </div>
  );
};

export default Rating;
