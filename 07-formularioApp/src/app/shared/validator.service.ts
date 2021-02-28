import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

 public  nombreApellidoPattern:string ='([a-zA-Z]+) ([a-zA-Z]+)';
 public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 noPuedeSerStrider(argumento: FormControl):ValidationErrors | null{

  const valor:string =argumento.value?.trim().toLowerCase();
  if(valor=='strider'){
    return {
      noStrider:true
    }
  }
  return null;
}
camposIguales(password:string,password1:string){

  return (formGrup:AbstractControl):ValidationErrors | null =>{

    const pass=formGrup.get(password)?.value;
    const pass1=formGrup.get(password1)?.value;
    if(pass!==pass1){
      formGrup.get(password1)?.setErrors({ noIguales:true});

      return { noIguales:true}
    }
    formGrup.get(password1)?.setErrors(null);
    return null;
  }
 
}

  constructor() { }
}
