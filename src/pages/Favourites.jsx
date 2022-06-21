import React, { useEffect, useState } from "react";

import FavComponent from "../components/atoms/FavComponent";
import { getFavs } from "../utils/api/api";

function Favourites() {
  const [favList, setFavList] = useState();

  useEffect(() => {
    console.log(favList);
    debugger;
    getFavItems();
  }, []);

  const getFavItems = async () => {
    let result = await getFavs();
    debugger;
    setFavList(result);
  };

  return (
    <div>
      {favList !== undefined
        ? favList.map((element, index) => {
            return <FavComponent key={index} itemInfo={element} />;
          })
        : null}
    </div>
  );
}

export default Favourites;
