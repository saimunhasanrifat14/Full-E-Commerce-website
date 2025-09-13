import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const Star = ({ rating = 3.5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <IoIosStar key={index} className="text-yellow-500 text-xl" />;
    } else if (rating >= index + 0.5) {
      return (
        <IoStarHalfOutline key={index} className="text-yellow-500 text-xl" />
      );
    } else {
      return <IoStarOutline  key={index} className="text-gray-500 text-xl" />;
    }
  });
  return <div className="flex items-center gap-x-1">{stars}</div>;
};

export default Star;