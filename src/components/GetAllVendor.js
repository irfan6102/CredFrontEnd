import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/admin/getAllvendors',
          {
            auth: {
              username: 'admin',
              password: 'admin'
            }
          }
        );
        setVendors(response.data); 
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []); 

  return (
    <div>
      <h2>All Vendors</h2>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id}>
            <strong>Name:</strong> {vendor.name} | <strong>Email:</strong> {vendor.email} | <strong>UPI:</strong> {vendor.upi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllVendors;
