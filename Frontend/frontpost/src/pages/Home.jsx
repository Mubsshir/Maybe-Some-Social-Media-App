import { AuthContext } from "../store/context";
import { useContext } from "react";
import Header from "../components/layout/Header";

const Home = () => {
  const { setAuth } = useContext(AuthContext)

  return (
    <>
      <Header />
      <main className="xl:w-full   bg-gray-900  text-gray-300   flex flex-row lg:h-full">
        <section className="xl:w-1/6 ">
            <ul className="p-0   [&>*]:px-5 [&>*]:py-2 group cursor-pointer text-lg">
              <li className="hover:bg-green-500">My Profile</li>
              <li className="hover:bg-green-500">Feeds</li>
              <li className="hover:bg-green-500">My Post</li>
              <li className="hover:bg-green-500">Dashboards</li>
            </ul>
        </section>
        <section className="bg-cyan-300  w-full">
          h
        </section>
      </main>
    </>
  )
}

export default Home