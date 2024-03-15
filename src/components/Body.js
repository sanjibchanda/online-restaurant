import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/Constants";

const Body = () => {
  const [products, setProducts] = useState([]); // default state value
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  /* with corsproxy:
  const prodApi =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(REST_API);

    const jsonData = await response.json();

    setProductList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setProducts(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(jsonData);
  };

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="body_wrapper">
        <div className="top-box">
          <div className="searchBox">
            <input
              type="text"
              className="search"
              placeholder="search by name"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                filteredSearch = products.filter((prod) =>
                  prod.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setProductList(filteredSearch);
              }}
            >
              search
            </button>
          </div>
          <div className="btn-box">
            <button
              className="filter-btn"
              onClick={() => {
                filteredList = products.filter(
                  (prod) => prod.info.avgRating > 4.4
                );
                setProductList(filteredList);
              }}
            >
              Ratings 4.5+
            </button>
            <button
              className="filter-btn"
              onClick={() => {
                setProductList(products);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="product-container">
          {productList.map((product) => (
            <Link to={"/restaurants/" + product.info.id} key={product.info.id}>
              <ProductsCard prodData={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
