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
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "./auth/useAuth";
import { useFavorites } from "../contexts/FavoritesContext";
import { FaStar, FaRegStar } from "react-icons/fa"; // for star icons

const Sidebar = () => {
  const user = useAuth();
  const role = user?.role || "guest"; // Default to guest if no user
  const [activePanel, setActivePanel] = useState(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const handleMenuClick = (menu) => {
    if (menu !== activePanel) {
      setActivePanel(menu);
    }
  };

  const isFavorited = (path) => favorites.some((fav) => fav.path === path);

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
      <nav className="space-y-1 bg-gray-100 font-roboto min-h-screen w-16 md:w-32 text-[10px] lg:w-56 sm:text-[2px] md:text-base h-full z-20 border ">
        <div className="flex justify-center items-center ">
          <NavLink to="/home/dashboard">
            <img
              src="/OCSI Logo.png"
              alt="Logo"
              className="w-16 h-16 lg:w-32 lg:h-24 object-contain"
            />
          </NavLink>
        </div>
        <div className="flex-grow flex flex-col justify-center space-y-1 px-2  ">
          {/* --- Favorites Tab --- */}
          <SidebarItem
            key="Favorites"
            icon={<FaStar />}
            label="Favorites"
            onClick={() => handleMenuClick("Favorites")}
            active={activePanel === "Favorites"}
            isFavorite={false}
          />

          {/* --- Other Tabs from Config --- */}
          {sidebarConfig
            .filter((item) => item.roles.includes(role))
            .map((item) => {
              if (item.direct) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `w-full flex flex-col lg:flex-row items-center px-4 py-2 rounded-lg text-gray-700 ${
                        isActive ? "bg-red-100" : ""
                      }`
                    }
                  >
                    <span className="lg:mr-3 text-xl">{item.icon}</span>
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <SidebarItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => handleMenuClick(item.label)}
                  active={activePanel === item.label}
                  isFavorite={false}
                />
              );
            })}
        </div>
      </nav>

      {/* Right Panel */}
      {activePanel && (
        <div className="md:ml-[8em] lg:ml-[14em] ml-[4em] flex-grow border bg-white p-6 h-screen overflow-y-auto w-[16em] md:w-[56em] fixed z-50 border-r-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {activePanel === "Favorites" ? "⭐ Favorites" : activePanel}
            </h2>
          </div>

          {activePanel === "Favorites" ? (
            // --- Favorites Panel ---
            Object.entries(
              favorites.reduce((acc, fav) => {
                if (!acc[fav.panel]) acc[fav.panel] = [];
                acc[fav.panel].push(fav);
                return acc;
              }, {})
            ).map(([panel, favs]) => (
              <div key={panel} className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">📂 {panel}</h3>
                <ul className="space-y-3 pl-4">
                  {favs.map((fav) => (
                    <li
                      key={fav.path}
                      className="flex justify-between items-center"
                    >
                      <Link
                        to={fav.path}
                        onClick={() => setActivePanel(null)}
                        className="text-yellow-700 hover:underline"
                      >
                        {fav.label}
                      </Link>
                      <button
                        onClick={() =>
                          toggleFavorite(fav.path, fav.label, fav.panel)
                        }
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <FaStar />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            // --- Normal Panel ---
            <>
              <div className="space-x-2 space-y-2 mb-6">
                {(panelActions[activePanel] || []).map((action) => (
                  <button
                    key={action.label}
                    onClick={() => {
                      navigate(action.path);
                      setActivePanel(null);
                    }}
                    className="bg-yellow-600 text-white md:px-3 md:py-3 px-1 py-1 text-sm rounded hover:bg-yellow-700"
                  >
                    {action.label}
                  </button>
                ))}
              </div>

              {(() => {
                const submenu = sidebarConfig.find(
                  (item) => item.label === activePanel
                )?.submenu;
                if (!submenu) return null;

                const entries = Object.entries(submenu);
                const chunkSize = Math.ceil(entries.length / 3);
                const col1 = entries.slice(0, chunkSize);
                const col2 = entries.slice(chunkSize, chunkSize * 2);
                const col3 = entries.slice(chunkSize * 2);

                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[col1, col2, col3].map((column, colIndex) => (
                      <div key={colIndex} className="space-y-6">
                        {column.map(([section, items]) => (
                          <div key={section}>
                            <h3 className="font-bold text-gray-700 text-lg mb-2">
                              {section}
                            </h3>
                            <ul className="space-y-2">
                              {items
                                .filter((entry) => entry.roles.includes(role))
                                .map(({ label, path, panel }) => {
                                  const isFavorite = favorites.some(
                                    (fav) => fav.path === path
                                  );
                                  return (
                                    <li
                                      key={label}
                                      className="flex justify- items-center"
                                    >
                                      <button
                                        onClick={() =>
                                          toggleFavorite(
                                            path,
                                            label,
                                            activePanel
                                          )
                                        }
                                        className="text-red-500 hover:text-red-800 mr-2"
                                      >
                                        {isFavorite ? (
                                          <FaStar />
                                        ) : (
                                          <FaRegStar />
                                        )}
                                      </button>
                                      <Link
                                        onClick={() => setActivePanel(null)}
                                        to={path}
                                        className="text-red-800 hover:underline text-md"
                                      >
                                        {label}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </>
          )}
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-full flex flex-col lg:flex-row items-center px-4 py-2 rounded-lg text-gray-700 ${
      active ? "bg-red-100" : ""
    }`}
  >
    <span className="lg:mr-3 text-xl">{icon}</span>
    {label}
  </button>
);

export default Sidebar;
