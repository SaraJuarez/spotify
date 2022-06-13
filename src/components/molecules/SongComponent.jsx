import React from "react";

import ImageComponent from "../atoms/ImageComponent";
import {
  StyledSongContainer,
  StyledTitle,
} from "../styles/songComponent.styled";

function SongComponent({ songInfo }) {
  return (
    <StyledSongContainer>
      <ImageComponent image={songInfo.images[1].url} />
      <StyledTitle>{songInfo.name}</StyledTitle>
    </StyledSongContainer>
  );
}

export default SongComponent;
