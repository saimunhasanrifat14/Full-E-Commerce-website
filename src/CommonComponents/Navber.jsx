import React, { useState, useRef, useEffect } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FaBars, FaRegHeart, FaRegStar, FaTimes, FaUser } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FiSearch, FiUser } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
      pathRoute: "/",
    },

    {
      id: 2,
      item: "Contact",
      pathRoute: "/contact",
    },

    {
      id: 3,
      item: "Product",
      pathRoute: "/product",
    },

    {
      id: 4,
      item: "SignUp",
      pathRoute: "/singup",
    },
  ];
  const [toggle, settoggle] = useState(false);
  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };

  const handleToogleMenu = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="pt-10 pb-4  border-b-[2px] border-b-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[24px] font-bold font-inter text-TextBlack cursor-pointer hover:text-Black_363738">
                Exclusive
              </h1>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center lg:gap-x-[36px] xl:gap-x-[60px]">
                {navItem?.map((nav) => (
                  <li key={nav.id} className="menuUnderLine">
                    <NavLink
                      to={`${nav.pathRoute}`}
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "text-TextBlack text-[17px] font-normal font-popins"
                          : isActive
                          ? "text-TextRed text-[17px] font-semibold font-popins"
                          : "text-TextBlack text-[17px] font-normal font-popins"
                      }
                    >
                      {nav.item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-between gap-6">
                <div className="hidden relative sm:block">
                  <input
                    type="text"
                    className="py-2 bg-GrayLight rounded px-8 w-[300px]  lg:mr-5 xl:mr-0"
                    placeholder="What are you looking for?"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 text-xl text-GraySemiDark right-[4%] lg:right-[10%] xl:right-[4%]">
                    <FiSearch />
                  </span>
                </div>
                <div className="flex items-center gap-x-[20px] relative">
                  <span className="text-TextBlack text-xl sm:text-2xl cursor-pointer">
                    <FaRegHeart />
                  </span>
                  <span className="text-TextBlack text-xl sm:text-2xl amount cursor-pointer">
                    <MdOutlineShoppingCart />
                  </span>
                  <span
                    className="lg:text-GraySemiLight text-TextBlack text-xl lg:text-xl lg:rounded-full lg:bg-BGRed lg:p-2 cursor-pointer relative"
                    onClick={handleAccount}
                  >
                    <FiUser />
                  </span>
                  {account && (
                    <div
                      className={`absolute right-[0%] top-[150%] z-30 bg-[#00000041] text-TextWhite backdrop-blur-sm w-[300px] flex flex-col py-3 rounded-lg `}
                    >
                      <div className="flex items-center gap-x-2 py-3 hover:underline transition-all  text-GrayLight pl-5 hover:cursor-pointer">
                        <span className=" text-3xl ">
                          <LuUser />
                        </span>
                        <h3 className="text-xl font-normal font-popins ">
                          Manage My Account
                        </h3>
                      </div>
                      <div className="flex items-center gap-x-2 py-3 hover:underline transition-all   text-GrayLight pl-5 hover:cursor-pointer">
                        <span className=" text-3xl">
                          <AiOutlineShopping />
                        </span>
                        <h3 className="text-xl font-normal font-popins">
                          My Order
                        </h3>
                      </div>
                      <div className="flex items-center gap-x-2 py-3 hover:underline transition-all   text-GrayLight pl-5 hover:cursor-pointer">
                        <span className=" text-3xl">
                          <MdOutlineCancel />
                        </span>
                        <h3 className=" text-xl font-normal font-popins">
                          My Cancellations
                        </h3>
                      </div>
                      <div className="flex items-center gap-x-2  py-3 hover:underline transition-all   text-GrayLight pl-5 hover:cursor-pointer">
                        <span className=" text-3xl">
                          <FaRegStar />
                        </span>
                        <h3 className="text-xl font-normal font-popins">
                          My Reviews
                        </h3>
                      </div>
                      <div className="flex items-center hover:underline  py-3 gap-x-2 transition-all  text-GrayLight pl-5 hover:cursor-pointer">
                        <span className="text-3xl">
                          <TbLogout2 />
                        </span>
                        <h3 className="text-xl font-normal font-popins  w-full">
                          Logout
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <span
                className="text-2xl cursor-pointer lg:hidden"
                onClick={handleToogleMenu}
              >
                {toggle ? <RxCross2 /> : <IoReorderThreeSharp />}
              </span>
            </div>
          </div>

          {/* mobile menu */}
          {toggle && (
            <div className="lg:hidden bg-white_F5F5F5 py-5">
              <ul className="flex flex-col gap-y-3 items-end">
                {navItem?.map((nav) => (
                  <li key={nav.id}>
                    <NavLink
                      to={`${nav.pathRoute}`}
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "text-black text-[17px] font-normal font-popins"
                          : isActive
                          ? "text-red-500 text-[17px] font-bold font-popins"
                          : "text-black text-[17px] font-normal font-popins"
                      }
                    >
                      {nav.item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
