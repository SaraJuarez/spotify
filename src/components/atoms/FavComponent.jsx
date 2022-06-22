import React from "react";

import {
  FavComponentContainer,
  InfoFavComponent,
  FavName,
  InfoFavTiTle,
} from "../styles/favComponent.styled";

import GenresContainer from "./GenresContainer";

function FavComponent(props) {
  const { itemInfo } = props;
  console.log(itemInfo);
  return (
    <FavComponentContainer>
      <div>
        <img alt="Favourite artists" src={itemInfo.images[1].url} />
      </div>
      <InfoFavComponent>
        <FavName>{itemInfo.name}</FavName>
        <GenresContainer genres={itemInfo.genres} />
      </InfoFavComponent>
      <InfoFavComponent>
        <InfoFavTiTle>Popularity</InfoFavTiTle>
        <p>{itemInfo.popularity}</p>
      </InfoFavComponent>
      <InfoFavComponent>
        <InfoFavTiTle>Followers</InfoFavTiTle>
        <p>{itemInfo.followers.total}</p>
      </InfoFavComponent>
    </FavComponentContainer>
  );
}

export default FavComponent;
