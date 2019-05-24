import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS} from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 24, 36, 3 ,34, 56], label:'Sentiment Analysis'},
  { data: [13, 54, 47, 24 ,68, 56], label:'Image Recognition'},
  { data: [42, 15, 41, 33 ,98, 56], label:'Forecasting'},
];

const LINE_CHART_LABELS : string[] = ['Jan','Feb','Mar', 'Apr','Mai','Jun']
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }


  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;  


  ngOnInit() {
  }
}
