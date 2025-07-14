import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "lsp@optichainsolutions.com" && password === "optichain") {
      localStorage.setItem("admin-auth", "true"); // ✅ store login state
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <img
              alt="Company Logo"
              className="h-12"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnzOw26kv2w-GINpAboZvdBKVImuzP32-8mxeL-mnpfwQeZxKthH3HjtaNaSQ3BJ9U9Ccrfpho7psEVvJLgla8VrG1-vy5EsMvfsSi23-1H69ZUotyp1_6RXSC_2c5Kbgaj_QF-LHb2YiwvY7fhb_zRR0v2rUnvWRDnD5dWywB3VM342tnQrdFWEz1SwykHyQbKxGUSyQR4pNf_TWG0aZm71bSLUufpOZTvpgUaObJa6Upa9VX0H9gQDGMzbS6Ee9kOQu7bxH_KQI"
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Admin Login
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your credentials to access the admin panel.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="admin@example.com"
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
