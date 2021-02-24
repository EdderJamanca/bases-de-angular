import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  constructor() { }

// i18nSelect
nombre:string ='Fernando';
genero:string ='masculino';
invitacionMapa= {
  'masculino':'invitarlo',
  'femenino':'invitarla'
}

// i18nPlural
clientes :string[]=['Maria','Pedro','Hermando','Eduardo','Fernando'];


clientesMapa={
  '=0':'no tenemos ningún cliente esperando',
  '=1':'tenemos un cliente esperando',
  '=2':'tenemos 2 clientes esperando',
  'other':'tenemos # clientes esperando'
}


eliminarCliente(){

  this.clientes.pop();

}

cambiarNomb(){
 this.nombre='Fiorela';
 this.genero='femenino';
}
// keyValue Pipe

persona={
  nombre:'Fernando',
  edad:35,
  direccion:'Ottawa,Canada'
}

// json pipe

heroe=[
  {
    'nombre':'iroman',
    'poder':'Técnologico'
  },
  {
    'nombre':'Thor',
    'poder':'semi Díos'
  },
  {
    'nombre':'Huck',
    'poder':'Fuerza Bruta'
  }
]

// Async Pipe

miObservable=interval(5000);

valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos una Promesa');
    },3500);
})

}
