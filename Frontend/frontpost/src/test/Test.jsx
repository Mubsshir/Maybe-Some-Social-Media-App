import { useState, useEffect } from "react"

import { getUserInfo } from "../services/auth-services"

const Test = () => {

  //need to make modal component for create post
  const [user, setUser] = useState([]);
  let userData;
  const fetchUser = async () => {
    console.log("Function Running")
    const userInfo = await getUserInfo();
    console.log(userInfo)
    setUser(userInfo);
    userData = {
      Name: user[0].first_name + " " + user[0].last_name,
      DOB: new Date(user[0].dob),
      Email: user[0].email,
      Phone: user[0].phone,
      img: user[0].image,
      bio: user[0].bio
    }
  }


  console.log(userData)
  useEffect(() => {
    fetchUser();
    console.log("use Effect running")
  }, [])
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default Test