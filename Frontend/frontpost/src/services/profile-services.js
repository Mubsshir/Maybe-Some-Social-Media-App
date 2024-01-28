import Cookies from "js-cookie";

//if internet is off then  instead of ip address use localhost
const API_BASE_URL = "http://localhost:3001";

function getHeaders() {
  let token = Cookies.get("token");
  if (!token) {
    return null;
  }
  const headers = {
    authorization: `Bearer ${token}`,
  };
  return headers;
}



export const postPicture = async (content) => {
  const head = getHeaders();
  if (head) {
    try {
      const res = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        headers:head,
        body: content
      }); 
      if (res.ok) {
        return await res.json();
      } else {
        return false;
      }
    } catch (err) {
      console.log("Error while sending post : ", err);
    }
  } else {
    return false;
  }
};