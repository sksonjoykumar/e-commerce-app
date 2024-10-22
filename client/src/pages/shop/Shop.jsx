import React, { useContext, useState } from "react";
import TopSellingProducts from "../../components/top-selling-products/TopSellingProducts";
import { StoreContext } from "../../global-context/GlobalContext";
import Pagination from "../../components/pagination/Pagination";

function Shop() {
  const { products } = useContext(StoreContext);
  const [currentItems, setCurrentItems] = useState(products.slice(0, 15));

  // Product pagination function
  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };
  return (
    <div className="px-6 md:px-20">
      <TopSellingProducts products={currentItems} heading={"Products"} />
      <Pagination products={products} onPageChange={handlePageChange} />
    </div>
  );
}

export default Shop;
