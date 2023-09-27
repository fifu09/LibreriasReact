import { LinePath } from "@visx/shape";
import { scaleLinear, scalePoint } from "@visx/scale";
import { curveCardinal } from "@visx/curve";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { Group } from "@visx/group";

const VisxChartsCustomed = ({ data, width, height, margin }) => {
  const xScale = scalePoint({
    domain: data.map((d) => d.date),
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.price))],
    range: [height - margin.bottom, margin.top],
  });

  return (
    <svg width={width} height={height}>
      <Group>
        <LinePath
          data={data}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.price)}
          curve={curveCardinal}
          stroke="#007bff"
          strokeWidth={2}
        /> 
      </Group>
      <AxisBottom top={height - margin.bottom} scale={xScale} numTicks={6} />
      <AxisLeft left={margin.left} scale={yScale} numTicks={6} />
    </svg>
    
  );
};

export default VisxChartsCustomed;
