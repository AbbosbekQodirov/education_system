import { useEffect } from "react";
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
import Teachers from "./pages/Teachers";
import Groups from "./pages/Groups/Groups";
import Students from "./pages/Students";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Doubt from "./pages/Doubt";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    JSON.parse(localStorage.getItem("login"))
      ? navigate("/")
      : navigate("/login");
  }, [JSON.parse(localStorage.getItem("login"))]);
  setTimeout(() => {
    localStorage.setItem("login", JSON.parse(false));
  }, 5 * 24 * 60 * 60);
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
            <Route path="/" element={<User />} />
            <Route index path="/login" element={<Login />} />
            <Route path="/doubt" element={<Doubt />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:group-name" element={<Groups />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </header>
      </section>
    </div>
  );
}

export default App;
