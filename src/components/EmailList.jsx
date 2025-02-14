import React, { useEffect, useState } from "react";
import axios from "axios";

const EmailList = ({ token }) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/gmail/emails",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEmails(response.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchEmails();
    }
  }, [token]);

  if (loading) {
    return <div>Loading emails...</div>;
  }

  return (
    <div className="email-list">
      <h2>Your Emails</h2>
      {emails.length > 0 ? (
        <ul>
          {emails.map((email) => (
            <li key={email.id}>
              <div className="email-item">
                <h3>{email.snippet}</h3>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No emails found</p>
      )}
    </div>
  );
};

export default EmailList;
