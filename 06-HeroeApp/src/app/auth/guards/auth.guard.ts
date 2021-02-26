import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log('bloqueado por el CANLOAD');
      
      // return false;
      return this.authService.verficaAutenticacion();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean > | boolean  {
      console.log(route);

      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log('bloqueado por el CANLOAD');
      
      // return false;
      return this.authService.verficaAutenticacion();
  }
}
