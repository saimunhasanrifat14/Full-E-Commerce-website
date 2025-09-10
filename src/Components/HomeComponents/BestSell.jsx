import React from "react";
import CommonProductLayout from "../../CommonComponents/CommonProductLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useBestSellingProductQuery } from "../../Features/API/ProductApi";

const BestSell = () => {
  const { data, isLoading } = useBestSellingProductQuery();
  return (
    <div className="container">
      <div className="w-full py-15">
        <CommonProductLayout
          ProductCard={ProductCard}
          heading="This Month"
          description="Best Selling Products"
          isLoading={isLoading}
          partialItemShow={4}
          componentData={data?.products}
        />
      </div>
    </div>
  );
};

export default BestSell;
