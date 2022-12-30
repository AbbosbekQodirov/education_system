import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ Icons }) => {
  return (
    <Box className="menu flex flex-col justify-around items-center w-[110px] min-h-[calc(100vh-100px)]shadow-2xl">
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/doubt"}
      >
        <Icons.BiCheckDouble />
        <p>Davomat</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/groups-and-students"}
      >
        <Icons.GiTeacher />
        <p className="text-center">Guruhlar va O'qituvchilar</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/teachers"}
      >
        <Icons.FaLayerGroup />
        <p>Ustozlar</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/students"}
      >
        <Icons.FaUserGraduate />
        <p>Talabalar</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/finance"}
      >
        <Icons.AiOutlineDollar />
        <p className="text-center">Moliya Hisobot</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/reports"}
      >
        <Icons.ImStatsDots />
        <p>Statistika</p>
      </NavLink>
      <NavLink
        className="w-[100px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/settings"}
      >
        <Icons.FiSettings />
        <p>Sozlanmalar</p>
      </NavLink>
    </Box>
  );
};

export default Menu;
