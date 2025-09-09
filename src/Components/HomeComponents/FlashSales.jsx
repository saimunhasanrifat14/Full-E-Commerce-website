import React from "react";
import AllComponentHeading from "../../CommonComponents/AllComponentHeading";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Timer from "../../CommonComponents/Timer";
import ProductCard from "../../CommonComponents/ProductCard";
import Slider from "react-slick";
import CommonProductLayout from "../../CommonComponents/CommonProductLayout";

const FlashSales = () => {
  return (
    <>
      <div className="mt-[140px] ">
        <div className="container">
          <div className="w-full border-b-2 border-BGBlack/30 pb-15">
            <CommonProductLayout
              ProductCard={ProductCard}
              timeStamp={true}
              timeofOffer={1}
              isArrowsTrue={true}
              heading="Today's"
              description="Flash Sales"
              partialItemShow={4}
              componentData=""
              isLoading={false}
            />

            <div className="w-full flex items-center justify-center mt-14">
              <button className="bg-BGRed text-md font-popins font-medium text-TextWhite px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
                View All Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
