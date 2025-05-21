import React from "react";
import { Form, Input, Button, Rate, message } from "antd";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Feedback() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/feedback", values);
      if (response.data.success) {
        toast.success("Your feedback has been submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.resetFields();
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit feedback!");
    }
  };

  const onFinishFailed = () => {
    message.error("Please fill all required fields correctly.");
  };

  return (
    <>
      <Navbar />
      

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Feedback</h1>
          <p className="text-xl">
            We value your opinion! Let us know your thoughts and suggestions.
          </p>
        </div>
      </section>

      {/* Feedback Page Wrapper */}
      <div className="contact-page">
        <div className="contact-container">
          <h2 className="text-2xl mb-4 text-black">Share Your Feedback</h2>
          <p className="text-lg mb-4 text-[#ddd]">Your feedback helps us improve!</p>
          <Form
            form={form}
            name="feedback"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="contact-form"
          >
            <Form.Item
              label="Full Name"
              name="name"
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
              label="Rating"
              name="rating"
              rules={[{ required: true, message: "Please provide a rating!" }]}
            >
              <Rate allowHalf />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your feedback!" }]}
            >
              <Input.TextArea placeholder="Your feedback or suggestions" className="input-field" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full auth-btn">
                Submit Feedback
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
     
    </>
  );
}

export default Feedback;


