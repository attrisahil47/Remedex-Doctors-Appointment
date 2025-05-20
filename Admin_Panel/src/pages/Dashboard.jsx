// import React, { useEffect, useState } from "react";
// import {
//   Layout,
//   Typography,
//   Card,
//   Row,
//   Col,
//   Table,
//   Tag,
// } from "antd";
// import axios from "axios";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
// } from "recharts";

// const { Content } = Layout;
// const { Title } = Typography;

// // Table Columns
// const columns = [
//   {
//     title: "Patient",
//     dataIndex: "patient",
//     key: "patient",
//   },
//   {
//     title: "Doctor",
//     dataIndex: "doctor",
//     key: "doctor",
//   },
//   {
//     title: "Time",
//     dataIndex: "time",
//     key: "time",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//     render: (status) => (
//       <Tag color={status === "Confirmed" ? "green" : "orange"}>{status}</Tag>
//     ),
//   },
// ];

// // Sample Table Data
// const data = [
//   { key: "1", patient: "John Doe", doctor: "Dr. Smith", time: "10:00 AM", status: "Confirmed" },
//   { key: "2", patient: "Jane Roe", doctor: "Dr. Adams", time: "11:30 AM", status: "Pending" },
// ];

// // Line Chart Data
// const lineData = [
//   { day: "Mon", bookings: 3 },
//   { day: "Tue", bookings: 5 },
//   { day: "Wed", bookings: 2 },
//   { day: "Thu", bookings: 7 },
//   { day: "Fri", bookings: 4 },
//   { day: "Sat", bookings: 6 },
//   { day: "Sun", bookings: 5 },
// ];

// const COLORS = ["#1890ff", "#52c41a"];

// const Dashboard = () => {
//   const [totalPatients, setTotalPatients] = useState(0);
//   const [totalDoctors, setTotalDoctors] = useState(0);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/auth/getUser");
//         setTotalPatients(response.data.length);
//       } catch (error) {
//         console.error("Error fetching patients:", error);
//       }
//     };

//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/auth/getDoctors");
//         setTotalDoctors(response.data.length);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       }
//     };

//     fetchPatients();
//     fetchDoctors();
//   }, []);

//   // Pie Chart Data (dynamic)
//   const pieData = [
//     { name: "Doctors", value: totalDoctors },
//     { name: "Patients", value: totalPatients },
//   ];

//   return (
//     <Content style={{ margin: "24px" }}>
//       {/* Cards */}
//       <Row gutter={16}>
//         <Col span={8}>
//           <Card title="Total Doctors" bordered={false} style={{ background: "#e6f7ff" }}>
//             <p style={{ fontSize: "24px", margin: 0 }}>{totalDoctors}</p>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Total Patients" bordered={false} style={{ background: "#f6ffed" }}>
//             <p style={{ fontSize: "24px", margin: 0 }}>{totalPatients}</p>
//           </Card>
//         </Col>
//         <Col span={8}>
//           <Card title="Bookings Today" bordered={false} style={{ background: "#fffbe6" }}>
//             <p style={{ fontSize: "24px", margin: 0 }}>10</p>
//           </Card>
//         </Col>
//       </Row>

//       {/* Charts Section */}
//       <Row gutter={16} style={{ marginTop: 32 }}>
//         <Col span={12}>
//           <Card title="Doctors vs Patients" bordered={false}>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ name }) => name}
//                   outerRadius={100}
//                   dataKey="value"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </Card>
//         </Col>

//         <Col span={12}>
//           <Card title="Bookings This Week" bordered={false}>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={lineData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="bookings" stroke="#ff4d4f" />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>
//         </Col>
//       </Row>

//       {/* Bookings Table */}
//       <div style={{ marginTop: 40 }}>
//         <Title level={4}>Today's Bookings</Title>
//         <Table columns={columns} dataSource={data} pagination={false} />
//       </div>
//     </Content>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Table,
  Tag,
} from "antd";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const { Content } = Layout;
const { Title } = Typography;

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

const lineData = [
  { day: "Mon", bookings: 3 },
  { day: "Tue", bookings: 5 },
  { day: "Wed", bookings: 2 },
  { day: "Thu", bookings: 7 },
  { day: "Fri", bookings: 4 },
  { day: "Sat", bookings: 6 },
  { day: "Sun", bookings: 5 },
];

const COLORS = ["#1890ff", "#52c41a"];

const Dashboard = () => {
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [todaysBookings, setTodaysBookings] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/getUser");
        setTotalPatients(response.data.length);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/getDoctors");
        setTotalDoctors(response.data.length);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/getBookings");

        // Filter today's bookings
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
        const filtered = response.data.filter((booking) => {
          const bookingDate = new Date(booking.bookingDate).toISOString().split("T")[0];
          return bookingDate === today;
        });

        setTodaysBookings(filtered);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchPatients();
    fetchDoctors();
    fetchBookings();
  }, []);

  const pieData = [
    { name: "Doctors", value: totalDoctors },
    { name: "Patients", value: totalPatients },
  ];

  // Transform today's bookings for the table
  const tableData = todaysBookings.map((item, index) => ({
    key: index,
    patient: item.fullName,
    doctor: item.doctor,
    time: item.bookingTime,
    status: item.status || "Pending",
  }));

  return (
    <Content style={{ margin: "24px" }}>
      {/* Cards */}
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Doctors" bordered={false} style={{ background: "#e6f7ff" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>{totalDoctors}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Patients" bordered={false} style={{ background: "#f6ffed" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>{totalPatients}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Bookings Today" bordered={false} style={{ background: "#fffbe6" }}>
            <p style={{ fontSize: "24px", margin: 0 }}>{todaysBookings.length}</p>
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
        <Table columns={columns} dataSource={tableData} pagination={false} />
      </div>
    </Content>
  );
};

export default Dashboard;
