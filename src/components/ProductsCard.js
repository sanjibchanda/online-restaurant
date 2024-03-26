import React from "react";
import { IMG_URL } from "../utils/Constants";

const ProductsCard = (props) => {
  const { prodData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    prodData?.info;

  return (
    <div className="flex flex-col justify-between rounded-sm p-3 bg-primary-light h-full">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="images"
        className="w-full h-[180px] object-cover object-center rounded-sm"
      />
      <div className="flex flex-col gap-3 pt-6 pb-3 text-center">
        <h3 className="text-base font-medium">{name}</h3>
        <p className="bg-primary rounded-full self-center py-1 px-4 text-xs">
          {cuisines.join(", ")}
        </p>
        <p className="text-xl font-medium">{costForTwo}</p>
        <div className="flex justify-between items-center gap-2 text-sm">
          <p>
            <i className="fa-solid fa-star text-primary-dark mr-1"></i>
            {avgRating} stars
          </p>
          <p>{sla?.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export const isNewlyOnboard = (ProductsCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute -top-3 -left-1 bg-black text-white py-1 px-2 rounded-sm text-sm">
          Newly Onboard
        </label>
        <ProductsCard {...props} />
      </>
    );
  };
};

export default ProductsCard;
