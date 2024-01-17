import Input from "../components/ui/Input"
import { login } from "../services/auth-services"
import { useRef, useContext, useState } from "react";
import { AuthContext } from '../store/context'
import classNames from 'classnames'

const Auth = () => {
  const containerClass = classNames("xl:w-1/3 phone:w-11/12 phone:mx-0  md:w-4/5 sm:w-4/5 sm:mx-auto h-auto  bg-white rounded-2xl overflow-auto xl:mt-3.5 xl:mr-28 backdrop-blur-lg drop-shadow-lg bg-opacity-5")
  const headingClass = classNames("text-center text-white my-4 text-3xl");
  const formClass = classNames("w-full px-4  flex flex-col py-4 rounded-lg rounded-b-none")
  const btnClass=classNames("bg-green-500 mt-3 w-full font-sans text-white font-semibold text-2xl py-3")
  const [isValid, setIsValid] = useState(true);
  const userRef = useRef();
  const passRef = useRef();
  const { setAuth } = useContext(AuthContext);
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;
    const isLoggedIn = await login(user, pass);
    if (isLoggedIn) {
      setAuth(true);
    } else {
      setIsValid(false)
      setAuth(false);
    }
  }
  setTimeout(() => {
    setIsValid(true);
  }, 5000);
  return (
    <div className={containerClass}>
      <h3 className={headingClass} ><span className="font-bold text-green-500">Login</span> <br /> to Your Account</h3>
      <form className={formClass} onSubmit={onsubmitHandler} >
        <Input ref={userRef} input={{ type: 'text', name: 'username' }} labelName='Username' />
        <Input ref={passRef} input={{ type: 'password', name: 'password' }} labelName='Password' />
        <button type="submit" className={btnClass}>Login</button>
      </form>
      {!isValid && <p className="text-red-400 font-semibold text-2xl px-4 mb-3">Wrong Credential</p>}
    </div >
  )
}

export default Auth



