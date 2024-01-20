import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex flex-col drop-shadow-xl bg-gradient-to-tl from-gray-600 to-black hover:bg-gradient-to-br [&>*]:px-5 [&>*]:py-2 group [&>*]:cursor-pointer text-lg font-semibold h-full bg-gray-900 rounded-sm hover:bg-gray-800">
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
    </nav>
  );
};

export default Navigation;
