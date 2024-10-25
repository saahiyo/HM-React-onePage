import React from "react";
import "../styles/sortby.css";
import { IoAdd } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

const SortBy = () => {
  return (
    <div className="sortby-container">
      <div className="sbLeft">
        <p>sort by</p>
        <IoAdd />
      </div>
      <div className="sbRight">
        <p>Filters</p>
        <BiMenuAltRight />
      </div>
    </div>
  );
};

export default SortBy;
