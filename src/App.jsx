import { Route, Routes } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate, FaLayerGroup, FaHome } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import Home from "./Home";
import Lids from "./pages/Lids";
import Teachers from "./pages/Teachers";
import Groups from "./pages/Groups";
import Students from "./pages/Students";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
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
            BsSave,
            TbReportMoney,
            GiTeacher,
          }}
        />
        <header className="w-[calc(100%-80px)] min-h-[calc(100vh-80px)] bg-gray-200">
          <Home/>
          <Routes>
            <Route path="/home/user" element={<Home />} />
            <Route path="/home/lids" element={<Lids />} />
            <Route path="/home/teachers" element={<Teachers />} />
            <Route path="/home/groups" element={<Groups />} />
            <Route path="/home/students" element={<Students />} />
            <Route path="/home/finance" element={<Finance />} />
            <Route path="/home/reports" element={<Reports />} />
            <Route path="/home/settings" element={<Settings />} />
          </Routes>
        </header>
      </section>
    </div>
  );
}

export default App;
