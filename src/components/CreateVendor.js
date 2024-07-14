import React, { useState } from 'react';
import axios from 'axios';

const CreateVendor = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    upi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({
      ...vendor,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/admin/createVendor',
        vendor,
        {
          auth: {
            username: 'admin',  
            password: 'admin'   
          }
        }
      );
      console.log('Vendor created:', response.data);
          } catch (error) {
      console.error('Error creating vendor:', error);
    }
  };

  return (
    <div>
      <h2>Create Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={vendor.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={vendor.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>UPI</label>
          <input
            type="text"
            name="upi"
            value={vendor.upi}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateVendor;
