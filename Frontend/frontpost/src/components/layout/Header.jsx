import { AuthContext } from "../../store/context";
import { useContext } from "react";
const Header = () => {
  const { setAuth } = useContext(AuthContext)
  const logoutHandler = async () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setAuth(false);
  }
  return (
    <header className="bg-green-500  flex justify-between items-center h-full lg:h-[8%] drop-shadow-xl ">
      <h3 className="font-bold text-4xl font-sans text-white px-5 py-3 my-auto" >Khan Post</h3>
      <button className="font-bold text-2xl font-sans px-10  lg:h-full my-auto bg-white text-green-500 hover:bg-green-400 hover:text-white"
        onClick={logoutHandler} >Logout</button>
    </header>
  )
}

export default Header