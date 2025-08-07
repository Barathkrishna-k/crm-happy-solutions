import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const { access_token, role } = res.data;
      localStorage.setItem("token", access_token);
      localStorage.setItem("role", role);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 100 }}>
      <div className="card">
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        />
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
