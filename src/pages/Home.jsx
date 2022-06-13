import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Carousel from "../components/organisms/Carousel";
import {
  StyledContent,
  StyledHome,
  StyledDiv,
} from "../components/styles/home.styled";
import { getAllData, getAuthorization, getToken } from "../utils/api/api";
function Home() {
  const [code, setCode] = useState();
  const [token, setToken] = useState("");
  const [newReleases, setNewReleases] = useState();
  const [featuredList, setFeaturedList] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const search = window.location.search;
    let token = window.localStorage.getItem("access_token");
    let codeString = window.localStorage.getItem("code");
    if (token !== undefined && token !== null) {
      if (newReleases === undefined) {
        allData();
      }
    } else if (!code && search !== "") {
      let getCode = search.split("=");
      codeString = getCode[1];
      setCode(codeString);
      localStorage.setItem("code", codeString);
      getToken(codeString);
    } else {
      getAuthorization();
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("access_token");
  };

  const allData = () => {
    getAllData()
      .then((resp) => {
        setNewReleases(resp[0].data.albums.items);
        setFeaturedList(resp[1].data.playlists.items);
        setCategories(resp[2].data.categories.items);
      })
      .catch((e) => {
        console.log(e);
        debugger;
        getAuthorization();
        console.log(e);
      });
  };

  return (
    <StyledHome>
      <NavBar />
      <StyledContent>
        <Header />
        <StyledDiv>
          <Carousel items={newReleases} />
        </StyledDiv>
      </StyledContent>
    </StyledHome>
  );
}

export default Home;
