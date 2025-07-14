// src/api/axiosInstance.js
import axios from "axios";
import { API_BASE_URL } from "./config/config";

const api = axios.create({
  baseURL: API_BASE_URL, // ✅ Update if needed
  withCredentials: true, // 🔐 Send refresh token cookies
});

// Set access token manually
let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Add interceptor to handle token expiration
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      console.warn("🔁 Access token expired. Attempting refresh...");
      originalRequest._retry = true;

      try {
        const res = await axios.get(`${API_BASE_URL}/auth/refresh-token`, {
          withCredentials: true,
        });

        const newToken = res.data.token;
        setAccessToken(newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        console.log("✅ Access token refreshed!");
        return api(originalRequest);
      } catch (refreshErr) {
        if (refreshErr.response?.status === 403) {
          // 💬 Dispatch a logout with dialog — wait for SessionTimeoutHandler to mount
          console.log(
            "❌ Refresh token failed. Logging out and showing dialog..."
          );
          setTimeout(() => {
            console.log("🧠 Dispatching forceLogoutDueToInactivity...");
            window.dispatchEvent(new CustomEvent("forceLogoutDueToInactivity"));
          }, 0);
        }
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
