import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../components/config/config";

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
    <div className="container mx-auto p-6">
      <header className="mb-8 flex items-center px-32">
        <h1 className="text-3xl font-semibold text-gray-800 ">
          Admin Panel for
        </h1>
        <img
          src="/OCSI Logo.png"
          alt="Logo"
          className="w-32 h-24 object-contain"
        />
      </header>

      <div className="flex justify-center">
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-lg w-[80em] bg-white">
          <table className="min-w-full divide-y divide-gray-200">
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

      <div className="mt-6 flex justify-end">
        {/* <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="material-icons-outlined mr-2 -ml-1">add</span>
          Add User
        </button> */}
      </div>
    </div>
  );
};

export default AdminPanel;
