import { useEffect, useCallback } from "react"
import { FaLinkedin, FaInstagram, FaTwitch } from "react-icons/fa"
import { getUser } from "../services/profile-services"
import { useParams } from "react-router-dom";

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let userData={};
let activeSince;
const UserProfile = () => {
  const {id}=useParams()

  const fetchUser = useCallback(async () => {
    console.log("Function Running")
    const userInfo = await getUser(id);
    console.log(userInfo)
    userData = {
      Name: userInfo[0].first_name + " " + userInfo[0].last_name,
      DOB: new Date(userInfo[0].dob),
      Email: userInfo[0].email,
      Phone: userInfo[0].phone,
      img: userInfo[0].image,
      bio: userInfo[0].bio,
      activeSince:userInfo[0].created_on
    }
  }, [id])


  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  const keysToRender = Object.keys(userData).filter((key) => key !== 'img' && key !== 'bio');

  const info = keysToRender.map((key) =>
    <div key={key} className="grid grid-cols-2 [&>*]:border-b [&>*]:border-gray-500 [&>*]:pb-2 [&>*]:text-lg mb-2">
      <h3 >{key}</h3>
      <h3 className={` bg-transparent outline-none `} >userData[key]</h3>
    </div>)

  return (
    <main className="row-span-full col-span-full bg-gray-900 text-white w-full h-full grid grid-cols-3 gap-1 bg-gradient-to-tr ">
      <section className=" h-fit bg-gray-800 col-span-2 p-2 rounded-sm shadow-xl">
        <h3 className="text-green-500 text-4xl">About</h3>
        <div className=" mt-6 px-3">
          {info}
        </div>
        <h3 className="font-bold text-right mt-10 ">Active on EyeBook Since: <span className="ml-1 font-semibold text-green-500">{new Date(activeSince).toLocaleString('en-US', options)}</span> </h3>
      </section>
      <section className="bg-gray-800 col-span-1 p-2 rounded-sm shadow-xl flex items-center flex-col drop-shadow-md">
        <img src={userData.image} alt="Mubasshir" className="w-[150px] h-[150px] object-cover rounded-full mb-4 bg-green-300" />

        <h2 className="text-xl  font-bold  mt-7">{userData.Name}</h2>
        <h3 className="italic text-green-500 font-bold text-lg mt-3">Bio</h3>
        <p className="text-center">{userData.bio}</p>
        <div className="text-4xl  flex justify-center [&>*]:mx-3 [&>*]:cursor-pointer  mt-4 items-center w-full">
          <FaLinkedin className="hover:text-green-500" />
          <FaInstagram className="hover:text-green-500" />
          <FaTwitch className="hover:text-green-500" />
        </div>
      </section>
    </main>
  )
}

export default UserProfile