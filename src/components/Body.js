import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>you are offline, please check your internet connection</h1>;

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-3">
      <div className="my-8">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <div className="flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="search by name"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
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
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
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
              className="btn btn-primary"
              onClick={() => {
                setProductList(products);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
