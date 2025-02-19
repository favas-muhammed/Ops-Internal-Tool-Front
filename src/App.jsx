import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin";
import AuthSuccess from "./pages/AuthSuccess";
import EmailList from "./components/EmailList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/emails" element={<EmailList />} />
      </Routes>
    </Router>
  );
}

export default App;
