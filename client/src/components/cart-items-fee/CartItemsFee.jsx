import React from "react";
import { Link } from "react-router-dom";
import PromoCode from "../promo-code/PromoCode";

function CartItemsFee({getTotalCartAmount}) {
  
  return (
    <div className="px-6 lg:px-20">
      <div className="flex justify-between mt-10">
        <div className="w-full md:w-[35%] font-outfit">
          <h1 className="text-2xl font-semibold text-[#1D2A35] font-outfit">
            Cart Totals
          </h1>
          <div className="flex justify-between border-b-2 border-gray-200 pb-2 mt-5 text-lg md:text-xl text-[#1D2A35] ">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pb-2 mt-5 text-lg md:text-xl text-[#1D2A35] ">
            <p>Delivery Fee</p>
            <p>${5}</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pb-2 mt-5 font-semibold text-lg md:text-xl text-[#1D2A35] ">
            <p>Total</p>
            <p>${getTotalCartAmount() + 5}</p>
          </div>

          <Link to={"/order"}>
            <button
              type="button"
              className="bg-[#845DB6] py-2 px-6 text-white font-outfit text-base mt-6 rounded-md"
            >
              Proceed to checkout
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <PromoCode />
        </div>
      </div>
    </div>
  );
}

export default CartItemsFee;
