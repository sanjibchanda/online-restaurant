import React from "react";
import shimmerCart from "../assets/shimmerCart.png";

const Shimmer = () => {
  return (
    <>
      <div className="py-8">
        <div className="container mx-auto px-3">
          <div className="bg-gray-100 h-[40px] p-8"></div>
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
