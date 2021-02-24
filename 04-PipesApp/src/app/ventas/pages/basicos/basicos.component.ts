import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor() { }

   nombreUp:string ="Fernando";
   nombreLo:string ='FERNANDO';
   nombreCompleto:string="JuAn FernanDo";

   fecha:Date = new Date();

}
