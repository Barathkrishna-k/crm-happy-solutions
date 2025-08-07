import React from "react";

export default function KPIBlock({ title, value }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div style={{ fontSize: 14, color: "#6b7280" }}>{title}</div>
      <div style={{ fontSize: 26, fontWeight: 700 }}>{value || 0}</div>
    </div>
  );
}
