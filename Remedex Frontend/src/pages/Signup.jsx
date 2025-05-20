// import React from "react";
// import { Form, Input, Button } from "antd";
// import { NavLink, useNavigate } from "react-router";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useGoogleLogin } from '@react-oauth/google';

// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

// const Signup = () => {
//   const navigate = useNavigate(); //  Initialize navigate

//   const onFinish = async (values) => {
//     console.log("Signup Success:", values);
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/signup", values);

//       if (response.data.success) {
//         toast.success(response.data.message || "Signup successful! Redirecting to login...", {
//           position: "top-right",
//           autoClose: 2000,

//         });

//         //redirect from the login page after signup successfully
//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Signup failed!", {
//         position: "top-right",
//         autoClose: 3000,

//       });
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//  const responseGoogle = async (authResult) => {
//         try {
//             if (authResult.code) {
//                 const res = await axios.post(`http://localhost:5000/api/auth/google?code=${authResult.code}`);
//                 const { token, user } = res.data;

//                 localStorage.setItem("accessToken", token);
//                 localStorage.setItem("username", res.data.username);
//                 localStorage.setItem("user-info", JSON.stringify(user));
//                 Navigate("/");
//             } else {
//                 throw new Error("Google authentication failed");
//             }
//         } catch (e) {
//             console.log("Error while Google Login...", e);
//             toast.error("Google login failed");
//         }
//     };


//     const googleLogin = useGoogleLogin({
//         onSuccess: responseGoogle,
//         onError: responseGoogle,
//         flow: "auth-code",
//     });


//   return (
//     <>
//       <Navbar />
//       <section className="auth-hero">
//         <div className="hero-content">
//           <h1 className="hero-title">Join Us</h1>
//           <p className="hero-subtitle">Create your account to access our services</p>
//         </div>
//       </section>

//       <div className="signup-container">
//         <h1 className="auth-header">Create an Account</h1>
//         <Form
//           name="signup"
//           layout="vertical"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           className="signup-form"
//         >
//           <Form.Item
//             label="Full Name"
//             name="fullName"
//           // rules={[{ required: true, message: "Please enter your full name!" }]}
//           >
//             <Input placeholder="Enter your full name" className="input-field" />
//           </Form.Item>

//           <Form.Item
//             label="Email Address"
//             name="emailAddress"
//             rules={[
//               // { required: true, message: "Please enter your email!" },
//               { type: "email", message: "Please enter a valid email!" },
//             ]}
//           >
//             <Input placeholder="Enter your email" className="input-field" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//           // rules={[{ required: true, message: "Please create a password!" }]}
//           >
//             <Input.Password placeholder="Create a password" className="input-field" />
//           </Form.Item>

//           <Form.Item
//             label="Confirm Password"
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Please confirm your password!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Passwords do not match!"));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password placeholder="Confirm your password" className="input-field" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="auth-btn">
//               Sign Up
//             </Button>
//           </Form.Item>
//         </Form>

//         <div className="extra-link">
//           <p>
//             Already have an account?{" "}
//             <NavLink to="/login" className="link">
//               Login here
//             </NavLink>

//           </p>

//         </div>
//         <button
//           onClick={googleLogin}
//           className="flex items-center justify-center gap-2 w-full text-[#000] bg-white border border-gray-300 rounded-md !p-2 font-medium hover:bg-gray-100 transition !m-4"
//         >
//           <img src="https://developers.google.com/identity/images/g-logo.png" alt="G" className="w-5 h-5" />
//           Continue with Google
//         </button>

//       </div>

//       {/* Toast Container for Notifications */}
//       <ToastContainer />

//       <Footer />
//     </>
//   );
// };

// export default Signup;

import React from "react";
import { Form, Input, Button } from "antd";
import { NavLink, useNavigate } from "react-router"; // ✅ Fixed import
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Signup = () => {
  const navigate = useNavigate(); // ✅ Correct usage of navigate

  const onFinish = async (values) => {
    console.log("Signup Success:", values);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", values);

      if (response.data.success) {
        toast.success(response.data.message || "Signup successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/login"); // ✅ Redirect after successful signup
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // ✅ Fixed Google response handler
  const responseGoogle = async (authResult) => {
    try {
      if (authResult.code) {
        const res = await axios.post(`http://localhost:5000/api/auth/google?code=${authResult.code}`);
        const { token, user } = res.data;

        localStorage.setItem("accessToken", token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("user-info", JSON.stringify(user));

        navigate("/"); // ✅ Correct redirect
      } else {
        throw new Error("Google authentication failed");
      }
    } catch (e) {
      console.log("Error while Google Login...", e);
      toast.error("Google login failed");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (err) => {
      console.error("Google login failed:", err);
      toast.error("Google login failed");
    },
    flow: "auth-code",
  });

  return (
    <>
      <Navbar />
      <section className="auth-hero">
        <div className="hero-content">
          <h1 className="hero-title">Join Us</h1>
          <p className="hero-subtitle">Create your account to access our services</p>
        </div>
      </section>

      <div className="signup-container">
        <h1 className="auth-header">Create an Account</h1>
        <Form
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="signup-form"
        >
          <Form.Item label="Full Name" name="fullName">
            <Input placeholder="Enter your full name" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[{ type: "email", message: "Please enter a valid email!" }]}
          >
            <Input placeholder="Enter your email" className="input-field" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Create a password" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" className="input-field" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="auth-btn">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="extra-link">
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className="link">
              Login here
            </NavLink>
          </p>
        </div>

        <button
          onClick={googleLogin}
          className="flex items-center justify-center gap-2 w-full text-[#000] bg-white border border-gray-300 rounded-md !p-2 font-medium hover:bg-gray-100 transition !m-4"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="G"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Signup;

