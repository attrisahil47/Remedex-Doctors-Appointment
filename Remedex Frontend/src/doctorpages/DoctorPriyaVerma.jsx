import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import doctor6 from "../assets/doctor6.jpg";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const DoctorPriyaVerma = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 text-center shadow-md">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-2">Dr. Priya Verma</h1>
          <p className="text-xl">Medical Consultant | Specialist in Gynecology</p>
        </div>
      </section>

      {/* About Section */}
      <div className="about-container py-12 px-4 flex flex-col items-center bg-white">
        {/* Doctor Image */}
        <img
          src={doctor6}
          alt="Dr. Priya Verma"
          className="w-[250px] h-[320px] rounded-xl shadow-lg border-[5px] border-[#4c5d79] mb-6"
        />

        {/* Description */}
        <h2 className="text-3xl font-semibold mb-4 text-center">About Dr. Priya Verma</h2>
        <p className="text-lg text-[#444] max-w-[700px] text-center mb-6">
        Dr. Priya Verma is a reputed gynecologist with extensive experience in women’s health and reproductive care. 
            With over 12 years of practice, she specializes in prenatal care, hormonal disorders, menstrual problems, and infertility counseling. 
            Her warm and approachable nature, combined with a thorough understanding of medical advancements, makes her a highly sought-after consultant among women of all age groups. 
            She believes in patient-first care, empowering women with knowledge and guidance for a healthier lifestyle.
        </p>

        {/* Personal Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-[700px] mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Doctor Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <p><strong>Name:</strong> Dr. Priya Verma</p>
            <p><strong>Age:</strong> 36</p>
            <p><strong>Specialization:</strong> Gynecology</p>
            <p><strong>Hometown:</strong>  Lucknow, India</p>
            <p><strong>Email:</strong> Priya.Verma@example.com</p>
            <p><strong>Phone:</strong> +91 99888 77665</p>
            <p><strong>Clinic Address:</strong> Blossom Women's Clinic, Sector 10, Lucknow, India</p>
            <p><strong>Working Hours:</strong>  Mon - Sat, 9:00 AM - 3:00 PM</p>
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
          <h4 className="text-lg font-semibold mb-3 text-gray-700">Connect with Dr.Ms Verma</h4>
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

export default DoctorPriyaVerma;
