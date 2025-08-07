import React, { useEffect, useState } from "react";
import api from "../api";
import KPIBlock from "../components/KPIBlock";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
  const [data, setData] = useState({ weekly: {}, monthly: {} });

  useEffect(() => {
    api.get("/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.error("Dashboard error", err));
  }, []);

  const chartData = [
    { month: "Jan", receivables: 2200, payables: 1400 },
    { month: "Feb", receivables: 1800, payables: 1600 },
    { month: "Mar", receivables: 2000, payables: 1800 },
    { month: "Apr", receivables: 2300, payables: 1700 },
    { month: "May", receivables: 2500, payables: 1900 },
  ];

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <h3>Weekly Summary</h3>
      <div className="kpi-grid">
        <KPIBlock title="Leads" value={data.weekly.leads} />
        <KPIBlock title="Calls" value={data.weekly.calls} />
        <KPIBlock title="Billings" value={data.weekly.successful_billing} />
        <KPIBlock title="Follow-ups" value={data.weekly.followups} />
        <KPIBlock title="Open" value={(data.weekly.leads || 0) - (data.weekly.successful_billing || 0)} />
      </div>

      <h3 style={{ marginTop: 24 }}>Monthly Trends</h3>
      <div className="chart-grid">
        <ChartCard title="Receivables" data={chartData} dataKey="receivables" />
        <ChartCard title="Payables" data={chartData} dataKey="payables" />
      </div>
    </div>
  );
}
