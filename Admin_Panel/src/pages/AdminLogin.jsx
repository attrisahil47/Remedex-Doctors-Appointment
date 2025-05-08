import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import axios from "axios";

const { Title, Text } = Typography;

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        emailAddress: values.email,
        password: values.password,
      });

      if (response.data.role === "admin") {
        localStorage.setItem("token", response.data.jwtToken);
        toast.success("Admin login successful");
        navigate("/dashboard");
      } else {
        toast.error("Access denied. Only admin can login here.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 32px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {/* Stethoscope SVG Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          width="32px"
          height="32px"
          style={{ marginRight: "12px" }}
        >
          <path d="M19 2v2h1v9a5 5 0 1 1-10 0V4h1V2h-4v2h1v9a7 7 0 0 0 14 0V4h1V2h-4z" />
        </svg>

        <Title level={3} style={{ color: "#fff", margin: 0 }}>
          Remedex Doctors's Admin Panel
        </Title>
      </div>

      {/* Login Form Card */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Card
          bordered={false}
          style={{
            width: 400,
            padding: "30px 20px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Title level={3} style={{ margin: 0, color: "#333" }}>
              Admin Login
            </Title>
            <Text type="secondary">Secure access for administrators</Text>
          </div>

          <Form name="admin_login" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="admin@gmail.com"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="admin123"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                style={{
                  borderRadius: "8px",
                  background: "#6a11cb",
                  backgroundImage: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  border: "none",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
