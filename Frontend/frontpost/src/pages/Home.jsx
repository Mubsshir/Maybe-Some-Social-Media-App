import { logout } from '../services/auth-services'
import { AuthContext } from '../store/context'; 
import { useRef } from 'react';
const Home = () => {
  const {checkAuth}=useRef(AuthContext)
  const logoutHandler = async () => {
    await logout();
    checkAuth();
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