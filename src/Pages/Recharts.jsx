import { RechartsCustomed } from "../Components/RechartsCustomed/RechartsCustomed";
const Recharts = ({ data }) => {
  return (
    <>
      <h2>Custom Rechars Example in React</h2>
      <RechartsCustomed data={data} xAxis="date" yAxis="price" />
    </>
  );
};
export default Recharts;
