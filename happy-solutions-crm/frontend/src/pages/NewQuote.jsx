import React, { useState } from "react";
import api from "../api";

export default function NewQuote() {
  const [form, setForm] = useState({
    name: "", from: "", to: "", type: "",
    labourHours: "", packingHours: "", insurance: "", toll: "",
    inventory: [{ item: "", cost: "" }]
  });

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const updateInventory = (i, field, value) => {
    const updated = [...form.inventory];
    updated[i][field] = value;
    setForm({ ...form, inventory: updated });
  };

  const addItem = () => {
    setForm({ ...form, inventory: [...form.inventory, { item: "", cost: "" }] });
  };

  const submit = async () => {
    try {
      await api.post("/quote", form);
      alert("Quote submitted!");
      setForm({ name: "", from: "", to: "", type: "", labourHours: "", packingHours: "", insurance: "", toll: "", inventory: [{ item: "", cost: "" }] });
    } catch {
      alert("Error submitting quote.");
    }
  };

  return (
    <div className="container">
      <h2>New Quote</h2>
      <div className="card grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <input placeholder="Customer Name" value={form.name} onChange={e => update("name", e.target.value)} />
        <input placeholder="From Address" value={form.from} onChange={e => update("from", e.target.value)} />
        <input placeholder="To Address" value={form.to} onChange={e => update("to", e.target.value)} />
        <select value={form.type} onChange={e => update("type", e.target.value)}>
          <option value="">Select House Type</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
          <option>5 BHK</option>
          <option>6 BHK</option>
        </select>
        <input placeholder="Labour Hours" type="number" value={form.labourHours} onChange={e => update("labourHours", e.target.value)} />
        <input placeholder="Packing Hours" type="number" value={form.packingHours} onChange={e => update("packingHours", e.target.value)} />
        <input placeholder="Insurance Amount" type="number" value={form.insurance} onChange={e => update("insurance", e.target.value)} />
        <input placeholder="Toll Charges" type="number" value={form.toll} onChange={e => update("toll", e.target.value)} />
      </div>

      <h3>Inventory</h3>
      <div className="card grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {form.inventory.map((row, i) => (
          <React.Fragment key={i}>
            <input placeholder="Item Name" value={row.item} onChange={e => updateInventory(i, "item", e.target.value)} />
            <input placeholder="Cost" type="number" value={row.cost} onChange={e => updateInventory(i, "cost", e.target.value)} />
          </React.Fragment>
        ))}
        <button className="btn" onClick={addItem} style={{ gridColumn: "1 / span 2" }}>+ Add Item</button>
      </div>

      <button className="btn" onClick={submit}>Submit Quote</button>
    </div>
  );
}
