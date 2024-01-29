import { useContext } from "react";
import { AuthContext } from "./store/context";
import { Navigate, Route, Routes } from "react-router-dom";

//import component Here
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page404 from './pages/Page404'
import Landing from './pages/Landing'
import Feeds from './pages/Feeds'
import Create from "./pages/Create";
import MyPosts from "./pages/MyPosts";
import UserProfile from "./pages/UserProfile";
//import Test from "./test/Test";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} >
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:id" element={<UserProfile />} />
          <Route index path="feeds" element={<Feeds />} />
          <Route path="post" element={<MyPosts/>} />
          <Route path="create" element={<Create/>} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/login" element={!isAuthenticated ? <Landing /> : <Navigate to="/feeds" />} />
      </Routes>
    </>
  );
}

export default App;