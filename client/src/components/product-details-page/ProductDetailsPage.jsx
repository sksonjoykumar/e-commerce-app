import React, { useContext, useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { StoreContext } from "../../global-context/GlobalContext";
import SimilarProducts from "../similar-products/SimilarProducts";
function ProductDetailsPage() {
  const {
    singleProduct,
    allProductData,
    images,
    setImages,
    color,
    setColor,
    fetchProductData,
  } = useContext(StoreContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductData(id);
  }, [id]);

  // Add null checks before rendering elements dependent on singleProduct
  if (id && !singleProduct) {
    return <div>No product found</div>;
  }

  return (
    <div className="px-6 md:px-20">
      <div className="main-wrapper mt-5">
        {id ? (
          <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:justify-start md:items-start  gap-5 md:gap-10 ">
            <div className="left flex flex-row md:flex-col gap-2 md:gap-0">
              {singleProduct.images?.map((img, index) => (
                <div key={index} className="">
                  <img
                    className={`w-48 my-1 cursor-pointer rounded-md hover:scale-105 transition-all duration-200 ${images === img && "border border-gray-400"}`}
                    src={img}
                    alt="product-img"
                    onClick={() => setImages(img)}
                  />
                </div>
              ))}
            </div>
            <div className="center mt-2 w-full">
              <img
                src={images}
                alt="product-img"
                className=" h-[460px] w-full object-contain cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="right w-full">
              <div className="">
                <h1 className="text-xl xl:text-3xl font-semibold text-[#1D2A35]">
                  {singleProduct?.name}
                </h1>

                <div className="mt-3 xl:flex justify-between">
                  <div className="space-x-2">
                    <del className="text-[1.4rem] text-gray-600">
                      ${singleProduct?.discountedPrice}.00
                    </del>
                    <span className="text-xl md:text-2xl font-semibold text-[#826DDC]">
                      ${singleProduct?.regularPrice}.00
                    </span>
                  </div>
                  <div className="flex gap-1 items-center mt-2 md:mt-0">
                    <IoStarOutline color="grey" />
                    <IoStarOutline color="grey" />
                    <IoStarOutline color="grey" />
                    <IoStarOutline color="grey" />
                    <IoStarOutline color="grey" />
                    <span className="text-gray-800 text-md font-semibold">
                      ({singleProduct?.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-md text-gray-800">
                  Brand:{" "}
                  <span className="font-semibold">{singleProduct?.brand}</span>
                </p>
              </div>
              <div className="mt-2">
                <p className="text-md text-gray-800">
                  Category:{" "}
                  <span className="font-semibold">
                    {singleProduct?.category}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <IoEyeOutline size={22} />
                <p className="text-md text-gray-800">
                  {singleProduct?.reviews} people are viewing
                </p>
              </div>
              <div className="mt-2">
                <p className="text-md text-gray-800">
                  You are saving{" "}
                  <span className="font-semibold text-[#29903B]">
                    $
                    {singleProduct?.regularPrice -
                      singleProduct?.discountedPrice}
                    .00
                  </span>{" "}
                  upon purchase
                </p>
              </div>
              <div className="mt-4 ">
                <p className="text-md text-gray-800 font-semibold">
                  Color:{" "}
                  <span className={"capitalize"} style={{ color }}>
                    {color}
                  </span>
                </p>
                <div className="flex gap-1 md:gap-3 mt-3">
                  {singleProduct?.colors.map((item) => (
                    <div
                      key={item}
                      className={`${color === item ? "border border-black p-1 rounded-full" : "border-transparent"}`}
                    >
                      <div
                        className="w-10 h-10 rounded-full cursor-pointer border"
                        style={{ backgroundColor: item }}
                        onClick={() => setColor(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="uppercase py-3 bg-[#1D2A35] rounded-3xl text-white w-full text-md font-semibold border-none outline-none"
                  onClick={() => navigate("/order")}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ) : (
          allProductData.map((item) => (
            <div key={item.id}>
              <p>Brand: {item.brand}</p>
            </div>
          ))
        )}
      </div>
      <SimilarProducts />
    </div>
  );
}

export default ProductDetailsPage;
