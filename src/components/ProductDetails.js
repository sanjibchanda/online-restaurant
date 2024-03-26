import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductDetails";
import ProductCategory from "./ProductCategory";

const ProductDetails = () => {
  const { resId } = useParams();

  const prodInfo = useProductDetails(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (prodInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    sla,
    feeDetails,
    costForTwoMessage,
  } = prodInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    prodInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="w-full max-w-[50rem] mx-auto my-8">
          <div className="flex flex-col gap-1 mb-8 pb-8 border-b border-gray-300">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="text-gray-500">{cuisines.join(", ")}</p>
            <p className="text-gray-500">{avgRating} Stars</p>
            <p className="text-gray-500">{areaName}</p>
            <p className="text-gray-500">{feeDetails.message}</p>
            <div className="flex gap-8 mt-6 text-lg font-semibold">
              <span>{sla.slaString}</span>
              <span>{costForTwoMessage}</span>
            </div>
          </div>

          {categories.map((category, index) => (
            <ProductCategory
              data={category?.card?.card}
              key={category?.card?.card?.title}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
