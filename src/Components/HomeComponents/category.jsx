import React from "react";
import CommonProductLayout from "../../CommonComponents/CommonProductLayout";
import CategoryItem from "../../CommonComponents/CategoryItem";
import { BsSmartwatch } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile4 } from "react-icons/ci";
import { GiConsoleController } from "react-icons/gi";
import { FaCameraRetro, FaHeadphonesSimple } from "react-icons/fa6";

const category = () => {
  const categorybrowse = [
    {
      id: 1,
      name: "Phones",
      icon: <CiMobile4 />,
    },
    {
      id: 2,
      name: "Computer",
      icon: <RiComputerLine />,
    },
    {
      id: 3,
      name: "Smart Watch",
      icon: <BsSmartwatch />,
    },

    {
      id: 4,
      name: "Camera",
      icon: <FaCameraRetro />,
    },
    {
      id: 5,
      name: "HeadPhone",
      icon: <FaHeadphonesSimple />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <GiConsoleController />,
    },
    {
      id: 7,
      name: "Phones",
      icon: <CiMobile4 />,
    },
    {
      id: 8,
      name: "Computer",
      icon: <RiComputerLine />,
    },
    {
      id: 9,
      name: "Smart Watch",
      icon: <BsSmartwatch />,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="w-full border-b border-BGBlack/30 py-15">
          <CommonProductLayout
            ProductCard={CategoryItem}
            isArrowsTrue={true}
            heading="Category"
            description="Browse By Category"
            isLoading={false}
            partialItemShow={6}
            componentData={categorybrowse}
          />
        </div>
      </div>
    </>
  );
};

export default category;
