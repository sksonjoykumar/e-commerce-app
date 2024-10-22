import React from "react";
import brand from "../../assets/images/main-brand.png";
import { Link } from "react-router-dom";
function PopularBrands() {
  return (
    <div className="mt-8">
      <div className="">
        <h1 className=" text-xl md:text-3xl font-bold text-gray-800">
          Popular Selling Products Brands
        </h1>
        <div className="mt-5 relative">
          <img
            src={brand}
            alt="Brands Images"
            className="w-full h-auto md:h-64 border rounded-md relative z-0"
          />
          <Link
            to={"brands"}
            className=" absolute w-full h-full top-0 left-0 bg-gray-300 opacity-0 z-10 transition-opacity duration-300 hover:opacity-20"
          ></Link>
        </div>
      </div>
    </div>
  );
}

export default PopularBrands;
