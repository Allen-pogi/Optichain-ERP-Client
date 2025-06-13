import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet, useLocation } from "react-router-dom";



const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();

  // Show this only on /home (not on nested routes like /home/dashboard)
  const isHomeRoot = location.pathname === "/home";

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">
        <div className=" flex flex-1 justify-center ">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <div className="flex flex-col min-w-[82em] max-w-[em] flex-1">
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

