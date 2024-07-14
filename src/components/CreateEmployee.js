import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/admin/createEmployee',
        employee,
        {
          auth: {
            username: 'admin',
            password: 'admin'
          }
        }
      );
      console.log('Employee created:', response.data);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CTC</label>
          <input
            type="text"
            name="ctc"
            value={employee.ctc}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
