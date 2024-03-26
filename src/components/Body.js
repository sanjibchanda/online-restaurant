import { useEffect, useState, useContext } from "react";
import ProductsCard, { isNewlyOnboard } from "./ProductsCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [products, setProducts] = useState([]); // default state value
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ProductsCardIsNewlyOnboard = isNewlyOnboard(ProductsCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log(productList);

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
          <div className="flex gap-2 items-center">
            <label>User name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
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
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6">
          {productList.map((product) => (
            <Link
              to={"/restaurants/" + product.info.id}
              key={product.info.id}
              className="block relative"
            >
              {product.info.isNewlyOnboarded ? (
                <ProductsCardIsNewlyOnboard prodData={product} />
              ) : (
                <ProductsCard prodData={product} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
