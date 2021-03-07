import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    [
      // 350, 450, 100
    ]
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

  constructor(private graficasService: ServicesService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe(data=>{
    //   const labels=Object.keys(data);
    //   const values=Object.values(data);

    //   this.doughnutChartLabels=labels;

    //   this.doughnutChartData=values;
      
    // }

    // )
    this.graficasService.getUsuarioRedesSocialesDonaData()
    .subscribe( ({ labels, values}) =>{

      this.doughnutChartLabels=labels;
      this.doughnutChartData=values;

    })
  }

}
