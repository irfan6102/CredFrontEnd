import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [emailRequest, setEmailRequest] = useState({
    toEmail: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailRequest({
      ...emailRequest,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/sendEmail',
        emailRequest,
        {
          auth: {
            username: 'admin',
            password: 'admin'
          }
        }
      );
      console.log('Email sent:', response.data);
      alert('Email sent successfully'); // Notify user on successful email send
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email'); // Notify user on error
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To Email</label>
          <input
            type="email"
            name="toEmail"
            value={emailRequest.toEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={emailRequest.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            name="body"
            value={emailRequest.body}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default SendEmail;
