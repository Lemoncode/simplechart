import * as React from 'react';
import * as d3 from 'd3';

import { Gauge } from './../models';

const updateReadings = (gauge: any) => { gauge.update(Math.random() * 10) };

export class GaugeChart extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
    this.state = {
      size: 300,
      clipWidth: 300,
      clipHeight: 300,
      ringWidth: 60,
      maxValue: 10,
      transitionMs: 4000,
    }
  }

  componentDidMount() {
    // Gauge chart
    const powerGauge = new Gauge('#power-gauge', this.state);
    // Render
    powerGauge.render();
    // First gauge value
    updateReadings(powerGauge);
    // Update each 5 seconds
    setInterval(() => updateReadings(powerGauge), 5 * 1000);
  }

  render() {
    return (
      <div className="row text-center">
        <div id="power-gauge"></div>
      </div>
    );
  }
}
