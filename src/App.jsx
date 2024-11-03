import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Tags from "./components/Tags";
import Cards from "./components/Cards";
import axios from "axios";
import SortBy from "./components/SortBy";
import Pagination from "./components/Pagination";
import "./styles/loading.css";
import { LuLoader2 } from "react-icons/lu";
import { MdOutlineErrorOutline } from "react-icons/md";

const App = () => {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [params, setParams] = useState({
    pageSource: "PLP",
    page: "1",
    sort: "RELEVANCE",
    pageId: "/men/shop-by-product/hoodies-and-sweatshirts",
    pageSize: "62",
    categoryId: "men_hoodiessweatshirts",
    filters: "sale:false||oldSale:false",
    touchPoint: "DESKTOP",
    skipStockCheck: "false",
  });

  const getData = async () => {
    try {
      const url =
        "https://api.hm.com/search-services/v1/en_US/listing/resultpage?";
      const response = await axios.get(
        `${url}${new URLSearchParams(params).toString()}`
      );
      response && setLoading(false);
      response && setError(null);
      response && setRes(response.data.plpList.productList);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      <h1 className="pageinfo">Hoodies & Sweatshirts For Men</h1>
      <Tags />
      <SortBy />
      {loading ? (
        <div className="loading">
          <LuLoader2 size={35} rotate={true} className="rotate" />
          <h1>LOADING...</h1>
        </div>
      ) : error ? (
        <div className="error">
          <MdOutlineErrorOutline size={40} fill="red" />
          <h1 className="error-msg">ERROR: {error.message}</h1>
        </div>
      ) : (
        <div>
          <div className="card-container">
            {res.slice(page * 12 - 12, page * 12).map((product, index) => {
              const formattedPrice = product.prices[0]?.formattedPrice;
              return (
                <Cards
                  key={index}
                  data={product}
                  formattedPrice={formattedPrice}
                />
              );
            })}
          </div>
          <Pagination pageData={res} page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};

export default App;
