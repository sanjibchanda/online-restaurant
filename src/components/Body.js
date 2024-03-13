import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]); // default state value
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const prodApi =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  // with corsproxy:
  // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(prodApi);

    const jsonData = await response.json();

    setProductList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setProducts(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
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
            <ProductsCard key={product.info.id} prodData={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
