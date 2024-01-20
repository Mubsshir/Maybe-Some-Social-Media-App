import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Navigation from "../components/layout/Navigation";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-dvh grid grid-cols-12 grid-rows-12 w-full gap-1">
      <Header />
      <main className="row-span-10 col-span-full grid grid-rows-12 grid-cols-12 gap-1 ">
        <section className=" lg:col-span-2 sm:col-span-3 phone:col-span-4 row-span-full">
          <Navigation />
          
        </section>
        <section className="gap-1 sm:col-span-9 lg:col-span-11 phone:col-span-8 row-span-full grid grid-cols-12  grid-rows-12">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home