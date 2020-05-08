import axios from "axios";
import { endpoint } from "./enpoint";

export const fetchJuniors = (params = {}) => {
  return axios({
    url: `${endpoint}/junior_users`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};
