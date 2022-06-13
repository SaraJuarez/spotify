import React from "react";

import { StyledImage } from "../styles/imageComponent.styled";
function ImageComponent({ image }) {
  return <StyledImage src={image} />;
}

export default ImageComponent;
