import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = ({ setLogin }) => {
  const { loginUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [help, setHelp] = useState(true);
  return (
    <Box className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
      <form
        action="/home"
        className="w-[500px] max-w-[90%] min-h-[600px] bg-white rounded-xl flex justify-center items-center flex-col gap-5"
      >
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Web Diary
        </h1>
        <Box className="w-full pl-[5%]">
          <TextField
            type={"text"}
            id="outlined-basic"
            label="user name"
            className="w-[95%]"
            variant="outlined"
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
        </Box>
        <Box className="w-full pl-[5%]">
          <TextField
            type={"password"}
            id="outlined-basic"
            label="Parol"
            className="w-[95%]"
            variant="outlined"
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
        </Box>
        <p
          className={
            "text-center font-semibold text-xl text-red-500 " +
            (help ? "scale-0" : "scale-100")
          }
        >
          Parol yoki foydalanuvchi nomi hato tekshirib ko'ring!
        </p>
        <Link to={username === "TEST" && password === "test" ? "/home" : ""}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="w-[200px] h-[60px]"
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
          >
            Login
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default Login;
