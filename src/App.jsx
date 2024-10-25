import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Tags from './components/Tags';
import Cards from './components/Cards';
import axios from 'axios';
import SortBy from './components/SortBy';
import Pagination from './components/Pagination';

const App = () => {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
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
      const response = await axios.get(
        `https://api.hm.com/search-services/v1/en_US/listing/resultpage?${new URLSearchParams(params).toString()}`
      );
      setRes(response.data.plpList.productList);
      
    } catch (error) {
      console.error("Error fetching data: ", error);
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
      <div className="card-container">
        {res.slice(page * 12 - 12 , page * 12).map((product, index) => {
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
    </>
  );
};

export default App;