
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
    }
  
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  constructor(private ActivateRouter:ActivatedRoute, 
              private httpService:HeroesService,
              private route:Router) { }

  ngOnInit(): void {
    this.ActivateRouter.params
    .pipe(
      switchMap( ({id}) => this.httpService.gerHeroeId(id))
    )
    .subscribe( heroe => this.heroe=heroe );
  }
  regresar(){
    this.route.navigate(['/heroes/listado'])
  }

}
