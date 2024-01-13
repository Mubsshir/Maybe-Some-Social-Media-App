

const API_BASE_URL = "http://localhost:3000";

export const login = async (username, pass) => {
  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, pass: pass }),
    });
    if (res.ok) {
      const result = await res.json();
      document.cookie = `token=${result.AuthToken};  secure;`;
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
    const token = document.cookie.split("=")[1];
    const res = await fetch(`${API_BASE_URL}/api/isAuth`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("You are not UnAuthorized");
      return false;
    }
    return true;
  } catch (err) {
    console.log("Error :" + err);
    return false;
  }
};

