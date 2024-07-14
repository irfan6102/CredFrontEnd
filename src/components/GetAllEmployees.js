import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/admin/getAllemployees',
          {
            auth: {
              username: 'admin',
              password: 'admin'
            }
          }
        );
        setEmployees(response.data); // Assuming response.data is an array of employees
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <strong>Name:</strong> {employee.name} | <strong>Designation:</strong> {employee.designation} | <strong>CTC:</strong> {employee.ctc} | <strong>Email:</strong> {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllEmployees;
