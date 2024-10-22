import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination({ products, onPageChange }) {
  const initialItemsPerPage = 15;
  const itemsPerPageAfterFirst = 10;

  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const isFirstPage = itemOffset === 0;
  const itemsPerPage = isFirstPage
    ? initialItemsPerPage
    : itemsPerPageAfterFirst;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);

  const pageCount =
    Math.ceil(
      (products.length - initialItemsPerPage) / itemsPerPageAfterFirst
    ) + 1;

  const handlePageClick = (event) => {
    const newOffset =
      event.selected === 0
        ? 0
        : initialItemsPerPage + (event.selected - 1) * itemsPerPageAfterFirst;

    const newStart = newOffset + 1;
    setItemOffset(newOffset);
    setItemStart(newStart);
    onPageChange(currentItems);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold "
          activeClassName="bg-black text-white"
        />
        <p className="text-sm text-gray-500">
          Products from {itemStart} to {Math.min(endOffset, products?.length)}{" "}
          of {products?.length}
        </p>
      </div>
    </>
  );
}

export default Pagination;
