import React from "react";
import { BiEdit, BiPlus, BiRefresh, BiTrash } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Header from "../../components/header";

const requests = [
  {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
    description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
    notes: true,
  },

    {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
    description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },
  
    {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },

      {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
    notes:true,
  },

      {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
    notes: true,

  },

      {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },
  
      {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
    notes: true,
  },
        {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },
        {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },
        {
    ref: "RQ00009777",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
       description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
  },
  // ...add other request objects here, following the same structure
];

const Request = () => {
  return (
    <div className="bg-white min-h-screen  font-roboto">
      <div className="container mx-auto     ">
        {/* Header */}
        <Header />
        <header className="flex justify-between items-center pb-4 border-b border-gray-300">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">

            <div className="flex">
               <h1 className="text-2xl font-semibold text-gray-800">Requests</h1>
                 <button className="ml-2 text-gray-500 hover:text-gray-700">
              <span className="material-icons">star_border</span>
            </button>
            </div>
           
         
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800 p-2 rounded-md hover:bg-gray-200">
              TOOLS
              <span className="material-icons align-middle text-sm">arrow_drop_down</span>
            </button>
          </div>
        </header>

        {/* Card */}
        <div className="bg-white shadow-md rounded-lg mt-4">
          {/* Card Header */}
          <div className="flex justify-between items-center px-6  border-b border-gray-200 bg-white text-white">
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                <BiRefresh className="inline-block text-2xl" />
              </button>
              <Link to="/home/create_request" className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
              <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                <BiPlus className="inline-block text-2xl" />
              </button>
              </Link>
              <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                <BiEdit className="inline-block text-2xl" />
              </button>
              <div className="border-l h-6 border-blue-400 mx-1"></div>
              <button className="p-2 rounded-full hover:bg-red-600 hover:text-white focus:outline-none text-black">
                <BiTrash className="inline-block text-2xl" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex space-x-4">
              <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2 px-1 focus:outline-none">
                ALL RECORDS
              </button>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2 px-1 focus:outline-none">
                MY REQUESTS
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="px-6  flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div>
                <label className="text-sm text-gray-600 mr-1" htmlFor="status-filter">Status:</label>
                <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" id="status-filter">
                  <option>All</option>
                  <option>Open</option>
                  <option>Pending Approval</option>
                  <option>Closed</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mr-1" htmlFor="priority-filter">Priority:</label>
                <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" id="priority-filter">
                  <option>All</option>
                  <option>High</option>
                  <option>Normal</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mr-1" htmlFor="date-filter">Date:</label>
                <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" id="date-filter">
                  <option>All</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mr-1" htmlFor="requested-by-filter">Requested By:</label>
                <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" id="requested-by-filter">
                  <option>All</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span className="material-icons">filter_list</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span className="material-icons">more_vert</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                    <input className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded" type="checkbox" />
                  </th>
                  <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8"></th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ref. Nbr.</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Class</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested By</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-4 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ext. Cost</th>
                  <th className="px-4 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example static rows, map your data here */}
                {requests.map((req, idx) => (
                  <tr key={req.ref} className="hover:bg-gray-50">
                    <td className="px-3  whitespace-nowrap">
                      <span className="material-icons text-gray-400 text-base">{req.statusIcon}</span>
                    </td>
                    <td className="px-3  whitespace-nowrap">
                      <span className={`material-icons ${req.notes === true? "text-yellow-500" : "text-gray-400"} text-base`}>{req.icon}</span>
                    </td>   
                    <td className="px-4 py- whitespace-nowrap text-sm text-blue-600 font-medium">{req.ref}</td>
                    <td className="px-4  whitespace-nowrap text-sm text-gray-700">{req.status}</td>
                    <td className="px-4 whitespace-nowrap text-sm text-gray-700">{req.priority}</td>
                    <td className="px-4  whitespace-nowrap text-sm text-gray-700">{req.date}</td>
                    <td className="px-4 whitespace-nowrap text-sm text-gray-700">{req.requestClass}</td>
                    <td className="px-4  whitespace-nowrap text-sm text-gray-700">{req.requestedBy}</td>
                    <td className="px-4  whitespace-nowrap text-sm text-gray-700">{req.location}</td>
                    <td className="px-4  whitespace-nowrap text-sm text-gray-700">{req.department}</td>
                   <td className="px-4  whitespace-nowrap text-sm text-gray-700 max-w-[200px] overflow-hidden text-ellipsis" title={req.description} style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>

  {req.description}
</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">{req.extCost}</td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{req.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-600">
              1-14 of 9711 records
            </div>
            <div className="flex items-center space-x-1">
              <button className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50" disabled>
                <span className="material-icons">first_page</span>
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50" disabled>
                <span className="material-icons">chevron_left</span>
              </button>
              <input className="w-10 text-center border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" value="1" readOnly />
              <span className="text-sm text-gray-600">of 694 pages</span>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <span className="material-icons">chevron_right</span>
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700">
                <span className="material-icons">last_page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;