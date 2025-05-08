import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/contact", values);
      if (response.data.success) {
        toast.success(" Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        message.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to send message!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill all required fields correctly.");
  };

  return (
    <>
      <Navbar />
    

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We'd love to hear from you! Please fill out the form below or call us directly.
          </p>
        </div>
      </section>

      {/* Contact Page Wrapper */}
      <div className="contact-page">
        <div className="contact-container">
          <h2 className="text-2xl mb-4 text-black">Contact Us</h2>
          <p className="text-lg mb-4 text-[#ddd]">You will hear from us at the earliest!</p>
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="contact-form"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name!" }]}
            >
              <Input placeholder="Full Name" className="input-field" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" className="input-field" />
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
    placeholder="Phone"
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
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <Input.TextArea placeholder="Your comment or query" className="input-field" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full auth-btn">
                Send
              </Button>
            </Form.Item>
          </Form>
          <p className="contact-number">
            You can also contact us at 181-1711-322
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
