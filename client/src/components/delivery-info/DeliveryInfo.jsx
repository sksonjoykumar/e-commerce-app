import React, { useContext, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link } from "react-router-dom";

function DeliveryInfo() {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    street: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  //   handleOnChange function
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Process form data (e.g., send to backend, save in state)
    console.log("Form submitted:", formData);

    // Optionally reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      street: "",
      zipCode: "",
      country: "",
      phone: "",
    });

    // alert("successfully submitted!");
  };

  return (
    <div className="lg:px-20">
      <div className="flex justify-center items-center md:items-start text-center md:text-left md:justify-between flex-wrap md:flex-nowrap gap-6 mt-20">
        <div className="">
          <h1 className="text-3xl font-outfit text-[#1d2a35da] font-semibold">
            Delivery Information
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mt-7">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.firstName}
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.lastName}
                onChange={handleOnChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] my-3 shadow-sm"
              value={formData.email}
              onChange={handleOnChange}
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.city}
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.state}
                onChange={handleOnChange}
              />
            </div>
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="w-full py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] my-3 shadow-sm"
              value={formData.street}
              onChange={handleOnChange}
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip code"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.zipCode}
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] shadow-sm"
                value={formData.country}
                onChange={handleOnChange}
              />
            </div>
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="w-full py-2 px-2 border border-gray-300 rounded-md focus:outline-none text-[.85rem] my-3 shadow-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={formData.phone}
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="bg-[#845DB6] py-2 px-6 text-white font-outfit text-base mt-1 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-[400px] mt-1">
          <div className=" font-outfit">
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

            <Link to={"/home"}>
              <button
                type="button"
                className="bg-[#845DB6] py-2 px-6 text-white font-outfit text-base mt-6 rounded-md"
              >
                Proceed to payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
