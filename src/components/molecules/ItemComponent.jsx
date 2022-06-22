import React from "react";
import { Link } from "react-router-dom";

import ImageComponent from "../atoms/ImageComponent";
import {
  StyledItemContainer,
  StyledTitle,
} from "../styles/itemComponent.styled";

function ItemComponent({ songInfo, type }) {
  let image;
  if (type === "newReleases") {
    image = songInfo.images[1].url;
  } else if (type === "featuredList") {
    image = songInfo.images[0].url;
  } else {
    image = songInfo.icons[0].url;
  }
  return (
    <Link to={`/${songInfo.id}`}>
      <StyledItemContainer>
        <ImageComponent image={image} type={type} />
        <StyledTitle>{songInfo.name}</StyledTitle>
      </StyledItemContainer>
    </Link>
  );
}

export default ItemComponent;
