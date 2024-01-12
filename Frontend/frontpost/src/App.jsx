import Home from "./pages/Home";
import Landing from "./pages/Landing"
import { useContext } from "react";
import { AuthContext } from "./store/context";
function App() {
  const {isAuthenticated}=useContext(AuthContext)
  console.log(isAuthenticated)
  if(isAuthenticated){
    return <Home/>
  }
  return ( <Landing/> );
}

export default App;
