import AsyncStorage from "@react-native-community/async-storage";
import axios, { AxiosError } from "axios";
import { api_uri } from ".";
// import { store } from "../redux/configureStore";
// import { setSession } from "../redux/reducers/session/action";

const api = axios.create({
  baseURL: api_uri,
  timeout: 6000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@gg:token");

  if (!!token) {
    config.headers["Authorization"] = `bearer ${token}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (res) => {
//     // console.log("intercept reponse", res);
//     return res;
//   },
//   async (error: AxiosError) => {
//     const { response } = error;
//     let _refreshToken: any;
//     const user = store.getState().session.user;

//     if (response?.status === 401 && response.data?.message === "jwt expired") {
//       const _response = await api.post("/refresh-token", {
//         email: user?.email,
//       });
//       _refreshToken = _response.data;

//       store.dispatch(setSession(_refreshToken));
//       error.config.headers["Authorization"] = "bearer " + _refreshToken.token;
//       return api.request(error.config);
//     }

//     // console.log("intercept error unhandled", error);

//     return Promise.reject(error);
//   }
// );

export { api };
