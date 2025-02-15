import React from "react";
import "./Navbar.css";

const Navbar = ({ onLogin }) => {
  return (
    <nav className="navbar">
      <h1>Velocity</h1>
      <div className="nav-buttons">
        <button className="nav-button" onClick={onLogin}>
          Login with Google
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
