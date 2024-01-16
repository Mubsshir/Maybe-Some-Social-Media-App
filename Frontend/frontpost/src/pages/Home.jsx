import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Feeds from "./Feeds";
import Navigation from "../components/layout/Navigation";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Header />
      <main className="text-white bg-black flex flex-row  xl:h-[84%]">
        <section className=" xl:w-1/6  p-2 pr-0 ">
          <Navigation />
        </section>
        <section className=" w-full h-full p-2">
          {false&&<Feeds />}
          <Profile />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home