import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [help, setHelp] = useState(true);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
      <form
        action="/Home"
        className="w-[500px] max-w-[90%] min-h-[600px] bg-white rounded-xl flex justify-center items-center flex-col gap-5"
      >
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Web Diary
        </h1>
        <div className="w-full pl-[5%]">
          <TextField
            type={"text"}
            id="outlined-basic"
            label="ID"
            className="w-[95%]"
            variant="outlined"
            onChange={(message) => {
              setId(message.target.value);
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
            ID raqamini kiriting
          </p>
        </div>
        <div className="w-full pl-[5%]">
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
        </div>
        <p
          className={
            "text-center font-semibold text-xl text-red-500 " +
            (help ? "scale-0" : "scale-100")
          }
        >
          Parol Yoki ID hato tekshirib ko'ring!
        </p>
        <Link to={id === "TEST" && password === "test" ? "/Home" : ""}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="w-[200px] h-[60px]"
            onClick={() => {
              if (id === "TEST" && password === "test") {
                setErrorPassword(true);
                setErrorMessage(true);
              } else {
                if (id === "" && password === "") {
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
    </div>
  );
};

export default Login;
