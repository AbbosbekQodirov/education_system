import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
export const LoginContext = createContext({});

export const LoginPrevider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [help, setHelp] = useState(true);
  const [take_token, setTake_token] = useState([]);
  const location = useLocation();
  const locationPathname = location.pathname;
  const loginBase = {
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
    take_token,
    setTake_token,
    locationPathname,
  };

  return (
    <LoginContext.Provider value={loginBase}>{children}</LoginContext.Provider>
  );
};
