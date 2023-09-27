import { Chart } from "react-google-charts";

export function GoogleChartsCustomed({ chartData, options }) {
  return (
    <Chart
    chartType="Line" // Specify the chart type as "Line".
    data={chartData} // Provide the data to be displayed in the chart.
    options={options} // Customize the chart appearance and behavior.
    width="100%" // Set the chart width to 100% of its container.
    height="400px" // Set the chart height to 400 pixels.
    legendToggle // Enable legend toggling for user interaction.
    />
  );
}