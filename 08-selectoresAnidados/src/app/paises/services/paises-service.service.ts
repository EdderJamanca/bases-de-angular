import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Paises, PaisSmall } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private baseUrl:string ='https://restcountries.eu/rest/v2';
  private _continente: string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get taerContinente(){
    return [...this._continente];
  }
  constructor(private http:HttpClient) { }

  getPaisesPorRegion(region:string):Observable<PaisSmall[]>{
    const url:string=`${this.baseUrl}/region/${region}?fields=alpha3Code;name`
    return this.http.get<PaisSmall[]>(url);
  }
  // paises
  getFronteras(codigo:string):Observable<Paises |null>{

    if(!codigo){
      return of(null);
    }
    
    const urlf:string =`${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Paises>(urlf);
  }
    // paises Smoll
    getFronterasSmall(codigo:string):Observable<PaisSmall>{

      const urlf:string =`${this.baseUrl}/alpha/${codigo}?fields=name;alpha3Code;`;
      return this.http.get<PaisSmall>(urlf);
    }

    getPaisPorCodigo(borders:string[]):Observable<PaisSmall[]>{
      if(!borders){
        return of([]);
      }
      const peticiones:Observable<PaisSmall>[]=[];

      borders.forEach(codigo=>{
        const peticion =this.getFronterasSmall(codigo);
        peticiones.push(peticion);
      });
      return combineLatest(peticiones);
    }
}
