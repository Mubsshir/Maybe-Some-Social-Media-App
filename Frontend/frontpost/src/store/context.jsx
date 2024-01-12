import { createContext, useEffect, useState } from "react";
import { isAuthenticate } from '../services/auth-services'
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (result) => {
    setIsAuthenticated(result);
  };
  const checkAuth = async () => {
    const result = await isAuthenticate();
    setIsAuthenticated(result.isAuthorized);
  }
  useEffect(() => {
    checkAuth();
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth,checkAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
