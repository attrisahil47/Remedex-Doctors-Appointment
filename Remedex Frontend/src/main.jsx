import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import Finddoctor from "./pages/Finddoctor";
import Remedies from "./pages/Remedies";
import Booking from "./pages/Booking";
import { ToastContainer } from "react-toastify";
import Feedback from "./pages/Feedback";
import DoctorJohnWalia from "./doctorpages/DoctorJohnWalia";
import DoctorNancyMahajan from "./doctorpages/DoctorNancyMahajan";
import DoctorHarshMehta from "./doctorpages/DoctorHarshMehta";
import DoctorAkankaha from "./doctorpages/DoctorAkanksha";
import DoctorSnehaGupta from "./doctorpages/DoctorSnehaKapoor";
import DoctorPriyaVerma from "./doctorpages/DoctorPriyaVerma";
import DoctorAmanGupta from "./doctorpages/DoctorAmanGupta";
import DoctorRahulSharma from "./doctorpages/DoctorRahulSharma";
import NewDoctors from "./pages/NewDoctors";
import { GoogleOAuthProvider } from "@react-oauth/google";

// 👇 Added these
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "../src/component/ProtectedRoute";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <GoogleOAuthProvider clientId="166768133566-04ufqrfh2tre1nt5gppu3b9aahpu98vf.apps.googleusercontent.com">
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes 👇 */}
          <Route
            path="/finddoc"
            element={
              <ProtectedRoute>
                <Finddoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newdoctors"
            element={
              <ProtectedRoute>
                <NewDoctors />
              </ProtectedRoute>
            }
          />

          {/* Doctor Details (Public) */}
          <Route path="/doctor1" element={<DoctorJohnWalia />} />
          <Route path="/doctor2" element={<DoctorNancyMahajan />} />
          <Route path="/doctor3" element={<DoctorHarshMehta />} />
          <Route path="/doctor4" element={<DoctorAkankaha />} />
          <Route path="/doctor5" element={<DoctorSnehaGupta />} />
          <Route path="/doctor6" element={<DoctorPriyaVerma />} />
          <Route path="/doctor7" element={<DoctorAmanGupta />} />
          <Route path="/doctor8" element={<DoctorRahulSharma />} />

          {/* Optional individual components for testing */}
          <Route path="/nav" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Remedies" element={<Remedies />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </GoogleOAuthProvider>
);
