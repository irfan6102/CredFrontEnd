import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailLogList = () => {
  const [emailLogs, setEmailLogs] = useState([]);

  useEffect(() => {
    const fetchEmailLogs = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/admin/api/emailLogs',
          {
            auth: {
              username: 'admin',
              password: 'admin'
            }
          }
        );
        setEmailLogs(response.data); // Assuming response.data is an array of email logs
      } catch (error) {
        console.error('Error fetching email logs:', error);
      }
    };

    fetchEmailLogs();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Email Logs</h2>
      <ul>
        {emailLogs.map(log => (
          <li key={log.id}>
            <strong>To:</strong> {log.toEmail} | <strong>Subject:</strong> {log.subject} | <strong>Body:</strong> {log.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailLogList;
