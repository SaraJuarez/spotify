import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState, useEffect } from "react";

import SongComponent from "../molecules/SongComponent";
import {
  StyledCarousel,
  StyledCarouselTitle,
  StyledIconsContainer,
} from "../styles/carousel.styled";

function Carousel({ items }) {
  const [allItems, setAllItems] = useState();
  const [copyAllItems, setCopyAllItems] = useState();
  const [showingItems, setShowingItems] = useState();
  const [indexToSplice, setIndexToSplice] = useState(0);
  console.log(items, "todos los items");
  useEffect(() => {
    setAllItems(items);
    setCopyAllItems(items);
    if (items !== undefined) {
      let copyItems = [...items];
      let itemsToShow = copyItems.slice(0, 5);
      setShowingItems(itemsToShow);
      createTemporalArray(items);
    }
  }, [items]);
  let arrayPrueba = [];
  function createTemporalArray(items) {
    for (let index = 0; index < items.length; index++) {
      const element = items[index].name;
      debugger;
      arrayPrueba.push(element);
    }
    console.log(arrayPrueba);
  }
  useEffect(() => {}, [showingItems]);

  const rightArrow = () => {
    debugger;
    let copyItems = [...items];
    setIndexToSplice(indexToSplice + 1);
    let itemsToShow = copyItems.splice(indexToSplice + 1, 5);
    console.log(itemsToShow);
    setShowingItems(itemsToShow);
  };

  const leftArrow = () => {
    debugger;
    if (indexToSplice !== 0) {
      let copyItems = [...items];
      let itemsToShow = copyItems.splice(indexToSplice, 5);
      setShowingItems(itemsToShow);
    }
  };

  return (
    <div>
      <StyledCarouselTitle>
        <h2>New releases</h2>
        <StyledIconsContainer>
          <KeyboardArrowLeftIcon onClick={leftArrow} />
          <ChevronRightIcon onClick={rightArrow} />
        </StyledIconsContainer>
      </StyledCarouselTitle>

      <StyledCarousel>
        {showingItems !== undefined
          ? showingItems.map((element, index) => {
              return <SongComponent key={index} songInfo={element} />;
            })
          : null}
      </StyledCarousel>
    </div>
  );
}

export default Carousel;
