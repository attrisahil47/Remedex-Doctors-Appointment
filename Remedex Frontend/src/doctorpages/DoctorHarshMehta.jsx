import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import doctor3 from "../assets/doctor3.jpg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const DoctorHarshMehta = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 text-center shadow-md">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-2">Dr. Harsh Mehta</h1>
          <p className="text-xl">Medical Consultant | Specialist in Cardiology</p>
        </div>
      </section>

      {/* About Section */}
      <div className="about-container py-12 px-4 flex flex-col items-center bg-white">
        {/* Doctor Image */}
        <img
          src={doctor3}
          alt="Dr. Harsh Mehta"
          className="w-[250px] h-[320px] rounded-xl shadow-lg border-[5px] border-[#4c5d79] mb-6"
        />

        {/* Description */}
        <h2 className="text-3xl font-semibold mb-4 text-center">About Dr. Harsh Mehta</h2>
        <p className="text-lg text-[#444] max-w-[700px] text-center mb-6">
        Dr. Harsh Mehta is a leading cardiologist with over 20 years of clinical experience. Known for his
            compassionate care and expertise in advanced cardiovascular treatments, he has successfully treated
            thousands of patients suffering from heart ailments. Dr. Mehta combines modern diagnostic technology
            with a personalized approach to help patients maintain a healthy heart and lifestyle. His commitment
            to excellence and patient-centric care makes him one of the most respected names in cardiology.
        </p>

        {/* Personal Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-[700px] mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Doctor Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <p><strong>Name:</strong> Dr. Harsh Mehta</p>
            <p><strong>Age:</strong> 39</p>
            <p><strong>Specialization:</strong> Cardiology</p>
            <p><strong>Hometown:</strong>  Mumbai, India</p>
            <p><strong>Email:</strong> Harsh.Mehta@example.com</p>
            <p><strong>Phone:</strong> +91 90123 45678</p>
            <p><strong>Clinic Address:</strong> HeartCare Clinic, Bandra West, Mumbai</p>
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
          <h4 className="text-lg font-semibold mb-3 text-gray-700">Connect with Dr. Mehta</h4>
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

export default DoctorHarshMehta;
