import axios from "axios";
import constants from "./config/keys";
axios.defaults.baseURL = constants.apiUrl;
export const createShortUrl = obj => {
  const requestUrl = "item";
  return axios.post(requestUrl, obj);
};
