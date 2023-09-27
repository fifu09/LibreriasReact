import { VictoryChartsCustomed } from "../Components/VictoryChartsCustomed/VictoryChartsCustomed";

function convertToArray(data) {
  const array = []; 
  data.forEach((item) => {
    array.push({x:item.date, y:item.price}); 
  });
  return array
}

export function VictoryCharts({ data }) {
    const array = convertToArray(data)
  return (
    <>
    <h2>Custom VictoryCharts Example in React</h2>
    <VictoryChartsCustomed data={array} />
    </>
  );
}
