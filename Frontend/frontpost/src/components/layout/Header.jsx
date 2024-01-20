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
    <header className="col-span-full row-auto  flex justify-between items-center px-3 bg-green-500 ">
      <h3 className="text-3xl font-bold text-white first-letter:border-white first-letter:text-4xl  first-letter:px-3 first-letter:bg-white first-letter:text-green-500 first-letter:mr-2 first-letter:rounded-sm">Eyebook</h3>
      <button className="flex  text-lg justify-center items-center bg-white hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        onClick={logoutHandler} >Logout</button>
    </header>
  )
}

export default Header