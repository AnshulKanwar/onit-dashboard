"use client";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { revenue } from "@/lib/data";

export default function Revenue() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={revenue}
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
