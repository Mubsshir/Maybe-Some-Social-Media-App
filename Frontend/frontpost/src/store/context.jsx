import { createContext, useEffect, useState } from "react";
import { getUserInfo, isAuthenticate } from '../services/auth-services'
import PropTypes from 'prop-types';
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser]=useState({});

  const getUser=async ()=>{
    try{
      const user_info=await getUserInfo();
      if(user_info){
        setUser(user_info);
      }
    }catch(err){
      setUser({});
      console.log("ERROR : ",err)
    }
  }
  const setAuth = (result) => {
    setIsAuthenticated(result);
  };
  
  const checkAuthentication=async()=>{
    const isAuth= await isAuthenticate();
    setIsAuthenticated(isAuth);
  }
  useEffect(() => {
    checkAuthentication();
    isAuthenticate&&getUser();
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth ,user}}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children:PropTypes.node.isRequired
}
export default AuthProvider;
