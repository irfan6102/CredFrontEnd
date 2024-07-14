import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSendEmail = async (e) => {
        e.preventDefault();

        const emailRequest = {
            toEmail: toEmail.split(',').map(email => email.trim()), // Convert comma-separated string to an array
            subject: subject,
            body: message,
        };

        try {
            const res = await axios.post('http://localhost:8080/admin/sendEmail', emailRequest,
              {
                auth: {
                  username: 'admin',  
                  password: 'admin'   
                }}
            );
            setResponse(res.data);
        } catch (error) {
            setResponse('Error sending email');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Send Email</h2>
            <form onSubmit={handleSendEmail}>
                <div>
                    <label>To Email:</label>
                    <input 
                        type="text" 
                        value={toEmail} 
                        onChange={(e) => setToEmail(e.target.value)} 
                        placeholder="Enter email addresses separated by commas"
                        required 
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <input 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Send Email</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default SendEmail;
