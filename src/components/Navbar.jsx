import React from "react";
import { Link } from "react-router-dom";
import CompanyIcon from "./CompanyIcon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <CompanyIcon />
        <Link to="/emails" className="b2b-link">
          <img
            src="/path/to/b2b-icon.png" // Update with actual path to B2B icon
            alt="B2B"
            className="b2b-icon"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
