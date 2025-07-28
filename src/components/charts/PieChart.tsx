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

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function PieChart() {
  return (
    <div className="rounded-xl border bg-background p-4 shadow-md dark:bg-gray-900">
      <h3 className="mb-4 text-lg font-semibold">User Device Distribution</h3>
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
