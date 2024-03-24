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
      <div className="container">
        <div className="productDetails">
          <div className="details_box">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} Stars</p>
            <p>{areaName}</p>
            <p>{feeDetails.message}</p>
            <div className="priceList">
              <span>{sla.slaString}</span>
              <span className="price">{costForTwoMessage}</span>
            </div>
          </div>

          <ul className="list">
            {itemCards.map((item) => (
              <li key={item.card.info.id} className="prodList">
                <div>
                  <h3>{item.card.info.name}</h3>
                  <p className="category">
                    {item.card.info.itemAttribute.vegClassifier}
                  </p>
                  <p>₹{item.card.info.price / 100}</p>
                  <p>{item.card.info.description}</p>
                  <button className="addToCart">Add to cart</button>
                </div>
                <div>
                  <img
                    src={LIST_IMG_URL + item.card.info.imageId}
                    alt="images"
                    className="list-img"
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
