import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface persona {
  nombre: string;
  favorito:Favorito[];
}
interface Favorito {
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'

})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario:FormGroup= this.fb.group({
    nombre: ['',[Validators.minLength(3),Validators.required]],
    favoritos:this.fb.array([
              ['Metal Gear', Validators.required],
              ['Death Stranding',Validators.required]
              ],
              [Validators.required])
  })

  nuevoFavorito:FormControl= this.fb.control('',Validators.required);

  validarCampo(campo:string):boolean{
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].invalid
  }

  get favoriosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return;}
    this.favoriosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i:number){
    this.favoriosArr.removeAt(i);
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario);
    
  }

}
