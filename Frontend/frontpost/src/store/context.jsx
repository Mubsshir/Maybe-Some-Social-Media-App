import { createContext, useEffect, useState,useCallback } from "react";
import { getAuthStatus } from '../services/auth-services'
import PropTypes from 'prop-types';
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [UID,setUID]=useState(null);

  const checkAuthentication=useCallback(async()=>{
    const result= await getAuthStatus();
    if(result){
      setIsAuthenticated(true);
      setUID(result.uid);
    }else{
      setIsAuthenticated(false)
    }

  },[setIsAuthenticated])


  useEffect(()=>{
    checkAuthentication();
  },[checkAuthentication])


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated ,UID,setUID}}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children:PropTypes.node.isRequired
}
export default AuthProvider;
