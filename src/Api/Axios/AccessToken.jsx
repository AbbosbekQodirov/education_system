import axios from "axios";

const take_token = localStorage.getItem("take_token");
const accessToken = JSON.parse(take_token);
export const GroupAxios = axios.create({
  baseURL: process.env.REACT_APP_TOKEN,
  headers: {
    Authorization: `Bearer ${accessToken.access}`,
  },
});