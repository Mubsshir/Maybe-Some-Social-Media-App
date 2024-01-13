const API_BASE_URL = "http://192.168.29.249:3001";

export const login = async (username, pass) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, pass: pass }),
    });
    if (res.ok) {
      const result = await res.json();
      localStorage.removeItem('token')
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
    let token = localStorage.getItem("token");
    token=JSON.parse(token)
    if (token) {
      const res = await fetch(`${API_BASE_URL}/api/isAuth`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      let result=await res.json();
      if (!res.ok) {
        console.log("You are not UnAuthorized");
        console.log(result)
        return false;
      }
      return true;
    }
    console.log("No token found")
    return false;
  } catch (err) {
    console.log("Error :" + err);
    return false;
  }
};
