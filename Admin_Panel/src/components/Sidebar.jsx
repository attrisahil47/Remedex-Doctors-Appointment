import React from "react";
import { Menu, Layout } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ScheduleOutlined,
  TeamOutlined,
  MessageOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider>
      <div className="logo" style={{ color: "white", padding: 16 }}>
        Admin Panel
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />} onClick={() => navigate("/dashboard")}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="doctors" icon={<UserOutlined />} onClick={() => navigate("/dashboard/doctors")}>
          Doctors
        </Menu.Item>
        <Menu.Item key="users" icon={<TeamOutlined />} onClick={() => navigate("/dashboard/users")}>
          Users
        </Menu.Item>
        <Menu.Item key="bookings" icon={<ScheduleOutlined />} onClick={() => navigate("/dashboard/bookings")}>
          Bookings
        </Menu.Item>
        <Menu.Item key="feedback" icon={<MessageOutlined />} onClick={() => navigate("/dashboard/feedback")}>
          Feedback
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />} onClick={() => navigate("/dashboard/contact")}>
          Contact
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
