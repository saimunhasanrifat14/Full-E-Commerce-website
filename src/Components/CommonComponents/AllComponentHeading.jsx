import React from "react";

const AllComponentHeading = ({ title, description = true }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-y-6">
        <div className="flex items-center gap-x-4">
          <span className="w-[20px] h-[40px] rounded bg-BGRed block"></span>
          <span className="font-popins font-semibold text-md text-TextRed capitalize">
            {title ? title : "Not found"}
          </span>
        </div>
        <div>
          {description && (
            <h1 className="font-inter font-semibold text-[36px] text-TextBlack capitalize">
              {description ? description : "Not found"}
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AllComponentHeading;
