import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";

const useProductDetails = (resId) => {
  const [prodInfo, setProdInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();

    console.log(jsonData);
    setProdInfo(jsonData);
  };

  return prodInfo;
};

export default useProductDetails;
