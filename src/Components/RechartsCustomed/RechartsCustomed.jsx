import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function RechartsCustomed({data,xAxis, yAxis}) {
  return (
    
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid /> // Provides grid lines for reference
        <XAxis dataKey={xAxis} /> // Defines the X-axis with specified data key
        <YAxis dataKey={yAxis} /> // Defines the Y-axis with specified data key 
        <Tooltip /> // Displays data tooltips on hover
        <Legend /> // Adds a series legend
        <Line type="monotone" dataKey={yAxis} stroke="#000" /> // Configures a line series with specified data key and stroke color
      </LineChart>
    </ResponsiveContainer>
  );
}
