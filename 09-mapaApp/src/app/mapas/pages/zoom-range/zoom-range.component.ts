import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width:100%;
      height:100%;
    }
    .row {
      background:white;
      height:120px;
      width:400px;
      border-radius:5px;
      bottom:50px;
      left:50px;
      padding:10px;
      position:fixed;
      z-index:999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  mapa!:mapboxgl.Map;
  @ViewChild('mapa') divMapa!:ElementRef;
  zoomLavel: number =10;
  center:[number,number]=[-77.13631490201738, -11.945776216617617];

  constructor() {
    console.log('constructor',this.divMapa);
    
   }
   ngOnDestroy():void{
     this.mapa.off('zoom',()=>{});
     this.mapa.off('zoomend',()=>{});
     this.mapa.off('move',()=>{});
   }

  ngAfterViewInit(): void {
    console.log('OnInit', this.divMapa);
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLavel
      });
      this.mapa.on('zoom',(ev)=>{
        this.zoomLavel=this.mapa.getZoom();
      });
      this.mapa.on('zoomend',(ev)=>{
        
        if(this.mapa.getZoom()>18){
          this.mapa.zoomTo(18);
        }
      })
      // en movimiento
      this.mapa.on('move',(event)=>{
        const target =event.target;
        const { lng, lat } =target.getCenter();

        this.center=[lng, lat];
      })


  }
  zoomOut(){
    this.mapa.zoomOut();
    this.zoomLavel=this.mapa.getZoom();
    

  }
  zoomIn(){
    this.mapa.zoomIn();
    this.zoomLavel=this.mapa.getZoom();
  }

  zoomCambio(valor:string){
    this.mapa.zoomTo(Number(valor));
  }

}
