import React from "react";
import Shimmer from "./Shimmer";
import { LIST_IMG_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductDetails";

const ProductDetails = () => {
  const { resId } = useParams();

  const prodInfo = useProductDetails(resId);

  if (prodInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    sla,
    feeDetails,
    costForTwoMessage,
  } = prodInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    prodInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  console.log(itemCards);

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="w-full max-w-[60rem] mx-auto my-8">
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

          <ul>
            {itemCards.map((item) => (
              <li
                key={item.card.info.id}
                className="bg-gray-100 flex gap-4 items-center justify-between py-3 px-5 mb-3"
              >
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-medium text-md">{item.card.info.name}</h3>
                  <p className="bg-gray-700 text-white self-start font-semibold rounded-full text-sm py-2 px-4">
                    {item.card.info.itemAttribute.vegClassifier}
                  </p>
                  <p className="text-base font-semibold text-gray-500">
                    ₹{item.card.info.price / 100}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.card.info.description}
                  </p>
                  <button className="btn btn-primary self-start">
                    Add to cart
                  </button>
                </div>
                <div>
                  <img
                    src={LIST_IMG_URL + item.card.info.imageId}
                    alt="images"
                    className="w-[120px] h-[120px] rounded-lg object-cover object-center"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
