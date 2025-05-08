import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Bookings from "./pages/Bookings";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Users from "./pages/Users";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="users" element={<Users />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
         

        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
);
