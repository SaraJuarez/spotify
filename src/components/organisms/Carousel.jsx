import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState, useEffect } from "react";

import ItemComponent from "../molecules/ItemComponent";
import {
  StyledCarousel,
  StyledCarouselTitle,
  StyledIconsContainer,
} from "../styles/carousel.styled";

function Carousel({ items, type }) {
  const [allItems, setAllItems] = useState();
  const [showingItems, setShowingItems] = useState();
  const [indexToSplice, setIndexToSplice] = useState(0);

  const titles = {
    newReleases: "New releases",
    featuredList: "Features Lists",
    categories: "Categories",
  };

  const limits = {
    newReleases: 15,
    featuredList: 8,
    categories: 15,
  };

  useEffect(() => {
    setAllItems(items, "allItems");
    if (items !== undefined) {
      let copyItems = [...items];
      let itemsToShow = copyItems.slice(0, 5);
      setShowingItems(itemsToShow);
    }
  }, [items]);

  const rightArrow = () => {
    if (indexToSplice < limits[type]) {
      let copyItems = [...items];
      setIndexToSplice(indexToSplice + 1);
      let itemsToShow = copyItems.splice(indexToSplice + 1, 5);
      setShowingItems(itemsToShow);
    }
  };

  const leftArrow = () => {
    if (indexToSplice > 0) {
      let copyItems = [...items];
      setIndexToSplice(indexToSplice - 1);
      let itemsToShow = copyItems.splice(indexToSplice - 1, 5);
      setShowingItems(itemsToShow);
    }
  };

  return (
    <div>
      <StyledCarouselTitle>
        <h2>{titles[type]}</h2>
        <StyledIconsContainer>
          <KeyboardArrowLeftIcon onClick={leftArrow} />
          <ChevronRightIcon onClick={rightArrow} />
        </StyledIconsContainer>
      </StyledCarouselTitle>

      <StyledCarousel>
        {showingItems !== undefined
          ? showingItems.map((element, index) => {
              return (
                <ItemComponent type={type} key={index} songInfo={element} />
              );
            })
          : null}
      </StyledCarousel>
    </div>
  );
}

export default Carousel;
