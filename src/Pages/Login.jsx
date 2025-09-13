import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/signup/banner.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="flex items-center justify-between flex-col md:flex-row w-full gap-6">
          <div className="flex w-full md:w-[60%] items-end lg:col-span-5 lg:h-full xl:col-span-6">
            <img alt="" src={Banner} className="" />
          </div>

          <div className="flex flex-col items-center md:w-[40%] w-full">
            <form
              action="#"
              className="mt-8 flex flex-col gap-6 max-w-md w-full"
            >
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-medium font-popins text-4xl">
                  Log in to Exclusive
                </h2>
                <p className="font-normal font-popins text-md text-TextBlack">
                  Enter your details below
                </p>
              </div>
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="Email or Phone Number"
                className="py-2 w-full border-b-2 border-GraySemiDark placeholder:text-GrayDark/60 bg-BGWhite text-md focus:outline-none"
              />
              <input
                type="password"
                id="Password"
                name="password"
                placeholder="Password"
                className="py-2 w-full border-b-2 border-GraySemiDark placeholder:text-GrayDark/60 bg-BGWhite text-md focus:outline-none"
              />
              <div className="flex flex-col items-center gap-2">
                <button className="w-full inline-block shrink-0 rounded-md border  bg-BGRed px-12 py-3 text-md font-medium text-white transition hover:bg-HoverRed focus:outline-none focus:ring active:text-TextRed cursor-pointer">
                  Log in
                </button>
                <p className="text-sm text-GraySemiDark sm:mt-0 hover:text-TextRed cursor-pointer">
                  Forgot Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
