import React from "react";
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Table,
  Tag,
} from "antd";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
} from "recharts";

const { Content } = Layout;
const { Title } = Typography;

// Table Columns
const columns = [
  {
    title: "Patient",
    dataIndex: "patient",
    key: "patient",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Confirmed" ? "green" : "orange"}>{status}</Tag>
    ),
  },
];

// Table Data
const data = [
  { key: "1", patient: "John Doe", doctor: "Dr. Smith", time: "10:00 AM", status: "Confirmed" },
  { key: "2", patient: "Jane Roe", doctor: "Dr. Adams", time: "11:30 AM", status: "Pending" },
];

// Pie Chart Data
const pieData = [
  { name: "Doctors", value: 14 },
  { name: "Patients", value: 82 },
];
const COLORS = ["#1890ff", "#52c41a"];

// Line Chart Data
const lineData = [
  { day: "Mon", bookings: 3 },
  { day: "Tue", bookings: 5 },
  { day: "Wed", bookings: 2 },
  { day: "Thu", bookings: 7 },
  { day: "Fri", bookings: 4 },
  { day: "Sat", bookings: 6 },
  { day: "Sun", bookings: 5 },
];

const Dashboard = () => {
  return (
    <Content style={{ margin: "24px" }}>
      {/* Cards */}
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Doctors" bordered={false} style={{ background: "#e6f7ff" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>14</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Patients" bordered={false} style={{ background: "#f6ffed" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>82</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bookings Today" bordered={false} style={{ background: "#fffbe6" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>10</p>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row gutter={16} style={{ marginTop: 32 }}>
        <Col span={12}>
          <Card title="Doctors vs Patients" bordered={false}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name }) => name}
                  outerRadius={100}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Bookings This Week" bordered={false}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bookings" stroke="#ff4d4f" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Bookings Table */}
      <div style={{ marginTop: 40 }}>
        <Title level={4}>Today's Bookings</Title>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </Content>
  );
};

export default Dashboard;
