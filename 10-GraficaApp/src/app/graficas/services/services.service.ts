import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl:string="http://localhost:3000/grafica";

  constructor(private http:HttpClient) { }

  getUsuariosRedesSociales(){

    return this.http.get(`${this.baseUrl}`)
  }

  getUsuarioRedesSocialesDonaData(){
    return this.getUsuariosRedesSociales()
      .pipe(
        map( data=>{
          const labels = Object.keys(data);
          const values =Object.values(data);

          return { labels, values};
        })
      )
  }
}
