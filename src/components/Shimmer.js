import React from "react";
import shimmerCart from "../assets/shimmerCart.png";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-wrap">
        <div className="container">
          <div className="shimmer-search"></div>
          <div className="shimmer-container">
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
            <div className="shimmer-card">
              <img src={shimmerCart} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
