import axios from "axios";
export const TokenAxios = axios.create({
  baseURL: "https://teachingcentersystem.pythonanywhere.com/",
  headers: {
    "Content-Type": "application/json",
  },
});