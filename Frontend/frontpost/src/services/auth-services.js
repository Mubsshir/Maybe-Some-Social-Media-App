import Cookies from "js-cookie";

const API_BASE_URL = "http://192.168.29.249:3001";

function getHeaders() {
  let token = Cookies.get("token");
  if (!token) {
    return null;
  }
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return headers;
}

export const getAuthStatus = async () => {
  const head = getHeaders();
  if (head) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/isAuth`, {
        method: "POST",
        headers: head,
      });
      if (res.ok) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return false;
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
      Cookies.remove("token");
      Cookies.set("token", result.AuthToken);
      return true;
    }
    return false;
  } catch (err) {
    console.log("Error :" + err);
    return { message: "fail" };
  }
};

export const getFeeds = async () => {
  const head = getHeaders();
  if (head) {
    try {
      const res = await fetch(`${API_BASE_URL}/feeds`, {
        method: "GET",
        headers: head,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  return null;
};

export const getUserInfo = async () => {
  const head = getHeaders();
  if (head) {
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: "GET",
        headers: head,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  return null;
};


export const sharePost= async(content)=>{
  const head=getHeaders();
  if(head){
    try{
      const res=await fetch(`${API_BASE_URL}/feed`,{
        method:'PUT',
        headers:head,
        body:JSON.stringify({content:content})
      });
      if(res.ok){
        return true;
      }else{
        return false;
      }
    }catch(err){
      console.log("Error while sending post : ",err);
    }
  }else{
    return true;
  }
}