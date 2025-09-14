import React, { useState } from "react";
import aboutImg from "../../assets/About/aboutImg.png";
import ProfileCard from "./AboutComponents/ProfileCard";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Service from "../../Pages/Home/HomeComponents/Service";
import { CiShop } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

const About = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) =>
      i === currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid gray",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "gray",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
    responsive: [
      {
        breakpoint: 1024, // tablet and small desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const reviewsObject = [
    {
      id: 1,
      icon: <CiShop />,
      title: "10.5k",
      summary: "Sallers active our site",
    },
    {
      id: 2,
      icon: <MdOutlineAttachMoney />,
      title: "33k",
      summary: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      icon: <IoBagHandleOutline />,
      title: "33k",
      summary: "Customer active in our site",
    },
    {
      id: 4,
      icon: <TbMoneybag />,
      title: "23k",
      summary: "Anual gross sale in our site",
    },
  ];
  return (
    <div className="mb-[140px]">
      <div className="container">
        {/* <BreadCrumb /> */}

        <div className="flex flex-wrap items-center justify-between mt-15">
          <div className="md:w-[40%] w-full mb-6 md:mb-0">
            <h1 className="text-[54px] font-inter font-semibold text-TextBlack mb-8">
              Our Story
            </h1>
            <p className="font-popins text-[16px] font-normal text-TextBlack">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="font-popins text-[16px] font-normal text-TextBlack mt-4">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="relative right-0">
            <img src={aboutImg} alt="" />
          </div>
        </div>

        {/* reviews */}
        <div className="flex flex-wrap justify-center gap-6 mt-[140px]">
          {reviewsObject?.map((item) => (
            <div
              className="w-full sm:w-[300px] md:w-[350px] flex justify-center group"
              key={item.id}
            >
              <div className="border-2 border-TextBlack/30 hover:border-HoverRed rounded-lg p-6 text-center cursor-pointer group-hover:bg-HoverRed transition-all w-full">
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-200 mb-4 group-hover:bg-gray-200">
                  {/* Store Icon */}
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-BGBlack">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>
                {/* Stats Text */}
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-TextWhite">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2 group-hover:text-TextWhite">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* reviews */}

        <div className="slider-container mt-[140px] md:px-15">
          <Slider {...settings}>
            {[...new Array(5)].map((_, index) => (
              <div key={index} className="">
                <ProfileCard />
              </div>
            ))}
          </Slider>
        </div>

        {/* customer servie */}
        <div className="my-[140px]">
          <Service />
        </div>
      </div>
    </div>
  );
};

export default About;
