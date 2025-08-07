import React from "react";
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function ChartCard({ title, data, dataKey }) {
  return (
    <div className="card">
      <h4 style={{ marginBottom: 12 }}>{title}</h4>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
