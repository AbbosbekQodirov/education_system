import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [help, setHelp] = useState(true);
  const [take_token, setTake_token] = useState([]);

  const tokenAxios = axios.create({
    baseURL: process.env.REACT_APP_TOKEN,
    headers: {
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    const getToken = async (url) => {
      const response = await tokenAxios.post(url, {
        username: "nurmuhammad",
        password: "done7858",
      });
      setTake_token(await response.data);
    };
    getToken("take_token/");
  });
  localStorage.setItem("take_token", JSON.stringify(take_token));
  if (!take_token) return null;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
      <form
        action="/home"
        className="w-[500px] max-w-[90%] min-h-[600px] bg-white rounded-xl flex justify-center items-center flex-col gap-5"
      >
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Web Diary
        </h1>
        <div className="w-full pl-[5%]">
          <input
            type="text"
            className="w-[95%] p-4 text-xl rounded-lg"
            onChange={(message) => {
              setUsername(message.target.value);
              message.target.value
                ? setErrorMessage(true)
                : setErrorMessage(false);
            }}
          />
          <p
            className={
              "text-red-500 " + (errorMessage ? " scale-0 " : "scale-100")
            }
          >
            Foydalanuvchi nomini kiriting
          </p>
        </div>
        <div className="w-full pl-[5%]">
          <input
            type="password"
            className="w-[95%] p-4 text-xl rounded-lg"
            onChange={(pass) => {
              setPassword(pass.target.value);
              pass.target.value
                ? setErrorPassword(true)
                : setErrorPassword(false);
            }}
          />
          <p
            className={
              "text-red-500 " + (errorPassword ? " scale-0 " : "scale-100")
            }
          >
            Parol kiriting
          </p>
        </div>
        <p
          className={
            "text-center font-semibold text-xl text-red-500 " +
            (help ? "scale-0" : "scale-100")
          }
        >
          Parol yoki foydalanuvchi nomi hato tekshirib ko'ring!
        </p>
        <Link to={username === "TEST" && password === "test" ? "/home" : ""}>
          <input
            type="submit"
            color="primary"
            className="w-[200px] h-[60px] bg-blue-500 rounded-lg text-white text-xl cursor-pointer"
            value={"Yuborish"}
            onClick={() => {
              if (username === "nurmuhammad" && password === "done7858") {
                setErrorPassword(true);
                setErrorMessage(true);
                setLogin(true);
              } else {
                if (username === "" && password === "") {
                  setErrorPassword(false);
                  setErrorMessage(false);
                } else {
                  setHelp(false);
                }
              }
            }}
          />
        </Link>
      </form>
    </div>
  );
};

export default Login;
