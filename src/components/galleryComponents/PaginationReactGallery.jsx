import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../redux/slices/filterSlice";

export const PaginationReactGallery = () => {
  const dispatch = useDispatch();
  const pagesQuantity = useSelector((state) => state.asyncProductsSlice.pagesGallery);

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(setPagination(event))} // через redux
      pageRangeDisplayed={4}
      pageCount={pagesQuantity}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default PaginationReactGallery;
