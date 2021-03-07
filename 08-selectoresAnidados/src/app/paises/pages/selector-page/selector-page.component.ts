import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisSmall, Paises } from '../../interfaces/paises.interfaces';
import { variable } from '@angular/compiler/src/output/output_ast';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  regiones:string[]=[];
  paises:PaisSmall[]=[];
  // fronteras:string[]=[];
  fronteras:PaisSmall[]=[];
  cargando:boolean=false;

  constructor(private fb:FormBuilder,private srvContinente:PaisesServiceService) { }

  ngOnInit(): void {
    this.regiones=this.srvContinente.taerContinente;

    // Cuando cambie la region
    // this.miFrmulario.get('continente')?.valueChanges
    //   .subscribe(region =>{
    //     this.srvContinente.getPaisesPorRegion(region)
    //     .subscribe(paises=>{
    //       console.log(paises);
          
    //       this.paises=paises;
    //     })
    //   })
    this.miFrmulario.get('continente')?.valueChanges
      .pipe(
        tap( (_)=>{
          this.miFrmulario.get('pais')?.reset('');
          this.cargando=true;
        }),
        switchMap( region=> this.srvContinente.getPaisesPorRegion(region))
      ).subscribe(paises =>{
        this.paises=paises
        this.cargando=false;
      })

      // cargar frontera
      this.miFrmulario.get('pais')?.valueChanges
      .pipe(
        tap((_)=>{
          this.miFrmulario.get('frontera')?.reset('');
          this.cargando=true;
        }),
        switchMap(cod => this.srvContinente.getFronteras(cod)),
        switchMap(pais=> this.srvContinente.getPaisPorCodigo( pais?.borders! ) )
      )
      .subscribe(paises=>{
        this.fronteras=paises;
        this.cargando=false;
      }
      )
  }

  miFrmulario: FormGroup=this.fb.group({
    continente:['',Validators.required],
    pais:['', Validators.required],
    frontera:['',Validators.required]
  })

  selecionar(){
    console.log(this.miFrmulario);
    
  }

}
