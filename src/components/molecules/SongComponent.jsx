import React from "react";

import ImageComponent from "../atoms/ImageComponent";
import { StyledSongContainer } from "../styles/songComponent.styled";

function SongComponent({ songInfo }) {
  console.log(songInfo);
  return (
    <StyledSongContainer>
      <ImageComponent />
      <p>jeje</p>
    </StyledSongContainer>
  );
}

export default SongComponent;
