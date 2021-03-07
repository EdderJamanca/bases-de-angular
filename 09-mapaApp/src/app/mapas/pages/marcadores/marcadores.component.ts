import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface MarcadrColor{
  color:string;
  marker?: mapboxgl.Marker;
  centro?:[number,number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      width:100%;
      height:100%;
    }
    .list-group {
      position:fixed;
      top:20px;
      right:20px;
      z-index:99;
    }
    .list-group li{
      cursor:pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  mapa!:mapboxgl.Map;
  @ViewChild('mapa') divMapa!:ElementRef;
  zoomLavel: number =16;
  center:[number,number]=[-77.13631490201738, -11.945776216617617];

  marcadores: MarcadrColor[]=[];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLavel
      });

      this.leerLocalStorage();

      // const markerHtml:HTMLElement= document.createElement('div');
      // markerHtml.innerHTML ="Hola mundo";

      // var marke = new mapboxgl.Marker()
      // .setLngLat(this.center)
      // .addTo(this.mapa)

  }
  agregarMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
        const nuevoMarcador= new mapboxgl.Marker({
          draggable:true,
          color:color
        })
        .setLngLat(this.center)
        .addTo(this.mapa)
    
    this.marcadores.push({
      color:color,
      marker:nuevoMarcador
    })
      
    this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend',()=>{
      this.guardarMarcadoresLocalStorage()
    })

  }
  irMarcador(marke: mapboxgl.Marker){

    this.mapa.flyTo({
      center:marke.getLngLat()
    })

  }
  guardarMarcadoresLocalStorage(){

    const lmgLatrr:MarcadrColor[]=[];

    this.marcadores.forEach(m=>{
      const color=m.color;
      const { lng, lat }=m.marker!.getLngLat();

      lmgLatrr.push({
        color:color,
        centro:[ lng, lat ]
      })
    })

    localStorage.setItem('marcadores',JSON.stringify(lmgLatrr));
  }

  leerLocalStorage(){
    if(!localStorage.getItem('marcadores')){
      return;
    }
    const lngLatARR:MarcadrColor[]=JSON.parse(localStorage.getItem('marcadores')!);

    lngLatARR.forEach( m=>{
      
      const newMarker = new mapboxgl.Marker({
        color:m.color,
        draggable:true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa)

        this.marcadores.push({
          marker:newMarker,
          color:m.color
        })

        newMarker.on('dragend',()=>{
          this.guardarMarcadoresLocalStorage()
        })

    })

  }
  borrarMarcador(i: number){
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i,1);
    this.guardarMarcadoresLocalStorage();
  }

}
