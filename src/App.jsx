import { Route, Routes } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate, FaLayerGroup, FaHome } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import Home from "./pages/Home";
import Lids from "./pages/Lids";
import Teachers from "./pages/Teachers";
import Groups from "./pages/Groups";
import Students from "./pages/Students";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Login from "./components/Login";
import { useState } from "react";

function App() {

  const [login, setLogin] = useState(false)
  return (
    <>
      {!login && <Login setLogin={setLogin} />}
      {login && <Home />}
    </>
  );
}

export default App;
