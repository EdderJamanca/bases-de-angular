import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publusher=[
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ]

  heroes:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }


  constructor(private HeroesService:HeroesService,
              private ActivatedRoute:ActivatedRoute,
              private router:Router,
              private snackbar:MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.ActivatedRoute.params
    .pipe(
      switchMap( ({id}) =>this.HeroesService.gerHeroeId(id) )
    ).subscribe( heroe => this.heroes=heroe)
  }
            

  guardar(){
    
    if(this.heroes.superhero.trim().length===0){
      return;
    }
    if(this.heroes.id){
      // Actualizar
      this.HeroesService.actualizarHeroe(this.heroes)
      .subscribe(heroe=>this.mostrarSnakbar('Registro actualizado')
      )


    }else {
      // crear
      this.HeroesService.agreagarHeroe(this.heroes)
      .subscribe(resp => {
        this.router.navigate(['/heroes/editar',resp.id]);
        this.mostrarSnakbar('Registro Creado')
      })

    }

    
  }
  borrar(){
    const dialog=this.dialog.open( ConfirmarComponent,{
      width:'250px',
      data:this.heroes
    });
    dialog.afterClosed().subscribe(
      (resul)=>{
        if(resul){
          this.HeroesService.borraHeroe(this.heroes.id!)
          .subscribe(resp=>{
            this.router.navigate(['/heroes'])
          })          
        }
      }
    )

  }
  mostrarSnakbar(mensaje:string){
    this.snackbar.open(mensaje, 'ok',{
      duration:2500
    })
  }

 
}
