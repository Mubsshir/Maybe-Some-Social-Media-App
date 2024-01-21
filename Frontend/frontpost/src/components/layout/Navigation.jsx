import {   FaBook ,FaPlus } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="h-full w-full text-white flex flex-col drop-shadow-xl bg-gray-800 [&>*]:flex [&>*]:items-center [&>*]:px-5 [&>*]:py-2 group [&>*]:cursor-pointer text-lg font-semibold rounded-sm hover:bg-gray-800">
      <NavLink
        to="/feeds"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        <BsPostcard />
        <span className="phone:hidden sm:inline-block sm:ml-3">Feeds</span>
      </NavLink>
      <NavLink
        to="/post"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        <FaBook />
        <span className="phone:hidden sm:inline-block sm:ml-3">MyPost</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        <AiOutlineDashboard />
        <span className="phone:hidden sm:inline-block sm:ml-3">DashBoard</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        <ImProfile />
        <span className="phone:hidden sm:inline-block sm:ml-3">My Profile</span>
      </NavLink>
      <NavLink to="/create" className="z-20 hover:text-green-500 bg-gray-900 rounded-full text-6xl transition-transform ease-in-out duration-350 hover:scale-125 fixed left-3 bottom-3">
        <FaPlus className="w-9 shadow-2xl  " />
      </NavLink>
    </nav>
  );
};

export default Navigation;
