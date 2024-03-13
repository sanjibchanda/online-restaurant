import React from "react";
import { IMG_URL } from "../utils/Constants";

const ProductsCard = (props) => {
  const { prodData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    prodData?.info;

  return (
    <div className="product-card">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="images"
        className="card-img"
      />
      <div className="prod-details">
        <h3 className="title">{name}</h3>
        <p className="category">{cuisines.join(", ")}</p>
        <p className="price">{costForTwo}</p>
        <div className="review">
          <p>
            <i className="fa-solid fa-star"></i>
            {avgRating} stars
          </p>
          <p>{sla?.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
