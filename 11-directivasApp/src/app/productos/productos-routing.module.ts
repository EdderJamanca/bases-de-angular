import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'agrgar',
        component:AgregarComponent
      },
      {
        path:'**',
        redirectTo:'agregar'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
