// {
// "username": "nurmuhammad",
// "password": "done7858"
// }
import axios from "axios";
const TOKEN_URL = "https://nurmuhammadtursunov.pythonanywhere.com";
export default axios.create({
  baseURL: TOKEN_URL,
});
