import React, { useContext, useState } from "react";
import { CiSearch, CiShoppingTag } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import Navbar from "../navbar/Navbar";
import { StoreContext } from "../../global-context/GlobalContext";

function Header() {
  const { cartItems, favorite } = useContext(StoreContext);
  const [searchBox, setSearchBox] = useState(true);

  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };
  return (
    <div className="pt-3 bg-slate-50 top-0 z-50 sticky">
      <div className="mx-auto px-1 sm:px-6 md:px-20">
        <div className="flex items-center justify-between relative">
          <div className="logo">
            <Link to={"/"} className="flex items-center">
              <CiShoppingTag color="#0EADC6" size={30} />
              <span className="text-[#845DB6] text-[20px] font-semibold font-kaushan">
                Shopping
              </span>
            </Link>
          </div>
          <div className="search  relative hidden md:block">
            <input
              type="search"
              name="search"
              placeholder="Search products"
              className="py-2.5 border-2 px-4 pl-12 rounded-3xl text-[.9rem]  w-auto md:w-[26rem] "
            />
            <span>
              <CiSearch className="absolute top-2 left-3" size={30} />
            </span>
          </div>
          <div className="icons">
            <div className="flex items-center gap-3 md:gap-5">
              <CiSearch
                onClick={handleSearchBox}
                className="md:hidden cursor-pointer hover:text-[#0EADE6] transition-all duration-300"
                size={30}
              />
              <Link to={"/signup"}>
                <LuUser2
                  size={28}
                  className="hover:text-[#0EADE6] transition-all duration-300"
                />
              </Link>
              <Link to={"/favorite"} className="relative">
                <FiHeart
                  size={28}
                  className="hover:text-[#0EADE6] transition-all duration-300"
                />
                <p className=" hidden w-[1.2rem] h-[1.2rem] md:flex justify-center items-center rounded-full bg-red-500 text-center text-white absolute text-[.75rem] -right-4 top-[-14px]">
                  {favorite.length}
                </p>
              </Link>
              <Link to={"/cart"} className="relative">
                <RiShoppingCart2Line
                  size={28}
                  className="hover:text-[#0EADE6] transition-all duration-300"
                />
                <p className="hidden w-[1.2rem] h-[1.2rem] md:flex justify-center items-center rounded-full bg-red-500 text-center text-white absolute text-[.75rem] -right-4 top-[-14px]">
                  {cartItems.length}
                </p>
              </Link>
            </div>
          </div>
          {!searchBox && (
            <div className="md:hidden absolute top-16 left-[8%] sm:left-[30%] opacity-100] ">
              <div className="search  relative md:hidden ">
                <input
                  type="search"
                  name="search"
                  placeholder="Search products"
                  className="py-2.5 border-2 px-2 pl-12 rounded-3xl text-[.9rem]  w-full"
                />
                <span>
                  <CiSearch className="absolute top-2 left-3" size={30} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* navbar component import here */}
      <Navbar />
    </div>
  );
}

export default Header;
