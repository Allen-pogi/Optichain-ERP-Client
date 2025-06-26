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
        <div className="flex justify-start">
          <Sidebar user={user} />
          <div className="w-full justify-start flex overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
