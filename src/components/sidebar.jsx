import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarItems } from './config/config';



const Sidebar = () => { 
      const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login"; // or use navigate("/login")
  };


    return (
    
  <div className="flex flex-col w-48">
    <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 border p-4">
      
          <div className="flex flex-col">
            <div className='flex justify-center items-center'>
  <NavLink to="/home">
    <img src="/OCSI Logo.webp" alt="Logo" className="w-32 h-24 object-contain" />
  </NavLink>
            </div>
       
          <div className="flex flex-col gap-2">
            {sidebarItems.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                      isActive ? "bg-[#e7edf4]" : ""
                    }`
                  }
                >
                  <div className="text-[#0d141c]">{item.icon}</div>
                  <p className="text-[#0d141c] text-sm font-medium leading-normal">{item.label}</p>
                </NavLink>
              ) : (
                <button
                  key={item.label}
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition text-[#0d141c] hover:bg-[#e7edf4]"
                  style={{ background: "none", border: "none" }}
                >
                  <div>{item.icon}</div>
                  <p className="text-sm font-medium leading-normal">{item.label}</p>
                </button>
              )
            )}
          </div>
        </div>
      <div className="flex flex-col gap-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">New</span>
        </button>
        <div className="flex flex-col gap-1">
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-[#e7edf4]" : ""
              }`
            }
          >
            <div className="text-[#0d141c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#0d141c] text-sm font-medium leading-normal">Help and Docs</p>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
)
};

export default Sidebar;