import Auth from "../components/Auth"
const Landing = () => {
  return (
    <div className="xl:w-full   flex flex-col xl:items-end  justify-center h-dvh md:items-center phone:items-center">
      <Auth />
      <p className="xl:w-1/3  phone:w-11/12 xl:self-end  xl:text-left xl:mr-28 xl:mt-3  md:w-4/6 md:self-start md:mx-auto sm:w-4/5 sm:mx-auto text-white text-xl font-sans ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur rerum quas aliquam ducimus quos excepturi quo tenetur perspiciatis libero commodi, cumque, a numquam! Aperiam quae earum eius unde! Suscipit!</p>
    </div>
  )
}

export default Landing