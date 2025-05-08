import React from "react";
import { Layout, Dropdown, Menu, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const menu = (
    <Menu
      style={{
        borderRadius: "10px",
        minWidth: "180px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Menu.Item key="1">👤 Edit Profile</Menu.Item>
      <Menu.Item key="2">🔔 Notifications</Menu.Item>
      <Menu.Item key="3">💬 Support</Menu.Item>
      <Menu.Item key="4" onClick={handleLogout}>
        🚪 Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 600, color: "#1890ff" }}>
        🩺 Remedex Doctors Admin Panel
      </h2>

      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <Button
          type="primary"
          icon={<UserOutlined />}
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontWeight: "500",
            borderRadius: "8px",
            padding: "0 15px",
            height: "40px",
          }}
        >
          Admin <DownOutlined />
        </Button>
      </Dropdown>
    </Header>
  );
};

export default AdminHeader;
