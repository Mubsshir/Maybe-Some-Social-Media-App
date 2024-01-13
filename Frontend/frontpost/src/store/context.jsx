import { createContext, useEffect, useState } from "react";
import { isAuthenticate } from '../services/auth-services'
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const setAuth = (result) => {
    setIsAuthenticated(result);
  };
  
  const checkAuthentication=async()=>{
    const isAuth= await isAuthenticate();
    setIsAuthenticated(isAuth);
  }
  useEffect(() => {
    checkAuthentication();
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
