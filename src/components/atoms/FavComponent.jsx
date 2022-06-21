import React from "react";

import {
  FavComponentContainer,
  InfoFavComponent,
  FavName,
} from "../styles/favComponent.styled";

import GenresContainer from "./GenresContainer";

function FavComponent(props) {
  const { itemInfo } = props;
  return (
    <FavComponentContainer>
      <div>
        <img alt="Favourite artists" src={itemInfo.images[1].url} />
      </div>
      <InfoFavComponent>
        <FavName>{itemInfo.name}</FavName>
        <GenresContainer genres={itemInfo.genres} />
      </InfoFavComponent>
    </FavComponentContainer>
  );
}

export default FavComponent;
