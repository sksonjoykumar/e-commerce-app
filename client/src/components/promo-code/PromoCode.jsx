import React from "react";

function PromoCode() {
  return (
    <div>
      <div className="font-outfit hidden md:block">
        <p className="text-[1.1rem] text-gray-800">
          If you have a promo code, Enter it here
        </p>
        <div className=" xl:w-[450px] flex">
          <input
            className="w-full mt-2 py-2 px-2 border border-gray-400 rounded-l-md bg-slate-100 focus:outline-none"
            type="text"
            name="text"
            id=""
            placeholder="Enter promo code"
          />
          <button
            type="button"
            className="px-2 md:px-6 py-2 bg-[#0EADC6] border border-gray-400 text-white text-md mt-2 rounded-r-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromoCode;
