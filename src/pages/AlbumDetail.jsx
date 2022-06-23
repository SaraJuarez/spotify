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
import { msToTime } from "../utils/helpers/helpers";

function AlbumDetail(props) {
  let { id } = useParams();
  const [albumInfo, setAlbumInfo] = useState();
  const [albumYear, setAlbumYear] = useState("");
  const [albumLength, setAlbumLength] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    let albumData = await getAlbumInfo(id);
    setAlbumInfo(albumData);
    console.log(albumData);
    let releaseYear = extractYear(albumData);
    setAlbumYear(releaseYear);
    calculateFullLength(albumData);
  };

  const extractYear = (albumData) => {
    let year = albumData.release_date.split("-");
    return year[0];
  };

  const calculateFullLength = (albumData) => {
    let sum = 0;
    for (let index = 0; index < albumData.tracks.items.length; index++) {
      const element = albumData.tracks.items[index].duration_ms;
      sum += element;
    }
    let fullLength = msToTime(sum, "text");
    setAlbumLength(fullLength);
  };

  return (
    <div>
      {albumInfo !== undefined ? (
        <AlbumDetailContainer>
          <img alt="Album cover" src={albumInfo.images[1].url} />
          <AlbumDetailHeaderText>
            <AlbumDetailType>{albumInfo.album_type}</AlbumDetailType>
            <AlbumDetailName>{albumInfo.name}</AlbumDetailName>
            <p>
              {albumInfo.artists[0].name} - {albumYear} -
              {albumInfo.total_tracks}
              {albumInfo.album_type === "single" ? " song" : " songs"} -{" "}
              {albumLength}
            </p>
          </AlbumDetailHeaderText>
        </AlbumDetailContainer>
      ) : null}
      <AlbumDetailSongList>
        <AlbumDetailHeader albumLink={albumInfo?.external_urls.spotify} />
        {albumInfo?.tracks.items.map((element, index) => {
          return <SongComponent key={index} songInfo={element} />;
        })}
      </AlbumDetailSongList>
    </div>
  );
}

export default AlbumDetail;
