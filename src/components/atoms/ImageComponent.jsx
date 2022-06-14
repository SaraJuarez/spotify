import React from "react";

import { StyledImage } from "../styles/imageComponent.styled";
function ImageComponent({ image, type }) {
  return type === "featuredList" ? (
    <StyledImage src={image} />
  ) : (
    <img alt="song" src={image} />
  );
}

export default ImageComponent;
