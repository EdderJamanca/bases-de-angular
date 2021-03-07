import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[]=[
    {
      backgroundColor:[
        '#6175ED',
        '#65A0F7',
        '#66B8E0',
        '#65EDF7',
        '#61EDD0'
      ]
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
