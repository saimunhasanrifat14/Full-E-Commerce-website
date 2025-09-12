import React from "react";
import CommonProductLayout from "../../CommonComponents/CommonProductLayout";
import CategoryItem from "../../CommonComponents/CategoryItem";
import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { PiGameControllerLight, PiWatchLight } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";

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
      icon: <LiaLaptopCodeSolid />,
    },
    {
      id: 3,
      name: "Smart Watch",
      icon: <PiWatchLight />,
    },

    {
      id: 4,
      name: "Camera",
      icon: <CiCamera />,
    },
    {
      id: 5,
      name: "HeadPhone",
      icon: <CiHeadphones />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <PiGameControllerLight />,
    },
    {
      id: 7,
      name: "Phones",
      icon: <CiMobile4 />,
    },
    {
      id: 8,
      name: "Computer",
      icon: <LiaLaptopCodeSolid />,
    },
    {
      id: 9,
      name: "Smart Watch",
      icon: <PiWatchLight />,
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
