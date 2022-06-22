import axios from "axios";

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
    "&scope=user-read-private user-top-read user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url;
};
let access_token = null;
let refresh_token = null;
export function getToken(code) {
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI("http://localhost:3000");
  body += "&client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  body += "&client_secret=" + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  return new Promise((resolve, reject) => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic MjdiNTBiMzVkZjEzNDdjY2I2NjcyOTE0NzljYWEzNmU6YTc4NThiOWQ1ZmZmNGJjZTg0YjY2NmJhMWM5YmY2YWY=",
      },
      data: body,
    })
      .then((response) => {
        if (response.data.access_token !== undefined) {
          access_token = response.data.access_token;
          localStorage.setItem("access_token", access_token);
        }
        if (response.data.refresh_token !== undefined) {
          refresh_token = response.data.refresh_token;
          localStorage.setItem("refresh_token", refresh_token);
        }
        resolve(true);
      })
      .catch((error) => reject(error));
  });
}

/* 
export const getToken = () => {
  var data = qs.stringify({
    grant_type: "client_credentials",
  });
  var config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic MjdiNTBiMzVkZjEzNDdjY2I2NjcyOTE0NzljYWEzNmU6YTc4NThiOWQ1ZmZmNGJjZTg0YjY2NmJhMWM5YmY2YWY=",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "__Host-device_id=AQBBkFptxypoVZn5Xh0-6kBMkWuM-0EdM4HolFZbsU2ZHyjfPEAroyDt0KmdJBhBf8mM7g2x2PVNg_9k6cZhT-9MB1FsrTKcOKk; __Secure-TPASESSION=AQAseWLKGm1fu0UIqw9T+5sLdzrn0VufK7tdxFcmOiri1ZuQbdtGEqzoSBrj91TJIEcQjC9+pCGE4l1uk4ohQa4D3wV7jBOtvWE=; sp_sso_csrf_token=013acda7190d0585b0be9e5b3bafd308ec6664c04f31363535323933333032383139; sp_tr=false",
    },
    data: data,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        if (response.data.access_token !== undefined) {
          access_token = response.data.access_token;
          localStorage.setItem("access_token", access_token);
        }
        if (response.data.refresh_token !== undefined) {
          refresh_token = response.data.refresh_token;
          localStorage.setItem("refresh_token", refresh_token);
        }
        debugger;
        resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
 */
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

export const getFavs = async () => {
  let token = localStorage.getItem("access_token");
  var config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/top/artists",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(response.data);
        resolve(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 401) {
          getAuthorization();
        }
        reject(error);
      });
  });
};

export const getAlbumInfo = async (id) => {
  let token = localStorage.getItem("access_token");
  return await axios
    .get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
