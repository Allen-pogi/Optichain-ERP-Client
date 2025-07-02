import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../components/config/config";
import { useFavorites } from "../../contexts/FavoritesContext";
import LoadingSpinner from "../../components/loading/loading-spinner";

const Login = () => {
  const { fetchFavorites } = useFavorites();
  const navigate = useNavigate(); // <-- initialize navigate
  const [loading, setLoading] = useState(false); // 👈 add loading state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 start loading
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setMessage(`Welcome, ${user.firstname}!`);
      await fetchFavorites();
      navigate("/home/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-white relative"
      style={{ backgroundImage: "url('/backgcool2.svg')" }}
    >
      {/* 🔄 Show loading spinner while submitting */}
      {loading && <LoadingSpinner />}

      {/* Overlay for background tint */}
      <div className="absolute inset-0 bg-black opacity-5 z-0"></div>

      <div className="flex bg-white shadow-lg border-black rounded-xl p-0 w-full max-w-5xl z-10">
        {/* Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-1/2 p-8 border-r border-gray-200 rounded-l-xl"
          style={{
            backgroundImage: "url('/background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 w-full max-w-lg p-8 border-black border-top"
        >
          {/* Heading */}
          <h1 className="text-3xl font-bold text-red-700 mb-2 justify-center flex">
            <span className="text-black">Welcome to</span>
            <span className="text-red-700 ml-2">Optichain</span>
          </h1>
          <p className="text-xl font-bold text-black mb-4 justify-center flex">
            Log In
          </p>

          {/* Message */}
          {message && (
            <div className="mb-4 text-center text-sm text-red-600">
              {message}
            </div>
          )}

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-red-700 text-white py-2 rounded-3xl font-semibold ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <Link to="/" className="text-red-700 hover:underline font-medium">
              <span className="text-black">Don't have an account? </span>
              <span className="text-red-700">Click Here</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
