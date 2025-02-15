import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import EmailList from "./EmailList";
import CompanyIcon from "./CompanyIcon";

const Home = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Get token from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleLogin = () => {
    // Redirect to Google OAuth
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    }&response_type=code&scope=https://www.googleapis.com/auth/gmail.readonly`;
    window.location.href = authUrl;
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar onLogin={handleLogin} />
      <CompanyIcon />
      <div className="container">
        <h1></h1>
        {token && <EmailList token={token} />}
      </div>
    </div>
  );
};

export default Home;
