import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(private fb:FormBuilder, private sr:ValidatorService, private ve:EmailValidatorService) { }

  get emailErrorMsg():string{
    const errors=this.miFormulario.get("email")?.errors;
    if(errors?.required){
      return 'Email es obligatorio';
    }else if(errors?.pattern){
      return 'El valor ingresado no tiene formato de correo';
    }else if(errors?.emailTomado){
      return 'El email ya fue tomado';
    }
    return '';
  }

  miFormulario:FormGroup= this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.sr.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.sr.emailPattern)],[this.ve]],
    username:['',[Validators.required, this.sr.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password1:['',[Validators.required]],
  },{
    validators:[this.sr.camposIguales('password','password1')]
  })

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Juan Lucas',
      email:'test1@test.com'
    })
  }

  campoNoValidado(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  registrar(){
    // if(this.miFormulario.invalid){
    //   this.miFormulario.markAllAsTouched();
    //   return;
    // }

    console.log(this.miFormulario);
    
  }

}
