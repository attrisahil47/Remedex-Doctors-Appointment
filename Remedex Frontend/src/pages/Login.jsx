import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { NavLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axiosInstance from "../../axiosInstance";
import baseURL from "../../config";
import { useAuth } from "../AuthContext";  // Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  const onFinish = (values) => {
    axiosInstance
     .post(`${baseURL}/auth/login`, values)

      .then((response) => {
        toast.success("Login successful!", { position: "top-right" });

        // Save token and role in context (and localStorage inside context)
        login(response.data.jwtToken, response.data.role);

        // Redirect after successful login
        setTimeout(() => {
          navigate("/about"); 
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Login failed!", { position: "top-right" });
      });
  };
    const onFinishFailed = (errorInfo) => {
    toast.error("Please fill in all required fields!", { position: "top-right" });
    console.log("Failed:", errorInfo);
  };
  

  return (
    <>
      <Navbar />
      <ToastContainer />

      <section className="auth-hero text-white text-center px-5 py-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-2xl shadow-md mt-[var(--navbar-height)]">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl">Sign in to continue your journey with us</p>
        </div>
      </section>

      <div className="auth-container max-w-md w-full bg-white shadow-lg p-8 rounded-lg mx-auto mt-10">
        <h1 className="text-4xl text-gray-800 text-center mb-5">Login</h1>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[{ type: "email", message: "Enter a valid email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="toggle-link text-center text-sm mt-2">
          <p>
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;