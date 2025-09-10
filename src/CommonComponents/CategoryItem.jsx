import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";

const CategoryItem = ({ itemData }) => {
  return (
    <div className="mt-10">
      <div className="w-full cursor-pointer text-TextBlack transition hover:bg-HoverRed hover:text-TextWhite h-[145px] bg-transparent rounded border-2 border-TextBlack/30 hover:border-HoverRed flex items-center justify-center ">
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-[50px]">
            {itemData.icon}
          </span>
          <h1 className="text-lg font-popins font-normal">{itemData.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
