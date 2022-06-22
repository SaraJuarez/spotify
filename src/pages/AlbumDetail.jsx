import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AlbumDetailHeader from "../components/atoms/AlbumDetailHeader";
import SongComponent from "../components/molecules/SongComponent";
import {
  AlbumDetailContainer,
  AlbumDetailHeaderText,
  AlbumDetailType,
  AlbumDetailName,
  AlbumDetailSongList,
} from "../components/styles/albumDetail.styled";
import { getAlbumInfo } from "../utils/api/api";

function AlbumDetail(props) {
  let { id } = useParams();
  const [albumInfo, setAlbumInfo] = useState();
  const [albumYear, setAlbumYear] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    let albumData = await getAlbumInfo(id);
    setAlbumInfo(albumData);
    console.log(albumData);
    let releaseYear = extractYear(albumData);
    setAlbumYear(releaseYear);
  };

  const extractYear = (albumData) => {
    let year = albumData.release_date.split("-");
    return year[0];
  };

  return (
    <div>
      {albumInfo !== undefined ? (
        <AlbumDetailContainer>
          <img alt="Album cover" src={albumInfo.images[1].url} />
          <AlbumDetailHeaderText>
            <AlbumDetailType>{albumInfo.type}</AlbumDetailType>
            <AlbumDetailName>{albumInfo.name}</AlbumDetailName>
            <p>
              {albumInfo.artists[0].name} - {albumYear} -{" "}
              {albumInfo.total_tracks}
              canciones
            </p>
          </AlbumDetailHeaderText>
        </AlbumDetailContainer>
      ) : null}
      <AlbumDetailSongList>
        <AlbumDetailHeader />
        {albumInfo?.tracks.items.map((element, index) => {
          return <SongComponent key={index} songInfo={element} />;
        })}
      </AlbumDetailSongList>
    </div>
  );
}

export default AlbumDetail;
