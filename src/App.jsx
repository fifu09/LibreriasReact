import "./App.css";
import HighCharts from "./Pages/HighCharts";
import Recharts from "./Pages/Recharts";
import { GoogleCharts } from "./Pages/GoogleCharts";

import {bitcoinData} from "./db/bitcoinData";
import { VictoryCharts } from "./Pages/VitoryCharts";
import React_chartjs_2 from "./Pages/React_chartjs_2";
import { VisxCharts } from "./Pages/VisxCharts";

function App() {
  /*
    <div><HighCharts data={bitcoinData}/></div>
      <div><Recharts data={bitcoinData}/></div>
      <div><GoogleCharts data={bitcoinData}/></div>
      <div><VictoryCharts data={bitcoinData}/></div>
      <div><React_chartjs_2 data={bitcoinData}/></div>
      <div><VisxCharts data={bitcoinData}/></div>
  */
  return (
    <section className="body">
      <div><Recharts data={bitcoinData}/></div>
    </section>
  );
}

export default App;
