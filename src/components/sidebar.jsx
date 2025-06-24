import React, { useEffect, useRef, useState } from "react";
import {
  MdDashboard,
  MdInventory,
  MdAttachMoney,
  MdShoppingCart,
  MdReport,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { panelActions, sidebarConfig } from "./config/config";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    if (menu !== activePanel) {
      setActivePanel(menu);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActivePanel(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="flex">
      {/* Sidebar */}
      <nav className="space-y-1 bg-gray-200 font-roboto min-h-screen w-56 h-full z-20">
        <div className="flex justify-center items-center">
          <NavLink to="/home">
            <img
              src="/OCSI Logo.png"
              alt="Logo"
              className="w-32 h-24 object-contain"
            />
          </NavLink>
        </div>
        <div className="flex-grow flex flex-col justify-center space-y-1 px-2">
          {sidebarConfig.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => handleMenuClick(item.label)}
              active={activePanel === item.label}
            />
          ))}
        </div>
      </nav>

      {/* Right Panel */}
      {/* Right Panel */}
      {activePanel && (
        <div className="ml-[14em] flex-grow bg-white p-6 h-screen overflow-y-auto w-[32em] fixed z-50 border-r-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{activePanel}</h2>
          </div>
          <div className="space-x-2 mb-6 ">
            {(panelActions[activePanel] || []).map((action) => (
              <button
                key={action.label}
                onClick={() => {
                  navigate(action.path);
                  setActivePanel(null);
                }}
                className="bg-yellow-600 text-white px-3 py-3 text-sm rounded hover:bg-yellow-700 "
              >
                {action.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(
              sidebarConfig.find((item) => item.label === activePanel)
                ?.submenu || {}
            ).map(([section, items]) => (
              <div key={section}>
                <h3 className="font-bold text-gray-700 text-lg mb-2">
                  {section}
                </h3>
                <ul className="space-y-4">
                  {items.map(({ label, path }) => (
                    <li key={label}>
                      <Link
                        onClick={() => setActivePanel(null)}
                        to={path}
                        className="text-yellow-600 hover:underline text-md block"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-2 rounded-lg text-gray-700  ${
      active ? "bg-white " : ""
    }`}
  >
    <span className="mr-3 text-xl">{icon}</span>
    {label}
  </button>
);

export default Sidebar;
