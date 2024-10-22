import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";

function CategoryDropdown() {
  const { categories } = useContext(StoreContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  const handleShow = () => {
    setShowDropDown((prev) => !prev);
  };

  // handleClickOutSide
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [showDropDown]);

  return (
    <div className="relative inline-block" ref={dropDownRef}>
      <button
        onClick={handleShow}
        className="bg-[#1D2A35] text-white py-2 px-6 rounded-lg flex items-center border border-gray-500 shadow-sm"
      >
        Select Category
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {showDropDown && (
        <ul className="absolute -right-11  md:right-0 mt-2 w-56 bg-[#1D2A35] rounded-lg shadow-lg overflow-hidden">
          {categories.map((item) => (
            <li key={item?._id}>
              <Link
                to={`categoryitem/${item._base}`}
                className="flex items-center gap-3 text-white py-2 px-4 hover:bg-gray-700"
              >
                <img
                  className="w-6 h-6 rounded-md"
                  src={item.image}
                  alt="img"
                />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryDropdown;
