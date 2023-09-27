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
        <CartesianGrid /> 
        <XAxis dataKey={xAxis} /> 
        <YAxis dataKey={yAxis} /> 
        <Tooltip /> 
        <Legend />
        <Line type="monotone" dataKey={yAxis} stroke="#000" />
      </LineChart>
    </ResponsiveContainer>
  );
}
