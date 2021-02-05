import { api } from "./api";

export async function getGames() {
  console.log("getGames");
  const _response = await api.get("/getlistgames").catch((e) => {
    console.log(e);
    return e.response;
  });

  return _response.data;
}

export async function getCovers() {
  console.log("getCovers");

  const _response = await api.get("/getcovers").catch((e) => {
    console.log("getCovers errror", e);
    return e.response;
  });

  console.log("getCovers success", JSON.stringify(_response.data).substr(25));

  return _response.data;
}
