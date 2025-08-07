import React, { useEffect, useState } from "react";
import api from "../api";

export default function Database() {
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get("/leads")
      .then(res => setLeads(res.data))
      .catch(err => console.error("Failed to fetch leads", err));
  }, []);

  return (
    <div className="container">
      <h2>Lead Database</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr 2fr", gap: 20 }}>
        <div className="card">
          <h4>All Leads</h4>
          {leads.map((l, i) => (
            <div key={i} style={{ padding: 8, borderBottom: "1px solid #eee", cursor: "pointer" }}
              onClick={() => setSelected(l)}>
              {l.name} → {l.to}
            </div>
          ))}
        </div>

        {selected && (
          <div className="card grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input value={selected.name || ""} readOnly />
            <input value={selected.type || ""} readOnly />
            <input value={selected.from || ""} readOnly />
            <input value={selected.to || ""} readOnly />
            <input value={selected.labourHours || ""} readOnly />
            <input value={selected.packingHours || ""} readOnly />
            <input value={selected.insurance || ""} readOnly />
            <input value={selected.toll || ""} readOnly />
            <textarea
              style={{ gridColumn: "1 / span 2", minHeight: 80 }}
              readOnly
              value={selected.inventory?.map(i => `${i.item}: $${i.cost}`).join(", ") || ""}
            />
          </div>
        )}
      </div>
    </div>
  );
}
