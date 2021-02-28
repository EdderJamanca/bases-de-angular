import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'

})
export class BasicosComponent implements OnInit  {

  // miFormulario:FormGroup= new FormGroup({
  //   'nombre': new FormControl('RXJ 45')
  // });

  constructor(private fb: FormBuilder ) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio:1500
    })
  }

  miFormulario:FormGroup = this.fb.group({
    nombre    :['',[Validators.required, Validators.minLength(3)]],
    precio    :[0, [Validators.required, Validators.min(0)]],
    existencia:[0, [Validators.required, Validators.min(0)]]
  })

  campoValidado(campo:string){
    return this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched
  }

  guardar(){

      if(this.miFormulario.invalid){

        this.miFormulario.markAllAsTouched();
        return;

      }
      console.log( this.miFormulario.value );
      
  }

}
