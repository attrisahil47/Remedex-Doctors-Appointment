

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tag, Space, Button, message } from "antd";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from backend
  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/getBookings");
      const dataWithKey = res.data.map((item, index) => ({
        ...item,
        key: item._id || index,
      }));
      setBookings(dataWithKey);
    } catch (error) {
      message.error("Failed to fetch bookings");
      console.error("Error fetching bookings:", error);
    }
  };

  // Confirm booking handler
  const handleAccept = async (record) => {
    console.log("Hello")
    try {
      const res = await axios.post("http://localhost:5000/api/auth/confirmBooking", {
        fullName: record.fullName,
      emailAddress: record.emailAddress,
      bookingDate: record.bookingDate,
      bookingTime: record.bookingTime,
      doctor: record.doctor,
      });

      message.success(res.data.message || "Booking confirmed and email sent!");
      fetchBookings(); // Optional: refresh booking list
    } catch (err) {
      console.error("Failed to confirm booking:", err);
      message.error("Failed to confirm booking");
    }
  };

  // Table columns
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Booking Time",
      dataIndex: "bookingTime",
      key: "bookingTime",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleAccept(record)}>Accept</Button>
          <Button type="link" danger>Decline</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h2>All Bookings</h2>
      <Table columns={columns} dataSource={bookings} />
    </div>
  );
};

export default Bookings;
