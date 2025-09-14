import React from "react";
import { IoSendOutline } from "react-icons/io5";
import qrCode from "../../assets/Home/Qrcode.png";
import playStore from "../../assets/Home/GooglePlay.png";
import appstore from "../../assets/Home/AppStore.png";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="sm:pt-20 pt-10 bg-BGBlack">
        <div className="container">
          <div className="flex justify-between items-start flex-wrap pb-10 sm:pb-20 gap-6 md:gap-0">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-GraySemiDark flex flex-col items-start gap-2 md:gap-y-4">
              <h2 className="font-inter text-[18px] sm:text-[20px] font-bold text-TextWhite cursor-pointer">
                Exclusive
              </h2>
              <h3 className="font-medium font-popins text-[16px]">Subscribe</h3>
              <p className="font-normal font-popins text-sm sm:text-md">
                Get 10% off your first order
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="py-2 text-sm sm:text-md rounded-md bg-transparent border-[2px] border-GrayDark px-3"
                />
                <span className="inline-block text-GrayDark absolute top-1/2 -translate-y-1/2 right-3 ">
                  <IoSendOutline />
                </span>
              </div>
            </div>

            {/* Support */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-GraySemiDark flex flex-col items-start gap-2 md:gap-y-4">
              <h2 className="font-inter text-[18px] sm:text-[20px] font-medium text-TextWhite cursor-pointer">
                Support
              </h2>
              <p className="font-normal font-popins text-sm sm:text-md">
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </p>
              <a className="font-normal font-popins text-sm sm:text-md">
                exclusive@gmail.com
              </a>
              <a className="text-sm sm:text-md" href="#">
                +88015-88888-9999
              </a>
            </div>
            {/* Support */}

            {/* account */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-GraySemiDark flex flex-col items-start gap-2 md:gap-y-4">
              <h2 className="font-inter text-[18px] sm:text-[20px] font-medium text-TextWhite cursor-pointer">
                Account
              </h2>
              <p className="font-normal font-popins text-sm sm:text-md">
                My Account
              </p>
              <a className="font-normal font-popins text-sm sm:text-md">
                Login / Register
              </a>
              <a className="text-sm sm:text-md" href="#">
                Cart
              </a>
              <a className="text-sm sm:text-md" href="#">
                Wishlist
              </a>
              <a className="text-sm sm:text-md" href="#">
                Shop
              </a>
            </div>
            {/* account */}
            {/* Quick Link */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-GraySemiDark flex flex-col items-start gap-2 md:gap-y-4">
              <h2 className="font-inter text-[18px] sm:text-[20px] font-medium text-TextWhite cursor-pointer">
                Quick Link
              </h2>
              <p className="font-normal font-popins text-sm sm:text-md">
                Privacy Policy
              </p>
              <a className="font-normal font-popins text-sm sm:text-md">
                Terms Of Use
              </a>
              <a className="text-sm sm:text-md" href="#">
                FAQ
              </a>
              <a className="text-sm sm:text-md" href="#">
                Contact
              </a>
            </div>
            {/* Quick Link */}

            {/* Download  App */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-TextWhite flex flex-col items-start gap-2 md:gap-y-4">
              <h2 className="font-inter text-[18px] sm:text-[20px] font-medium text-TextWhite cursor-pointer">
                Download App
              </h2>
              <p className="font-normal font-popins text-sm sm:text-md opacity-75 ">
                Save $3 with App New User Only
              </p>
              <div className="flex w-full items-center gap-4 md:gap-0">
                <div className="md:w-1/2 flex">
                  <img src={qrCode} alt={qrCode} />
                </div>
                <div className="md:w-1/2  h-full flex flex-col gap-y-2 ">
                  <div className="w-full h-1/2 flex">
                    <img src={playStore} alt="" />
                  </div>
                  <div className="w-full h-1/2 flex">
                    <img src={appstore} alt="" />
                  </div>
                </div>
              </div>
              {/* icons */}
              <div className="flex  items-center gap-x-6 mt-3 md:mt-6">
                <span className="text-xl">
                  <BiLogoFacebook />
                </span>
                <span className="text-xl">
                  <RiTwitterLine />
                </span>
                <span className="text-xl">
                  <FaInstagram />
                </span>

                <span className="text-xl">
                  <FaLinkedinIn />
                </span>
              </div>
              {/* icons */}
            </div>
            {/*  Download  App */}
          </div>
        </div>
        {/* footer bottom */}
        <div className="text-TextWhite flex items-center justify-center pt-4 sm:pt-7 pb-4 sm:pb-10 border-t-[1px] border-t-GrayDark">
          <h4 className="sm:text-[16px] text-[14px] font-normal font-popins text-TextWhite opacity-30">
            {" "}
            &copy; Copyright Rimel 2022. All right reserved
          </h4>
        </div>
        {/* footer bottom */}
      </div>
    </>
  );
};

export default Footer;
