import React, { useState } from "react";
import ItemList from "./ItemList";

const ProductCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      <div className="w-full mb-4">
        <div
          className="flex justify-between items-center py-4 border-b cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>
            {showItems === true ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default ProductCategory;
