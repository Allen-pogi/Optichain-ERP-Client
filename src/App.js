import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./screen/dashboard";
import Inventory from "./screen/inventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/protectedroute";
import Request from "./screen/purchases/request";
import CreateRequest from "./screen/purchases/create-request";
import Header from "./components/header";
import FileUpload from "./components/file-upload";
import FileList from "./components/files-list";
import SamplePDF from "./components/pdf/samplepdf";
import EditRequest from "./screen/purchases/edit-request";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import AccountClassesPage from "./screen/finance/account-classes";
import ItemClassesPage from "./screen/inventory/item-classes";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import FavoritesTab from "./screen/favorites/favoritesTab";
import SessionTimeoutHandler from "./components/session-timeout";
import AdminLogin from "./admin/login";
import AdminPanel from "./admin/admin";
import ProtectedRouteforAdmin from "./components/protectedrouteforadmin";
import AdminProtectedRoute from "./components/protectedrouteforadmin";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <SessionTimeoutHandler /> {/* ✅ Now inside Router */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="file-upload" element={<FileUpload />} />
          <Route path="PDF" element={<SamplePDF />} />
          <Route path="files" element={<FileList />} />
          <Route path="/edit_request/:ref" element={<EditRequest />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminPanel />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="favorites" element={<FavoritesTab />} />

            <Route path="request" element={<Request />} />
            <Route
              path="purchases/create_request"
              element={<CreateRequest />}
            />
            <Route
              path="inventory/preferences/classes"
              element={<AccountClassesPage />}
            />
            <Route path="inventory/item_class" element={<ItemClassesPage />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;
