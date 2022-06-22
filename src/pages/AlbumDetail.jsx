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
    msToTime(sum);
  };

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(hours + ":" + minutes + ":" + seconds);
    if (hours === "00") {
      setAlbumLength(minutes + " mins " + seconds + " sec");
    } else {
      setAlbumLength(hours + "hour" + minutes + "mins" + seconds + "sec");
    }
  }

  return (
    <div>
      {albumInfo !== undefined ? (
        <AlbumDetailContainer>
          <img alt="Album cover" src={albumInfo.images[1].url} />
          <AlbumDetailHeaderText>
            <AlbumDetailType>{albumInfo.type}</AlbumDetailType>
            <AlbumDetailName>{albumInfo.name}</AlbumDetailName>
            <p>
              {albumInfo.artists[0].name} - {albumYear} -
              {albumInfo.total_tracks}
              canciones - {albumLength}
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
