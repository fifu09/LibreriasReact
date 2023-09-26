import { HighchartsCustomed } from "../Components/HighChartsCustomed/HighChartsCustomed";
const HighCharts = ({ data }) => {
  const type = "line"; // Chart type: "line" for line chart or "bar" for bar chart
  const title = "Custom HighChart Example in React";
  const xAxis = data.map((item) => item.date);
  const yAxis = "Years";
  const series = data.map((item) => item.price);
  return (
    <HighchartsCustomed
      type={type}
      title={title}
      xAxis={xAxis}
      yAxis={yAxis}
      series={series}
    />
  );
};
export default HighCharts;
