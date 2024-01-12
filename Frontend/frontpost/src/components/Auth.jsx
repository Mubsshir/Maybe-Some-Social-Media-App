import Input from "./ui/Input"
import { login } from "../services/auth-services"
import { useRef,useContext } from "react";
import {AuthContext} from '../store/context'
const Auth = () => {
  const userRef = useRef();
  const passRef = useRef();
  const {setAuth}=useContext(AuthContext);
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;
    const result=await login(user,pass);
    if(result.message=='success'){
      setAuth(true);
    }
  }
  return (
    <div className="w-1/3 h-auto bg-white rounded-2xl overflow-auto mt-3.5 mr-28 backdrop-blur-lg drop-shadow-lg bg-opacity-5">
      <h3 className="text-center my-4 text-3xl" ><span className="font-bold text-green-500">Login</span> <br /> to Your Account</h3>
      <form className="w-full px-4  flex flex-col py-4 rounded-lg rounded-b-none" onSubmit={onsubmitHandler} >
        <Input ref={userRef} input={{ type: 'text', name: 'username' }} labelName='Username'/>
        <Input ref={passRef} input={{ type: 'password', name: 'password'}} labelName='Password'/>
        <button type="submit" className="bg-green-500 mt-3 w-full font-sans text-white font-semibold text-2xl py-3">Login</button>
      </form>
    </div>
  )
}

export default Auth



