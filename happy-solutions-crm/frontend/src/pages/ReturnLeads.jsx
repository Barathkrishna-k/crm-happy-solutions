import React, { useEffect, useState } from "react";
import api from "../api";

export default function ReturnLeads() {
  const [leads, setLeads] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    api.get("/leads")
      .then(res => {
        const returns = res.data.filter(l => l.status === "returned" || l.status === "unsuccessful");
        setLeads(returns);
        setFiltered(returns);
      });
  }, []);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setFiltered(
      leads.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.to.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="container">
      <h2>Returned/Unsuccessful Leads</h2>
      <input
        placeholder="Search by name or location"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 16 }}
      />

      <div className="card grid" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
        {filtered.map((lead, i) => (
          <div key={i} style={{ borderBottom: "1px solid #eee", paddingBottom: 8 }}>
            <strong>{lead.name}</strong>
            <div>To: {lead.to}</div>
            <div>Status: {lead.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
