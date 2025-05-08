import React, { useEffect, useState } from "react";
import { NavLink } from "react-router"; // ✅ Import NavLink
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "react-toastify/dist/ReactToastify.css";

function NewDoctors() {
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    viewDoctors();
  }, []);

  const viewDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/viewdoctors");
      setDoctors(response.data);
    } catch (error) {
      console.error(error.response?.data?.message || "Failed to view doctor!");
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero text-center py-12 bg-blue-100">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Add New Doctor</h1>
          <p className="text-xl">
            Fill out the details below to add a new doctor to the system.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 !px-10 !py-10">
        {Doctors.map((Doctor, index) => (
          <div
            key={index}
            className="border !p-4 rounded-lg shadow-md flex flex-col items-center text-center bg-white"
          >
            <img
              src={`http://localhost:5000/uploads/${Doctor.photo}`}
              alt="Doctor"
              className="h-[150px] w-[150px] object-cover rounded-full !mb-4"
            />
            <h3 className="text-lg font-semibold">{Doctor.name}</h3>
            <h4 className="text-md text-gray-600">{Doctor.specialization}</h4>
            <h5 className="text-md text-gray-500">{Doctor.hometown}</h5>
            <NavLink
              to="/booking"
              className="doctor-contact mt-4 bg-green-500 text-white !py-2 !px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"            >
              Book Appointment
            </NavLink>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default NewDoctors;
