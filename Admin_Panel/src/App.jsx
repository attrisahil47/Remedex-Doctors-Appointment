import React from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/Header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: "24px", padding: "24px", background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
