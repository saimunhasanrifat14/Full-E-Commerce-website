import React, { useState } from "react";
import { useGetAllProductQuery } from "../../../Features/API/ProductApi";
import ProductCard from "../../../Components/CommonComponents/ProductCard";
import CommonProductSkeleton from "../../../Skeleton/CommonProductSkeleton";

const ProductPart = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(9);
  let totalPage = data?.limit / pagePerShow;

  //   pagination funtionality
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-x-2">
        <h2 className="font-popins font-normal text-[16px] text-TextBlack">
          Show :
        </h2>
        <select
          value={pagePerShow}
          onChange={(e) => setpagePerShow(Number(e.target.value))}
          className="px-2 bg-slate-200 rounded-sm py-1"
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product */}
      <div className="flex flex-wrap justify-between ">
        {isLoading
          ? [...new Array(9)]?.map((_, index) => (
              <div key={index} className="w-[30%]">
                <CommonProductSkeleton />
              </div>
            ))
          : data?.products
              ?.slice(page * 9 - 9, page * pagePerShow)
              .map((item) => (
                <div className="w-[30%]">
                  <ProductCard itemData={item} />
                </div>
              ))}
      </div>

      <div
        aria-label="Page navigation example"
        className="flex justify-center items-center mt-20"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li>
              <span
                href="#"
                className={
                  index + 1 === page
                    ? "flex items-center justify-center px-4 h-10 leading-tight text-TextWhite bg-BGRed border border-BGRed  cursor-pointer"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-BGWhite border border-gray-300 hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
                }
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>

      {/* product */}
    </div>
  );
};

export default ProductPart;
