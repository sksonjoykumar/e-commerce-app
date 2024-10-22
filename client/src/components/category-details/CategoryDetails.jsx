import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { categories, singleCategory, fetchCategoryData } =
    useContext(StoreContext);

  // single Category Id
  const { id } = useParams();

  // fetchProductData function from GlobalContext
  useEffect(() => {
    fetchCategoryData(id);
  }, [id]);

  // Add null checks before rendering elements dependent on singleProduct
  if (id && !singleCategory) {
    return <div>No product found</div>;
  }

  console.log(categories);
  console.log(singleCategory);

  return (
    <div className="px-6 md:px-20">
      <div className="main-wrapper mt-5">
        <div className="">
          <img src={singleCategory.image} alt="" className="w-40" />
          <p>{singleCategory.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
