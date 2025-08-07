import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NewQuote from "./pages/NewQuote";
import FollowUp from "./pages/FollowUp";
import ReturnLeads from "./pages/ReturnLeads";
import Database from "./pages/Database";
import NavBar from "./components/NavBar";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function App() {
  return (
    <>
      {isLoggedIn() && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/new" element={<NewQuote />} />
        <Route path="/followup" element={<FollowUp />} />
        <Route path="/database" element={<Database />} />
        <Route path="/return-leads" element={<ReturnLeads />} />
      </Routes>
    </>
  );
}
