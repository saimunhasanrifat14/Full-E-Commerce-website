import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/signup/banner.png";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
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
                  Create an account
                </h2>
                <p className="font-normal font-popins text-md text-TextBlack">
                  Enter your details below
                </p>
              </div>
              <input
                type="text"
                id="FirstName"
                name="first_name"
                placeholder="First Name"
                className="py-2 w-full border-b-2 border-GraySemiDark placeholder:text-GrayDark/60 bg-BGWhite text-md focus:outline-none"
              />
              <input
                type="text"
                id="LastName"
                name="last_name"
                placeholder="Last Name"
                className="py-2 w-full border-b-2 border-GraySemiDark placeholder:text-GrayDark/60 bg-BGWhite text-md focus:outline-none"
              />
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="Email"
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
                  Create an account
                </button>
                <button className="w-full shrink-0 rounded-md border border-GraySemiDark flex items-center justify-center bg-BGWhite px-12 py-3 text-md font-medium text-TextBlack transition focus:outline-none focus:ring active:text-TextRed cursor-pointer">
                  <span className="text-2xl mr-3">
                    <FcGoogle />
                  </span>{" "}
                  Login with Google
                </button>

                <p className="pt-2 text-sm text-GraySemiDark sm:mt-0 ">
                  Already have an account?
                  <Link
                    to="/login"
                    href="#"
                    className="text-TextRed underline ml-1 font-semibold"
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
