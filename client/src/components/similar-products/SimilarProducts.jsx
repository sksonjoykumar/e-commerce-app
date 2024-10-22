import React, { useContext, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import TopSellingProducts from "../top-selling-products/TopSellingProducts";

function SimilarProducts() {
  const { products, singleProduct } = useContext(StoreContext);
  const [currentItems, setCurrentItems] = useState(products.slice(0, 15));

  console.log(singleProduct);

  return (
    <div>
      <TopSellingProducts
        products={currentItems}
        heading={"Similar Products"}
      />
    </div>
  );
}

export default SimilarProducts;
