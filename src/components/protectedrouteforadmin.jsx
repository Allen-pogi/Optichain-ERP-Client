// AdminProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin" || user?.isAdmin;

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
