import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    const expiryDate = searchParams.get("expiry_date");
    const email = searchParams.get("email");
    const name = searchParams.get("name");

    // Store tokens and user info in local storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiryDate", expiryDate);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);

    // Redirect to the emails page
    navigate("/emails");
  }, [searchParams, navigate]);

  return (
    <div className="auth-success">
      <h1>Authentication Successful!</h1>
      <p>Redirecting to your inbox...</p>
    </div>
  );
};

export default AuthSuccess;
