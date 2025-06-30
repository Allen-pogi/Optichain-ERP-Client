import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../components/config/config";
import Adminsidebar from "../../components/admin-sidebar";
import Header from "../../components/header";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedRoles, setEditedRoles] = useState({});

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_BASE_URL}/auth/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load users", err);
    }
  };

  const handleRoleChange = (userId, newRole) => {
    setEditedRoles((prev) => ({
      ...prev,
      [userId]: newRole,
    }));
  };

  const saveRole = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const newRole = editedRoles[userId];
      await axios.put(
        `${API_BASE_URL}/auth/users/${userId}/role`,
        { role: newRole },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditedRoles((prev) => {
        const updated = { ...prev };
        delete updated[userId];
        return updated;
      });
      fetchUsers(); // reload users
    } catch (err) {
      console.error("Error updating role", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  const getRoleBadgeColor = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "viewer":
        return "bg-blue-100 text-blue-800";
      case "finance":
        return "bg-yellow-100 text-yellow-800";
      case "inventory":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex overflow-hidden h-screen">
      <Adminsidebar />

      <div className=" flex-1 ">
        <header class="bg-white border-l p-6 flex justify-between items-center  h-[81px] border-b">
          <h1 class="text-2xl font-semibold text-gray-800">Admin Panel</h1>
          <div class="flex items-center space-x-4">
            <button class="relative text-gray-600 hover:text-gray-800">
              <span class="material-icons">notifications</span>
              <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div class="flex items-center">
              <img
                alt="User Avatar"
                class="w-10 h-10 rounded-full mr-2 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgK414tzWeAcv5YHbYBxJsZs5RR9eqdCUcWs_jegQYwzRanfr_CobBo3vqcMququDCc-xQLyDG5xBZjd6DIWmrGrND5m9DiVQyozWIagBw3PSE8Q5GA6e4n-Q7luy5J1-sLt5f7t1DJDtF8qUnz2wIEuhbogCX4B02bXko7jVPWsbZIdh925bhueiwPILeIkVaDsQnDaOc8zJbruMmlTVyk8FeFhNMChyJjkR7yrIO8UXcG8XytyYHpfR5sSQxE6BMGWEAL48h"
              />
              <div>
                <p class="text-sm font-medium text-gray-700">Admin User</p>
                <p class="text-xs text-gray-500">admin@example.com</p>
              </div>
            </div>
          </div>
        </header>
        <div className=" justify-center p-4 bg-gray-100  overflow-y-auto h-screen">
          <div className="border border-gray-200 rounded-lg shadow-lg w-full bg-white">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50  ">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium  text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => {
                  const currentEditedRole = editedRoles[user._id] ?? user.role;

                  return (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.firstname} {user.lastname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
                            user.role || ""
                          )}`}
                        >
                          {user.role || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="relative w-full">
                            <select
                              value={currentEditedRole}
                              onChange={(e) =>
                                handleRoleChange(user._id, e.target.value)
                              }
                              className="block w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="viewer">Viewer</option>
                              <option value="admin">Admin</option>
                              <option value="finance">Finance</option>
                              <option value="inventory">Inventory</option>
                              <option value="purchaser">Purchaser</option>
                              <option value="accounting">Accounting</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <span className="material-icons text-sm">
                                expand_more
                              </span>
                            </div>
                          </div>

                          {editedRoles[user._id] &&
                            editedRoles[user._id] !== user.role && (
                              <button
                                onClick={() => saveRole(user._id)}
                                className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition text-sm"
                              >
                                Save
                              </button>
                            )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
