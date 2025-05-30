import React from "react";
import Star from "./Star";

const Rating = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50">
      <div className="bg-[#f5ffbe] rounded-xl shadow-xl text-center p-6 sm:p-10 md:p-14 lg:p-18">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4 sm:mb-6">
          Rate your Experience
        </h2>
        <div className="flex justify-center mb-4 gap-1 sm:gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-700 mb-6">
          How was your experience?
        </p>
      </div>
    </div>
  );
};

export default Rating;
