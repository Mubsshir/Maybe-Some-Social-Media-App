const API_BASE_URL = "http://192.168.29.249:3001";
let token = localStorage.getItem("token");
token = JSON.parse(token);
const headers = {
  authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const login = async (username, pass) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, pass: pass }),
    });
    if (res.ok) {
      const result = await res.json();
      localStorage.removeItem("token");
      localStorage.setItem("token", JSON.stringify(result.AuthToken));
      return true;
    }
    return false;
  } catch (err) {
    console.log("Error :" + err);
    return { message: "fail" };
  }
};

export const isAuthenticate = async () => {
  try {
    if (token) {
      const res = await fetch(`${API_BASE_URL}/api/isAuth`, {
        method: "POST",
        headers:headers
      });
      let result = await res.json();
      if (!res.ok) {
        console.log("You are not UnAuthorized");
        console.log(result);
        return false;
      }
      return true;
    }
    console.log("No token found");
    return false;
  } catch (err) {
    console.log("Error :" + err);
    return false;
  }
};

export const getFeeds=async()=>{
  try{
    const res=await fetch(`${API_BASE_URL}/feeds`,{
      method:'GET',
      headers:headers
    })
    if(res.ok){
      const data=await res.json();
      return data;
    }
    return null;
  }
  catch(err){
    console.log(err)
    return null
  }
}