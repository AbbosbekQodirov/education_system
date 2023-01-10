import axios from "axios";
import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function TakeToken() {
  const { username, password, take_token, setTake_token } =
    useContext(LoginContext);
  const TokenAxios = axios.create({
    baseURL: process.env.REACT_APP_TOKEN,
    headers: {
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    const getToken = async (url) => {
      const response = await TokenAxios.post(url, {
        username: username,
        password: password,
      });
      setTake_token(await response.data);
    };
    getToken("take_token/");
  });
  localStorage.setItem("take_token", JSON.stringify(take_token));
  if (!take_token) return null;

  return <div>TakeToken</div>;
}
