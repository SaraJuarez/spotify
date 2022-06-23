import React from "react";
import { IconContext } from "react-icons";
import { AiFillClockCircle, AiFillPlayCircle } from "react-icons/ai";

import {
  AlbumDetailHeaderContainer,
  AlbumDetailHeaderPlay,
  AlbumDetailHeaderStyled,
  Div1,
  Div2,
  Div3,
} from "../styles/albumDetailHeader.styled";

function AlbumDetailHeader({ albumLink }) {
  return (
    <AlbumDetailHeaderContainer>
      <AlbumDetailHeaderPlay>
        <IconContext.Provider value={{ color: "#4bd759" }}>
          <a href={albumLink} target="_blank" rel="noreferrer">
            <AiFillPlayCircle size={70} />
          </a>
        </IconContext.Provider>
      </AlbumDetailHeaderPlay>
      <AlbumDetailHeaderStyled>
        <Div1>
          <p>#</p>
        </Div1>
        <Div2>
          <p>Title</p>
        </Div2>
        <Div3>
          <IconContext.Provider value={{ color: "white" }}>
            <AiFillClockCircle />
          </IconContext.Provider>
        </Div3>
      </AlbumDetailHeaderStyled>
    </AlbumDetailHeaderContainer>
  );
}

export default AlbumDetailHeader;
