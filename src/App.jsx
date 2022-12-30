import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [login, setLogin] = useState(false)
  return (
    <AuthProvider>
      {!login && <Login setLogin={setLogin} />}
      {login && <Home />}
    </AuthProvider>
  );
}

export default App;
