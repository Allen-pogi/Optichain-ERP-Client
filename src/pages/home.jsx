import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const Home = () => {
  const location = useLocation();
  const user = useAuth(); // 👈 single-line

  const isHomeRoot = location.pathname === "/home";

  return (
    <div
      className="flex h-screen overflow-hidden flex-col bg-white overflow-x-hidden min-h-screen relative z-0"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-center">
          <Sidebar user={user} />
          <div className="flex flex-col min-w-[82em] flex-1">
            {isHomeRoot && (
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold mb-2">
                  Welcome, {user?.firstname || "User"}!
                </h2>
                <p className="text-gray-600 text-lg">
                  Select a menu item on the left to get started.
                </p>
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
