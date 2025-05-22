import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axiosInstance from "../../axiosInstance";
import baseURL from "../../config";
import { useAuth } from "../AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId =
  "166768133566-04ufqrfh2tre1nt5gppu3b9aahpu98vf.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = (values) => {
    toast.dismiss();
    axiosInstance
      .post(`${baseURL}/auth/login`, values)
      .then((response) => {
        toast.success("✅ Login successful!", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: false,
        });

        login(response.data.jwtToken, response.data.role);

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((error) => {
        toast.error(
          `❌ ${error.response?.data?.message || "Login failed!"}`,
          {
            position: "top-right",
            autoClose: 3000,
            pauseOnHover: false,
          }
        );
      });
  };

  const onFinishFailed = (errorInfo) => {
    toast.dismiss();
    toast.error("❌ Please fill in all required fields!", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: false,
    });
    console.log("Failed:", errorInfo);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    toast.dismiss();

    if (!credentialResponse || !credentialResponse.credential) {
      toast.error("❌ No credential returned by Google.", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
      return;
    }

    try {
      const res = await axiosInstance.post(`${baseURL}/auth/google-login`, {
        token: credentialResponse.credential,
      });

      if (res && res.status === 200) {
        toast.success("✅ Logged in successfully with Google!", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: false,
        });

        login(res.data.jwtToken, res.data.role);

        setTimeout(() => {
          navigate("/about");
        }, 2000);
      } else {
        throw new Error("Unexpected server response.");
      }
    } catch (error) {
      toast.error(
        `❌ Google login failed: ${
          error.response?.data?.message || error.message || "Unknown error"
        }`,
        {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: false,
        }
      );
    }
  };

  const handleGoogleError = () => {
    toast.dismiss();
    toast.error("❌ Google Sign-In failed to start", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: false,
    });
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

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
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

        {/* Google Login wrapped in provider */}
        <div className="google-login flex justify-center mt-4">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </GoogleOAuthProvider>
        </div>

        <div className="toggle-link text-center text-sm mt-4">
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
