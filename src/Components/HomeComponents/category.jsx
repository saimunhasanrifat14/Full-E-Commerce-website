import React from "react";
import CommonProductLayout from "../../CommonComponents/CommonProductLayout";
import CategoryItem from "../../CommonComponents/CategoryItem";

const category = () => {
  return (
    <>
      <div className="container">
        <div className="w-full border-b-2 border-BGBlack/30 py-15">
          <CommonProductLayout
            ProductCard={CategoryItem}
            isArrowsTrue={true}
            heading="Category"
            description="Browse By Category"
            isLoading={false}
            partialItemShow={6}
          />
        </div>
      </div>
    </>
  );
};

export default category;
