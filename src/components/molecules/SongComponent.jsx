import React from "react";

import ImageComponent from "../atoms/ImageComponent";
import {
  StyledSongContainer,
  StyledTitle,
} from "../styles/songComponent.styled";

function SongComponent({ songInfo, type }) {
  let image;
  if (type === "newReleases") {
    image = songInfo.images[1].url;
  } else if (type === "featuredList") {
    image = songInfo.images[0].url;
  } else {
    image = songInfo.icons[0].url;
  }
  return (
    <StyledSongContainer>
      <ImageComponent image={image} type={type} />
      <StyledTitle>{songInfo.name}</StyledTitle>
    </StyledSongContainer>
  );
}

export default SongComponent;
