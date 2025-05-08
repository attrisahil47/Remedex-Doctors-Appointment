import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Table, Button, Modal, Space } from "antd";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Column } = Table;
const { Option } = Select;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  // Open modal for adding new user
  const showModal = () => setIsModalOpen(true);

  // Cancel modal & reset form
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    form.resetFields();
  };

  // Fetch all users
  const viewUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/getUser`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.");
    }
  };

  useEffect(() => {
    viewUsers();
  }, []);

  // Form submit handler for Add/Edit
  const onFinish = async (values) => {
    if (editingUser) {
      try {
        const response = await axios.put(`http://localhost:5000/api/auth/updateUser/${editingUser._id}`, values);
        toast.success("User updated successfully!");
        handleCancel();
        viewUsers();
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Failed to update user.");
      }
    } else {
      try {
        await axios.post(`http://localhost:5000/api/auth/addUsers`, values);
        toast.success("User added successfully!");
        handleCancel();
        viewUsers();
      } catch (error) {
        console.error("Error adding user:", error);
        toast.error("Failed to add user.");
      }
    }
  };

  // Set form values for editing
  const handleEdit = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      emailAddress: user.emailAddress,
      fullName: user.fullName,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  // Delete user by ID
  const deleteUser = async (id, name) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/deleteUser/${id}`);
      setUsers(users.filter(user => user._id !== id));
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error(`Error deleting user ${name} (${id}):`, error);
      toast.error('Failed to delete user.');
    }
  };

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className="text-2xl font-bold">Users</h1>
        <Button type="primary" onClick={showModal}>
          Add User
        </Button>
      </div>

      {/* Modal Form */}
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 40 }}
        width={500}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[{ required: true, message: 'Please enter an email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter full name!' }]}
          >
            <Input />
          </Form.Item>

          {/* Show password field only when adding a new user */}
          {!editingUser && (
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter a password!' }]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Select placeholder="Select a role">
              <Option value="user">User</Option>
              <Option value="admin">Admin</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editingUser ? "Update User" : "Add User"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* User Table */}
      <Table dataSource={users} rowKey="_id" bordered>
        <Column title="S.No" key="sno" render={(_, __, index) => index + 1} />
        <Column title="Email" dataIndex="emailAddress" key="emailAddress" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Role" dataIndex="role" key="role" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link" onClick={() => handleEdit(record)}><MdEdit size={18} /></Button>
              <Button type="link" danger onClick={() => deleteUser(record._id, record.fullName)}><MdDelete size={18} /></Button>
            </Space>
          )}
        />
      </Table>

      {/* Toast notifications */}
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  );
};

export default Users;
