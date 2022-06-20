import React, { useState, useEffect } from "react";

import Carousel from "../components/organisms/Carousel";
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
      requestToken(codeString);
    } else {
      getAuthorization();
    }
  }, []);

  const requestToken = async (codeString) => {
    let tokenReceived = await getToken(codeString);
    if (tokenReceived === true) {
      allData();
    }
  };

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
        getAuthorization();
        console.log(e);
      });
  };
  return (
    <div>
      <Carousel type="newReleases" items={newReleases} />
      <Carousel type="featuredList" items={featuredList} />
      <Carousel type="categories" items={categories} />
    </div>
  );
}

export default Home;
