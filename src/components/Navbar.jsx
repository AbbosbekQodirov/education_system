import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ Icons }) => {
  const [user, setUser] = useState(false);

  return (
    <>
      <nav className="w-full min-h-[80px] shadow-md flex justify-between items-center px-2 relative">
        <div className="w-[100px] min-h-[80px] relative flex items-center left-[-0.25rem]">
          <NavLink
            className="w-[100px] absolute px-2 py-4 flex flex-col gap-2 left-0 items-center duration-300 rounded-lg hover:bg-gray-500 hover:text-white text-3xl"
            to={"/home"}
          >
            <Icons.FaHome />
          </NavLink>
        </div>
        <NavLink to={"/trial-tests"} className="nav-link">
          <p className="text-md font-semibold">Sinov Darslar</p>
        </NavLink>
        <NavLink to={"/active-tests"} className="nav-link">
          <p className="text-md font-semibold">Faol Talabalar</p>
        </NavLink>
        <NavLink to={"/active-lessons"} className="nav-link">
          <p className="text-md font-semibold">Faol Darslar</p>
        </NavLink>
        <NavLink to={"/statistic"} className="nav-link">
          <p className="text-md font-semibold">Statistika</p>
        </NavLink>
        <button>
          O'quvchi Qo'shish
        </button>
        <div className="user flex items-center gap-3 cursor-pointer relative mr-5">
          <div onClick={() => (!user ? setUser(true) : setUser(false))}>
            <img
              src={require("../image/user.png")}
              className="w-7"
              alt="user"
            />
          </div>
          <div
            className={
              "w-[200px] h-[100px] bg-black rounded-xl absolute top-[200%] right-[-50%] shadow-lg shadow-[gray] z-50 flex justify-center items-center flex-col gap-2 text-white scale-0 " +
              (user ? "scale-100" : "scale-0")
            }
          >
            <div className="w-[30px] h-[20px] vector absolute bg-black bottom-full right-[15px] shadow-lg shadow-[gray]"></div>
            <p>example@gmail.com</p>
            <button onClick={() => (!user ? setUser(true) : setUser(false))}>
              Chiqish
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
