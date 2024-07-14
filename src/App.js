import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateVendor from './components/CreateVendor';
import GetAllVendors from './components/GetAllVendor';
import CreateEmployee from './components/CreateEmployee';
import GetAllEmployees from './components/GetAllEmployees';
import SendEmail from './components/SendEmail';
import EmailLogList from './components/EmailLogList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cred Frontend</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/createVendor" element={<CreateVendor />} />
          <Route path="/getAllvendors" element={<GetAllVendors />} />
          <Route path="/admin/createEmployee" element={<CreateEmployee />} />
          <Route path="/admin/getAllemployees" element={<GetAllEmployees />} />
          <Route path="/sendEmail" element={<SendEmail />} />
          <Route path="/emailLog" element={<EmailLogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
