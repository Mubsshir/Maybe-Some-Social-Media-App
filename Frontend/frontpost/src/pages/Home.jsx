import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Feeds from "./Feeds";
import Navigation from "../components/layout/Navigation";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="text-white bg-black flex flex-row  xl:h-[84%]">
        <section className=" xl:w-1/6  p-2 pr-0 ">
          <Navigation />
        </section>
        <section className=" w-full h-full p-2">
          <Routes>
            <Route path="/" element={<Feeds />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home