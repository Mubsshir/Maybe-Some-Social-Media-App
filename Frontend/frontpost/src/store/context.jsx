import { createContext, useEffect, useState,useCallback } from "react";
import { getAuthStatus } from '../services/auth-services'
import PropTypes from 'prop-types';
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user,setUser]=useState({});

  const checkAuthentication=useCallback(async()=>{
    const isAuth= await getAuthStatus();
    setIsAuthenticated(isAuth);
    // if(isAuth){
    //   const user_info=await getUserInfo();
    //   console.log(user_info)
    //   setUser(user_info)
    // }
  },[setIsAuthenticated])


  useEffect(()=>{
    checkAuthentication();
  },[checkAuthentication])


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children:PropTypes.node.isRequired
}
export default AuthProvider;
