import React from "react";
import { Link } from "react-router-dom";

const Adminsidebar = () => {
  return (
    <aside className="w-80 bg-white shadow-lg flex flex-col min-h-screen">
      {/* Logo */}
      <div className=" border-b border-gray-200 ">
        <img src="/OCSI Logo.png" alt="Logo" className="h-20 mx-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-4 space-y-2">
        <Link
          to="/admin"
          className="flex items-center p-3 rounded-lg text-gray-700 sidebar-item"
        >
          <span className="material-icons mr-3">admin_panel_settings</span>
          <span>User Management</span>
        </Link>
        <Link
          to="/admin"
          className="flex items-center p-3 rounded-lg text-gray-700 sidebar-item"
        >
          <span className="material-icons mr-3">inventory_2</span>
          <span>Inventory</span>
        </Link>
        <Link
          to="/admin "
          className="flex items-center p-3 rounded-lg text-gray-700 sidebar-item"
        >
          <span className="material-icons mr-3">assessment</span>
          <span>Reports</span>
        </Link>
        <Link
          to="/admin"
          className="flex items-center p-3 rounded-lg text-gray-700 sidebar-item"
        >
          <span className="material-icons mr-3">admin_panel_settings</span>
          <span>Settings</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center p-3 rounded-lg text-gray-700 sidebar-item"
        >
          <span className="material-icons mr-3">logout</span>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Adminsidebar;
