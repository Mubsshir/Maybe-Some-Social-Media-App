import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="h-full text-white flex flex-col drop-shadow-xl bg-gray-800 [&>*]:px-5 [&>*]:py-2 group [&>*]:cursor-pointer text-lg font-semibold rounded-sm hover:bg-gray-800">
      <NavLink
        to="/feeds"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        Feeds
      </NavLink>
      <NavLink
        to="/post"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        My Post
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'bg-gradient-to-r from-green-500 to-gray-800' : 'hover:bg-gradient-to-r from-green-500 to-gray-800')}
      >
        My Profile
      </NavLink>
      <NavLink to="/create" className="hover:text-green-500 bg-gray-900 rounded-full text-6xl transition-transform ease-in-out duration-350 hover:scale-125 fixed left-3 bottom-3">
        <FaPlus className="w-9 shadow-2xl  " />
      </NavLink>
    </nav>
  );
};

export default Navigation;
