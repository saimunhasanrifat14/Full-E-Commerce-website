import React from "react";
import CategoryPart from "./ProductComponent/CategoryPart";
import ProductsPart from "./ProductComponent/ProductsPart";
import { useGetAllProductCategoryListQuery } from "../../Features/API/ProductApi";
import { BreadCrumb } from "../../Components/CommonComponents/BreadCrumb";

const Product = () => {
  const { data, error, isLoading } = useGetAllProductCategoryListQuery();
  console.log(data);
  return (
    <div className="container">
      <BreadCrumb />
      <div className="w-full flex justify-between gap-10 py-15">
        <div className="w-[25%]">
          <CategoryPart
            categoryData={data}
            isLoading={isLoading}
            error={error}
          />
        </div>
        <div className="w-[75%]">
          <ProductsPart />
        </div>
      </div>
    </div>
  );
};

export default Product;
