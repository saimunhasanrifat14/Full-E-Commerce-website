import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { category } from "../../../../data/data";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerIMG from "../../../assets/Home/Banner.png";

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="flex-row  justify-between lg:flex ">
            <div className="w-full  lg:w-[23%]  pt-10 lg:border-r-[1.5px] lg:border-r-gray-300">
              <ul>
                {category?.map((item) => (
                  <div className="flex items-center justify-between transition-all">
                    <li className="font-popins w-full hover:px-3 hover:font-bold transition-all text-md text-TextBlack font-normal py-3 cursor-pointer">
                      {item.category}
                    </li>
                    {item.subCategory && (
                      <span className="lg:pr-10 text-xl text-text_black000000">
                        <LiaAngleRightSolid />
                      </span>
                    )}
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full  lg:w-[77%]  h-[344px]  pl-0 lg:pl-[45px] mt-10">
              <div className="slider-container ">
                <Slider {...settings}>
                  {[...new Array(5)].map((_, index) => (
                    <div key={index}>
                      <img
                        src={BannerIMG}
                        alt={BannerIMG}
                        className="w-full h-full object-cover rounded-md lg:rounded-none"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
