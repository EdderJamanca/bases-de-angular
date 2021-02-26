import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
// import { MatAutocompleteSelectedEvent} from '@amgular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string="";
  heroes:Heroe[]=[];
  heroeSelecionado:Heroe | undefined;

  constructor(private http:HeroesService) { }

  ngOnInit(): void {
  }
  buscando(){
    
    this.http.getHeroeSugerido(this.termino).subscribe(heroes=> this.heroes=heroes
    )
  }

  opcionSeleccionado(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSelecionado=undefined;
      return;
    }
    
      const heroe : Heroe =event.option.value;
      this.termino=heroe.superhero;
      this.http.gerHeroeId(heroe.id!)
      .subscribe(heroe => this.heroeSelecionado=heroe)
  }

}
