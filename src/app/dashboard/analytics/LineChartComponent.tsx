// app/(dashboard)/analytics/linechart.tsx
"use client";

import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 400 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1600 },
  { month: "May", users: 3200 },
  { month: "Jun", users: 4000 }
];

export default function LineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
