import React, {useContext} from "react";
import Navbar from "./Navbar";

import { Route, Routes } from "react-router-dom";
import { BiSearchAlt, BiCheckDouble } from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate, FaLayerGroup, FaHome } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { Box } from "@mui/material";

import Menu from "./Menu";
import Teachers from "../pages/Teachers";
import Groups from "../pages/Groups";
import Students from "../pages/Students";
import Finance from "../pages/Finance";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import User from "../pages/User";
import Doubt from "../pages/Doubt";

function Home() {
  return (
    <Box className="w-full min-h-screen">
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
            <Route path="/doubt" element={<Doubt />} />
            <Route path="/groups-and-students" element={<Teachers />} />
            <Route path="/teachers" element={<Groups />} />
            <Route path="/students" element={<Students />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </header>
      </section>
    </Box>
  );
}

export default Home;
