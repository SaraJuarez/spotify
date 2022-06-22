import React from "react";

import {
  SongComponentContainer,
  SongComponentTitle,
  SongComponentNumber,
  SongComponentDuration,
} from "../styles/songComponent.styled";

function SongComponent({ songInfo }) {
  return (
    <SongComponentContainer>
      <SongComponentNumber>
        <p>{songInfo.track_number}</p>
      </SongComponentNumber>
      <SongComponentTitle>
        <p>{songInfo.name}</p>
        <p>{songInfo.artists[0].name}</p>
      </SongComponentTitle>
      <SongComponentDuration>
        <p>2:33</p>
      </SongComponentDuration>
    </SongComponentContainer>
  );
}

export default SongComponent;
