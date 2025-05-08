import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  Typography,
  Popconfirm,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../config";

const { Title } = Typography;

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingDoctor, setEditingDoctor] = useState(null);

  useEffect(() => {
    viewDoctors();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingDoctor(null);
    form.resetFields();
  };

  const viewDoctors = async () => {
    try {
      const response = await axios.get(`${baseURL}/auth/viewdoctors`);
      const doctorsData = response.data.map((doc, index) => ({
        ...doc,
        key: doc._id,
        sno: index + 1,
      }));
      setDoctors(doctorsData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFinish = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("specialization", values.specialization);
    formData.append("hometown", values.hometown);

    if (values.photo && values.photo.file) {
      formData.append("photo", values.photo.file);
    }

    try {
      if (editingDoctor) {
        // update
        const response = await axios.put(
          `${baseURL}/auth/updatedoctor/${editingDoctor._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Doctor updated successfully!");
      } else {
        // add
        await axios.post(`${baseURL}/auth/addDoctor`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Doctor added successfully!");
      }

      handleCancel();
      viewDoctors();
    } catch (error) {
      console.error(error);
      toast.error("Error saving doctor");
    }
  };

  const handleEdit = (record) => {
    setEditingDoctor(record);
    form.setFieldsValue({
      name: record.name,
      specialization: record.specialization,
      hometown: record.hometown,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/auth/deletedoctor/${id}`);
      toast.success("Doctor deleted successfully!");
      viewDoctors();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting doctor");
    }
  };

  const columns = [
    { title: "S.No", dataIndex: "sno", width: 70 },
    { title: "Name", dataIndex: "name" },
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo) =>
        photo ? (
          <img
            src={`http://localhost:5000/uploads/${photo}`}
            alt="Doctor"
            width={60}
            height={60}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        ) : (
          "No Photo"
        ),
    },
    { title: "Specialization", dataIndex: "specialization" },
    { title: "Hometown", dataIndex: "hometown" },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)} type="link">
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this doctor?"
            onConfirm={() => handleDelete(record._id)}
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Doctors Management</Title>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Add Doctor
      </Button>

      <Table
        columns={columns}
        dataSource={doctors}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingDoctor ? "Edit Doctor" : "Add Doctor"}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="name"
            label="Doctor Name"
            rules={[{ required: true, message: "Please enter doctor name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="specialization"
            label="Specialization"
            rules={[{ required: true, message: "Please enter specialization" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="hometown"
            label="Hometown"
            rules={[{ required: true, message: "Please enter hometown" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="photo"
            label="Doctor Photo"
            valuePropName="file"
            getValueFromEvent={(e) => (Array.isArray(e) ? e[0] : e)}
            rules={[
              {
                required: !editingDoctor,
                message: "Please upload doctor photo",
              },
            ]}
          >
            <Upload listType="picture" beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Doctors;
