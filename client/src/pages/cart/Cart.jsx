import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Toast from "../../components/toast-message/Toast";
import { toast } from "react-toastify";
import CartItemsFee from "../../components/cart-items-fee/CartItemsFee";

function Cart() {
  const { cartItems, setCartItems, getTotalCartAmount } =
    useContext(StoreContext);

  // increaseQuantity function
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.success(`quantity increase!`);
  };

  // decreaseQuantity function
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    toast.error(`quantity decrease!`);
  };

  // removeItems function
  const removeItems = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
    toast.error(`remove item!`);
  };

  return (
    <>
      {/* <Toast bottomRight="bottom-right" /> */}
      <div className="px-2 sm:px-6 md:px-20">
        <div className=" font-outfit">
          <div className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 text-base md:text-lg border-b pb-1 text-[#1D2A35] sticky top-[7.9rem] h-10 bg-white overflow-hidden">
            <p>Items</p>
            <p>Title</p>
            <p className="hidden md:block">Price</p>
            <p className="hidden md:block">Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {cartItems.map((item) => (
            <div
              key={item?._id}
              className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 border-b pb-2 mt-4 md:text-base text-sm"
            >
              <img
                src={item?.images[0]}
                className="w-20 h-14 object-cover border border-gray-300 rounded-sm mx-auto hover:scale-105 transition-all duration-500 cursor-pointer"
                alt="item-img"
              />
              <p>{item?.category}</p>
              <p className="hidden md:block">
                ${item?.regularPrice.toFixed(2)}
              </p>
              <div className="hidden  md:flex justify-center items-center gap-2.5">
                <button
                  type="button"
                  className="border rounded-full p-1.5"
                  onClick={() => decreaseQuantity(item._id)}
                >
                  <FaMinus color="#E02335" size={15} />
                </button>
                <p>{item?.quantity}</p>
                <button
                  type="button"
                  className="border rounded-full p-1.5"
                  onClick={() => increaseQuantity(item._id)}
                >
                  <FaPlus color="#49E227" size={15} />
                </button>
              </div>
              <p>${(item?.regularPrice * item?.quantity).toFixed(2)}</p>
              <button
                type="button"
                className="flex justify-center"
                onClick={() => removeItems(item._id)}
              >
                <MdClose
                  size={20}
                  className="hover:text-[#E02335] transition-all duration-200"
                />
              </button>
            </div>
          ))}
        </div>
        <CartItemsFee getTotalCartAmount={getTotalCartAmount} />
      </div>
    </>
  );
}

export default Cart;
