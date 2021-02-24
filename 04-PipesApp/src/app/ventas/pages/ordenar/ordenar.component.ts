import { Component, OnInit} from '@angular/core';

import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  nombre:string='Edder';

  esMayuscula:boolean =true;


   heroes:Heroe[]=[
      {
        nombre:'Superman',
        vuela:true,
        color:Color.azul
      },
      {
        nombre:'Batman',
        vuela:false,
        color:Color.negro
      },
      {
        nombre:'Robin',
        vuela:false,
        color:Color.verde
      },
      {
        nombre:'Linterna Verde',
        vuela:true,
        color:Color.verde
      },

   ];

   cambiarOrden:string='';

   ordenarCambio( valor : string){
     this.cambiarOrden= valor;
   }
  constructor() { }

  cambiar(){
    this.esMayuscula=!this.esMayuscula;
  }

  ngOnInit(): void {
   
  }

}
