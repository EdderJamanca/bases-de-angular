import { Component, OnInit } from '@angular/core';


interface MenuItem{
  texto:string,
  ruta:string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  templateItem:MenuItem[] =[
    {
      texto:'Básicos',
      ruta:'./template/basicos'
    },
    {
      texto:'Dinamicos',
      ruta:'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    }
]
reactiveItem:MenuItem[] =[
  {
    texto:'Básicos',
    ruta:'./reactive/basicos'
  },
  {
    texto:'Dinamicos',
    ruta:'./reactive/dinamicos'
  },
  {
    texto:'Switches',
    ruta:'./reactive/switches'
  }
]




  constructor() { }

  ngOnInit(): void {
  }

}
