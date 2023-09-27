import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export function RechartsCustomed({ data, xAxis, yAxis }) {
  const margin = {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }
  return (

    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={800}
        height={600}
        data={data}
        margin={margin}
      >
        <CartesianGrid />
        <XAxis dataKey={xAxis} />
        <YAxis dataKey={yAxis} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={yAxis} stroke="#000" />
      </LineChart>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
        <YAxis dataKey={xAxis} />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
