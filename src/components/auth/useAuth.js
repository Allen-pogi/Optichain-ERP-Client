import { useEffect, useState } from "react";
import api, { setAccessToken } from "../axiosInstance";

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setAccessToken(token); // ✅ Inject token to api instance

    api
      .get("/auth/user")
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error("Error fetching user:", err.message);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  }, []);

  return user;
};

export default useAuth;
