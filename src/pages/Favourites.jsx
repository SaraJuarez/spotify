import React, { useEffect, useState } from "react";

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
            return <p key={index}>{element.name}</p>;
          })
        : null}
    </div>
  );
}

export default Favourites;
