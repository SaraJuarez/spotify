import axios from "axios";
import qs from "query-string";

import { Buffer } from "buffer";

const URLs = [
  `${process.env.REACT_APP_BASE_URL}/v1/browse/new-releases`,
  `${process.env.REACT_APP_BASE_URL}/v1/browse/featured-playlists`,
  `${process.env.REACT_APP_BASE_URL}/v1/browse/categories`,
];
let AUTHORIZE = "https://accounts.spotify.com/authorize";
let redirect_uri = "http://localhost:3000";

export const getAuthorization = async () => {
  let url = AUTHORIZE;
  url += "?client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&show_dialog=true";
  url +=
    "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url;
};

export function getToken(code) {
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirect_uri);
  body += "&client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  body += "&client_secret=" + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  callAuthorizationApi(body)
    .then((res) => {
      return true;
    })
    .catch((error) => console.log(error));
}

function callAuthorizationApi(body) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://accounts.spotify.com/api/token", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader(
    "Authorization",
    "Basic " +
      btoa(
        process.env.REACT_APP_SPOTIFY_CLIENT_ID +
          ":" +
          process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
      )
  );
  xhr.send(body);
  xhr.onload = handleAuthorizationResponse;
}

let access_token = null;
let refresh_token = null;

function handleAuthorizationResponse() {
  debugger;
  if (this.status === 200) {
    let data = JSON.parse(this.responseText);
    if (data.access_token !== undefined) {
      access_token = data.access_token;
      localStorage.setItem("access_token", access_token);
    }
    if (data.refresh_token !== undefined) {
      refresh_token = data.refresh_token;
      localStorage.setItem("refresh_token", refresh_token);
    }
    return true;
  } else {
    console.log(this.responseText);
    return false;
  }
}
/* MIS PRUEBAS */

export const getTokenV4 = async (code) => {
  const data = qs.stringify({
    //query-string library
    code,
    grant_type: "client_credentials",
    redirect_uri: redirect_uri,
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  });
  await axios
    .post("https://accounts.spotify.com/api/token", data, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      console.log(res, "mi codigo");
      if (res.data.access_token !== undefined) {
        access_token = res.data.access_token;
        localStorage.setItem("access_token", access_token);
      }
      if (res.data.refresh_token !== undefined) {
        refresh_token = res.data.refresh_token;
        localStorage.setItem("refresh_token", refresh_token);
      }
    })
    .then((error) => {
      console.log(error);
    });
};

/* FIN PRUEBAS */

export const getAllData = () => {
  return Promise.all(URLs.map(fetchData));
};

function fetchData(URL) {
  return axios
    .get(URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        Accept: "application/json",
      },
    })
    .then(function (response) {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch(function (error) {
      console.log(error);
      debugger;
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("code");
        getAuthorization();
      }
      return { success: false };
    });
}

export const getFavs = async () => {};
