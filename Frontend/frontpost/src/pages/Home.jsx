import { AuthContext } from "../store/context";
import { useContext } from "react";


const Home = () => {
  const { setAuth } = useContext(AuthContext)
  const logoutHandler = async () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setAuth(false);
  }
  return (
    <div className="w-svw h-svh flex  flex-col justify-center items-center  text-green-400">
      <h3 className="text-9xl ">Welcome</h3>
      <button onClick={logoutHandler}
        className=" outline-none text-5xl bg-green-500 text-white px-5  py-2 flex justify-center items-center rounded-sm cursor-pointer hover:bg-black mt-5"
      >Logout</button>
    </div>
  )
}

export default Home