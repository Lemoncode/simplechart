import * as React from 'react';
import { GaugeChart } from './components';

export const App: React.StatelessComponent<{}> = () => (
  <div className="container-fluid">
    <h1 className="jumbotron text-center">GAUGE CHART</h1>
    <GaugeChart />
  </div>
);

