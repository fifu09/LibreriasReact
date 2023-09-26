import React from "react";
import {GoogleChartsCustomed} from "../Components/GoogleChartsCustomed/GoogleChartsCustomed"

export function GoogleCharts({ data }) {
  const chartData = [["Date", "Price"]]; // Agrega los encabezados de las columnas
  data.forEach((item) => {
    chartData.push([item.date, item.price]); // Agrega cada fila de datos
  });
  
  const options = {
    chart: {
      title: "Custom GoogleCharts Example in React",
      subtitle: "in dollars (USD)",
    },
  };
  return <GoogleChartsCustomed chartData={chartData} options={options}/>
}

