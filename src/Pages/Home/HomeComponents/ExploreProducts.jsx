import React from "react";
import CommonProductLayout from "../../../Components/CommonComponents/CommonProductLayout";
import ProductCard from "../../../Components/CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/API/ProductApi";

const ExploreProducts = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className="container">
      <div className="w-full py-15">
        <CommonProductLayout
          heading="Our Products"
          description="Explore Our Products"
          isArrowsTrue={true}
          ProductCard={ProductCard}
          componentData={data?.products}
          partialItemShow={4}
          rows={2}
          isLoading={isLoading}
        />
        <div className="w-full flex items-center justify-center">
          <button className="px-[48px] py-4 bg-BGRed rounded text-md font-popins font-medium text-TextWhite hover:bg-HoverRed cursor-pointer mt-15">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
