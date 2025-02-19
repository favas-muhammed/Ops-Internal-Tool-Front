import React from "react";

const GoogleLogin = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="google-login">
      <h1>Welcome to the Internal Tool</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
