import React, { useState } from "react";

const CategoryPart = ({ categoryData, isLoading }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categoryData : categoryData?.slice(0, 5);
  return (
    <div>
      <div className="w-full">
        <h2 className="text-TextBlack font-popins font-bold text-[20px] mb-3">
          Shop by Category
        </h2>
        {isLoading ? (
          <ul>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-gray-200 transition-all"
                >
                  <li className="flex animate-pulse bg-gray-300 rounded w-full py-4 my-2"></li>
                </div>
              ))}
          </ul>
        ) : (
          <div>
            <ul>
              {visibleCategories?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between transition-all"
                >
                  <li className="font-popins w-full hover:px-3 hover:font-bold transition-all text-md text-TextBlack font-normal hover:bg-gray-200 py-3 cursor-pointer">
                    {item}
                  </li>
                </div>
              ))}
            </ul>

            {categoryData?.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-2 text-TextBlack font-semibold underline cursor-pointer"
              >
                {showAll ? "Show Less" : "More"}
              </button>
            )}
          </div>
        )}

        <div>
          <h2 className="text-TextBlack font-popins font-bold text-[20px] mt-8 mb-3">
            Shop by Color
          </h2>
          <ul>
            <li className="font-popins hover:bg-gray-200 hover:px-3 hover:font-bold transition-all text-md text-TextBlack font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-4 h-4 rounded-full bg-red-500 "></span>
                <p>Red</p>
              </div>
            </li>

            <li className="font-popins hover:bg-gray-200 hover:px-3 hover:font-bold transition-all text-md text-TextBlack font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-4 h-4 rounded-full bg-blue-500 "></span>
                <p>Blue</p>
              </div>
            </li>

            <li className="font-popins hover:bg-gray-200 hover:px-3 hover:font-bold transition-all text-md text-TextBlack font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-2">
                <span className="inline-block w-4 h-4 rounded-full bg-green-500 "></span>
                <p>Green</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPart;
