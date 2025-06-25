import React from "react";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Product from "../assets/Home/product.png";
const ProductCard = () => {
  return (
    <>
      <div>
        <div className="w-full">
          <div className="w-full h-[250px] flex items-center justify-center bg-GrayLight relative group">
            <img className="w-[65%]" src={Product} alt="" />
            <div className="absolute top-0 left-0 w-full h-full p-3 flex items-start justify-between">
              <span className="px-3 py-[5px] rounded bg-BGRed inline-block font-popins text-sm text-TextWhite font-normal">
                -20%
              </span>
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
              Sample Product Title
            </h2>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <span className="text-TextRed font-medium text-lg font-popins">
                $80.00
              </span>
              <span className="text-TextBlack opacity-50 font-medium text-lg font-popins line-through">
                $100.00
              </span>
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="opacity-30" />
              <h3 className="text-TextBlack opacity-50 font-medium text-lg font-popins ml-1">
                (20)
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
