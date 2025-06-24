import React from "react";
import AllComponentHeading from "../../CommonComponents/AllComponentHeading";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Timer from "../../CommonComponents/Timer";
import ProductCard from "../../CommonComponents/ProductCard";
import Slider from "react-slick";

const FlashSales = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


  return (
    <>
      <div className="mt-[140px] mb-[60px] ">
        <div className="container">
          <div className="flex justify-between items-end">
            <div className="flex flex-col sm:flex-row   gap-y-3 sm:items-end  sm:gap-x-[87px]">
              <AllComponentHeading
                title={"Today’s"}
                description={"Flash Sales"}
              />
              <div>
                <Timer />
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <h1 className="cursor-pointer w-[46px] h-[46px] bg-GrayLight rounded-full flex items-center justify-center hover:bg-GrayDark hover:text-TextWhite transition">
                <span className="text-xl">
                  <IoMdArrowBack />
                </span>
              </h1>
              <h1 className="cursor-pointer w-[46px] h-[46px] bg-GrayLight rounded-full flex items-center justify-center hover:bg-GrayDark hover:text-TextWhite transition">
                <span className="text-xl">
                  <IoArrowForward />
                </span>
              </h1>
            </div>
          </div>

          <Slider {...settings}>
            {[...new Array(4)].map((_, index) => (
              <div className="pr-6">
                <ProductCard />
              </div>
            ))}
           
          </Slider>

          <div className="flex items-center justify-between gap-8 flex-wrap mt-[40px] mb-[60px]">
          </div>

          <div className="w-full flex items-center justify-center">
            <button className="bg-BGRed text-md font-popins font-medium text-TextWhite px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              View All Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
