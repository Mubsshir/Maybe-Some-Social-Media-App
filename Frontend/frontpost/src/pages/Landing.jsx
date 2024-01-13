import Auth from "../components/Auth"
const Landing = () => {
  return (
    <div className="w-full  flex flex-col items-end  justify-center h-dvh md:items-center">
      <Auth />
      <p className="w-1/3  md:w-4/6 md:self-start md:mx-auto text-white text-xl font-sans text-left mr-28 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur rerum quas aliquam ducimus quos excepturi quo tenetur perspiciatis libero commodi, cumque, a numquam! Aperiam quae earum eius unde! Suscipit!</p>
    </div>
  )
}

export default Landing