import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,
              private router:Router,
              private autService:AuthService) { }

  miFormulario:FormGroup= this.fb.group({
    name:['edder Jamaca',[Validators.required,Validators.minLength(4)]],
    email:['edder@hotmail.com',[Validators.required, Validators.email]],
    password:['123456',[Validators.required, Validators.minLength(6)]]

  })

  registro(){
    // this.router.navigateByUrl('/protected');
    // console.log(this.miFormulario.valid);
    // console.log(this.miFormulario.value);
    
    const { name, email, password }=this.miFormulario.value;
    this.autService.registro( name, email, password)
    .subscribe(ok=>{
      console.log(ok);
      
      if(ok===true){
        this.router.navigateByUrl('/protected');
      }else {
        Swal.fire('Error',ok,'error');
      }
    })
  }
}
