import React, { useEffect, useState } from "react";
import { Card, Table, Typography, message } from "antd";
import axios from "axios";

const { Title } = Typography;

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
];

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/getContacts");
      const contactsWithKeys = response.data.map((item, index) => ({
        ...item,
        key: item._id || index,
      }));
      setContacts(contactsWithKeys);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      message.error("Failed to load contact submissions");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Card>
      <Title level={4}>Contact Submissions</Title>
      <Table
        columns={columns}
        dataSource={contacts}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default Contact;
