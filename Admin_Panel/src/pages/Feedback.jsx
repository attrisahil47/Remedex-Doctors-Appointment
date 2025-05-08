import React, { useEffect, useState } from "react";
import { Card, Table, Typography, message } from "antd";
import axios from "axios";

const { Title } = Typography;

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/getFeedbacks");
      const feedbackData = response.data.map((item, index) => ({
        ...item,
        key: item._id || index,
      }));
      setFeedbacks(feedbackData);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      message.error("Failed to load feedbacks.");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <Card>
      <Title level={4}>User Feedbacks</Title>
      <Table
        columns={columns}
        dataSource={feedbacks}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
};

export default Feedback;
