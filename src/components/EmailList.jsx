import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/gmail/emails?userEmail=${userEmail}`
        );
        setEmails(response.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, [userEmail]);

  if (loading) {
    return <div>Loading emails...</div>;
  }

  return (
    <div className="email-list">
      <h2>Inbox Emails</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>
                {email.payload.headers.find((h) => h.name === "From").value}
              </td>
              <td>{email.snippet}</td>
              <td>
                {new Date(parseInt(email.internalDate)).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailList;
