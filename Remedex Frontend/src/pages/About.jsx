import React from 'react';
import { Link } from 'react-router';

import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpg";
import doctor5 from "../assets/doctor5.jpg";
import doctor6 from "../assets/doctor6.jpg";
import doctor7 from "../assets/doctor7.jpg";
import doctor8 from "../assets/doctor8.jpg";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">About Our System</h1>
          <p className="text-xl">
            Discover how our AI-driven platform connects you with effective remedies and professional doctors.
          </p>
        </div>
      </section>

      <div className="about-container p-6">
        <h1 className="text-3xl font-bold mb-4">ABOUT OUR SYSTEM</h1>
        <p className="mb-8 text-gray-700">
          Our Doctor Remedy Recommendation System is designed to help users find the
          best remedies based on AI-driven analysis. We provide accurate
          recommendations for common health issues and connect users with
          professional doctors.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>

        {/* Grid container for doctor cards */}
        <div className="team-section grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/doctor1" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor1} alt="Doctor 1" className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-sm font-semibold text-center">Dr. John Walia</h3>
            <p className="text-xs text-gray-600 text-center">Medical Consultant</p>
          </Link>

          {/* Repeat for other doctors */}


          <Link to="/doctor2" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor2} alt="Doctor 2" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Nancy Mahajan</h3>
            <p className="text-gray-600">Internal Medical Consultant</p>
          </Link>

          <Link to="/doctor4" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor4} alt="Doctor 4" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Akanksha</h3>
            <p className="text-gray-600">Pediatrics Consultant</p>
          </Link>

          <Link to="/doctor3" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor3} alt="Doctor 3" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Harsh Mehta</h3>
            <p className="text-gray-600">Cardiology Consultant</p>
          </Link>

          <Link to="/doctor8" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor8} alt="Doctor 8" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Rahul Sharma</h3>
            <p className="text-gray-600">Cardiology Consultant</p>
          </Link>

          <Link to="/doctor6" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor6} alt="Doctor 6" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Priya Verma</h3>
            <p className="text-gray-600">Gynecology Consultant</p>
          </Link>

          <Link to="/doctor7" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor7} alt="Doctor 7" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Aman Gupta</h3>
            <p className="text-gray-600">Orthopedics Consultant</p>
          </Link>

          <Link to="/doctor5" className="team_member bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={doctor5} alt="Doctor 5" className="w-32 h-32 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Dr. Sneha Kapoor</h3>
            <p className="text-gray-600">Pediatrics Consultant</p>
          </Link>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default About;
