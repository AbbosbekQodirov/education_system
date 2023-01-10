import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    errorPassword,
    setErrorPassword,
    help,
    setHelp,
  } = useContext(LoginContext);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500 absolute top-0 left-0 z-50">
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
                localStorage.setItem("login", JSON.stringify(true));
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
