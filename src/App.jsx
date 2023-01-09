import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {!login && <Login setLogin={setLogin} />}
      {login && <Home />}
    </>
  );
}

export default App;
