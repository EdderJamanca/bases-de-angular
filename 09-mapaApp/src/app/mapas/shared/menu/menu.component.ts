import { Component, OnInit } from '@angular/core';

interface MenuItem{
  rute:string;
  nombre:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor:pointer
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  menuItem:MenuItem[]=[
    {
      rute:'/mapas/fullscreen',
      nombre:'FullScreen'
    },
    {
      rute:'/mapas/marcadores',
      nombre:'Marcadores'
    },
    {
      rute:'/mapas/propiedades',
      nombre:'Propiedades'
    },
    {
      rute:'/mapas/zoomrange',
      nombre:'Zoom Range'
    }
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }



}
