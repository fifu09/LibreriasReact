import { React_chartjs_2Customed } from "../Components/React_chartjs_2Customed/React_chartjs_2Customed";

function convertToArray(data) {
  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.price);
  return { labels, values };
}

const React_chartjs_2 = ({ data }) => {
  const parsedData = convertToArray(data)
  const chartData = {
    labels: parsedData.labels,
    datasets: [
      {
        label: "Price",
        data: parsedData.values,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        title: {
          display: true,
          text: "Dollar",
        },
      },
    },
  };
  return (
    <>
      <h2>Custom React-chartsjs-2 Example in React</h2>
      <React_chartjs_2Customed data={chartData} options={options}/>
    </>
  );
};
export default React_chartjs_2;
