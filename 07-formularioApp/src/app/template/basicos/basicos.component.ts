import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  constructor() { }

  @ViewChild('miFormulario') miFormulario!:NgForm;

  valorInicial={
    producto:'',
    precio:0,
    existencias:0
  };
  
  nombreValido():boolean{
    return  this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }
  precioValido(){
    const valor = this.miFormulario?.controls.precio?.value<0
                  && this.miFormulario?.controls.precio?.touched;
    return valor;
  }
  guardar(){
    // console.log(this.miFormulario);
    this.miFormulario.resetForm(
      {
        precio:0,
        existencia:0
      }
    );
  }
}
