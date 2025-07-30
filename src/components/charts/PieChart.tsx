"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mobile", value: 400 },
  { name: "Desktop", value: 300 },
  { name: "Tablet", value: 200 },
  { name: "Other", value: 100 },
];

const COLORS = ["#6366f1", "#22c55e", "#facc15", "#f97316"];

export default function PieChart() {
  return (
    <div className="rounded-2xl border bg-white dark:bg-gray-900 p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
        User Device Distribution
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
}
