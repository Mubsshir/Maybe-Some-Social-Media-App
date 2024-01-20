import Cookies from "js-cookie";
import { AuthContext } from "../../store/context";
import { useContext } from "react";
import { redirect } from "react-router-dom";
const Header = () => {
  const { setIsAuthenticated } = useContext(AuthContext)
  const logoutHandler = async () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    redirect('/')
  }
  return (
    <header className="bg-green-500  flex justify-between items-center px-4 py-2 xl:h-[8%]">
      <h3 className="text-4xl first-letter:font-bold first-letter:px-3 first-letter:bg-white first-letter:text-green-500 text-white first-letter:mr-2">Eyebook</h3>
      <button className="font-bold text-2xl font-sans px-3 py-1 bg-white text-green-500 hover:bg-green-400 hover:text-white"
        onClick={logoutHandler} >Logout</button>
    </header>
  )
}

export default Header