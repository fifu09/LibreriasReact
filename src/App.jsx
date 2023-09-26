import "./App.css";
import HighCharts from "./Pages/HighCharts";
import Recharts from "./Pages/Recharts";
import { GoogleCharts } from "./Pages/GoogleCharts";

import {bitcoinData} from "./db/bitcoinData";
import { VictoryCharts } from "./Pages/VitoryCharts";
import React_chartjs_2 from "./Pages/React_chartjs_2";
import { VisxCharts } from "./Pages/VisxCharts";

function App() {
  return (
    <>
      <HighCharts data={bitcoinData}/>
      <Recharts data={bitcoinData}/>
      <GoogleCharts data={bitcoinData}/>
      <VictoryCharts data={bitcoinData}/>
      <React_chartjs_2 data={bitcoinData}/>
      <VisxCharts data={bitcoinData}/>
    </>
  );
}

export default App;
