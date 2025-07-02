import React, { useState } from "react";
import RealtimeClock from "./clock";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white shadow-md">
      {/* Topbar (mobile) */}
      <div className="flex items-center gap-40 md:gap-[34em]  px-4 py-2 lg:hidden">
        <div className="flex items-center space-x-2 w-24 border">
          <input
            type="text"
            className="bg-red-800 text-white placeholder-gray-200 rounded-md py-1 px-3 w-full"
            placeholder="Search..."
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-red-700"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Dropdown content (mobile) */}
      {menuOpen && (
        <div className="lg:hidden bg-red-700 pb-3 w-[259x] absolute top-[3.5rem] right-0  z-50 shadow-md">
          <div className="border">
            <button className="p-4 rounded-full hover:bg-red-600 flex items-center">
              <span className="material-icons mr-2 ">help_outline</span>
              <span>Help</span>
            </button>
          </div>

          <div className="font-semibold text-sm border w-full p-4  flex items-center">
            <span class=" mr-2 ">
              <ApartmentOutlinedIcon />
            </span>
            <span> Prime Sales Inc. - MANILA</span>
          </div>
          <div className="text-sm border p-4 w-full">
            <span class=" mr-2 ">
              <CalendarMonthOutlinedIcon />
            </span>
            <RealtimeClock />
          </div>

          <div className="flex items-center border p-4">
            <span className=" mr-2  ">
              <AccountCircleOutlinedIcon />
            </span>
            <div className="font-semibold">Allen Paul Rebolla</div>
            {/* <div>PSI Go Live</div> */}
          </div>
          <div className="flex items-center space-x-3  justify-end ">
            <button className="p-2 rounded-full hover:bg-red-600 ">
              <span className="flex justify-end">
                <LogoutOutlinedIcon />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Desktop header */}
      <div className="hidden lg:flex  px-4 py-2 items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-red-700">
            <span className="material-icons">menu</span>
          </button>
          <div className="relative">
            <input
              className="bg-red-800 text-white placeholder-gray-200 rounded-md py-1.5 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
              placeholder="Search..."
              type="text"
            />
            <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
              search
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right text-sm">
            <div className="font-semibold">Prime Sales Inc. - MANILA</div>
            <RealtimeClock />
          </div>
          <button className="p-2 rounded-full hover:bg-red-700">
            <span className="material-icons">help_outline</span>
          </button>
          <button className="p-2 rounded-full hover:bg-red-700">
            <span className="material-icons">notifications</span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <span className="material-icons text-lg">person</span>
            </div>
            <div>
              <div className="font-semibold">Allen Paul Rebolla</div>
              <div>PSI Go Live</div>
            </div>
            <button className="p-1 rounded-md hover:bg-red-700">
              <span className="material-icons text-sm">expand_more</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
