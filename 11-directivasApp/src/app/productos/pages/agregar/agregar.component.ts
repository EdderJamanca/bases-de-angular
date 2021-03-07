import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

   texto1: string="Juan Perez";
   color:string ="green"
  constructor(private fb:FormBuilder) { }

  miFormulario:FormGroup=this.fb.group({
    nombre:['',Validators.required]
  })

  validarCampo(campo:string):boolean{
    return this.miFormulario.get(campo)!.invalid || false;
  }

  cambiarnombre(){
    this.texto1=Math.random().toString();
  }
  cambiarColor(){
    const color1 = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color1;
  }

  ngOnInit(): void {
  }

}
