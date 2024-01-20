import { useState, useEffect, useCallback } from "react"
import { FaEdit, FaSave, FaLinkedin, FaCalendar, FaInstagram, FaTwitch } from "react-icons/fa"
import { GoX } from 'react-icons/go'
import { getUserInfo } from "../services/auth-services"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import '../components/styles/datepicker.css'
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let userData;
let activeSince;
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);


  const [profile, setProfile] = useState({});
  const [startDate, setStartDate] = useState(null);

  const fetchUser = useCallback(async () => {
    console.log("Function Running")
    const userInfo = await getUserInfo();
    console.log(userInfo)
    userData = {
      Name: userInfo[0].first_name + " " + userInfo[0].last_name,
      DOB: new Date(userInfo[0].dob),
      Email: userInfo[0].email,
      Phone: userInfo[0].phone,
      img: userInfo[0].image,
      bio: userInfo[0].bio
    }
    activeSince = userInfo[0].created_on;
    setProfile(userData);
    setStartDate(userData['DOB']);
  }, [])

  const onEditHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      console.log("Submitting...")
      setIsEdit(!isEdit)
    } else {
      setIsEdit(!isEdit)
    }
  }
  const onChangeHandler = (e, key) => {
    console.log(e.target.value)
    setProfile((prev) => ({
      ...prev, // Copy the previous state
      [key]: e.target.value, // Update the specific key with the new value
    }));
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    setProfile(userData)
    setStartDate(userData['DOB'])
    setIsEdit(!isEdit)
  }

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  const keysToRender = Object.keys(profile).filter((key) => key !== 'img' && key !== 'bio');

  const info = keysToRender.map((key) => {
    if (key == 'Email') {
      return (
        <div key={key} className="grid grid-cols-2 [&>*]:border-b [&>*]:border-gray-500 [&>*]:pb-2 [&>*]:text-lg mb-2">
          <label htmlFor={key}>{key}</label>
          <input type="email" name={key} onChange={(e) => { onChangeHandler(e, key) }} value={profile[key]} className={` bg-transparent outline-none ${isEdit ? 'text-green-500 text' : ''}`} disabled={!isEdit} />
        </div>
      )
    } else if (key == 'Phone') {
      return (
        <div key={key} className="grid grid-cols-2 [&>*]:border-b [&>*]:border-gray-500 [&>*]:pb-2 [&>*]:text-lg mb-2">
          <label htmlFor={key}>{key}</label>
          <input type="tel" name={key} maxLength={13} onChange={(e) => { onChangeHandler(e, key) }} value={profile[key]} className={`  bg-transparent outline-none ${isEdit ? 'text-green-500 text' : ''}`} disabled={!isEdit} />
        </div>
      )
    } else if (key == 'DOB') {
      return (
        <div key={key} className="grid grid-cols-2 items-center mb-2 dobContainer">
          <label htmlFor={key}>{key}</label>
          <DatePicker
            showIcon={isEdit}
            name={key}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMM d, y"
            disabled={!isEdit}
            wrapperClassName={`${isEdit ? "text-green-500" : ""}`}
            icon={<FaCalendar className="text-green-500" />}
          >
            <h3 className="text-center font-bold text-green-500">So when did you born?</h3>
          </DatePicker>
        </div>
      )
    }
    else {
      return (
        <div key={key} className="grid grid-cols-2 [&>*]:border-b [&>*]:border-gray-500 [&>*]:pb-2 [&>*]:text-lg mb-2">
          <label htmlFor={key}>{key}</label>
          <input type="text" name={key} onChange={(e) => { onChangeHandler(e, key) }} value={profile[key]} className={` bg-transparent outline-none ${isEdit ? 'text-green-500 text' : ''}`} disabled={!isEdit} />
        </div>
      )
    }
  })

  return (
    <main className="row-span-full col-span-full bg-gray-900 text-white w-full h-full grid grid-cols-3 gap-2 bg-gradient-to-tr p-2">
      <section className=" h-fit bg-gray-800 col-span-2 p-2 rounded-sm shadow-xl">
        <h3 className="text-green-500 text-4xl">About</h3>
        <form className=" mt-6 px-3">
          {info}
          <div className="flex">
            <button onClick={onEditHandler} type={isEdit ? 'submit' : 'button'} className="mt-10 flex  text-lg justify-center items-center bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              {isEdit ? 'Save ' : 'Edit Information'}{isEdit && <FaEdit className="ml-2" /> && <FaSave className="ml-2" />}
            </button>
            {isEdit && <button onClick={onCancelHandler} type={isEdit ? 'submit' : 'button'} className="mt-10 ml-3 flex  text-lg justify-center items-center bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Cancel <GoX className="ml-2 " />
            </button>}
          </div>
        </form>
        <h3 className="font-bold text-right mt-10 ">Active on EyeBook Since: <span className="ml-1 font-semibold text-green-500">{new Date(activeSince).toLocaleString('en-US', options)}</span> </h3>
      </section>
      <section className="bg-gray-800 col-span-1 p-2 rounded-sm shadow-xl flex items-center flex-col drop-shadow-md">
        <img src={profile.img} alt="Mubasshir" className="w-[150px] h-[150px] object-cover rounded-full  bg-green-300" />
        <h2 className="text-xl  font-bold  mt-7">{profile.Name}</h2>
        <h3 className="italic text-green-500 font-bold text-lg mt-3">Bio</h3>
        <p className="text-center">{profile.bio}</p>
        <div className="text-4xl  flex justify-center [&>*]:mx-3 [&>*]:cursor-pointer  mt-4 items-center w-full">
          <FaLinkedin className="hover:text-green-500" />
          <FaInstagram className="hover:text-green-500" />
          <FaTwitch className="hover:text-green-500" />
        </div>
      </section>
    </main>
  )
}

export default Profile