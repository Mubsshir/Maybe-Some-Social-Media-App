import Input from "../components/ui/Input"
import { login, signUp } from "../services/auth-services"
import { useRef, useContext, useState } from "react";
import { AuthContext } from '../store/context'
import classNames from 'classnames'
import PickDate from "../components/ui/PickDate";
import Modal from "../components/ui/Modal";

const Auth = () => {
  const headingClass = classNames("text-center text-white my-4 text-3xl");
  const formClass = classNames("w-full px-4  flex flex-col py-4 rounded-lg rounded-b-none")

  const [isValid, setIsValid] = useState(true);
  const [signIn, setIsSignIn] = useState(true);
  const [ErrorMsg, setErrorMsg] = useState("")
  const [dob, setDob] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);

  const firstRef = useRef("");
  const lastRef = useRef("");
  const userRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const cPassRef = useRef("");

  const { setIsAuthenticated,setUID } = useContext(AuthContext);

  const formTypeHandler = () => {
    setIsSignIn(!signIn)
  }

  const getDob = (dob) => setDob(dob);

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    const username = userRef.current.value;
    const pass = passRef.current.value;
    if (!username.length > 0 || !pass.length > 0) {
      setIsValid(false);
      setErrorMsg("Username Password isRequired..")
      return;
    }
    if (signIn) {
      const uid = await login(username, pass);
      if (uid) {
        setIsAuthenticated(true);
        setUID(uid);
      } else {
        setIsValid(false)
        setIsAuthenticated(false);
        setErrorMsg("Invalid Username/Password")
      }
      return;
    }
    const email = emailRef.current.value;
    const firstName = firstRef.current.value;
    const lastName = lastRef.current.value;
    const cPass = cPassRef.current.value;


    if (!signIn && (!username.length > 0 || !pass.length > 0 || !cPass.length > 0 || !email.length > 0 || !firstName.length > 0 || !lastName.length > 0)) {
      setIsValid(false);
      setErrorMsg("All Fields are Required..")
      return;
    }


    if (!signIn){
      if (pass != cPass) {
        setErrorMsg("Password Not Matched..");
        setIsValid(false);
        return;
      } else {
        const res = await signUp({ firstName, lastName, email, dob, username, pass });
        if (res.status === 1) {
          setIsSignIn(true);
          setShowSuccess(true);
          return;
        } else {
          setErrorMsg(res.message);
          setIsValid(false);
          return;
        }
      }
    }
  }

  setTimeout(() => {
    setIsValid(true);
    setShowSuccess(false);
  }, 5000);
  return (
    <div className="xl:w-1/3 phone:w-11/12 phone:mx-0  md:w-4/5 sm:w-4/5 sm:mx-auto h-auto  bg-white bg-opacity-15 border border-white border-opacity-10 rounded-xl overflow-auto xl:mt-3.5 xl:mr-28 shadow-lg backdrop-blur-[10px] ">
      <h3 className={headingClass}><span className="font-extrabold text-green-500 mr-2 font-mono">{signIn ? 'Login' : 'Sign Up'}</span> Here</h3>
      {showSuccess && <h3 className="ml-4 text-white text-lg font-bold">Successfully Signed Up,You can <span className="text-green-500">Login</span> now</h3>}
      <form className={formClass} onSubmit={onsubmitHandler} >
        {!signIn && (
          <div className="flex  items-stretch w-full [&>*]:w-[50%]">
            <Input ref={firstRef} input={{ type: 'text', name: 'username', placeholder: 'First Name', maxLength: "12" }} labelName='First Name' />
            <Input ref={lastRef} input={{ type: 'text', name: 'username', placeholder: 'Last Name', maxLength: "12" }} labelName='Last Name' />
          </div>
        )}
        <Input ref={userRef} input={{ type: 'text', name: 'username', placeholder: 'username', maxLength: "12" }} labelName='Username' />
        {!signIn && (
          <div className="flex  items-stretch w-full [&>*]:w-[50%]">
            <Input ref={emailRef} input={{ type: 'email', name: 'email', placeholder: 'Email' }} labelName='Email' />
            <PickDate configuration={{}} labelName="DOB" fetchDate={getDob} />
          </div>
        )}
        <Input ref={passRef} input={{ type: 'password', name: 'pass', placeholder: 'Password', suggested: "current-password" }} labelName='Password' />
        {!signIn && <Input ref={cPassRef} input={{ type: 'password', name: 'cpass', placeholder: 'Confirm Password', maxLength: "12", suggested: "current-password" }} labelName='Confirm Password' />}
        <div className="mx-1 w-full" >
          <h3 className="text-lg text-white">{signIn ? "Don't" : 'Already'} have an Account <span className="cursor-pointer ml-1 font-bold text-green-400" onClick={formTypeHandler}  >{signIn ? '!Sign up here' : '!Sign in'}</span> </h3>
        </div>
        <Input input={{ type: 'submit', value: signIn ? 'Login' : 'Create Account' }} className="bg-green-500  cursor-pointer mt-4  py-2 text-xl  text-white rounded-lg" />
      </form>
      <Modal>
        <div>Hello</div>
      </Modal>
      {!isValid && <p className="text-red-600 font-semibold text-xl px-4 mb-3 ml-2">{ErrorMsg}</p>}
    </div >
  )
}

export default Auth