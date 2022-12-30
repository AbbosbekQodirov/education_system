import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  const loginUser = async (username, password) => {
    let response = await fetch(
      "https://nurmuhammadtursunov.pythonanywhere.com/take_token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "nurmuhammad",
          password: "done7858",
        }),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
    } else alert("Serverda hatolikyuzaga keldi qayta tekshirib ko'ring!");
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
