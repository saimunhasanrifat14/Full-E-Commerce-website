import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="my-20">
      <div className="container">
        {/* <BreadCrumb /> */}

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Left: Contact Info */}
          <div className="w-full md:w-[30%] p-8 shadow-sm rounded-lg bg-BGWhite">
            {/* Call To Us */}
            <div className="border-b border-GraySemiDark pb-8">
              <div className="flex items-center gap-4">
                <IoCallOutline className="w-10 h-10 p-2 rounded-full bg-BGRed text-white" />
                <h2 className="text-lg font-medium font-popins text-TextBlack">
                  Call To Us
                </h2>
              </div>
              <p className="text-sm font-normal font-popins text-TextBlack mt-6">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-normal font-popins text-TextBlack mt-4">
                Phone: <span className="font-semibold">+8801611112222</span>
              </p>
            </div>

            {/* Write To Us */}
            <div className="mt-8">
              <div className="flex items-center gap-4">
                <IoMailOutline className="w-10 h-10 p-2 rounded-full bg-BGRed text-white" />
                <h2 className="text-lg font-medium font-popins text-TextBlack">
                  Write To Us
                </h2>
              </div>
              <p className="text-sm font-normal font-popins text-TextBlack mt-6">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm font-normal font-popins text-TextBlack mt-4">
                Phone: <span className="font-semibold">+8801611112222</span>
              </p>
              <p className="text-sm font-normal font-popins text-TextBlack mt-2">
                Email:{" "}
                <span className="font-semibold">support@exclusive.com</span>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:flex-1">
            <div className="bg-BGWhite p-8 rounded-lg shadow-sm w-full">
              <form className="space-y-6">
                {/* Name, Email, Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="flex-1 py-3 px-4 bg-GrayLight placeholder:text-GrayDark/60 text-md focus:outline-none rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="flex-1 py-3 px-4 bg-GrayLight placeholder:text-GrayDark/60 text-md focus:outline-none rounded"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone *"
                    className="flex-1 py-3 px-4 bg-GrayLight placeholder:text-GrayDark/60 text-md focus:outline-none rounded"
                  />
                </div>

                {/* Message */}
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full py-3 px-4 bg-GrayLight placeholder:text-GrayDark/60 text-md focus:outline-none rounded"
                ></textarea>

                {/* Submit Button */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center px-10 py-4 bg-BGRed text-white text-md font-medium rounded-md shadow-sm hover:bg-HoverRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-BGRed cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
