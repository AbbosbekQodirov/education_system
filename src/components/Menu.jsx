import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ Icons }) => {
  return (
    <div className="menu flex flex-col justify-around items-center w-[100px] min-h-[calc(100vh-100px)]shadow-2xl">
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/lids"}
      >
        <Icons.BsSave />
        <p>Lidlar</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/teachers"}
      >
        <Icons.GiTeacher />
        <p>O'qituvchilar</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/groups"}
      >
        <Icons.FaLayerGroup />
        <p>Guruhlar</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/students"}
      >
        <Icons.FaUserGraduate />
        <p>Talabalar</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/finance"}
      >
        <Icons.AiOutlineDollar />
        <p>Moliya</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/reports"}
      >
        <Icons.TbReportMoney />
        <p>Hisobotlar</p>
      </Link>
      <Link
        className="w-[90px] p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
        to={"/settings"}
      >
        <Icons.FiSettings />
        <p>Sozlanmalar</p>
      </Link>
    </div>
  );
};

export default Menu;
