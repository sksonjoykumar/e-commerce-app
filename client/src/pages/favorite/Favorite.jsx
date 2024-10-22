import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { MdClose } from "react-icons/md";

function Favorite() {
  const { favorite, addToCart, removeFromCart, isInCart, removeItems } =
    useContext(StoreContext);

  return (
    <div className="px-6 md:px-20">
      <div className="mt-6">
        <div className="border-b pb-3 border-gray-300">
          <h1 className="text-xl md:text-3xl font-outfit font-semibold">
            Favorite Products
          </h1>
          <p className="text-sm text-gray-600 mt-3 max-w-xl leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            atque ab eos quo soluta, impedit optio nisi. Eos magnam nobis
            dolorem! Error debitis facere vero neque pariatur sunt eos autem.
            Molestias numquam nemo voluptas eligendi, illum eos voluptate harum
            odit?
          </p>
        </div>

        {favorite &&
          favorite.map((item) => (
            <div key={item._id} className="mt-6 border-b pb-3 border-gray-300">
              <div className="flex gap-5">
                <div>
                  <img
                    src={item?.images[0]}
                    alt="product-img"
                    className="w-auto md:w-96 h-40 object-cover border rounded-sm hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex w-full justify-between items-start">
                    <p className="text-md">{item?.name}</p>
                    <button
                      type="button"
                      className=""
                      onClick={() => removeItems(item._id)}
                    >
                      <MdClose
                        size={20}
                        className="hover:text-[#EF4444] cursor-pointer transition-all duration-200"
                      />
                    </button>
                  </div>
                  <p className="text-sm mt-2 text-gray-600 leading-6">
                    {item?.description}
                  </p>
                  <p className="mt-2">
                    Brand:
                    <span className="text-sm text-gray-60"> {item?.brand}</span>
                  </p>
                  <p className="mt-1">
                    Category:
                    <span className="text-sm text-gray-60">
                      {" "}
                      {item?.category}
                    </span>
                  </p>
                  <p className="mt-1">
                    Price:
                    <span className="text-sm text-gray-60">
                      {" "}
                      ${item?.regularPrice.toFixed(2)}
                    </span>
                  </p>
                  <div className="mt-4 text-sm">
                    You are saving{" "}
                    <span className="text-[#EF4444] text-md font-semibold">
                      $
                      {(
                        ((item.regularPrice - item.discountedPrice) /
                          item.regularPrice) *
                        100
                      ).toFixed(2)}
                    </span>{" "}
                    upon purchase
                  </div>
                  <div className="mt-4 mb-1">
                    <button
                      type="button"
                      className=" px-4 text-sm border rounded-3xl py-2.5 transition-all duration-200 text-white text-md bg-[#845db6ee] hover:bg-[#845db6ba]"
                      onClick={() =>
                        isInCart(item._id)
                          ? removeFromCart(item._id)
                          : addToCart(item)
                      }
                    >
                      {isInCart(item._id) ? "Remove from Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Favorite;
