import { VictoryChart, VictoryLine } from "victory";

export function VictoryChartsCustomed({ data }) {
  return (
    <VictoryChart >
      <VictoryLine data={data} />
    </VictoryChart>
  );
}
