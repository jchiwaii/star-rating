import React from "react";

const Star = ({ index, rating, onRatingChange }) => {
  const handleLeftClick = () => {
    onRatingChange(index, true);
  };
  const handleRightClick = () => {
    onRatingChange(index, false);
  };

  const isFullStar = rating >= index + 1;
  const isHalfStar = rating >= index + 0.5 && rating < index + 1;
  const starClass = isFullStar
    ? "bxs-star"
    : isHalfStar
    ? "bxs-star-half"
    : "bx-star";
  const handleClick =
    isFullStar || isHalfStar ? handleRightClick : handleLeftClick;

  return (
    <div className="relative">
      <i
        className={` bx ${starClass} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-green-400`}
      ></i>

      <button
        className="absolute left-0 top-0 w-1/2 h-full cursor-pointer bg-red-500/60"
        onClick={handleLeftClick}
        aria-label={`Rate ${index + 1} star left half`}
      ></button>
      <button
        className="absolute right-0 top-0 w-1/2 h-full cursor-pointer bg-red-500/60"
        onClick={handleRightClick}
        aria-label={`Rate ${index + 1} star right half`}
      ></button>
    </div>
  );
};

export default Star;
