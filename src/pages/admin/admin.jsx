import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../components/config/config";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedRoles, setEditedRoles] = useState({}); // <-- New state

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5001/api/auth/users", {
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
      // Clean up the edited state
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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Admin Panel - User Management
      </h2>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Current Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const currentEditedRole = editedRoles[user._id] ?? user.role;

            return (
              <tr key={user._id}>
                <td className="border px-4 py-2">
                  {user.firstname} {user.lastname}
                </td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.role || "N/A"}</td>
                <td className="border px-4 py-2 flex gap-2 items-center">
                  <select
                    value={currentEditedRole}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="border rounded p-1"
                  >
                    <option value="admin">Admin</option>
                    <option value="finance">Finance</option>
                    <option value="inventory">Inventory</option>
                    <option value="purchaser">Purchaser</option>
                    <option value="viewer">Viewer</option>
                    <option value="accounting">Accounting</option>
                  </select>
                  {editedRoles[user._id] &&
                    editedRoles[user._id] !== user.role && (
                      <button
                        onClick={() => saveRole(user._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
