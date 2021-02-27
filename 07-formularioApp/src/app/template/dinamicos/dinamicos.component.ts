import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { browser } from 'protractor';

interface persona{
  nombre: string;
  favorito:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'

})
export class DinamicosComponent  {

  nuevoJuego:string="";

  personas:persona={
    nombre:'Edder',
    favorito:[
      { id:1, nombre:'Metal Gear'},
      { id:2, nombre:'DeathStranding'},
    ]
  }

  @ViewChild('miFormulario') miFormuario!:NgForm;

  constructor() { }

  validarNombre():boolean{
    const valor=this.miFormuario?.controls.nombre?.invalid && this.miFormuario?.controls.nombre?.touched;
    return valor;
  }

  agregarjuego(){

    if(!this.nuevoJuego){
      return;
    }

    const nuevoFavorito: Favorito={
      id:this.personas.favorito.length + 1,
      nombre:this.nuevoJuego
    }

    this.personas.favorito.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

 guardar(){
   console.log(this.miFormuario);
   
 }
 borrar(index:number){
   this.personas.favorito.splice(index,1);
 }

}
