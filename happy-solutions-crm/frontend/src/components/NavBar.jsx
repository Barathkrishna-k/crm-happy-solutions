import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Happy Solutions" />
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/new">New Quote</NavLink>
      <NavLink to="/followup">Follow-up</NavLink>
      <NavLink to="/database">Database</NavLink>
      <NavLink to="/return-leads">Return Leads</NavLink>
      <div className="right">
        <span style={{ color: "#6b7280" }}>
          {role ? `Logged in as: ${role}` : ""}
        </span>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
