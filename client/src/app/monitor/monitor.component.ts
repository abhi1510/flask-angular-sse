import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Sse } from '../sse';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
  providers: [Sse]
})
export class MonitorComponent implements OnInit, OnDestroy {

  chart: any;
  sseSubscription;

  constructor(private sse: Sse) { }

  ngOnInit() {
    this.initializeChart();
    this.sseSubscription = this.sse.observe('//localhost:5000/stream-data').subscribe(d => {
      console.log('MONITOR', d);
      this.updateChart(d.timestamp, d.bid);
    })
  }

  initializeChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'My first dataset',
          data: [],
          backgroundColor: 'rgba(100, 0, 255, 0.4)',
          border: 'rgba(255, 0, 255, 0.4)',
          fill: true
        }]
      }
    })
  }

  updateChart(xData, yData) {
    let currentLabels = this.chart.data.labels;
    if (currentLabels.length >= 10) {
      currentLabels.splice(0, 1);
      this.chart.data.datasets[0].data.splice(0, 1);
    }
    currentLabels.push(xData);
    this.chart.data.datasets[0].data.push(yData);
    this.chart.update();
  }
  

  ngOnDestroy() {
    this.sseSubscription.unsubscribe();
  }

}
