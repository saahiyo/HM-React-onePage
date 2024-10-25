import React, { useState } from "react";
import "../styles/cards.css";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Cards = ({ data, formattedPrice }) => {

  

  return (
    <div className="Fullcard">
      <div className="innerCard">
        <IoMdHeart fill="white" />
        <IoMdHeartEmpty fill="black" />
        <img src={data.modelImage} loading="lazy" alt={data.productName} />
      </div>
      <div className="details">
        <p className="product-title">{data.productName}</p>
        <p className="product-price">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default Cards;
