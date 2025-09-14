import React from "react";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import Product from "../../assets/Home/product.png";
import useCalculateDiscount from "../../Hooks/useCalculateDiscount";
import Star from "./Star";
const ProductCard = ({ itemData }) => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="w-full h-[250px] flex items-center justify-center bg-GrayLight relative group">
            <img
              className="w-[65%]"
              src={itemData ? itemData.thumbnail : Product}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full p-3 flex items-start justify-between">
              {itemData.discountPercentage && (
                <span className="px-3 py-[5px] rounded bg-BGRed inline-block font-popins text-sm text-TextWhite font-normal">
                  -{itemData ? itemData.discountPercentage : 0}%
                </span>
              )}
              <div className="flex flex-col gap-2">
                <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-BGWhite cursor-pointer hover:bg-BGRed hover:text-TextWhite text-xl">
                  <IoHeartOutline />
                </span>
                <span className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-BGWhite cursor-pointer hover:bg-BGRed hover:text-TextWhite text-xl">
                  <IoEyeOutline />
                </span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-80 absolute left-0 bottom-0 font-popins font-medium text-lg cursor-pointer  flex justify-center items-center w-full h-12 bg-BGBlack hover:bg-BGRed text-TextWhite ">
              <h3>Add To Cart</h3>
            </div>
          </div>
          {/* Product Info */}
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h2 className="text-lg font-popins font-medium cursor-pointer w-full truncate">
              {itemData ? itemData.title : "HAVIT HV-G92 Gamepad"}
            </h2>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <span className="text-TextRed font-medium text-lg font-popins">
                $
                {useCalculateDiscount(
                  itemData?.price,
                  itemData?.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="text-TextBlack opacity-50 font-medium text-lg font-popins line-through">
                ${itemData ? itemData.price : 100.0}
              </span>
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer text-yellow-400">
              <Star rating={itemData?.rating} />
              <h3 className="text-TextBlack opacity-50 font-medium text-lg font-popins ml-1">
                {`(${itemData?.reviews?.length})`}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
