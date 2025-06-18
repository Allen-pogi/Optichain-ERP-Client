import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import Dashboard from "./screen/dashboard";
import Inventory from "./screen/inventory";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/protectedroute";
import Request from "./screen/purchases/request";
import CreateRequest from "./screen/purchases/create-request";
import Header from "./components/header";
import FileUpload from "./components/file-upload";
import FileList from "./components/files-list";
import SamplePDF from "./components/pdf/samplepdf";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="file-upload" element={<FileUpload />} />
        <Route path="PDF" element={<SamplePDF />} />
        <Route path="files" element={<FileList />} />
        <Route
          path="/home/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="request" element={<Request />} />
          <Route path="create_request" element={<CreateRequest />} />

          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
