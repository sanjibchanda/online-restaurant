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
        className="w-full h-[200px] object-cover object-center rounded-sm"
      />
      <div className="flex flex-col gap-3 px-3 py-6 text-center">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="bg-primary rounded-full self-center py-1 px-4 text-sm">
          {cuisines.join(", ")}
        </p>
        <p className="text-2xl font-medium">{costForTwo}</p>
        <div className="flex justify-between items-center gap-2">
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

export default ProductsCard;
