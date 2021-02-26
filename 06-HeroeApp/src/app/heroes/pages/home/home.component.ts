import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin:10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private seviceAuth: AuthService) { }

  get auth(){
    return this.seviceAuth.auth;
  }

  ngOnInit(): void {
  }
  salir(){
    this.router.navigate(['./auth']);
  }

}
