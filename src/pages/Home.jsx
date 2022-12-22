import React from 'react'
import Navbar from '../components/Navbar';

import { Route, Routes } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFullscreen, AiOutlineDollar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserGraduate, FaLayerGroup, FaHome } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import {ImStatsDots} from "react-icons/im"

import Menu from "../components/Menu";
import Lids from "../pages/Lids";
import Teachers from "../pages/Teachers";
import Groups from "../pages/Groups";
import Students from "../pages/Students";
import Finance from "../pages/Finance";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import One from './One';


function Home() {
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
            ImStatsDots,
          }}
        />
        <header className="w-[calc(100%-80px)] min-h-[calc(100vh-80px)] bg-gray-200">
          <Routes>
            <Route path="/" element={<One />} />
            <Route path="/lids" element={<Lids />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/groups" element={<Groups />} />
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

export default Home