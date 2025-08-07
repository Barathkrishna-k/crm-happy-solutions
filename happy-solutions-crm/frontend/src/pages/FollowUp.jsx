import React, { useEffect, useState } from "react";
import api from "../api";

export default function FollowUp() {
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get("/followup").then(res => setLeads(res.data));
  }, []);

  const openLead = (lead) => {
    setSelected(lead);
  };

  const updateField = (field, value) => {
    setSelected({ ...selected, [field]: value });
  };

  const save = () => {
    api.put(`/followup/${selected._id}`, selected)
      .then(() => alert("Lead updated."))
      .catch(() => alert("Failed to update lead."));
  };

  return (
    <div className="container">
      <h2>Follow Up</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr 2fr", gap: 20 }}>
        <div className="card">
          <h4>Lead List</h4>
          {leads.map((l, i) => (
            <div key={i} style={{ padding: 8, borderBottom: "1px solid #e5e7eb", cursor: "pointer" }} onClick={() => openLead(l)}>
              {l.name} → {l.to}
            </div>
          ))}
        </div>

        {selected && (
          <div className="card grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input value={selected.name} onChange={e => updateField("name", e.target.value)} />
            <input value={selected.type} onChange={e => updateField("type", e.target.value)} />
            <input value={selected.from} onChange={e => updateField("from", e.target.value)} />
            <input value={selected.to} onChange={e => updateField("to", e.target.value)} />
            <input value={selected.labourHours} onChange={e => updateField("labourHours", e.target.value)} />
            <input value={selected.packingHours} onChange={e => updateField("packingHours", e.target.value)} />
            <input value={selected.insurance} onChange={e => updateField("insurance", e.target.value)} />
            <input value={selected.toll} onChange={e => updateField("toll", e.target.value)} />
            <button className="btn" onClick={save} style={{ gridColumn: "1 / span 2" }}>Save Changes</button>
          </div>
        )}
      </div>
    </div>
  );
}
