"use client";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const revenueData = [
  { name: "Jan", value: "12300" },
  { name: "Feb", value: "18100" },
  { name: "Mar", value: "20900" },
  { name: "Apr", value: "18100" },
  { name: "May", value: "21100" },
  { name: "Jun", value: "25300" },
  { name: "Jul", value: "24200" },
  { name: "Aug", value: "26100" },
  { name: "Sep", value: "31300" },
  { name: "Oct", value: "30200" },
  { name: "Nov", value: "32800" },
  { name: "Dec", value: "38600" },
];

export default function Revenue() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={revenueData}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          padding={{ left: 20 }}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Line
          dataKey="value"
          type="monotone"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)", opacity: 0.25 },
          }}
          style={
            {
              stroke: "var(--theme-primary)",
              "--theme-primary": `hsl(142.1 76.2% 36.3%)`,
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
