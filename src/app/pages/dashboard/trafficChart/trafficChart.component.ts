import { Component, Input } from '@angular/core';
import * as Chart from 'chart.js';

import 'style-loader!./trafficChart.scss';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html'
})
export class TrafficChart {

  @Input() doughnutData;
  @Input() totalCountView;
  constructor() {
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
 }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
