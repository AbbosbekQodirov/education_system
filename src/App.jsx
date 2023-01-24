import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { BiSearchAlt, BiCheckDouble } from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate, FaLayerGroup, FaHome } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Groups from "./pages/Groups";
import { Attendances } from "./pages/Attendances";
import Login from "./components/Login";
import Home from "./pages/Home";
function App() {
  const navigate = useNavigate();
  setTimeout(() => {
    localStorage.setItem("login", JSON.parse(false));
  }, 5 * 24 * 60 * 60);
  useEffect(() => {
    JSON.parse(localStorage.getItem("login"))
      ? navigate("/")
      : navigate("/login");
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Navbar Icons={{ BiSearchAlt, AiOutlineFullscreen, FaHome }} />
      {/* ----------------- Menu ------------------- */}
      <section className="flex">
        <Menu
          Icons={{
            AiOutlineDollar,
            FiSettings,
            FaUserGraduate,
            FaLayerGroup,
            BiCheckDouble,
            TbReportMoney,
            GiTeacher,
            ImStatsDots,
          }}
        />
        <header className="w-[calc(100%-80px)] min-h-[calc(100vh-80px)] bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index path="/login" element={<Login />} />
            <Route path="/attendances/:id" element={<Attendances />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </header>
      </section>
    </div>
  );
}

export default App;
