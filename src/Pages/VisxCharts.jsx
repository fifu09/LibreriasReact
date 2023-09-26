import React from "react";
import VisxChartsCustomed from "../Components/VisxChartsCustomed/VisxChartsCustomed";

export function VisxCharts({ data }) {
  const width = 700;
  const height = 250;
  const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 40,
  };
  return (
    <>
      <h2>Custom Visx Charts Example in React</h2>
      <VisxChartsCustomed
        data={data}
        width={width}
        height={height}
        margin={margin}
      />
    </>
  );
}
