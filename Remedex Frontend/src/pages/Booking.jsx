import React from "react";
import { Form, Input, Button, DatePicker, TimePicker, Select } from "antd";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;

const Booking = () => {
  const onFinish = async (values) => {
    console.log("Booking Data:", values); // Log the booking data in the console

    try {
      const response = await axios.post("http://localhost:5000/api/auth/booking", values);
      
      if (response.data.success) {
        toast.success(" Booking confirmed successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } 
      else {
        toast.error(response.data.message || " Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || " Failed to book the consultation!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.error(" Please fill all required fields correctly.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="booking-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Book a Consultation</h1>
          <p className="text-xl">Schedule your visit with our expert doctors easily.</p>
        </div>
      </section>

      {/* Booking Form Container */}
      <div className="booking-page">
        <div className="booking-container">
          <h2 className="text-2xl mb-4 text-black">Booking Details</h2>
          <Form
            name="booking"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="booking-form"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name!" }]}
            >
              <Input placeholder="Enter your full name" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="emailAddress"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
                { pattern: /^\d{10}$/, message: "Phone number must be exactly 10 digits!" },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                className="input-field"
                maxLength={10}
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Form.Item>

            <Form.Item
              label="Booking Date"
              name="bookingDate"
              rules={[{ required: true, message: "Please select a booking date!" }]}
            >
              <DatePicker className="input-field" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Booking Time"
              name="bookingTime"
              rules={[{ required: true, message: "Please select a booking time!" }]}
            >
              <TimePicker className="input-field" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Select Doctor"
              name="doctor"
              rules={[{ required: true, message: "Please select a doctor!" }]}
            >
              <Select placeholder="Choose a doctor" className="input-field">
                <Option value="dr-john">Dr. John Walia</Option>
                <Option value="dr-nancy">Dr. Nancy Mahajan</Option>
                <Option value="dr-akanksha">Dr. Akanksha</Option>
                <Option value="dr-harsh">Dr. Harsh Mehta</Option>
                <Option value="dr-rahul">Dr. Rahul Sharma</Option>
                <Option value="dr-priya">Dr. Priya Verma</Option>
                <Option value="dr-aman">Dr. Aman Gupta</Option>
                <Option value="dr-sneha">Dr. Sneha Kapoor</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Additional Message" name="message">
              <Input.TextArea placeholder="Any special requirements?" className="input-field" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full booking-btn">
                Confirm Booking
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking;
