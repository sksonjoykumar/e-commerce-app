import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";

function ProductCard() {
  const { highlights, setHighlights } = useContext(StoreContext);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item) => (
          <div
            key={item?._id}
            className="relative h-60 rounded-lg border shadow-md cursor-pointer overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${item?.image})`,
                color: item?.color,
              }}
            >
              <div className="absolute bottom-0 h-32 px-5 w-full ">
                <p className="text-indigo-600 text-xl font-semibold">
                  {item?.name}
                </p>
                <p className="text-2xl text-[#EE4961] font-semibold">
                  {item?.title}
                </p>
                <Link
                  to={"shop"}
                  className=" mt-4 inline-block px-3 text-sm py-1 rounded-md bg-[#826DDC] text-white"
                >
                  {item?.buttonTitle}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
