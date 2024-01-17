import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { useContext } from "react";
import { AuthContext } from "./store/context";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <Landing /> : <Navigate to="/Feeds" />} />
      <Route path="/Feeds" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="*" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
