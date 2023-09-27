
import {GoogleChartsCustomed} from "../Components/GoogleChartsCustomed/GoogleChartsCustomed"

export function GoogleCharts({ data }) {
  const chartData = [["Date", "Price"]]; // En google charts, el array de datos recibe en la primera posicion 
  data.forEach((item) => {               // el "titulo" del resto de datos. Y la primera columna siempre es el eje X
    chartData.push([item.date, item.price]);
  });
  
  const options = {
    chart: {
      title: "Custom GoogleCharts Example in React",
      subtitle: "in dollars (USD)",
    },
  };
  return <GoogleChartsCustomed chartData={chartData} options={options}/>
}

