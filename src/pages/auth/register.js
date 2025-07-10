import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../components/config/config";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
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
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, formData);
      setMessage(res.data.message);
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-white"
      style={{ backgroundImage: "url('/wave15.svg')" }} // Place your image in public/background.jpg
    >
      <div className="absolute inset-0 bg-black opacity-5 z-0"></div>
      <div className="flex bg-white  shadow-lg border-black rounded-xl p-0 w-full max-w-5xl z-10">
        {/* Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-1/2 p-8 border-r border-gray-200 rounded-l-xl"
          style={{
            backgroundImage: "url('/backgroundd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src="/Optichain Logo.png" alt="Logo" className="w-32 h-32 object-contain mb-4" /> */}
        </div>
        {/* Form Section */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-lg p-8 border-black border-top"
        >
          {/* Name */}
          <h1 className="text-3xl font-bold mb-2 justify-center flex">
            <span className="text-black">Welcome to </span>
            <span className="text-red-700 ml-2">Optichain</span>
          </h1>
          <p className="text-xl font-bold text-black mb-4 justify-center flex">
            Sign Up
          </p>
          {message && (
            <div className="mb-4 text-center text-sm text-red-600">
              {message}
            </div>
          )}

          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-3xl font-semibold"
          >
            Register
          </button>

          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-red-700 hover:underline font-medium"
            >
              <span className="text-black">Already have an account? </span>
              <span className="text-red-700">Click Here</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
