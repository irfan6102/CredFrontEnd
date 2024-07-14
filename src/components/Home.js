import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/admin/createVendor">Create Vendor</Link>
      <br></br>
      <Link to="/getAllvendors">GetAll Vendor</Link>
      <br></br>
      <Link to="/admin/createEmployee">Create Employee</Link>
      <br></br>
      <Link to="/admin/getAllemployees">Get All Employees</Link>
      <br></br>
      <Link to="/sendEmail">Send Email</Link>
      <br></br>
      <Link to="/emailLog">Get EMail Log</Link>
    </div>
  );
};

export default Home;
