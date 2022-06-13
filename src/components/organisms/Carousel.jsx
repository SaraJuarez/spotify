import React, { useEffect } from "react";

import SongComponent from "../molecules/SongComponent";

function Carousel({ items }) {
  console.log(items);
  return (
    <div>
      {items !== undefined
        ? items.map((element) => {
            return <SongComponent element={element} />;
          })
        : null}
    </div>
  );
}

export default Carousel;
