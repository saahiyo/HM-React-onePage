import React, { useState, useEffect } from "react";
import "../styles/pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = (data) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data.pageData && data.pageData.length > 0) {
      setProduct(data.pageData);
    }
  }, [data.pageData]);

  useEffect(() => {
    if (product.length > 0) {
      console.log("Product length:", product.length);
    }
  }, [product]);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(product.length / 10) &&
      selectedPage !== data.page
    ) {
      data.setPage(selectedPage);
    }
  };

  const handleNextPage = () => {
    if (data.page >= Math.ceil(product.length / 10)) {
      selectedPageHandler(data.page - 1);
    } else {
      selectedPageHandler(data.page + 1);
    }
  };

  const buttonText = data.page >= Math.ceil(product.length / 10) ? "Load Previous Page" : "Load Next Page";

  return (
    <div className="pagination-container">
      <button className="nextButton" onClick={handleNextPage}>{buttonText}</button>
      <div className="pagination-number-container">
        <MdKeyboardArrowLeft
          onClick={() => selectedPageHandler(data.page - 1)}
          className={data.page <= 1 ? "disabled" : ""}
        />
        {product.length > 0 && (
          <ul>
            {[...Array(Math.ceil(product.length / 10))].map((_, index) => {
              return (
                <li
                  key={index}
                  className={
                    data.page === index + 1 ? "selected" : "unselected"
                  }
                  onClick={() => selectedPageHandler(index + 1)}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
        )}

        <MdKeyboardArrowRight
          onClick={() => selectedPageHandler(data.page + 1)}
          className={
            data.page >= Math.ceil(product.length / 10) ? "disabled" : ""
          }
        />
      </div>
    </div>
  );
};
export default Pagination;
