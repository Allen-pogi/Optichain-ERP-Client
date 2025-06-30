// contexts/FavoritesContext.js
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import useAuth from "../components/auth/useAuth";
import { API_BASE_URL } from "../components/config/config";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const user = useAuth();
  const [favorites, setFavorites] = useState([]);

  const token = localStorage.getItem("token");

  const fetchFavorites = async () => {
    const token = localStorage.getItem("token"); // 🔥 get it directly
    if (!token) {
      console.warn("⛔ No token found. Skipping fetchFavorites.");
      return;
    }

    console.log("📡 Fetching favorites for user:", user);

    try {
      const res = await axios.get(`${API_BASE_URL}/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("✅ Fetched favorites:", res.data);
      setFavorites(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch favorites", err);
    }
  };

  useEffect(() => {
    console.log("🔄 useEffect triggered. user?.token:", user?.token);
    fetchFavorites();
  }, [user?.token]);

  const toggleFavorite = async (path, label, panel) => {
    const token = localStorage.getItem("token"); // 🔥 get it directly

    if (!token) {
      console.warn("No token found in localStorage. Skipping toggleFavorite.");
      return;
    }

    try {
      const res = await axios.post(
        `${API_BASE_URL}/favorites/toggle`,
        { path, label, panel },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.status === "added") {
        setFavorites([...favorites, res.data.favorite]);
      } else {
        setFavorites(favorites.filter((fav) => fav.path !== path));
      }
    } catch (err) {
      console.error("Failed to toggle favorite", err);
    }
  };

  // Fetch favorites on mount and when user changes
  useEffect(() => {
    fetchFavorites();
  }, [user?.token]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
