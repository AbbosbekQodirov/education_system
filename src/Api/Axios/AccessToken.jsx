import axios from "axios";
const TEACHING_STYSTEM_TOKEN =
  "https://teachingcentersystem.pythonanywhere.com/";
const take_token = localStorage.getItem("take_token");
const accessToken = JSON.parse(take_token);
export const Axios = axios.create({
  baseURL: TEACHING_STYSTEM_TOKEN,
  headers: {
    Authorization: `Bearer ${accessToken.access}`,
  },
});