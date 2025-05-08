import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import doctor8 from "../assets/doctor8.jpg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const DoctorRahulSharma = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 text-center shadow-md">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-2">Dr. Rahul Sharma</h1>
          <p className="text-xl">Medical Consultant | Specialist in Cardiology</p>
        </div>
      </section>

      {/* About Section */}
      <div className="about-container py-12 px-4 flex flex-col items-center bg-white">
        {/* Doctor Image */}
        <img
          src={doctor8}
          alt="Dr. Rahul Sharma"
          className="w-[250px] h-[320px] rounded-xl shadow-lg border-[5px] border-[#4c5d79] mb-6"
        />

        {/* Description */}
        <h2 className="text-3xl font-semibold mb-4 text-center">About Dr. Rahul Sharma</h2>
        <p className="text-lg text-[#444] max-w-[700px] text-center mb-6">
        Dr. Rahul Sharma is a leading cardiologist with over 15 years of experience in treating heart-related conditions.
            He is well-known for his precision in diagnosis and treatment of cardiac disorders, and his gentle, compassionate
            approach towards patient care. He has worked with top hospitals and leads several health awareness campaigns
            focusing on preventive heart care. His motto is to treat the patient, not just the disease.
        </p>

        {/* Personal Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-[700px] mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Doctor Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <p><strong>Name:</strong> Dr. Rahul Sharma</p>
            <p><strong>Age:</strong> 42</p>
            <p><strong>Specialization:</strong>  Cardiology</p>
            <p><strong>Hometown:</strong> Delhi, India</p>
            <p><strong>Email:</strong> rahul.sharma@example.com</p>
            <p><strong>Phone:</strong> +91 98700 12345</p>
            <p><strong>Clinic Address:</strong> HeartCare Center, Sector 18, Delhi, India</p>
            <p><strong>Working Hours:</strong> Mon - Fri, 10:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
            Chat Now
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
            Voice Call
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
            Video Call
          </button>
        </div>

        {/* Social Media */}
        <div className="text-center mb-10">
          <h4 className="text-lg font-semibold mb-3 text-gray-700">Connect with Dr. Sharma</h4>
          <div className="flex justify-center gap-6 text-2xl text-gray-600">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorRahulSharma;
