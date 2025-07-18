import React from "react";
import StatCard from "../components/statcard";
import QuickButton from "../components/quickbutton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UpdateIcon from "@mui/icons-material/Update";
import WarningIcon from "@mui/icons-material/Warning";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const activities = [
  { activity: "New order placed", date: "2024-07-26", user: "Alice" },
  { activity: "Inventory updated", date: "2024-07-25", user: "Bob" },
  { activity: "Customer added", date: "2024-07-24", user: "Charlie" },
  { activity: "Report generated", date: "2024-07-23", user: "David" },
  { activity: "Settings changed", date: "2024-07-22", user: "Eve" },
];

const Dashboard = () => {
  return (
    <main className=" flex-1 p-8 h-screen overflow-y-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to Optichain Solutions ERP
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your warehouse equipment, MHE, racking systems, and more.
        </p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Total Inventory */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <span className="material-icons-outlined text-blue-500 text-3xl mr-3">
              <InventoryIcon />
            </span>
            <h2 className="text-xl font-semibold text-gray-700">
              Total Inventory Items
            </h2>
          </div>
          <p className="text-4xl font-bold text-gray-800">1,250</p>
          <p className="text-sm text-green-500 mt-1">+50 since last week</p>
        </div>

        {/* Active Shipments */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <span className="material-icons-outlined text-green-500 text-3xl mr-3">
              <LocalShippingIcon />
            </span>
            <h2 className="text-xl font-semibold text-gray-700">
              Active Shipments
            </h2>
          </div>
          <p className="text-4xl font-bold text-gray-800">78</p>
          <p className="text-sm text-gray-500 mt-1">View details</p>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <span className="material-icons-outlined text-red-500 text-3xl mr-3">
              <WarningIcon />
            </span>
            <h2 className="text-xl font-semibold text-gray-700">
              Low Stock Alerts
            </h2>
          </div>
          <p className="text-4xl font-bold text-gray-800">12</p>
          <p className="text-sm text-red-500 mt-1">Action required</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-150">
              <span className="material-icons-outlined mr-2">
                <AddCircleOutlineIcon />
              </span>
              Add New Product
            </button>
            <button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-150">
              <span className="material-icons-outlined mr-2">
                <ReceiptLongIcon />
              </span>
              Create Sales Order
            </button>
            <button className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition duration-150">
              <span className="material-icons-outlined mr-2">
                <QrCode2Icon />
              </span>
              Scan Barcode
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-3">
                <CheckCircleOutlineIcon />
              </span>
              <div>
                <p className="text-gray-800">Order #SO-2024-00125 shipped.</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-3">
                <AddShoppingCartIcon />
              </span>
              <div>
                <p className="text-gray-800">
                  New purchase order PO-2024-0087 created for Racking System
                  Model X.
                </p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-3">
                <PersonAddIcon />
              </span>
              <div>
                <p className="text-gray-800">
                  New user 'John Doe' added to the system.
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-3">
                <UpdateIcon />
              </span>
              <div>
                <p className="text-gray-800">
                  Forklift FL-003 maintenance scheduled.
                </p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Product Categories Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="material-icons-outlined text-4xl text-blue-500 mb-2">
              <WarehouseIcon />
            </span>
            <h3 className="font-medium text-gray-700">Warehouse Equipment</h3>
            <p className="text-sm text-gray-500">
              Forklifts, Pallet Jacks, etc.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="material-icons-outlined text-4xl text-green-500 mb-2">
              <PrecisionManufacturingIcon />
            </span>
            <h3 className="font-medium text-gray-700">
              MHE (Material Handling)
            </h3>
            <p className="text-sm text-gray-500">Conveyors, Cranes, etc.</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="material-icons-outlined text-4xl text-yellow-500 mb-2">
              <ViewModuleIcon />
            </span>
            <h3 className="font-medium text-gray-700">Racking Systems</h3>
            <p className="text-sm text-gray-500">Selective, Drive-in, etc.</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="material-icons-outlined text-4xl text-purple-500 mb-2">
              <BuildCircleIcon />
            </span>
            <h3 className="font-medium text-gray-700">Spare Parts</h3>
            <p className="text-sm text-gray-500">For all equipment types</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Optichain Solutions Inc. All rights reserved.
      </footer>
    </main>
  );
};

export default Dashboard;
