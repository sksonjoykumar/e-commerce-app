import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { StoreContext } from "../../global-context/GlobalContext";

function TopSellingProducts({ products, heading }) {
  const {
    fetchProductData,
    addToCart,
    removeFromCart,
    isInCart,
    favorite,
    setFavorite,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  // Single Product
  const { id } = useParams();

  // fetchProductData function from GlobalContext
  useEffect(() => {
    fetchProductData(id);
  }, [id]);

  // addFavorite
  const addFavorite = (item) => {
    setFavorite((prevItems) => [...prevItems, item]);
  };

  // removeFavorite function
  const removeFavorite = (itemId) => {
    setFavorite((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };
  const isFavorite = (itemId) => favorite.some((item) => item._id === itemId);

  return (
    <>
      <div className="mt-10">
        <div className="heading flex justify-between border-b pb-2">
          <h1 className=" text-xl md:text-3xl font-bold text-gray-800">
            {heading}
          </h1>
          <div className="flex items-center hover:text-[#0EADB8] font-semibold transition-all duration-200">
            <Link to={"shop"} className="text-md ">
              View All Products
            </Link>
            <IoIosArrowRoundForward size={30} />
          </div>
        </div>

        {/* All Products */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10">
          {products.map((item) => (
            <div
              key={item?._id}
              className="border rounded-md shadow-sm hover:border hover:border-[#0eadb8] hover:rounded-md hover:cursor-pointer p-4 relative hover:item-block"
            >
              <div className="relative">
                <div onClick={() => navigate(`/product/${item._id}`)}>
                  <img
                    src={item?.images}
                    alt={item.category}
                    className="rounded-md hover:scale-105 transition-all duration-300 w-full h-auto md:h-48 "
                  />
                </div>

                <div className="absolute -top-2 -left-2">
                  <span className="  bg-[#1D2A35] rounded-md text-[#32BDE8] text-[.75rem] px-1.5 py-1">
                    {(
                      ((item.regularPrice - item.discountedPrice) /
                        item.regularPrice) *
                      100
                    ).toFixed(0)}
                    % Save
                  </span>
                </div>
              </div>
              <div
                className="mt-3"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <p className="uppercase text-gray-500 text-[.75rem]">
                  {item?.overView}
                </p>
                <p className="text-md font-semibold text-gray-800 mt-1.5 leading-tight">
                  {item?.name.slice(0, 60)}...
                </p>
                <div className="flex my-1.5">
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                </div>
                <div className="flex gap-2.5 my-2">
                  <del className="text-md font-semibold text-gray-500">
                    ${item?.discountedPrice}
                  </del>
                  <span className="text-md font-semibold text-[#0EADC6]">
                    ${item?.regularPrice}.00
                  </span>
                </div>
              </div>
              <div className="mt-4 mb-1">
                <button
                  type="button"
                  className="w-full border rounded-3xl py-2.5 transition-all duration-200 hover:text-white text-md hover:bg-[#845DB6]"
                  onClick={() =>
                    isInCart(item._id)
                      ? removeFromCart(item._id)
                      : addToCart(item)
                  }
                >
                  {isInCart(item._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="item absolute top-4 right-4 space-y-1">
                {/* Toggle favorite and change icon */}
                {isFavorite(item._id) ? (
                  <IoHeartSharp
                    size={25}
                    onClick={() => removeFavorite(item._id)}
                    color="#EF4444"
                    className="cursor-pointer"
                  />
                ) : (
                  <IoHeartOutline
                    size={25}
                    onClick={() => addFavorite(item)}
                    style={{ color: "black" }}
                    className="cursor-pointer"
                  />
                )}

                <MdOutlineRemoveRedEye size={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopSellingProducts;
