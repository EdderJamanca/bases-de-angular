import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl=environment.baseUrl;

  private _auth:Auth | undefined;

  get auth():Auth{
    return {...this._auth!};
  }

  constructor(private authService: HttpClient) { }

  verficaAutenticacion():Observable<boolean>{

    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.authService.get<Auth>(`${this.authUrl}/usuarios/1`)
    .pipe( 
      map(auth=> {
        this._auth=auth;
        return true;
    }))
  }

  login(){
    return this.authService.get<Auth>(`${this.authUrl}/usuarios/1`)
    .pipe(
      tap(auth=>this._auth=auth),
      tap(auth => localStorage.setItem('token',auth.id))
    );
  }
}


