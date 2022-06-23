import React from "react";

import { msToTime } from "../../utils/helpers/helpers";
import {
  SongComponentContainer,
  SongComponentTitle,
  SongComponentNumber,
  SongComponentDuration,
} from "../styles/songComponent.styled";

function SongComponent({ songInfo }) {
  let songLength = msToTime(songInfo.duration_ms, "noText");

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
        <p>{songLength}</p>
      </SongComponentDuration>
    </SongComponentContainer>
  );
}

export default SongComponent;
