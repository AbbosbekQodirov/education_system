import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({Icons}) => {
  return (
    <>
      <nav className="w-full min-h-[80px] shadow-md flex justify-between items-center px-2 relative">
        <NavLink
          className="w-[90px] absolute p-2 flex flex-col gap-2 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white"
          to={"/home/user"}
        >
          <Icons.FaHome />
          Home
        </NavLink>
        <div className="w-[300px] border-[2px] border-black/60 flex justify-between items-center rounded-3xl px-2 overflow-hidden ml-[100px]">
          <input
            placeholder="Qidirish"
            className="border-none outline-none py-2"
          />
          <Icons.BiSearchAlt className="text-2xl" />
        </div>
        <div className="brand">
          <h2 className="text-2xl font-semibold">Web Diary</h2>
        </div>
        <div className="user flex items-center gap-3">
          <div className="cursor-pointer">
            <img
              src={require("../image/noun-widget.png")}
              alt="noun-widget"
              className="w-7"
            />
          </div>
          <div className="cursor-pointer">
            <Icons.AiOutlineFullscreen className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <h3 className="text-xl">User Name</h3>
          </div>
          <div className="cursor-pointer">
            <img
              src={require("../image/user.png")}
              className="w-7"
              alt="user"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
