import React from "react";
import ProductCard from "../../../Components/CommonComponents/ProductCard";
import CommonProductLayout from "../../../Components/CommonComponents/CommonProductLayout";
import { useGetAllProductQuery } from "../../../Features/API/ProductApi";

const FlashSales = () => {
  const { data, isLoading } = useGetAllProductQuery();
  return (
    <>
      <div className="mt-[140px] ">
        <div className="container">
          <div className="w-full border-b border-BGBlack/30 pb-15">
            <CommonProductLayout
              ProductCard={ProductCard}
              timeStamp={true}
              timeofOffer={1}
              isArrowsTrue={true}
              heading="Today's"
              description="Flash Sales"
              partialItemShow={4}
              componentData={data?.products}
              isLoading={isLoading}
            />

            <div className="w-full flex items-center justify-center mt-14">
              <button className="bg-BGRed text-md font-popins font-medium text-TextWhite px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
                View All Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
