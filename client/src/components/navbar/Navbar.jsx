import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import CategoryDropdown from "../category-dropdown/CategoryDropdown.jsx";
import "./style.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // handleShowMenu function
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="py-2.5 mt-2 bg-[#1D2A35]">
      <div className="flex justify-around sm:justify-center items-center gap-4 lg:gap-20 relative">
        <CategoryDropdown />

        {/* responsive bar icon */}
        <button type="button" onClick={handleShowMenu}>
          {showMenu ? (
            <IoMdClose
              color="white"
              size={35}
              className="sm:hidden cursor-pointer"
            />
          ) : (
            <HiOutlineBars3
              color="white"
              size={35}
              className="sm:hidden cursor-pointer"
            />
          )}
        </button>

        <ul className="hidden sm:flex items-center gap-5 lg:gap-16 xl:gap-20 text-white text-lg">
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"shop"}>Shop</NavLink>
          </li>
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"cart"}>Cart</NavLink>
          </li>
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"order"}>Order</NavLink>
          </li>
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"signup"}>Sign In</NavLink>
          </li>
          <li className="hover:text-[#0EADC6] transition-all duration-200">
            <NavLink to={"blogs"}>Blog</NavLink>
          </li>
        </ul>
        {/* responsive menubar */}
        {showMenu && (
          <div className="block sm:hidden absolute right-0 top-[3.2rem] z-10 bg-[#1D2A35] w-[200px] h-[300px] rounded-md">
            <ul className=" flex flex-col items-center justify-center gap-4 lg:gap-20 text-white  text-lg">
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"shop"}>Shop</NavLink>
              </li>
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"cart"}>Cart</NavLink>
              </li>
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"order"}>Order</NavLink>
              </li>
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"signup"}>Sign In</NavLink>
              </li>
              <li className="hover:text-[#0EADC6] transition-all duration-200">
                <NavLink to={"blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
