import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function HighchartsCustomed({ type, title, xAxis, yAxis, series }) {
  const options = {
    chart: {
      type: type, // Use the provided type as a parameter
    },
    title: {
      text: title, // Use the provided title as a parameter
    },
    xAxis: {
      categories: xAxis, // Use the provided X-axis categories as a parameter
    },
    yAxis: {
      title: {
        text: yAxis, // Use the provided Y-axis title as a parameter
      },
    },
    series: [
      {
        name: "Price",
        data: series, // Use the provided data as a parameter
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
