import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string=environment.baseUrl;
  private _usuario!:Usuario;

  constructor(private http:HttpClient) { }

  get usuario(){
    return {...this._usuario};
  }

  registro (name:string, email:string, password:string){
    const url =`${ this.baseUrl}/auth/new`;
    const body= {email, password, name};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap( resp=>{
          if( resp.ok){
            localStorage.setItem('token',resp.token!);
            this._usuario={
              name:resp.name!,
              uid:resp.uid!
            }
          }
      }),
      map(resp => resp.ok),
      catchError(err=>of(err.error.msg))
    )
  }

  login(email:string,password:string){

    const url =`${ this.baseUrl}/auth`;
    const body= {email, password};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap( resp=>{
          if( resp.ok){
            localStorage.setItem('token',resp.token!);
            this._usuario={
              name:resp.name!,
              uid:resp.uid!
            }
          }
      }),
      map(resp => resp.ok),
      catchError(err=>of(err.error.msg))
    )

  }

  validarToken():Observable<boolean>{

    const url=`${ this.baseUrl}/auth/renew`;
    const headers= new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url,{ headers})
        .pipe(
          map(resp=>{

            localStorage.setItem('token',resp.token!);
            this._usuario={
              name:resp.name!,
              uid:resp.uid!
            }
            return resp.ok;
          }),
          catchError(err=>of(false))
        )

  }

  logaut(){
    // localStorage.removeItem('token');
    localStorage.clear();
  }
}
