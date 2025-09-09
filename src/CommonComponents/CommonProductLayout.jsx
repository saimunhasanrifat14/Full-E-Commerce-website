import React, { useRef } from "react";
import AllComponentHeading from "./AllComponentHeading";
import Timer from "./Timer";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import CommonProductSkeleton from "../Skeleton/CommonProductSkeleton";

const CommonProductLayout = ({
  ProductCard = () => <CommonProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  rows = 0 || 1,
}) => {
  const sliderRef = useRef(null);

  // slider responsive settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    rows: rows,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // slider next button
  const next = () => {
    sliderRef.current.slickPrev();
  };
  // slider prev button
  const prev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="w-full flex justify-between items-end pb-10">
        <div className="flex flex-col sm:flex-row   gap-y-3 sm:items-end  sm:gap-x-[87px]">
          <AllComponentHeading title={heading} description={description} />
          <div>{timeStamp && <Timer timeofOffer={timeofOffer} />}</div>
        </div>
        {isArrowsTrue && (
          <div className="flex items-center gap-x-4">
            <h1
              onClick={next}
              className="cursor-pointer w-[46px] h-[46px] bg-GrayLight rounded-full flex items-center justify-center hover:bg-GrayDark hover:text-TextWhite transition"
            >
              <span className="text-xl">
                <IoMdArrowBack />
              </span>
            </h1>
            <h1
              onClick={prev}
              className="cursor-pointer w-[46px] h-[46px] bg-GrayLight rounded-full flex items-center justify-center hover:bg-GrayDark hover:text-TextWhite transition"
            >
              <span className="text-xl">
                <IoArrowForward />
              </span>
            </h1>
          </div>
        )}
      </div>

      <div className="">
        <Slider ref={sliderRef} {...settings} className="custom-slider">
          {isLoading
            ? [...new Array(partialItemShow || 4)]?.map((_, index) => (
                <div key={index}>
                  <CommonProductSkeleton />
                </div>
              ))
            : [...new Array(partialItemShow || 4)]?.map((item, index) => (
                <div key={index}>
                  <ProductCard itemData={item ? item : {}} />
                </div>
              ))}
        </Slider>
      </div>
    </>
  );
};

export default CommonProductLayout;
